# Leonardo Monteiro - Portfolio Website v2

> **Dark Theme + Cyan Accent** — Inspired by Autobotics and Google Stitch's DESIGN.md format

---

## About This Project

A modern, professional portfolio website with a dark tech aesthetic. Built following the DESIGN.md specification — a format introduced by Google Stitch for AI coding agents to generate consistent UI.

## Design System

### Visual Theme
- **Dark Mode**: Deep black canvas (`#000000`) with elevated surfaces (`#0a0a0a`)
- **Accent**: Vibrant cyan (`#70D6FF`) for CTAs and highlights
- **Status**: Green (`#00FF88`) for availability indicators
- **Typography**: Outfit (headings) + Inter (body) + JetBrains Mono (code)

### Key Design Elements
- Sticky navigation with backdrop blur
- Status badge with pulsing green dot
- Animated fade-in scroll effects
- Project cards with hover overlays
- Glow effects on interactive elements
- Semantic spacing (8px base unit)

---

## Quick Start

```bash
cd ~/portfolio_website
python3 run_server.py
```

Open: `http://localhost:8000`

---

## File Structure

```
portfolio_website/
├── index.html          # Main HTML (21KB)
├── styles.css          # Design system CSS (19KB)
├── script.js           # Interactions (10KB)
├── DESIGN.md           # Design specification
├── README.md           # This file
├── instrucoes.txt      # Instructions (PT-BR)
└── run_server.py       # Local server
```

---

## Sections

1. **Hero** — Status badge, name, tagline, CTAs
2. **About** — Philosophy + skills grid
3. **Projects** — Filterable grid (All/SaaS/iOS/Collaborations)
4. **Services** — 4 service cards with features
5. **Contact** — Info + functional form

---

## Features

- Responsive (mobile, tablet, desktop)
- Project filtering by category
- Smooth scroll navigation
- Active section highlighting
- Back to top button
- Keyboard shortcuts (H=Home, C=Contact, P=Projects)
- Form validation with notifications

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `H` | Scroll to Home |
| `P` | Scroll to Projects |
| `C` | Scroll to Contact |

---

## Technologies

- HTML5, CSS3 (custom properties), JavaScript ES6+
- Google Fonts: Outfit, Inter, JetBrains Mono
- Font Awesome 6.5 icons
- No frameworks — vanilla implementation

---

## Design Reference

See `DESIGN.md` for the complete design specification in Google Stitch format.
