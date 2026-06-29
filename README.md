# Home Painting Website — Next.js Scaffold

Professional lead-generation + local SEO site for a Central Florida residential painting company.

## Current Working Brand
`SunCoat Painting` (domain: suncoatingpainting.com)

## Key Features (Scaffolded)
- Strong homepage with hero, services, projects, process, testimonials, local areas
- Reusable LeadForm component (posts to /api/quote)
- Multiple local SEO pages ready (`/orlando-painting`, `/winter-park-painting`, etc.)
- `lib/site-config.ts` — change brand, phone, cities in one place
- sitemap.ts + robots.ts for SEO
- Clean component architecture

## Quick Start
```bash
npm install
npm run dev
```

## Customization
1. Edit **lib/site-config.ts** — update name, phone, email, service cities.
2. Replace images in `public/images/`
3. Add more city pages following the pattern of `app/[city]-painting/page.tsx`
4. Expand the lead API route (add Resend, HubSpot, etc.)

## Deploy to GitHub + Netlify

### 1. Initialize Git & push to GitHub

```bash
# Inside home-painting-landing/
git init
git add .
git commit -m "Initial commit - SunCoat Painting site"
```

Create a new repository on GitHub (e.g. `suncoat-painting-site`), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Netlify

1. Go to https://app.netlify.com
2. Click **"Add new site" → "Import an existing project"**
3. Connect your GitHub account and select the repo
4. Netlify should auto-detect Next.js:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. (Optional) Add environment variables if using the quote API (e.g. `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`)
6. Deploy

### 3. Custom Domain

1. In Netlify → Domain settings → Add custom domain
2. Enter `suncoatingpainting.com`
3. Follow Netlify's instructions to point DNS (CNAME or Netlify DNS)

The site supports API routes (quote form) and will work fully on Netlify.

## Next Steps (with client)
- Finalize company name & branding
- Real phone / email / domain
- Real project photography + reviews
- Decide on bilingual (EN/ES) support depth
- Connect lead form to actual CRM or email
