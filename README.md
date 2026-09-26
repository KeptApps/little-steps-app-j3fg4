# Little Steps — Full Buyer App

This folder is ready for a GitHub Pages repository. There is no build step and no npm installation.

## Upload

1. Create a repository named `little-steps-app-m8q4` (or choose your own name).
2. Upload ALL files and the `emoji` folder from this folder to the repository root on `main`.
3. Confirm `index.html` is at the root, alongside `app.js`, `config.js`, images and stylesheets.
4. Open Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.
5. Wait for GitHub to show the published URL. Open that exact URL.

Do not upload the ZIP itself. Do not place another wrapper folder above index.html.

## Purpose

This is the complete app with persistent device-local profiles, editable routines, multiple children, custom chores/rewards, token boards, printable charts, backup export/import and offline caching. Share the published app link in the guide delivered after an Etsy purchase.

GitHub Pages does not verify Etsy purchases. Anyone who obtains this URL can access the app. A public repository exposes the source. The noindex setting and a less obvious repository name are not access control. Enforced paid access requires authenticated hosting.

## Phones and offline use

- iPhone/iPad: open the hosted URL in Safari, then Share → Add to Home Screen.
- Android: open in Chrome, then the menu → Add to Home screen / Install app when offered.
- Open once online and allow all assets to load before trying offline.
- Keep the tab/app open during timers. No background alarm is promised when it is closed.
- Read-aloud depends on the available voices in the browser.

## Data

No server database or account is used. Data is local to this browser and does not automatically sync. Export backups in Grown-up space. Clearing browser data can remove progress. Use separate child profiles on shared devices.

## Updating

Upload the changed files and increment the cache name in `sw.js`. Close open app tabs and reopen online to pick up the update. Do not change the storageKey in config.js unless intentionally starting fresh.

## Check results

See QA-REPORT.md. See THIRD-PARTY-NOTICES.txt for picture-icon licensing.
