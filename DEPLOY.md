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

## Day-to-day deploy
```powershell
.\build-and-push.ps1 -Push   # build + push; watchtower recreates within ~5 min
```

## Ports (to avoid clashing on the same NAS)
- Portfolio: host `8086` → container `3000`
- (BookMe api `8082`, see its DEPLOY.md)

## Optional — full CI parity
To match BookMe (self-hosted runner + GitHub Actions on push to `develop`), add a
`github-runner` service to the compose file and a `build-deploy.yml` workflow. Not
needed for a static site, but available if you want git-push deploys.
