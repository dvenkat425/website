# deepa-site

Personal website for Deepa Venkat. Next.js + TypeScript, fully static, no API keys.

## Edit content

Everything on the page lives in `content/site.ts`: intro, links, projects, work, writing.
Lines marked `TODO` still need a real value. Any link left as `""` just won't appear.

To add a resume: drop `resume.pdf` into `public/` and set `links.resume` to `"/resume.pdf"`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Create an empty repo on GitHub (e.g. `dvenkat425/deepa-site`), then from this folder:

   ```bash
   git init
   git add .
   git commit -m "Personal site"
   git branch -M main
   git remote add origin https://github.com/dvenkat425/deepa-site.git
   git push -u origin main
   ```

2. On vercel.com: **Add New → Project**, import `deepa-site`. Vercel detects Next.js; keep the defaults and click **Deploy**.
3. Copy the URL Vercel gives you into `site.url` in `content/site.ts`, commit, and push. Every push to `main` redeploys automatically.

Optional: add a custom domain under the project's **Settings → Domains**.

## Tabs

The site is one page with five tabs: About, Projects, Internships, Writing, Contact (`components/TabbedSite.tsx`). Each tab has its own link, e.g. `/#projects`, so you can send someone straight to your projects. Arrow keys move between tabs.

To add a photo, put a square image in `public/` (e.g. `headshot.jpg`) and set `photo: "/headshot.jpg"` in `content/site.ts`.
