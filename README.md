# Qasim Bin Saeed — Academic Portfolio

Personal academic website: **https://qasimbinsaeed1.github.io**

Built with Next.js + Chakra UI. Edit content in `lib/content.js` and `lib/visited-cities.js`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
```

Deployed automatically to GitHub Pages from `main` via `.github/workflows/deploy.yml`.

## Search engines (Google & Bing)

The site ships with:

- Descriptive title, meta description, Open Graph / Twitter cards
- JSON-LD `Person` / `WebSite` / `ProfilePage` structured data
- `robots.txt` and `sitemap.xml`
- Bing **IndexNow** ping on every deploy

Search engines still need you to **claim and submit** the site once (takes a few minutes):

### Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console)
2. Add property → **URL prefix** → `https://qasimbinsaeed1.github.io`
3. Choose **HTML tag** verification → copy the `content="..."` code
4. Paste it into `googleSiteVerification` in `lib/content.js`, push to `main`
5. Click Verify, then **Sitemaps** → submit `https://qasimbinsaeed1.github.io/sitemap.xml`
6. Use **URL Inspection** → “Request indexing” for the homepage

### Bing Webmaster Tools

1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site `https://qasimbinsaeed1.github.io` (or import from Google)
3. If Bing asks for an HTML meta tag, paste the code into `bingSiteVerification` in `lib/content.js` and push
4. Submit the same sitemap URL

After indexing (often days to a couple of weeks), try searches like:

- `Qasim Bin Saeed`
- `Qasim Bin Saeed University of Manitoba`
- `"Qasim Bin Saeed" robotics`
