# Amaltas Special School — Website Redesign

A complete redesign of [amaltasspecialschool.in](https://amaltasspecialschool.in/) built with
**React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion + React Router**.

All text, images and data come from the current WordPress site. Images are still served from
the existing media library (`/wp-content/uploads/…`), so nothing has to be re-uploaded.

---

## 1. Quick start

```bash
# Node 18+ required (Node 20/22 recommended)
npm install
npm run dev          # http://localhost:5173
```

| Script                     | What it does                                                      |
| -------------------------- | ----------------------------------------------------------------- |
| `npm run dev`              | Start the dev server with hot reload                              |
| `npm run build`            | Type-check and build the production site into `dist/`             |
| `npm run preview`          | Serve the production build locally                                |
| `npm run typecheck`        | TypeScript check only                                             |
| `npm run content:snapshot` | Download the live site's text into `content-snapshot/` to verify copy |

## 2. Forms (Schedule a Tour, Contact)

The forms work with **no backend**. By default, submitting a form opens the visitor's email app,
already addressed to `amaltasspecialschool@gmail.com` with the details filled in.

To receive submissions directly, copy `.env.example` to `.env` and set a JSON endpoint
(Formspree, Web3Forms, Getform, or your own API):

```
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

## 3. Deploying

`npm run build` produces a static `dist/` folder. SPA fallbacks are already included:

- **Hostinger / Apache**: upload the contents of `dist/` to `public_html`. `.htaccess` is included.
- **Netlify**: `public/_redirects` is included.
- **Vercel**: `vercel.json` is included.

**Old URLs keep working.** WordPress paths such as `/about-us/`, `/courses/physiotherapy/`,
`/courses/speech-therapy__trashed-2/` and `/category/products/` resolve or redirect to the new routes.

> ⚠️ The images are hotlinked from the current WordPress install. Keep `/wp-content/uploads/`
> online after launch, or download the media into `public/uploads/` and update `WP` in
> `src/data/site.ts`. That one constant controls every image URL.

## 4. Project structure

```
src/
├── App.tsx                 # Routes (code-split) + legacy URL redirects
├── main.tsx                # Entry point
├── index.css               # Tailwind layers, .container-x / .section helpers
├── data/                   # ALL CONTENT LIVES HERE — edit text/images without touching components
│   ├── site.ts             # Contact details, nav, footer links, socials, institutions, WP base URL
│   ├── home.ts             # Home page copy
│   ├── about.ts            # About, Vision & Mission, Why Us, Our Team, Facilities
│   ├── messages.ts         # Founder Chairman / Chairman / Principal messages
│   ├── therapies.ts        # 7 therapies with their "About Course" points
│   ├── events.ts           # Home highlights + Activities/Events archive
│   ├── products.ts         # Creative Store products + photos
│   ├── testimonials.ts     # Parent testimonials (see content notes)
│   ├── media.ts            # News, Photogallery, Gift Distribution, Happy Parents, Awards images
│   └── types.ts
├── components/
│   ├── layout/             # TopBar, Navbar (dropdowns + mobile drawer), Footer, Layout, FloatingActions
│   ├── ui/                 # Button, SectionHeading, PageHeader, Reveal/Stagger, Gallery+Lightbox,
│   │                       # SmartImage, Icon, Blossom (signature Amaltas motif)
│   ├── cards/              # TherapyCard, EventCard, ProductCard, TestimonialCard, MessageCard
│   ├── sections/           # Hero, AboutPreview, TherapiesPreview, TourSection, ContactBand, HomeSections
│   └── forms/              # TourForm, ContactForm, Field
├── pages/                  # One file per page (GalleryPage and Events cover several routes)
├── hooks/usePageTitle.ts
└── lib/                    # utils (cn, isHindi), forms (submit helper)
scripts/content-snapshot.mjs
```

## 5. Pages & routes

| Page                           | Route                                   |
| ------------------------------ | --------------------------------------- |
| Home                           | `/`                                     |
| About Us                       | `/about-us`                             |
| Vision & Mission               | `/vision-mission`                       |
| Founder Chairman Message       | `/founder-chairman-message`             |
| Chairman Message               | `/chairman-message`                     |
| Principal's Message            | `/principals-message`                   |
| Our Team                       | `/our-team`                             |
| Why Us                         | `/why-us`                               |
| Awards & Achievements          | `/awards-achievements`                  |
| Therapies                      | `/therapies`                            |
| Individual therapy (×7)        | `/therapies/:slug`                      |
| Facilities and Infrastructure  | `/facilities-and-infrastructure`        |
| Activities / Events            | `/activities-events`                    |
| Upcoming Events                | `/upcoming-events`                      |
| Event detail                   | `/events/:slug`                         |
| Amaltas Special School in News | `/amaltas-special-school-in-news`       |
| Photogallery                   | `/photogallery`                         |
| Gift Distribution              | `/gift-distribution`                    |
| Happy Parents                  | `/happy-parents`                        |
| Creative Store / Products      | `/products`                             |
| Students                       | `/students`                             |
| Contact Us + Schedule a Tour   | `/contact-us` (`#schedule-a-tour`)      |
| Privacy Policy / Terms         | `/privacy-policy`, `/terms-conditions`  |

## 6. Design system

- **Palette** (from the Amaltas golden-shower tree): `leaf` greens (trust, growth), `blossom` golds
  (warmth, CTAs), `cream` neutrals. See `tailwind.config.js`.
- **Type**: *Fraunces* for display headings, *Nunito Sans* for body text, and *Noto Sans Devanagari*,
  applied automatically to Hindi event titles.
- **Motif**: hanging Amaltas blossom chains (`components/ui/Blossom.tsx`), five-petal bullets and an
  arched hero frame.
- **Motion**: scroll reveals, staggered grids, hover lift, page fades, an infinite news marquee and
  a lightbox. All of it honours `prefers-reduced-motion`.
- **Accessibility**: skip link, labelled forms, keyboard-navigable dropdowns and lightbox
  (Esc / ← / →), visible focus rings, `aria-current` on breadcrumbs.
- **Conversion**: persistent "Schedule a Tour" CTA in the navbar, tour form on Home, About and
  Contact, closing CTA bands on inner pages, floating WhatsApp and call buttons on mobile.

## 7. Content notes — read before launch

See **CONTENT_AUDIT.md**. In short:

1. Some longer paragraphs could only be partly extracted from the live site. Each one is marked
   `// VERIFY` in `src/data/*.ts`. Run `npm run content:snapshot` and paste the exact wording.
2. The live site still contains leftover theme placeholder content (identical "Escada" testimonials,
   "Free" course labels, and so on). It is kept as-is per the brief and
   flagged in the audit.
