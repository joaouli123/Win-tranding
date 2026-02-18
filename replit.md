# Win Trading - Soluções em Comércio Exterior

## Overview
A React + TypeScript landing page for Win Trading, a foreign trade solutions company. Built with Vite and styled with Tailwind CSS (via CDN).

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Lucide React

## Project Structure
```
/
├── index.html          # Entry HTML with Tailwind config
├── index.tsx           # React entry point
├── App.tsx             # Main app component
├── types.ts            # TypeScript types
├── vite.config.ts      # Vite configuration (port 5000)
├── components/         # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Services.tsx
│   ├── Quotation.tsx
│   ├── Process.tsx
│   ├── Blog.tsx
│   ├── Testimonials.tsx
│   ├── Newsletter.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── package.json
└── tsconfig.json
```

## Running
- Dev server: `npm run dev` (port 5000)
- Build: `npm run build` (outputs to `dist/`)

## Deployment
- Static deployment serving the `dist/` directory after `npm run build`
