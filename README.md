# kamalvasvani.com — portfolio

All text lives in `src/content.js`. Edit that file to change anything on the site.
Before publishing, replace the TODO email, LinkedIn and GitHub links.

## Run locally

    npm install
    npm run dev        # http://localhost:5173

## Deploy on Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Build settings: framework preset "React (Vite)", build command `npm run build`, output directory `dist`.
4. After the first deploy: project → Custom domains → add `kamalvasvani.com`, then `www.kamalvasvani.com`.
5. Every push to the main branch redeploys automatically.

`public/_headers` sets security headers (HSTS, CSP, X-Frame-Options and more) on every page.
