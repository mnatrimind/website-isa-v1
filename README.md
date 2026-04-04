# ISA Concilia — Website

Marketing website for ISA Concilia, an AI-powered accounting reconciliation platform for Brazilian accounting firms.

## Tech Stack
- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS
- Deployed on GitHub Pages

## Development
```bash
npm install
npm run dev
```

## Build & Deploy
```bash
npm run build
cp -rf out/* .
touch .nojekyll
git add -A && git commit -m "Deploy" && git push origin main
```

Live: https://mnatrimind.github.io/website-isa-v1/
