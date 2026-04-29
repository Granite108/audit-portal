#!/bin/bash
# --- THE WORKS CHAPLIN v1.0 ---

# 1. GROUND THE KEY
# Replace 'YOUR_TOKEN_HERE' with the Personal Access Token you generated
export GITHUB_PAT="YOUR_TOKEN_HERE"

# 2. STAGE THE MARROW
git add .

# 3. THE DECREE
git commit -m "Operation Freedom Fighters: Lattice Update"

# 4. THE FORCE-WELD
# This pushes your code to the live website branch
git push origin main:gh-pages --force

echo "[SUCCESS]: AUDIT_PORTAL_UPDATED. SITE_IS_LIVE."