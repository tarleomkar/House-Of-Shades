# House Of Shades

Landing page for **House Of Shades** — a premium paint consultancy and interior colour-design studio founded by **Pooja Ahire**.

**Tagline:** Paint | Design | Deliver

---

## About the Business

House Of Shades delivers premium paint coatings, expert color coordination, and end-to-end execution support for residential and commercial projects. The firm is built to support builders, site engineers, commercial contractors, and retail property owners with streamlined, long-lasting, and economical structural finishing.

> *"At HouseofShades, we bridge the gap between material procurement and flawless onsite execution, delivering unmatched value directly to your projects."*
> — Pooja Ahire, Founder

### Core Offerings

| Service | Description |
|---|---|
| **Direct Paint Supply** | High-grade commercial coatings at project-scale rates |
| **Vendor Management** | Supervision and coordination of skilled application crews |
| **Surface & Site Cleaning** | Surface prep, masking, and post-paint site cleaning |
| **Turnkey Execution** | Hands-free management from mapping to final handover |

### Why House Of Shades

- **Premium Paints** — High-grade commercial coatings at project-scale rates
- **Expert Design** — Color coordination tailored for every space
- **Flawless Delivery** — End-to-end execution from supply to handover

House Of Shades also offers **market-disruptive pricing** — direct-to-site paint supply at rates significantly below standard retail, passing corporate margins to builders and property owners.

---

## About This Website

A single-page marketing site showcasing the brand, services, process, portfolio, testimonials, FAQ, and lead-capture form. Sections include:

- Hero
- About Our Firm
- Why House Of Shades (trust bar)
- Our Offerings
- Our Process
- Featured Transformations (before/after portfolio)
- Testimonials
- FAQ
- Contact / consultation form
- Footer

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tooling
- **Tailwind CSS v4** — styling
- **Framer Motion** — scroll reveals and transitions
- **Lenis** — smooth scrolling
- **lucide-react** — icons

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run Oxlint |

---

## Project Structure

```
src/
  components/
    layout/       Navbar, Footer
    sections/     Hero, About, TrustBar, ServiceExplorer, Process,
                  FeaturedWork, Testimonials, FAQ, ConsultationCTA
    ui/           Button, Card, Badge, Accordion
  lib/
    constants.ts  Brand copy, offerings, contact info
    motion.ts     Shared Framer Motion variants
    useLenis.ts   Smooth scroll hook
    utils.ts      cn() helper
  App.tsx
  main.tsx
public/
  images/         logo.png, brochure assets
```

Brand copy and contact details live in `src/lib/constants.ts` for easy updates.

---

## Contact

| | |
|---|---|
| **Founder** | Pooja Ahire |
| **Phone** | +91 70587 15845 |
| **Email** | houseofshadessss@gmail.com |
| **Instagram** | [@house_of_shadessss](https://instagram.com/house_of_shadessss) |

---

## License

Private project. All rights reserved © House Of Shades.
