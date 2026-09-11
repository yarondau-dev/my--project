# ZEHARIA — Brand House Website

Luxury investor / partner site for **ZEHARIA** — fine art by Yair Zeharia and the **From Canvas to Wear** conceptual fashion vision.

Paris · New York · Individuality Within Identity

> Not e-commerce. Fashion pages are labeled as a **concept lookbook** (pending production). No cart or checkout.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- `next/image` + Google fonts (Cormorant Garamond + Manrope)

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, Art \| Vision entries, zebra philosophy, inquiry CTA |
| `/the-house` | Founder story, three worlds, zebra philosophy |
| `/gallery` | Acrylic / Charcoal filter + artwork grid |
| `/gallery/[slug]` | Artwork detail |
| `/vision` | Concept lookbook (all 35 fashion looks) |
| `/inquire` | Private inquiry form (mailto) + phone |

## Assets

- Art: `public/art/` (from `zeharia-assets/art-clean`)
- Fashion: `public/fashion/` (`look-001.jpg` … `look-035.jpg`)
- Catalog source: `src/data/catalog.json` (typed via `src/data/art.ts`)

## Run locally

```bash
cd /workspace/zeharia-site
npm install
npm run dev
```

Default Next.js port is `3000`. To use port **3456**:

```bash
npm run dev -- -p 3456
```

Open [http://localhost:3456](http://localhost:3456).

## Production build

```bash
npm run build
npm start
```

## Contact

- Email: yair.zeharia@gmail.com
- Phone: +1 (917) 480-6724

## Notes

- Inquiry form composes a `mailto:` link; no server-side form storage.
- Do not invent extra artworks beyond `catalog.json`.
