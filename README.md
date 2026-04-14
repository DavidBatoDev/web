<div align="center">

<img src="public/logos/Horizontal/Digital/SVG/Red/Digital_Horizontal_Red.svg" alt="I'm Here Travels" width="320" />

### _We connect people with places — and create a positive impact, together._

<br />

[![Live Site](https://img.shields.io/badge/live-imheretravels.com-EF3340?style=for-the-badge&labelColor=1C1F2A)](https://imheretravels.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-1C1F2A?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-1C1F2A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-1C1F2A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-1C1F2A?style=for-the-badge&logo=typescript&logoColor=3178C6)](https://www.typescriptlang.org)

</div>

---

## ✶ About

**I'm Here Travels** is a boutique travel company crafting meaningful journeys across the Philippines and beyond. This repository contains the marketing site and booking touchpoints that power our digital presence.

🌐 **Production:** [**imheretravels.com**](https://imheretravels.com)

---

## ✦ Quick Start

> **Prerequisites:** Node.js ≥ 20, npm ≥ 10

```bash
# 1. Install dependencies
npm install

# 2. Copy the env template and fill in credentials
cp .env.example .env

# 3. Start the dev server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser. Hot-reload is enabled — edits to files under [`app/`](app/) appear instantly.

---

## ✦ Scripts

| Command          | Purpose                         |
| ---------------- | ------------------------------- |
| `npm run dev`    | Start the local dev server      |
| `npm run build`  | Create an optimized prod build  |
| `npm run start`  | Serve the production build      |
| `npm run lint`   | Run ESLint across the codebase  |

---

## ✦ Environment

The contact form hits the Gmail API via OAuth2. Populate `.env` with:

```bash
GMAIL_CLIENT_ID=
GMAIL_CLIENT_SECRET=
GMAIL_REFRESH_TOKEN=
```

See [`.env.example`](.env.example) for the full template and [`app/api/contact/route.ts`](app/api/contact/route.ts) for how they're consumed.

---

## ✦ Tech Stack

| Layer         | Choice                                                                 |
| ------------- | ---------------------------------------------------------------------- |
| Framework     | **Next.js 16** (App Router)                                            |
| UI            | **React 19** + **Framer Motion**                                       |
| Styling       | **Tailwind CSS v4** — tokens defined in [`app/globals.css`](app/globals.css) |
| Language      | **TypeScript 5** (strict)                                              |
| Fonts         | Cartograph CF, HK Grotesk, DM Sans — self-hosted in [`public/Fonts/`](public/Fonts/) |

> ⚠️ Next.js 16 ships breaking changes — consult [`node_modules/next/dist/docs/`](node_modules/next/dist/docs/) or [`AGENTS.md`](AGENTS.md) before adding routes or server utilities.

---

## ✦ Project Structure

```
web/
├── app/                      Next.js App Router
│   ├── components/global/    Header, Footer, shared UI
│   ├── api/contact/          Contact-form Gmail OAuth handler
│   ├── globals.css           Tailwind v4 + brand tokens
│   └── layout.tsx            Root layout
├── data/                     Tour content (typed TS modules)
├── public/
│   ├── Fonts/                Cartograph, HK Grotesk, DM Sans
│   ├── Logos/ · logos/       Clover, Horizontal, Stacked, Tagline, Wordmark
│   ├── Icons/                Travel iconography (SVG)
│   ├── Emojis/ · Stickers/   Brand illustrations
│   └── brandkitGuideLines/   Brand guidelines PDF
└── types/                    Shared TypeScript types
```

---

## 🎨 Brand Kit

Full guidelines live in [`public/brandkitGuideLines/`](public/brandkitGuideLines/). Key excerpts:

### Color palette

| Token              | Hex       | Preview |
| ------------------ | --------- | :-----: |
| `crimson-red`      | `#EF3340` | ![](https://readme-swatches.vercel.app/EF3340?style=round) |
| `light-red`        | `#FF585D` | ![](https://readme-swatches.vercel.app/FF585D?style=round) |
| `midnight`         | `#1C1F2A` | ![](https://readme-swatches.vercel.app/1C1F2A?style=round) |
| `grey`             | `#959595` | ![](https://readme-swatches.vercel.app/959595?style=round) |
| `light-grey`       | `#F2F0EE` | ![](https://readme-swatches.vercel.app/F2F0EE?style=round) |
| `royal-purple`     | secondary | ![](https://readme-swatches.vercel.app/5B2C86?style=round) |
| `spring-green`     | secondary | ![](https://readme-swatches.vercel.app/2EB086?style=round) |
| `vivid-orange`     | secondary | ![](https://readme-swatches.vercel.app/F28A33?style=round) |
| `sunglow-yellow`   | secondary | ![](https://readme-swatches.vercel.app/FFC94A?style=round) |

### Typography

- **`font-display`** → Cartograph CF — headlines & taglines
- **`font-sans`** → HK Grotesk — subheads (H3–H6)
- **`font-body`** → DM Sans — body copy, CTAs, URLs _(default)_

Apply responsively:

```tsx
<h1 className="font-display text-h1-mobile md:text-h1-desktop">Hello</h1>
<p  className="font-body text-b2-mobile md:text-b2-desktop">Tagline</p>
```

### Logo family

| Variant    | When to use                        | Path                          |
| ---------- | ---------------------------------- | ----------------------------- |
| Horizontal | Headers, nav, email signatures     | [`public/logos/Horizontal/`](public/logos/Horizontal/) |
| Stacked    | Social avatars, square placements  | [`public/logos/Stacked/`](public/logos/Stacked/) |
| Clover     | Favicons, watermarks, monograms    | [`public/logos/Clover/`](public/logos/Clover/) |
| Wordmark   | Typography-led layouts             | [`public/logos/Wordmark/`](public/logos/Wordmark/) |
| Tagline    | Campaigns with the brand promise   | [`public/logos/Tagline/`](public/logos/Tagline/) |

_Light-only — do **not** add a `prefers-color-scheme: dark` block. The brand defines no dark theme._

---

## ✦ Deployment

The site is hosted on **Vercel**. Every push to `main` triggers a production deploy to [imheretravels.com](https://imheretravels.com); pull requests get preview URLs automatically.

---

<div align="center">

<img src="public/logos/Clover/Digital/SVG/Red/Digital_Clover_Red.svg" alt="" width="48" />

**Made with ♥ for travelers who want to be _here_.**

© I'm Here Travels · [imheretravels.com](https://imheretravels.com)

</div>
