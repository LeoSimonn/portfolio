# Design System - Leonardo Monteiro Portfolio v2

## 1. Visual Theme & Atmosphere

Portfólio pessoal com estética tech oscura e futurista — inspirado em landing pages SaaS modernas como Autobotics. O tema é dominan.dark com acentos vibrantes de cyan que criam pontos focais de energia. A experiência evoca profissionalismo, inovação e expertise em tecnologia.

A atmosfera é limpa e focada — cada elemento tem propósito. Sem乱七八糟 (caos visual). O fundo escuro permite que os acentos cyan "brilhem" naturalmente, guiando o olhar para CTAs e informações importantes.

**Key Characteristics:**
- Fundo preto profundo (`#000000`) com superfície elevated (`#0a0a0a`)
- Accent cyan vibrante (`#70D6FF`) para elementos de destaque e CTAs
- Tipografia dual: Outfit (headings) + Inter (body) — clean e professional
- Layout centered e symmetrical — foco total no conteúdo
- Efeitos de glow sutis em elementos interativos
- Semantic spacing: 8px base unit
- Navegação sticky com blur effect

## 2. Color Palette & Roles

### Primary
- **Background Black**: `#000000` — canvas principal
- **Surface Dark**: `#0a0a0a` — cards e elementos elevated
- **Border Subtle**: `#1a1a1a` — bordas muito sutis
- **Border Light**: `#2a2a2a` — bordas visíveis

### Accent
- **Cyan Primary**: `#70D6FF` — accent principal, CTAs, links importantes
- **Cyan Light**: `#9BE5FF` — hover states, textos destacados
- **Cyan Muted**: `#4FC3F7` — icons, elementos secundários
- **Green Available**: `#00FF88` — status "available", success states
- **Green Glow**: `#00FF8840` — glow effects para status

### Neutrals & Text
- **Text Primary**: `#FFFFFF` — headings principais
- **Text Secondary**: `#E0E0E0` — body text
- **Text Muted**: `#888888` — metadata, labels
- **Text Subtle**: `#555555` — placeholders, disabled

### Semantic
- **Success**: `#00FF88`
- **Error**: `#FF6B6B`
- **Warning**: `#FFB74D`

## 3. Typography Rules

### Font Family
- **Display/Headings**: `Outfit`, with fallbacks: `-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif`
- **Body/UI**: `Inter`, with fallbacks: `-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif`
- **Monospace**: `JetBrains Mono`, with fallbacks: `Menlo, Monaco, Consolas, monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Hero Title | Outfit | 56px (3.5rem) | 700 | 1.1 | -1.5px |
| Section Heading | Outfit | 36px (2.25rem) | 600 | 1.2 | -0.5px |
| Sub-heading | Outfit | 24px (1.5rem) | 500 | 1.3 | 0 |
| Body Large | Inter | 18px (1.125rem) | 400 | 1.6 | 0 |
| Body | Inter | 16px (1rem) | 400 | 1.5 | 0 |
| Small/Label | Inter | 14px (0.875rem) | 500 | 1.4 | 0 |
| Caption | Inter | 12px (0.75rem) | 400 | 1.3 | 0.5px |

### Principles
- Headings usam Outfit com letter-spacing negativo para efeito tight e moderno
- Body usa Inter com line-height generoso (1.5-1.6) para readability
- Monospace (JetBrains Mono) apenas para badges de tech stack

## 4. Component Stylings

### Navigation Bar
- Background: `rgba(0, 0, 0, 0.8)` com `backdrop-filter: blur(12px)`
- Border bottom: `1px solid #1a1a1a`
- Logo: texto "LM" com accent cyan
- Links: `#E0E0E0` default, `#70D6FF` on hover
- CTA Button: ghost style com border `#70D6FF` e text `#70D6FF`
- Height: 72px
- Position: sticky top

### Buttons

**Primary CTA (Let's Talk)**
- Background: transparent
- Border: `1px solid #70D6FF`
- Text: `#70D6FF`
- Padding: 10px 20px
- Border-radius: 6px
- Hover: background `rgba(112, 214, 255, 0.1)`, glow effect
- Transition: all 0.2s ease

**Secondary Button**
- Background: `#0a0a0a`
- Border: `1px solid #2a2a2a`
- Text: `#E0E0E0`
- Padding: 10px 20px
- Border-radius: 6px
- Hover: border `#70D6FF`, text `#70D6FF`

**Ghost Button**
- Background: transparent
- Text: `#70D6FF`
- Hover: underline

### Cards

**Project Card**
- Background: `#0a0a0a`
- Border: `1px solid #1a1a1a`
- Border-radius: 12px
- Padding: 24px
- Hover: border `#2a2a2a`, translateY(-4px), shadow
- Transition: all 0.3s ease

**Service Card**
- Background: `#0a0a0a`
- Border: `1px solid #1a1a1a`
- Border-radius: 12px
- Icon: `#70D6FF`
- Hover: border `#70D6FF` with glow

### Status Badge
- Background: `rgba(0, 255, 136, 0.1)`
- Border: `1px solid #00FF88`
- Text: `#00FF88`
- Border-radius: 9999px (pill)
- Padding: 6px 12px
- Font: Inter 14px 500
- Dot indicator: `#00FF88` com pulse animation

### Tech Stack Badges
- Background: `#1a1a1a`
- Border: `1px solid #2a2a2a`
- Text: `#888888`
- Border-radius: 4px
- Padding: 4px 8px
- Font: JetBrains Mono 12px

### Inputs
- Background: `#0a0a0a`
- Border: `1px solid #2a2a2a`
- Text: `#FFFFFF`
- Placeholder: `#555555`
- Focus: border `#70D6FF`, glow sutil
- Border-radius: 8px
- Padding: 12px 16px

## 5. Layout Principles

### Spacing System (8px base)
- `4px` — micro spacing
- `8px` — tight spacing
- `16px` — standard spacing
- `24px` — section spacing (components)
- `32px` — medium spacing
- `48px` — section gaps
- `64px` — major section separation
- `96px` — hero padding

### Container
- Max-width: 1200px
- Padding: 24px (mobile) / 48px (desktop)
- Margin: auto (centered)

### Section Structure
1. **Hero** (100vh or min 600px)
   - Centered content
   - Status badge
   - Main headline (accent color on key word)
   - Subheadline
   - CTA buttons

2. **About** (padding 96px vertical)
   - Section heading
   - Two-column on desktop (text + visual)
   - Skills grid

3. **Projects** (padding 96px vertical)
   - Section heading
   - Filter tabs
   - Project grid (3 cols desktop, 2 tablet, 1 mobile)

4. **Services** (padding 96px vertical)
   - Section heading
   - Services grid (4 cols desktop, 2 tablet, 1 mobile)

5. **Contact** (padding 96px vertical)
   - Section heading
   - Contact info + form side by side
   - Social links

### Responsive Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, smaller text, stacked layout |
| Tablet | 640-1024px | 2-column grids, medium text |
| Desktop | >1024px | Full layout, 3-column grids |

## 6. Depth & Elevation

### Shadow System
- **Subtle**: `0 2px 8px rgba(0, 0, 0, 0.3)`
- **Card**: `0 4px 16px rgba(0, 0, 0, 0.4)`
- **Elevated**: `0 8px 32px rgba(0, 0, 0, 0.5)`
- **Glow Cyan**: `0 0 20px rgba(112, 214, 255, 0.3)`

### Border Radius Scale
- `4px` — tech badges, small elements
- `6px` — buttons, inputs
- `8px` — cards small
- `12px` — cards large, containers
- `9999px` — pills, status badges

### Animations
- **Fade In Up**: opacity 0→1, translateY 20px→0, 0.5s ease-out
- **Glow Pulse**: box-shadow pulse animation, 2s infinite (for status dot)
- **Hover Lift**: translateY 0→-4px, 0.3s ease
- **Button Glow**: on hover, add cyan glow

## 7. Do's and Don'ts

### Do
- Use `#000000` as background — o preto profundo é essencial
- Usar `#70D6FF` (cyan) apenas para elementos de destaque e CTAs
- Manter layout simétrico e centralizado
- Usar Outfit para headings, Inter para body
- Adicionar efeitos de glow sutis em elementos interativos
- Incluir status badge "Available for contact" com dot verde pulsante
- Usar border-radius de 12px para cards
- Implementar backdrop-filter blur na navegação

### Don't
- Não usar backgrounds claros — o design é totalmente dark
- Não usar cyan como background (apenas accent)
- Não misturar muitas cores — monocromático + 1 accent
- Não usar gradientes elaborados — minimalista
- Não esquecer do spacing consistente (8px base)
- Não usar sombras exageradas

## 8. Section Content Structure

### Hero
```
- Status Badge: "● Available for contact" (green pulse dot)
- Headline: "Leonardo Monteiro" (white) + "Connecting ✦ You to the Future" (cyan)
- Subheadline: "Entrepreneur, Designer & Digital Transformer building solutions that transform ideas into reality."
- CTA: "See Projects" (primary) + "Let's Talk" (ghost)
```

### About
```
- Section Label: "ABOUT"
- Headline: "Building the Future, One Solution at a Time"
- Philosophy paragraph
- Skills: Product Design, AI & Automation, Web Development, Entrepreneurship
```

### Projects
```
- Section Label: "PROJECTS"
- Headline: "Featured Work"
- Filters: All, SaaS, iOS, Collaborations
- Cards: 3 per row, hover effects, tech badges
```

### Services
```
- Section Label: "SERVICES"
- Headline: "What I Build"
- 4 Services: Product Design, Automation & AI, Web & Mobile, Consulting
```

### Contact
```
- Section Label: "CONTACT"
- Headline: "Let's Work Together"
- Email: leonardo@simonn.dev
- Social: GitHub, LinkedIn
- Form: Name, Email, Message
```

## 9. Agent Prompt Guide

### Quick Color Reference
- Background: `#000000`
- Surface: `#0a0a0a`
- Accent Cyan: `#70D6FF`
- Success Green: `#00FF88`
- Text Primary: `#FFFFFF`
- Text Secondary: `#E0E0E0`

### Quick Font Reference
- Headings: `Outfit` 600-700 weight
- Body: `Inter` 400-500 weight
- Monospace: `JetBrains Mono` for tech badges

### Key Tailwind Classes Equivalents
- bg-black: `#000000`
- bg-surface: `#0a0a0a`
- text-cyan: `#70D6FF`
- text-white: `#FFFFFF`
- border-subtle: `#1a1a1a`
- Glow effect: `box-shadow: 0 0 20px rgba(112, 214, 255, 0.3)`
