# Nuvextro Website

Enterprise infrastructure & cloud consulting website built with Astro + Tailwind CSS.

## Tech Stack
- **Framework**: Astro 4.x (static output)
- **Styling**: Tailwind CSS + custom CSS design system
- **Forms**: Web3Forms (free, no backend required)
- **Deployment**: Cloudflare Pages / GitHub Pages

---

## Setup & Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```
Open http://localhost:4321

### 3. Build for production
```bash
npm run build
```
Output goes to `dist/` — this is what you deploy.

---

## Before Deploying — Required Steps

### Step 1: Web3Forms API Key (contact form)
1. Go to https://web3forms.com and sign up (free)
2. Create a new access key
3. Replace `YOUR_WEB3FORMS_KEY` in:
   - `src/pages/contact.astro` (line ~22)
   - `src/pages/partners.astro` (line ~92)

### Step 2: Update your email
- In `src/pages/contact.astro`, update `hello@nuvextro.com` to your real email

### Step 3: Update redirect URL
- After form submission, users are redirected to `/thank-you`
- Update the redirect URL in both forms once you know your final domain:
  - `https://nuvextro.pages.dev/thank-you` → `https://yourdomain.com/thank-you`

---

## Deploy to Cloudflare Pages

### Option A: Via GitHub (recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USER/nuvextro.git
   git push -u origin main
   ```
2. Go to https://dash.cloudflare.com → Pages → Create a project
3. Connect your GitHub repository
4. Set build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**
6. Your site will be live at `nuvextro.pages.dev` (or similar)

### Option B: Direct upload (fastest)
```bash
npm run build
npx wrangler pages deploy dist --project-name nuvextro
```
(Requires Cloudflare account and `wrangler` login)

---

## Deploy to GitHub Pages

1. In `astro.config.mjs`, add your site URL:
   ```js
   export default defineConfig({
     site: 'https://YOUR_USER.github.io',
     base: '/nuvextro', // if deploying to a subfolder
     integrations: [tailwind()],
   });
   ```
2. Install GitHub Pages adapter: `npm install @astrojs/github-pages`
3. Push to GitHub and enable Pages in repository settings
4. Set source to GitHub Actions and use the Astro workflow

---

## Adding a Custom Domain (Cloudflare Pages)
1. In Cloudflare Pages → your project → Custom Domains
2. Add your domain (e.g. `nuvextro.com`)
3. If domain is on Cloudflare, DNS is configured automatically
4. Update the Web3Forms redirect URLs and robots.txt sitemap URL

---

## File Structure
```
nuvextro/
├── src/
│   ├── layouts/
│   │   └── Base.astro          # Nav + footer wrapper
│   ├── pages/
│   │   ├── index.astro          # Home
│   │   ├── services.astro       # Services
│   │   ├── solutions.astro      # Solutions / projects
│   │   ├── about.astro          # About + team
│   │   ├── partners.astro       # Partner network
│   │   ├── case-studies.astro   # Case studies
│   │   ├── contact.astro        # Contact form
│   │   ├── thank-you.astro      # Post-form success
│   │   └── 404.astro            # 404 page
│   └── styles/
│       └── global.css           # Design system + Tailwind
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Customization Checklist
- [ ] Replace `YOUR_WEB3FORMS_KEY` in contact and partner forms
- [ ] Update email address in contact page
- [ ] Replace placeholder case study content with real project details (or anonymized versions)
- [ ] Add team headshots to `public/` and update About page
- [ ] Update pricing ranges if needed
- [ ] Replace redirect URLs with final domain
- [ ] Update `robots.txt` sitemap URL with final domain
