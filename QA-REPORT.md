# Little Steps — checks completed

- PASS: Buyer: 11 views at 320px
- PASS: Buyer: 11 views at 390px
- PASS: Phone: routine editing and picture picker
- PASS: Phone: pause, extra time, help, reload resume, skip and star awards
- PASS: Phone: sibling data isolation
- PASS: Token approval and saved progress
- PASS: Buyer: 11 views at 768px
- PASS: Buyer: 11 views at 1440px
- PASS: Real backup download, valid restore and malformed backup rejection
- PASS: Random chore and daily duplicate-star prevention
- PASS: Focus timer → timed break → completion reward
- PASS: Feelings check-in and optional breathing start/stop
- PASS: Weekly schedule affects Today
- PASS: Printable routine A4 render
- PASS: Printable token board A4 render
- PASS: Buyer service-worker installation and offline reload/routine
- PASS: Demo: sample play, editing restriction, CTA and refresh reset
- PASS: No JavaScript errors or horizontal page overflow

## Test scope

Local Chromium 153 with viewport and touch emulation. Buyer views checked at 320, 390, 768 and 1440 pixels; all demo views checked at 390 pixels. Screenshots were inspected for phone layouts and the picture picker.

Not a physical iPhone/iPad or Safari/WebKit test. Read-aloud voices and Add to Home Screen menus vary by browser. The code has not yet been uploaded to GitHub, so final live URLs need a post-upload check.

## Fixes in this release

- Bundled 62 offline picture icons to prevent missing emoji boxes.
- Improved narrow phone layouts and routine-editor picture grid.
- Fixed duplicate script initialization in demo HTML.
- Demo and buyer data use separate storage keys.
- Added scope-relative offline caching and app manifests for GitHub repository paths.
- Cleared running activities when restoring a backup.

Additional final checks passed: demo layouts at 320/768/1440px across its ten non-settings views, and same-origin demo/buyer data isolation. Demo settings was already checked at 390px.
