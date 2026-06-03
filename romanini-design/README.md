# ROMANINI DESIGN — Website

Luxury interior design studio website built with **Next.js 14 (App Router)** + **Tailwind CSS**.

## Stack

| Layer      | Choice                            |
|------------|-----------------------------------|
| Framework  | Next.js 14 — App Router           |
| Styling    | Tailwind CSS v3 + global CSS      |
| Fonts      | Google Fonts via `next/font`      |
| Deployment | Vercel (zero-config)              |

## Project Structure

```
romanini-design/
├── app/
│   ├── globals.css       ← base styles, animations, button classes
│   ├── layout.js         ← root layout, font vars, <head> metadata
│   └── page.js           ← page shell — assembles all sections
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Philosophy.js
│   ├── About.js
│   ├── Services.js
│   ├── Portfolio.js
│   ├── Testimonial.js
│   ├── Contact.js
│   └── Footer.js
├── lib/
│   └── utils.js          ← useFadeIn hook, scrollTo helper, WarmPlaceholder SVG
├── tailwind.config.js    ← brand color palette + custom font utilities
├── postcss.config.js
└── next.config.js
```

## Local Development

```bash
# 1 — Install dependencies
npm install

# 2 — Start dev server
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel
# Follow the prompts — zero config needed
```

### Option B — GitHub integration
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo → Vercel auto-detects Next.js
4. Click **Deploy** — done ✓

No environment variables are required for the base site.

## Swapping Placeholder Images

All project images are SVG placeholders (`WarmPlaceholder` in `lib/utils.js`).
To use real photography:

1. Drop images into `/public/images/`
2. Replace `<WarmPlaceholder>` with Next.js `<Image>`:

```jsx
import Image from "next/image";

<div style={{ position: "relative", paddingBottom: "130%" }}>
  <Image
    src="/images/casa-ceiba.jpg"
    alt="Casa Ceiba — living room"
    fill
    style={{ objectFit: "cover" }}
    sizes="(max-width: 768px) 100vw, 50vw"
    priority   // add to above-fold images only
  />
</div>
```

## Brand Tokens (tailwind.config.js)

| Token       | Hex       | Usage                   |
|-------------|-----------|-------------------------|
| `sand`      | `#C8B89A` | Accents, highlights     |
| `beige`     | `#E8DFD0` | Philosophy strip bg     |
| `cream`     | `#F5F0E8` | Services, Contact bg    |
| `offwhite`  | `#FAF8F4` | Body / About bg         |
| `warm`      | `#D4C4A8` | Borders, separators     |
| `stone`     | `#9A8E7E` | Labels, muted text      |
| `charcoal`  | `#2A2520` | Headings, hover cards   |
| `softblack` | `#1A1714` | Hero bg, nav, footer    |
| `muted`     | `#6B5F52` | Body copy               |
| `accent`    | `#8B7355` | Active nav links        |

## Fonts

- **Cormorant Garamond** — serif, used for all headings and display text
- **Jost** — sans-serif, used for all body copy, labels, and UI text

Both loaded via `next/font/google` — zero layout shift, self-hosted by Vercel.

---

*Romanini Design · Tulum, Quintana Roo, México*
