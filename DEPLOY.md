# Deploy — Portfolio on awaresolutions.eu

Mirrors the BookMe/MyStash setup, minus the database and auth. A prebuilt Docker Hub
image runs on the NAS; watchtower auto-recreates it on new pushes; the **apex** domain
`awaresolutions.eu` is exposed through the existing Cloudflare tunnel.

## Pipeline at a glance

```
.\build-and-push.ps1 -Push ──▶ docker build → push to Docker Hub
                                 └─▶ watchtower on the NAS polls Hub every 5 min → recreates container
Cloudflare tunnel public hostname (apex) ──▶ http://<NAS_IP>:8086
```

## One-time setup

### 1. Docker Hub
Log in locally and create (or let the first push create) `vanakata/portfolio`:
```powershell
docker login
.\build-and-push.ps1 -Push
```

### 2. NAS
```sh
mkdir -p /volume1/docker/portfolio
cd /volume1/docker/portfolio
# copy docker-compose.yml here
docker compose up -d
```
The site now answers on `http://<NAS_IP>:8086`. Pick a different host port if 8086
clashes with another container — just keep it in sync with the tunnel hostname below.

### 3. Public exposure — Cloudflare tunnel (apex)
Zero Trust → Networks → Tunnels → the NAS tunnel → Public Hostname → **Add**:

| Field | Value |
|---|---|
| Subdomain | *(leave empty)* |
| Domain | `awaresolutions.eu` |
| Service | `http://<NAS_IP>:8086` |

Cloudflare creates the apex DNS record (CNAME flattening) and terminates HTTPS, so the
container keeps serving plain HTTP on 3000. Add a second hostname for `www` →
same service if you want `www.awaresolutions.eu` to work too.

## Deploy options

### A. Manual (no CI)
```powershell
.\build-and-push.ps1 -Push   # build + push; watchtower recreates within ~5 min
```

### B. CI — deploy on `git push` (mirrors BookMe)
Push to `develop` → the self-hosted runner builds, pushes to Docker Hub, and
recreates the container. `master` only runs the CI checks.

```
push to develop ──▶ ci.yml            (npm ci → tsc → next build, on GitHub-hosted)
                └─▶ build-deploy.yml   (docker build → push → recreate, on NAS runner)
```

**One-time:**

1. **GitHub repo secrets** (`Settings → Secrets and variables → Actions`):

   | Secret | What |
   |---|---|
   | `DOCKERHUB_USERNAME` | `vanakata` |
   | `DOCKERHUB_TOKEN` | Docker Hub access token (read/write) |

   `GITHUB_TOKEN` is provided automatically.

2. **Runner on the NAS** — the `github-runner` service in `docker-compose.yml`
   self-registers. Put a repo-scoped `GITHUB_PAT` in `.env` (see `.env.example`),
   then `docker compose up -d`. Confirm it appears under
   `Settings → Actions → Runners` as `portfolio-runner`.

3. **Branch:**
   ```sh
   git checkout -b develop && git push -u origin develop
   ```
   Day-to-day work happens on `develop`; that's what deploys.

## Ports (to avoid clashing on the same NAS)
- Portfolio: host `8086` → container `3000`
- (BookMe api `8082`, see its DEPLOY.md)

## Optional — auto-version on `main`
BookMe also has an `auto-version.yml` that uses Claude to bump the version + write a
CHANGELOG on push to `main`. Portable here by bumping `package.json` instead of the
`.csproj` — say the word and I'll add the workflow + script (needs `ANTHROPIC_API_KEY`).
