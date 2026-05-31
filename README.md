# LURIDONE — Sito marketing

Landing page single-page per l'app **LURIDONE** (street food milanese).  
Stack: **Astro 5 + TypeScript + CSS vanilla**.

## Avvio in locale

```bash
npm install
npm run dev        # dev server su http://localhost:4321
```

## Build produzione

```bash
npm run build      # output in dist/
npm run preview    # preview locale di dist/
```

## Type check

```bash
npm run check      # astro check (TS + .astro)
```

## Struttura cartelle

```
src/
├─ pages/
│   └─ index.astro              # composizione e <head>
├─ components/
│   ├─ Hero.astro
│   ├─ Marquee.astro
│   ├─ Manifesto.astro
│   ├─ Features.astro
│   ├─ ProblemSolution.astro
│   ├─ Stats.astro
│   ├─ FinalCTA.astro
│   ├─ Footer.astro
│   └─ SauceSVG.astro
├─ styles/
│   ├─ tokens.css               ← colori e variabili globali
│   ├─ base.css                 ← reset, tipografia, utility, animazioni
│   └─ sections.css             ← stili per sezione + responsive
└─ scripts/
    ├─ main.ts
    └─ modules/
        ├─ heroVideo.ts
        ├─ marquee.ts
        ├─ reveal.ts
        ├─ sauce.ts
        └─ counter.ts

public/
└─ assets/
    ├─ hero.mp4
    ├─ hero-poster.jpg
    ├─ mascot.png
    ├─ og-image.jpg
    └─ favicon.svg
```

## Dove modificare

| Cosa | File |
|---|---|
| Colori, font, spacing | `src/styles/tokens.css` |
| Copy di una sezione | Componente Astro corrispondente (es. `src/components/Manifesto.astro`) |
| Animazioni JS | `src/scripts/modules/` |
| Meta tag SEO / OG | `src/pages/index.astro` (sezione `<head>`) |
| Asset video / immagini | `public/assets/` |

## Deploy su Vercel + dominio luridone.it

1. Push il repo su GitHub
2. Importa il progetto su [Vercel](https://vercel.com) → framework rilevato automaticamente (Astro)
3. Vercel → Project → Settings → Domains → aggiungi `luridone.it` e `www.luridone.it`
4. Su GoDaddy DNS Manager:
   - Record **A** `@` → `76.76.21.21`
   - Record **CNAME** `www` → `cname.vercel-dns.com`
5. SSL Let's Encrypt emesso automaticamente da Vercel (5–10 min)

> I valori IP/CNAME esatti sono visibili nel dashboard Vercel dopo aver aggiunto il dominio.
