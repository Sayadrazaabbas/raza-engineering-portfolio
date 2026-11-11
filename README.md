# Raza Abbas Sayed — engineering portfolio

Detailed portfolio draft, built from the case studies in `F:\profile info` and later owner clarifications. This is a standalone static website: `dist/` is the complete deployable production site and does not depend on a ChatGPT Site or an OpenAI login for visitors. `dist/projects.html` is the Work Archive, `dist/project.html?id=...` provides a dedicated case-study view, and `dist/research.html` is a focused BARC/research-oriented introduction. Run `node scripts/validate.mjs` to check records and links. The deployed site remains private while content and permissions are reviewed.

For local preview and the gated Cloudflare Pages/R2 deployment flow, follow [`cloudflare/DEPLOY.md`](cloudflare/DEPLOY.md). Run `npm run check:deploy` before preview or deployment. GitHub pushes validate automatically; production deployment is manual and must wait for Cloudflare Access protection.

Use `npm run preview` for a lightweight local preview at `http://127.0.0.1:4173/`. For a production-style local Cloudflare Pages preview, including the `/media/*` Function, run `npm run preview:cloudflare` and open `http://localhost:8788/`. After Cloudflare Pages and Access are configured, deploy from GitHub Actions or run `./scripts/deploy-cloudflare.ps1 -ProjectName 'your-pages-project-name' -AccessConfirmed`.

## Editorial rules

- The eight home-page stories and the complete case-study library use the user's descriptions and local case-study records. Illustrations are abstract CSS graphics, **not** photographs of actual equipment.
- Do not add client logos, actual defence/BARC drawings, source code, identifiable patient images, measured performance, certifications, or production claims without confirming publication rights and evidence.
- The Navy story is public-facing at a high level only; no packet formats, identifiers, frequencies, or operational procedures.
- The gamma project is a mechanical/motion concept, not a radiation-tested detector.
- The patient warmer is equipment development; no regulatory or clinical-performance claim.
- OES, AICAN data/energy logger, and industrial IoT control unit/dashboard need the planned detailed discussions before case-study publication. Crest TLC is a separate thin-layer chromatography project.

## Next content pass

1. Confirm the preferred professional title, headshot, contact email and city.
2. Review wording, client names, dates, and numbers against evidence.
3. Add only approved, original project photos and videos; provide captions and accessible alt text.
4. Expand the existing individual case-study views with approved technical evidence and real media; produce the short introduction video once source footage is supplied.

## Prepared for the next discussion

- `planning/Tomorrow_Project_Interview.md`: focused questions for OES, AICAN data/energy logger and AICAN industrial IoT control unit/dashboard.
- `planning/Media_Review.md` and `planning/Media_Inventory.csv`: local media audit; no source media has been uploaded.
- `planning/Intro_Video_Script.md`: first-impression video script and shot plan.
- `planning/Profile_Positioning.md`: proposed professional headline and verbal introduction.
