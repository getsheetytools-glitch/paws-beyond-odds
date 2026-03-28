# Paws Over Odds

A cat health advocacy resource. Built with [Eleventy (11ty)](https://www.11ty.dev/).

## Getting started

```bash
npm install
npm start        # dev server at localhost:8080
npm run build    # builds to _site/
```

## Project structure

```
src/
├── _data/
│   ├── cats.json          # All cat profiles (edit here, not in templates)
│   ├── conditions.json    # Condition cards and metadata
│   ├── sponsors.json      # Promotions page — add sponsors here
│   └── site.json          # Global site metadata
├── _includes/
│   ├── nav.njk
│   └── footer.njk
├── _layouts/
│   └── base.njk
├── assets/
│   ├── css/style.css
│   └── images/
│       ├── cats/          # Per-cat photos (minou.jpg, yams.jpg, etc.)
│       ├── sponsors/      # Sponsor logos
│       └── hero.jpg       # Homepage hero photo
├── conditions/
│   ├── index.njk          # Conditions hub
│   └── ckd.njk            # CKD deep dive (first full condition page)
├── index.njk              # Homepage
├── our-cats.njk           # Full cat timeline
├── advocate.njk           # Vet toolkit
├── milton-sorbet.njk      # Living updates
├── promotions.njk         # Sponsored deals & codes
└── about.njk              # About page
```

## Adding cat photos

Drop your real photos into `src/assets/images/cats/`. Each cat currently has a named SVG placeholder that shows up in the site. To replace one, just drop in a file with the **same name but a different extension** and update the path in `cats.json`.

For example, to replace Bruce's placeholder:
1. Add `bruce.jpg` to `src/assets/images/cats/`
2. In `cats.json`, change `"photo": "/assets/images/cats/bruce.svg"` → `"photo": "/assets/images/cats/bruce.jpg"`

Repeat for each cat. For the homepage hero, replace `src/assets/images/hero.svg` → update the `<img>` src in `index.njk`.

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp` — webp recommended for performance.

## Analytics (Plausible)

Analytics are powered by [Plausible](https://plausible.io) — a privacy-friendly, GDPR-compliant alternative to Google Analytics. Key reason to use it: **you can share a public stats URL with potential sponsors** so they can see real traffic data without needing a login.

**Setup:**
1. Create a free trial account at [plausible.io](https://plausible.io)
2. Add your domain (e.g. `pawsoverodds.com`)
3. In your GitHub repo settings (or Netlify environment variables), add:
   ```
   PLAUSIBLE_DOMAIN=pawsoverodds.com
   ```
4. That's it — the tracking script is automatically injected in production builds. It does **not** load locally.

**Sharing with sponsors:**
In your Plausible dashboard → Settings → Visibility → enable "Public dashboard". You'll get a URL like `plausible.io/pawsoverodds.com` that anyone can view. Share this in your sponsorship media kit.

## Adding a sponsor to the Promotions page

Edit `src/_data/sponsors.json` and add a new entry:

```json
{
  "name": "Brand Name",
  "slug": "brand-name",
  "logo": "/assets/images/sponsors/brand.png",
  "category": "food",         // food | supplements | equipment | services | other
  "tagline": "Short tagline",
  "description": "Longer description of the product.",
  "code": "PAWSOVER15",
  "discount": "15% off",
  "url": "https://example.com?ref=pawsoverodds",
  "endorsed": true,
  "endorsement": "Personal note about why you recommend it.",
  "conditions": ["ckd"]       // Links to condition pages
}
```

## Adding a new condition page

1. Add the condition to `src/_data/conditions.json`
2. Create `src/conditions/[slug].njk` — use `ckd.njk` as a template
3. The conditions index page auto-generates from the data file

## Deploying to Netlify or GitHub Pages

The `_site/` folder is the build output. Point your host at that directory, or connect your repo directly and set:
- Build command: `npm run build`
- Publish directory: `_site`
