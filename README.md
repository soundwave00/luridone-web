# LURIDONE — Marketing Website

> La guida ai baracchini, trattorie e posti luridi più buoni di Milano.

Production-ready marketing landing page for the **LURIDONE** iOS/Android app. Built with Astro 5, TypeScript, and vanilla CSS — zero JS framework runtime, static output, edge-deployed on Vercel.

[![Deploy](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)](https://luridone.it)
[![Lighthouse Performance](https://img.shields.io/badge/lighthouse-100%2F100-brightgreen)](https://luridone.it)
[![TypeScript](https://img.shields.io/badge/typescript-strict-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro 5](https://astro.build) — static output, zero JS runtime |
| Language | TypeScript (strict mode) |
| Styles | Vanilla CSS — design tokens, modular file split |
| Fonts | Google Fonts — Archivo Black + Poppins |
| Animations | Vanilla TS — `IntersectionObserver`, `requestAnimationFrame` |
| Hosting | [Vercel](https://vercel.com) — edge CDN, auto-deploy from `main` |
| Domain | [luridone.it](https://luridone.it) via GoDaddy DNS |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/soundwave00/luridone-web.git
cd luridone-web
npm install
```

### Development

```bash
npm run dev        # dev server → http://localhost:4321 (HMR enabled)
```

### Production Build

```bash
npm run build      # compiles to dist/
npm run preview    # serves dist/ locally → http://localhost:4321
```

### Type Checking

```bash
npm run check      # astro check — validates TS + .astro files
```

---

## Project Structure

```
luridone-web/
├─ src/
│   ├─ pages/
│   │   └─ index.astro              # entry point — <head>, SEO, composition
│   ├─ components/
│   │   ├─ Hero.astro               # hero section with video background
│   │   ├─ Marquee.astro            # infinite scrolling ticker
│   │   ├─ Manifesto.astro          # brand manifesto section
│   │   ├─ Features.astro           # 2×2 feature card grid
│   │   ├─ ProblemSolution.astro    # problem vs solution comparison
│   │   ├─ Stats.astro              # animated counter stats
│   │   ├─ FinalCTA.astro           # download CTA with mascot
│   │   ├─ Footer.astro
│   │   └─ SauceSVG.astro           # reusable decorative SVG path component
│   ├─ styles/
│   │   ├─ tokens.css               # CSS custom properties (colours, spacing)
│   │   ├─ base.css                 # reset, typography, buttons, animations
│   │   └─ sections.css             # per-section styles + responsive breakpoints
│   └─ scripts/
│       ├─ main.ts                  # entry — initialises all modules
│       └─ modules/
│           ├─ heroVideo.ts         # autoplay with visibility/pointer fallback
│           ├─ marquee.ts           # seamless -50% translateX loop
│           ├─ reveal.ts            # IntersectionObserver scroll reveals + stagger
│           ├─ sauce.ts             # stroke-dashoffset SVG draw on scroll
│           └─ counter.ts           # count-up animation with cubic easing
├─ public/
│   └─ assets/
│       ├─ hero.mp4                 # hero background video (MP4 fallback)
│       ├─ hero.webm                # hero background video (VP9 — 62% smaller)
│       ├─ hero-poster.jpg          # video poster frame (prevents flash on load)
│       ├─ mascot.png               # mascot illustration
│       ├─ og-image.jpg             # Open Graph social share image (1200×630)
│       └─ favicon.svg              # SVG favicon
├─ astro.config.mjs
├─ tsconfig.json
├─ vercel.json                      # cache headers for /assets/*
└─ package.json
```

---

## Configuration Reference

### Design Tokens

All brand colours and global spacing live in `src/styles/tokens.css`. Change here to propagate everywhere.

```css
:root {
  --crimson:   #7B1010;
  --gold:      #C9A217;
  --cream:     #EDE8D0;
  --ink:       #2A1A12;
  /* ... */
}
```

### Content Editing

| What to change | Where |
|---|---|
| Brand colours, fonts, spacing | `src/styles/tokens.css` |
| Section copy / markup | Corresponding component in `src/components/` |
| SEO title, description, OG tags | `src/pages/index.astro` → `<head>` |
| Animation behaviour | `src/scripts/modules/` |
| Video, images, favicon | `public/assets/` |
| Cache / redirect rules | `vercel.json` |

---

## Deployment

The project auto-deploys to Vercel on every push to `main`.

### Manual Deploy

```bash
git push origin main   # triggers Vercel CI/CD pipeline
```

### DNS Configuration (GoDaddy → luridone.it)

| Type | Name | Value |
|---|---|---|
| `A` | `@` | Vercel IP (see Vercel dashboard → Domains) |
| `CNAME` | `www` | Vercel CNAME (see Vercel dashboard → Domains) |

> **Note:** The exact IP and CNAME values are shown in **Vercel → Project → Settings → Domains** after adding the domain. The www → apex redirect is configured directly in the Vercel dashboard.

SSL is provisioned automatically via Let's Encrypt (5–10 min after DNS propagation).

---

## Performance

Lighthouse scores on production build (simulated Fast 3G):

| Category | Score |
|---|---|
| Performance | 🟢 100 |
| Accessibility | 🟢 93 |
| Best Practices | 🟢 100 |
| SEO | 🟢 100 |

Key optimisations:
- Google Fonts loaded asynchronously (`rel="preload"` + `onload` swap) — eliminates render-blocking
- Hero video served as WebM (VP9) with MP4 fallback — 62% smaller than MP4 alone
- `preload="metadata"` + poster frame — prevents video flash on load
- `loading="lazy"` + intrinsic dimensions on below-fold images — eliminates CLS
- All assets on Vercel edge CDN with `Cache-Control: immutable` headers

---

## Accessibility

- Single `<h1>` per page
- `aria-hidden` on all decorative elements (marquee, SVG paths, grain overlay)
- `prefers-reduced-motion` respected — disables all animations, counters show final values immediately
- Semantic HTML5 (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Hit targets ≥ 44px

---

## License

Private — all rights reserved. © LURIDONE 2025.
