# Cloudflare Pages and local preview

This is a static HTML/CSS/JavaScript site. **`dist` is the deployable folder.** Do not upload the workspace root, `planning`, project archives, source schematics, or the separate Site deployment ZIP.

## Check locally now (Windows PowerShell)

```powershell
cd 'F:\Raza_Engineering_Portfolio_2026'
npm run validate
npm run preview
```

Open **http://127.0.0.1:4173/** in your browser. For the complete library use **http://127.0.0.1:4173/projects.html**; for the research brief use **http://127.0.0.1:4173/research.html**. Refresh the browser after changing a file in `dist`. Press **Ctrl+C** in the preview terminal to stop it. Node.js is already available on this computer.

Do not rely on opening `dist/index.html` via a `file://` link; the local HTTP preview behaves more like the eventual host.

## Cloudflare Pages deployment choices

Choose **one** setup path:

1. **Direct Upload (quickest from this PC):** In Cloudflare Dashboard → Workers & Pages → create a Pages application → Direct Upload. Upload the **contents of `dist`** as a folder, or a ZIP containing `index.html` at the archive root. For later updates, upload a new deployment or run the script below. Direct Upload projects cannot later be converted to Git integration; a new Pages project would be needed.
2. **Git integration (best for frequent changes):** Push this source project to a GitHub/GitLab repository that you control and connect that repository to Cloudflare Pages. Select a static/no-framework setup, set the build output directory to `dist`, and leave the build command empty because the deploy-ready files are already there. Keep `planning/` out of the repository and check all claims before making the deployment public.

For a Direct Upload project, after installing/logging into Wrangler on your machine:

An upload-ready ZIP has also been prepared at `F:\Site_Archives\Raza_Portfolio_Cloudflare_Pages.zip`; its `index.html` is at the ZIP root. It is a snapshot—after future edits, create a fresh ZIP from `dist` before uploading.

```powershell
cd 'F:\Raza_Engineering_Portfolio_2026'
npx wrangler login
.\scripts\deploy-cloudflare.ps1 -ProjectName 'YOUR-PAGES-PROJECT-NAME'
```

The script validates the site and sends only `dist` with `wrangler pages deploy`. Do not put an API token in this project or paste it into chat. If PowerShell script execution is blocked, run `npm run validate` and then `npx wrangler pages deploy dist --project-name YOUR-PAGES-PROJECT-NAME --branch main` from the project folder.

## Privacy and launch review

**Cloudflare Pages production URLs are public by default.** The included `robots.txt` and `_headers` request no indexing, but **they do not restrict access**. Do not deploy this draft to a public Cloudflare Pages URL until the client names, BARC/defence material, images and claims have been approved. If you need a restricted Cloudflare review link, configure Cloudflare Access for the relevant hostname before sharing it; Pages' preview-access switch alone does not protect the main `*.pages.dev` or custom-domain address.

When you deliberately launch the public portfolio, review the site, then remove the temporary no-index directives from `dist/robots.txt` and `dist/_headers` and redeploy. Use only images/videos you own and have permission to publish.

The existing ChatGPT Site preview is a **separate owner-private deployment**, not a project in your own Cloudflare account. Deploying to your own Cloudflare Pages is an additional step requiring your account/project choice and login.
