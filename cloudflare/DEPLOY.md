# Private Cloudflare deployment flow

The portfolio source is in the **private** GitHub repository `Sayadrazaabbas/raza-engineering-portfolio`. The deployable static website is `dist/`. The selected local media is separate, at `F:\DOCUMENTS\PORTFOLIO\IMAGES FOR PORTFOLIO\Portfolio_Selected_Media`; it is **not** in Git and must not be committed. No media has been uploaded by this flow.

```text
Site edits -> private GitHub -> automatic validation -> manual approved deployment -> Cloudflare Pages
                                                                        |
                                                              Cloudflare Access
                                                                        |
Local selected media -> review -> private R2 bucket -> Pages /media/* Function -> viewer
```

The two lines meet only after Access protects the entire site. An unlisted link, `robots.txt`, `noindex`, and a private GitHub repository do **not** make a Pages URL private. Cloudflare's [Pages Access guidance](https://developers.cloudflare.com/pages/platform/known-issues/#enable-access-on-your-pagesdev-domain) distinguishes protection of preview URLs from protection of the production `*.pages.dev` hostname.

## 1. Test on this computer

```powershell
cd 'F:\Raza_Engineering_Portfolio_2026'
npm run check:deploy
npm run preview
```

Open `http://127.0.0.1:4173/`. Press Ctrl+C to stop the preview. `check:deploy` validates project data, local links, Pages asset sizes, excluded file types, and the media Function's syntax. It does not certify publication rights or verify the content of every photo/video.

## 2. Create Pages without exposing the portfolio

Use a **Direct Upload Pages project** with the harmless placeholder at `cloudflare/placeholder/index.html` first. Do not connect the current `main` branch directly: a Git-integrated Pages project would deploy its current content before Access has been configured. This project will later receive deployments from GitHub Actions via Wrangler; Direct Upload supports that CI/CD model ([Cloudflare guide](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/)). Direct Upload projects cannot later be switched to native Git integration without creating a new Pages project.

1. In Cloudflare Dashboard -> Workers & Pages, create a Direct Upload Pages project, for example `raza-private-portfolio`.
2. Upload only the placeholder folder. Record the exact project name.
3. Enable Access for **both** the production `<project>.pages.dev` URL and wildcard preview deployments, following [Cloudflare's Pages Access steps](https://developers.cloudflare.com/pages/platform/known-issues/#enable-access-on-your-pagesdev-domain). If a custom domain is attached later, add a separate Access application for that hostname too.
4. Allow only your email initially. Test production and a preview URL in a signed-out/incognito browser; both should require authentication. Do this **before** the real portfolio or media is deployed.

Sharing a password in a message is not the same as Access: grant each intended viewer an allowed identity/one-time-code policy, or another access method you explicitly approve. Decide later which projects should become public and which stay behind Access.

## 3. Set up the manual CI/CD deployment

The repository contains `.github/workflows/portfolio.yml`:

- Each push or pull request runs `npm run check:deploy`; it does **not** publish anything.
- A manual **Run workflow** on `main` validates again and deploys `dist/` to Pages.
- The deploy job uses the GitHub environment `private-cloudflare`. Configure its required reviewers if available on your GitHub plan.

Create the `private-cloudflare` GitHub environment after Access is verified. Add these **environment** values, never as files or chat messages:

| Name | Kind | Purpose |
| --- | --- | --- |
| `CLOUDFLARE_API_TOKEN` | secret | API token scoped to this account with Cloudflare Pages Edit permission |
| `CLOUDFLARE_ACCOUNT_ID` | secret | Cloudflare account ID |
| `CF_PAGES_PROJECT` | variable | Exact Pages project name from step 2 |

The GitHub repository is private, but Actions logs and deployments still deserve review. No automatic production deployment is enabled. Do not run the deploy job until step 2 is complete.

For local deployment **after** Access is confirmed, the existing script remains available:

```powershell
.\scripts\deploy-cloudflare.ps1 -ProjectName 'raza-private-portfolio' -AccessConfirmed
```

It validates and sends only `dist/`; it does not upload the separate project media.

## 4. Add curated images and videos through private R2

The selected folder currently has 102 images and 14 videos. Several videos are over [Pages' 25 MiB single-asset limit](https://developers.cloudflare.com/pages/platform/limits/), so the media belongs in R2, not `dist/` or Git. The images were selected mainly by filename; videos still need content review.

1. Review `Portfolio_Selected_Media/media_manifest.csv`, `unresolved_named_images.csv`, and the videos. Approve what is appropriate for this **private** portfolio. The original `all_images` folder remains unchanged.
2. Create a private R2 bucket, for example `raza-portfolio-media`. Keep public bucket access, `r2.dev`, and a public custom domain **disabled**.
3. In the Pages project, Settings -> Bindings, add an R2 bucket binding named **`MEDIA`** pointing to that bucket for production (and preview if needed). Redeploy the site after changing bindings. This is the documented [Pages/R2 binding](https://developers.cloudflare.com/pages/functions/bindings/#r2-buckets).
4. Upload the approved files with object keys matching the folders: `Images/<project>/<filename>` and `Videos_To_Review/<project>/<filename>`. Use an S3-compatible multipart client such as rclone for the larger videos. Wrangler's object upload is one-file-at-a-time and capped at 315 MB ([R2 upload guidance](https://developers.cloudflare.com/r2/objects/upload-objects/)); some of these videos exceed that.
5. The included `functions/media/[[all]].js` streams objects through the **same Access-protected Pages hostname** at `/media/Images/...` and `/media/Videos_To_Review/...`. The R2 bucket itself has no public URL. Check an image and video range request after uploading.
6. Only then add approved images and videos to project pages with captions, alt text, and appropriate attribution. There are no automatic media links in the current website, so uploading alone will not display them.

Do not copy the entire original folder or upload every file merely because it exists. In particular, BARC/defence content, client sites, and images of other people require an explicit publication decision. If you later make only some projects public, separate public and private delivery paths rather than weakening Access on the whole site.

## 5. Acceptance check

- Signed-out visitor cannot open the production Pages URL, any preview URL, or a `/media/*` URL.
- Allowed viewer can open the portfolio, a selected image, and a selected video; video seeking works.
- The selected Pages deployment contains no raw schematics, source archives, or large videos.
- The R2 bucket has no public endpoint.
- A new Git push validates but does not deploy; the manual workflow deploys only after approval.

Current status: **flow implemented locally; Cloudflare Pages project, Access, credentials, R2 bucket/binding, media review/upload, and first deployment remain to be completed.**
