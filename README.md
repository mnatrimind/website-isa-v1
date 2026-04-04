# ISA Concilia

AI-powered accounting reconciliation platform. This is the marketing website for ISA Concilia, built with a Stripe-inspired design system.

**Live:** [https://mnatrimind.github.io/website-isa-v1/](https://mnatrimind.github.io/website-isa-v1/)

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** GitHub Pages

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build        # generates out/ directory
cp -rf out/* .       # copy to root for GitHub Pages
touch .nojekyll      # allow _next/ folder
git add -A && git commit -m "Deploy" && git push origin main
```

## Project Structure

```
src/
├── app/                  # Next.js app router
│   ├── globals.css       # Design system tokens
│   ├── layout.tsx        # Root layout with Header/Footer
│   └── page.tsx          # Homepage sections
├── components/
│   ├── layout/           # Header, Footer, Container
│   ├── sections/         # Page sections (Hero, Features, etc.)
│   └── ui/               # Reusable components (Button, Reveal, etc.)
└── lib/
    └── constants.ts      # Site content, nav links, scrollTo helper
```

## Design System

- **Palette:** Stripe-inspired — accent purple (#635BFF), primary text (#0A2540), surface (#F6F9FC)
- **Typography:** Inter, semibold headings, relaxed body text
- **Spacing:** py-24 md:py-32 sections, mb-16 headings, gap-6 md:gap-8 grids
- **Cards:** white bg, border-border, rounded-xl, shadow-sm, hover:shadow-md
- **Backgrounds:** Alternating white/surface rhythm
