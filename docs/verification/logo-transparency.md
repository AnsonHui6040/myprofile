# Logo transparency verification

The original ProRes 4444 transparent MOV was converted to
`assets/brand/anson-reveal-hevc.mov` using FFmpeg's Apple VideoToolbox encoder
with `-vf fps=30,scale=640:640:flags=lanczos,format=bgra`,
`-c:v hevc_videotoolbox -alpha_quality 1 -q:v 65 -tag:v hvc1 -an
-movflags +faststart`. The 640 × 640 asset preserves the original eight-second
line reveal. Its size is 1,165,857 bytes.

Apple browsers receive HEVC with alpha; other browsers retain the existing VP9
WebM. Before showing the video, the homepage checks its decoded transparent
corner. An opaque or unreadable frame leaves the static SVG visible.

## Checks on 2026-09-10

- Apple AVFoundation decoded all 240 frames. Once-per-second alpha samples are
  recorded in `logo-hevc-alpha.json`; each sampled corner has alpha zero.
- Mac Safari played `transparent-video.html` over charcoal, blue and terracotta
  backgrounds. All three showed alpha zero and no rectangular backing during
  the line reveal.
- The Chromium-based in-app browser loaded the homepage, selected the WebM,
  and entered `signature-stage is-playing` after clicking the logo. Replay
  remained enabled, confirming that the alpha check accepted its decoder.
- `git diff --check` passed. Implementation and fallback received independent
  code review.

## Verification boundaries

The actual iPhone Instagram webview has not been tested. The full homepage in
Mac Safari could not be tested on the HTTP development server: the existing
`upgrade-insecure-requests` policy upgraded local asset requests to HTTPS,
which the development server does not provide. The separate Safari video
fixture succeeded. Production CSP has not been weakened for this test.

These are local changes and have not been pushed or deployed.

Reference: [Apple — HEVC Video with Alpha](https://developer.apple.com/videos/play/wwdc2019/506/).
