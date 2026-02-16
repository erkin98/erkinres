# erkinres

Personal portfolio site built with Next.js 16, React 19, and Three.js.

Features a 3D neural network visualization, glassmorphism UI, scroll-driven animations, and full accessibility support.

## Tech Stack

- **Framework:** Next.js 16 (Turbopack)
- **UI:** React 19, Tailwind CSS, shadcn/ui
- **3D:** Three.js, React Three Fiber, Drei
- **Language:** TypeScript

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
pnpm start
```

## Project Structure

```
app/              # Next.js app router (layout, page, globals.css)
components/       # Section components + UI primitives
  ui/             # shadcn/ui components
hooks/            # Custom hooks (useInView, useReducedMotion, etc.)
lib/              # Utilities
```

## Accessibility

- `prefers-reduced-motion` support (CSS + JS)
- Skip navigation link
- ARIA live regions for dynamic content
- Focus trap in mobile menu
- Error boundary around 3D scene with fallback

## License

MIT
