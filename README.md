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

The project is already git-initialized and committed. Run these commands:

### 1. Push to GitHub

```bash
# 1. Create a new repo on GitHub first (recommended name: suncoating-painting or suncoat-site)
#    Do NOT initialize it with README/gitignore (we already have them)

git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Netlify (recommended)

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. **Add new site** → **Import an existing project**
3. Choose GitHub → select your new repository
4. Netlify will auto-detect it's a Next.js project:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click Deploy.

Optional: In Site settings → Environment variables, add any you need:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

### 3. Connect your custom domain

1. Netlify → Domain settings → **Add custom domain**
2. Add `suncoatingpainting.com`
3. Follow the DNS instructions (Netlify will give you the exact records).

The lead form (`/api/quote`) uses Next.js API routes and will work as serverless functions on Netlify.

## Next Steps (with client)
- Finalize company name & branding
- Real phone / email / domain
- Real project photography + reviews
- Decide on bilingual (EN/ES) support depth
- Connect lead form to actual CRM or email
