# Security and performance review

This note records the low-risk hardening applied to `myprofile` without changing the existing visual design, layout, copy, or page structure.

## Scope

Reviewed files:

- `Dockerfile`
- `nginx.conf`
- `index.html`
- `photography.html`
- `projects.html`
- `awards.html`
- `shared.jsx`

## Applied changes

### 1. Nginx security headers

Added a dedicated `nginx.conf` with the following headers:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` blocking camera, microphone, geolocation, payment, USB, and browsing topics
- `Cross-Origin-Opener-Policy: same-origin-allow-popups`
- `Cross-Origin-Resource-Policy: same-origin`
- `Content-Security-Policy`

The current site uses inline React/Babel and Google Fonts CDN, so the CSP intentionally still allows:

- inline style, because most layout is inline style
- inline script and eval, because Babel standalone needs it
- `https://unpkg.com` for React, ReactDOM, and Babel
- Google Fonts domains

This keeps the existing site working while reducing the attack surface compared with having no CSP.

### 2. Container deployment hardening

Updated `Dockerfile` to:

- use `nginx:stable-alpine` instead of the moving `nginx:alpine` tag
- copy in a dedicated Nginx server configuration
- run `nginx -t` during image build to catch invalid config early
- add a Docker `HEALTHCHECK` against `/healthz`

### 3. Static asset performance

Added Nginx-level performance settings:

- gzip for text-based assets
- 30-day immutable caching for image assets
- 7-day caching for CSS, JS, font assets
- no-cache for HTML and `shared.jsx`, so content edits appear quickly

### 4. Hidden-file protection

Added a rule to deny direct access to dotfiles, such as accidental `.env`, `.git`, or similar hidden files if they are ever copied into the container.

## Findings not changed in this PR

These are valid future improvements but were not applied because they may affect development workflow or require larger restructuring.

### 1. Runtime Babel and React development builds

Current pages load:

- `react.development.js`
- `react-dom.development.js`
- `@babel/standalone`
- `<script type="text/babel">`

This is acceptable for a prototype but suboptimal for production because it increases payload size and requires a looser CSP with `unsafe-inline` and `unsafe-eval`.

Recommended future direction:

- migrate to Vite or another small static build pipeline
- precompile JSX into static JavaScript
- switch React and ReactDOM to production builds
- then tighten CSP by removing `unsafe-eval` and most inline script allowances

### 2. Inline styles

The site uses inline styles heavily. This preserves fast iteration and visual control, but it prevents a strict CSP without `unsafe-inline` for styles.

Recommended future direction:

- gradually move repeated styles into a CSS file
- keep the current visual design unchanged
- then tighten `style-src`

### 3. Image optimization

The photo gallery uses JPEG files directly. Performance can be improved further by generating WebP or AVIF copies and responsive sizes.

Recommended future direction:

- keep original JPEG files as source assets
- generate `webp` / `avif` versions for web delivery
- add `srcset` and explicit width/height to reduce layout shift

### 4. Dependency control

The current app depends on CDN assets from `unpkg.com` and Google Fonts. Subresource Integrity is already present on the JS CDN scripts, which is good. For stronger supply-chain control, dependencies can be vendored or built locally.

Recommended future direction:

- pin dependencies through `package-lock.json`
- use Vite build output
- serve bundled assets from the same origin

## Manual verification checklist

After deployment, verify:

- `/` loads normally
- `/photography.html` loads normally
- `/projects.html` loads normally
- `/awards.html` loads normally
- `/shared.jsx` returns a usable Babel script MIME type
- `/healthz` returns `ok`
- browser console has no CSP violations that break page rendering
- images still load in the photo gallery and awards page

## Non-goals

This PR intentionally does not:

- change the visual layout
- change typography choices
- change page copy
- change colors
- change component hierarchy
- introduce a new frontend framework
- convert the project into a build-based app
