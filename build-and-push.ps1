# Builds the portfolio image (Next.js standalone) and pushes it to Docker Hub.
# Manual deploy: watchtower on the NAS recreates the container within ~5 min.
#
# Usage:
#   .\build-and-push.ps1          # build only
#   .\build-and-push.ps1 -Push    # also push to Docker Hub

param(
    [string]$Image = "vanakata/portfolio:latest",
    [switch]$Push
)

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot

Write-Host "Building $Image ..." -ForegroundColor Cyan
docker build -t $Image $root
if ($LASTEXITCODE -ne 0) { throw "docker build failed" }

if ($Push) {
    Write-Host "Pushing $Image ..." -ForegroundColor Cyan
    docker push $Image
    if ($LASTEXITCODE -ne 0) { throw "docker push failed" }
    Write-Host "Done. watchtower on the NAS will recreate the container within ~5 min." -ForegroundColor Green
} else {
    Write-Host "Built. Re-run with -Push to publish to Docker Hub." -ForegroundColor Green
}
