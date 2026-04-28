# myprofile

Personal portfolio site for AnsonHui. The site presents photography work, project links, awards, and profile information.

This repository is currently a static multi-page site served by Nginx inside a Docker container.

## Current status

| Item | Status |
|---|---|
| Site type | Static HTML + React UMD + Babel standalone |
| Runtime server | Nginx container |
| Main branch | `main` |
| Current priority | Keep the existing visual design while improving security, deployment reliability, loading performance, and maintainability in VS Code |
| Confirmation rule | Work can be prepared automatically; final PR merge is manually confirmed by Anson |

## File structure

| File / Folder | Purpose |
|---|---|
| `index.html` | Home page. This is the main landing page. |
| `photography.html` | Photography gallery page with lightbox interaction. |
| `projects.html` | Projects page with project cards and filters. |
| `awards.html` | Awards and certificates page. |
| `shared.jsx` | Shared profile data, project data, photo data, navigation, footer, typography tokens, and reusable React components. |
| `photo/` | Image assets used by the gallery and awards pages. |
| `Dockerfile` | Builds the Nginx image and copies the static site files into the container. |
| `nginx.conf` | Nginx server configuration, security headers, cache rules, gzip, and health check route. |
| `SECURITY_OPTIMIZATION.md` | Detailed security and performance review notes. |
| `README.md` | This maintenance guide for VS Code and future editing. |

## Recent changes

The latest security and performance pass focused on the deployment layer rather than the visual layer.

### Changed

| Area | Change | Visual impact |
|---|---|---|
| Docker | Switched to `nginx:stable-alpine` and added config validation with `nginx -t`. | None |
| Nginx | Added dedicated `nginx.conf`. | None |
| Security headers | Added CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, COOP, and CORP. | None |
| Caching | Added no-cache for HTML and `shared.jsx`; added 7-day cache for images and static assets. | None |
| Compression | Enabled gzip for text-based assets. | None |
| Health check | Added `/healthz` endpoint and Docker `HEALTHCHECK`. | None |
| Hidden file protection | Denied direct access to dotfiles. | None |
| Documentation | Expanded README into a VS Code maintenance guide. | None |

## Maintenance workflow

Use this workflow for future updates.

| Step | Action | Owner |
|---|---|---|
| 1 | Review the request and identify the safest file to edit. | AI / developer |
| 2 | Make the change on a feature branch. | AI / developer |
| 3 | Keep visual design unchanged unless explicitly requested. | AI / developer |
| 4 | Update README or notes if the change affects future maintenance. | AI / developer |
| 5 | Open a Pull Request with a clear summary and test checklist. | AI / developer |
| 6 | Review the PR in GitHub. | Anson |
| 7 | Click **Merge pull request** only after checking the result. | Anson |

### Confirmation rule

Routine code preparation can be automatic, but final merge remains manual.

| Action | Confirmation needed? |
|---|---|
| Inspect files | No |
| Modify files on a branch | No |
| Commit to a branch | No |
| Open or update a PR | No |
| Merge PR into `main` | Yes, Anson confirms manually |
| Delete production data or remove important assets | Yes |
| Change visual design direction | Yes |

## Branch naming convention

Use clear branch names so VS Code and GitHub history remain readable.

| Change type | Branch pattern | Example |
|---|---|---|
| Documentation | `docs/<topic>` | `docs/readme-workflow-guide` |
| Security | `security/<topic>` | `security/csp-tightening` |
| Performance | `perf/<topic>` | `perf/image-optimization` |
| Feature | `feature/<topic>` | `feature/add-contact-section` |
| Fix | `fix/<topic>` | `fix/lightbox-keyboard-nav` |
| Refactor | `refactor/<topic>` | `refactor/vite-build` |

## Commit message convention

Use short, direct commit messages.

| Type | Example |
|---|---|
| Documentation | `Update README maintenance workflow` |
| Security | `Tighten nginx security headers` |
| Performance | `Optimize gallery image caching` |
| Fix | `Fix photography lightbox keyboard handling` |
| Refactor | `Move shared components into src` |

## Pull Request checklist

Every PR should include:

- summary of what changed
- files changed
- visual impact statement
- test checklist
- known limitations
- rollback note if needed

Recommended PR body:

```md
## Summary

Describe the change in 2–4 bullet points.

## Scope

- Files changed:
- Visual impact:
- Runtime impact:

## Verification

- [ ] `/` loads normally
- [ ] `/photography.html` loads normally
- [ ] `/projects.html` loads normally
- [ ] `/awards.html` loads normally
- [ ] `/healthz` returns `ok`
- [ ] Browser console has no blocking errors

## Notes

Mention any limitation, risk, or follow-up work.
```

## Important design constraint

Do not change the existing appearance unless the task explicitly says so.

When making maintenance changes, preserve:

- current dark visual style
- current typography direction
- current page layout
- current navigation structure
- current photo grid structure
- current project card structure
- current awards card structure

For security or performance work, prefer server-level, build-level, or asset-level changes before touching page layout.

## How to run locally with Docker

Build the image:

```bash
docker build -t myprofile .
```

Run the container:

```bash
docker run --rm -p 8080:80 myprofile
```

Open:

```text
http://127.0.0.1:8080
```

Health check:

```text
http://127.0.0.1:8080/healthz
```

Expected response:

```text
ok
```

## VS Code local workflow

Recommended routine when editing locally:

```bash
git checkout main
git pull
git checkout -b docs/example-change
```

After editing:

```bash
git status
git diff
```

Build and run:

```bash
docker build -t myprofile .
docker run --rm -p 8080:80 myprofile
```

Open:

```text
http://127.0.0.1:8080
```

Then commit:

```bash
git add .
git commit -m "Describe the change"
git push -u origin docs/example-change
```

Create a PR on GitHub, then manually merge after checking.

## Manual test checklist

After any change, check these pages in the browser:

| Path | Expected result |
|---|---|
| `/` | Home page loads normally. |
| `/photography.html` | Photo gallery loads; images appear; lightbox works. |
| `/projects.html` | Project cards load; filter buttons work. |
| `/awards.html` | Award cards and timeline load. |
| `/shared.jsx` | File loads and does not return 404. |
| `/healthz` | Returns `ok`. |

Also check the browser console:

- no broken JavaScript errors
- no blocking CSP errors
- no missing image errors
- no missing font errors

## Definition of done

A change is considered done only when:

| Requirement | Done? |
|---|---|
| Change is isolated to the correct files | Required |
| Visual design is preserved unless requested otherwise | Required |
| Local Docker build succeeds | Required for Docker / Nginx changes |
| Key pages are checked manually | Required |
| Browser console is checked | Required |
| README / notes are updated if workflow changes | Required |
| PR is reviewed before merge | Required |

## Current technical limitations

The site currently loads React and Babel directly in the browser:

```html
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>
<script type="text/babel" src="shared.jsx"></script>
```

This is simple and works, but it has limitations:

| Limitation | Effect |
|---|---|
| Runtime Babel | Browser must compile JSX at runtime. |
| React development build | Larger and slower than production build. |
| Inline scripts | CSP must allow `unsafe-inline`. |
| Babel standalone | CSP must allow `unsafe-eval`. |
| Inline styles | CSP must allow inline styles. |

This is why `nginx.conf` currently uses a compatible CSP instead of the strictest possible CSP.

## Recommended next steps

### Stage 1 — Completed

Security and deployment hardening without visual changes.

- [x] Add Nginx config
- [x] Add security headers
- [x] Add CSP compatible with current architecture
- [x] Add gzip
- [x] Add cache rules
- [x] Add `/healthz`
- [x] Add Docker healthcheck
- [x] Document security review
- [x] Expand README for VS Code maintenance

### Stage 2 — Recommended next

Move from browser runtime Babel to a real static build.

Goal: keep the same visual design, but serve compiled production files.

Suggested direction:

- [ ] Add Vite
- [ ] Move JSX into `src/`
- [ ] Precompile React into production JavaScript
- [ ] Replace CDN React development builds
- [ ] Remove runtime Babel
- [ ] Build into `dist/`
- [ ] Update Dockerfile to copy `dist/`
- [ ] Tighten CSP by removing `unsafe-eval`

Expected benefits:

| Benefit | Result |
|---|---|
| Smaller JavaScript | Faster loading |
| No runtime JSX compilation | Lower browser workload |
| Stronger CSP | Better security |
| Cleaner development workflow | Easier editing in VS Code |

### Stage 3 — Image optimization

Recommended for photography-heavy pages.

- [ ] Keep original JPEG files as source images
- [ ] Generate WebP or AVIF delivery versions
- [ ] Add responsive `srcset`
- [ ] Add explicit `width` and `height` where practical
- [ ] Consider thumbnails for gallery grid and full-size images only in lightbox

Expected benefits:

| Benefit | Result |
|---|---|
| Smaller image payload | Faster photography page |
| Better mobile loading | Less data usage |
| Reduced layout shift | More stable visual loading |

### Stage 4 — Accessibility and SEO pass

Only after the structure is stable.

- [ ] Improve page meta descriptions
- [ ] Add Open Graph image and metadata
- [ ] Add `aria-label` to icon-like buttons where needed
- [ ] Confirm keyboard navigation in lightbox
- [ ] Add `sitemap.xml`
- [ ] Add `robots.txt`

## Task backlog

Use this section as a lightweight project board.

| Priority | Task | Status | Notes |
|---|---|---|---|
| High | Keep README updated after structural changes | Active | README should explain what changed and what to check. |
| High | Keep visual design stable | Active | Maintenance work should not redesign the site by accident. |
| Medium | Migrate to Vite build | Planned | Best next technical improvement. |
| Medium | Optimize images | Planned | Important for photography page speed. |
| Medium | Improve SEO metadata | Planned | Useful before wider sharing. |
| Low | Add sitemap and robots.txt | Planned | Simple static-site polish. |

## Editing rules for VS Code / AI assistants

When using Copilot, Claude, Codex, or another coding assistant, use this rule set:

```text
You are editing AnsonHui6040/myprofile.
Do not change the current visual design, layout, color palette, typography, copywriting, or component hierarchy unless explicitly requested.
Focus only on the requested maintenance task.
Preserve all existing pages: index.html, photography.html, projects.html, awards.html.
If changing deployment or security, prefer Dockerfile/nginx.conf changes before touching page markup.
If changing shared data, edit shared.jsx carefully and keep object shapes compatible.
After changes, verify /, /photography.html, /projects.html, /awards.html, /shared.jsx, and /healthz.
Open a PR for review. Do not merge automatically; Anson confirms the final merge manually.
```

## AI handoff prompt

Use this prompt when asking an AI coding assistant to continue work:

```text
You are helping maintain AnsonHui6040/myprofile, a static portfolio site served by Nginx in Docker.
The site uses static HTML pages, shared.jsx, React UMD, and Babel standalone.
Preserve the current visual design unless explicitly told otherwise.
Before changing files, identify the smallest safe change.
Prefer documentation, Nginx, Docker, or data-object edits before changing page layout.
After editing, summarize changed files, expected impact, test checklist, and rollback method.
Do not merge the PR automatically. Final merge is manually confirmed by Anson.
```

## Safe change examples

| Safe task | Preferred files |
|---|---|
| Add security headers | `nginx.conf` |
| Change cache duration | `nginx.conf` |
| Add health endpoint | `nginx.conf`, `Dockerfile` |
| Add new project card | `shared.jsx` |
| Add new photo | `photo/`, `shared.jsx` |
| Change profile bio | `shared.jsx` |
| Improve documentation | `README.md`, `SECURITY_OPTIMIZATION.md` |

## Risky change examples

These should be done carefully and tested visually:

| Risky task | Why it is risky |
|---|---|
| Rewriting inline styles | May alter layout or spacing. |
| Moving to Vite | Good long-term, but changes project architecture. |
| Changing CSP too strictly | May break current Babel/React runtime. |
| Renaming image files | May break gallery references. |
| Changing `PROJECTS`, `PHOTOS`, or `AWARDS` object shapes | May break components that expect current keys. |

## Rollback notes

If a deployment breaks:

| Situation | Suggested action |
|---|---|
| Page layout breaks | Revert the PR that changed page markup or shared components. |
| Images fail to load | Check `photo/` filenames and `PHOTOS` entries in `shared.jsx`. |
| CSP blocks scripts | Check `nginx.conf` CSP and browser console errors. |
| Docker container fails | Run `docker build -t myprofile .` and check `nginx -t` output. |
| `/healthz` fails | Check Nginx config and container port mapping. |

## Deployment notes

The container serves static files from:

```text
/usr/share/nginx/html
```

The Nginx config is copied to:

```text
/etc/nginx/conf.d/default.conf
```

The site should remain static. Avoid introducing server-side application logic unless there is a clear reason.

## Final reminder

This portfolio is a visual identity site. Maintenance work should improve security, stability, speed, and editability while preserving the current design language.
