# Cúram Education Site

A plain HTML/CSS/JavaScript static site for Cúram Education content, including training courses, learning paths, and certification information.

## Deploying to GitHub Pages

This site requires **no build step**. To publish it:

1. Go to **Settings → Pages** in this repository
2. Under **Source**, select **Branch: `main`**, folder **`/ (root)`**
3. Click **Save**

The site will be live at `https://<your-org>.github.io/<repo-name>/` within a minute or two. Every push to `main` redeploys automatically.

## Site Structure

```
index.html          ← Home / Education landing page
pages/              ← Individual content pages
css/styles.css      ← Single stylesheet (Merative/Cúram brand palette)
js/main.js          ← Minimal vanilla JS (mobile nav, smooth scroll)
pdf/education/      ← Downloadable PDF course materials
assets/             ← Video and other static assets
.nojekyll           ← Tells GitHub Pages to skip Jekyll processing
```

## Local Preview

Open `index.html` directly in a browser, or serve with any static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Contact

[curameducation@merative.com](mailto:curameducation@merative.com)
