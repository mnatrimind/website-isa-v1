# ISA Concilia — Website

Marketing website for ISA Concilia, an AI-powered accounting reconciliation platform for Brazilian accounting firms.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** GitHub Pages

## Pages

- `/` — Homepage (12 sections)
- `/product/` — Product overview
- `/learn/` — Resources and articles
- `/privacy-policy/` — LGPD privacy policy
- `/terms-of-service/` — Terms of use

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run deploy
git add -A && git commit -m "Deploy" && git push origin main
```

The deploy script builds the project, copies static output to root, and creates `.nojekyll` for GitHub Pages compatibility.

## Live

https://mnatrimind.github.io/website-isa-v1/
