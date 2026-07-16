---
name: vityalabs-brand
description: >-
  Vitya Labs Design System v1.0 — the brand's canonical visual language. Use
  whenever building, styling, or restyling ANY UI inside the Vitya Labs brand:
  the projects HOME, GrillHub, CICI, EnerGourmet, Shopper24, Vitya's Life, the
  vitya-labs.github.io landing, or anything served under vityalabs.com / the
  vitya-labs GitHub org. Apply this for any new page, component, screen, email,
  dashboard, or marketing surface that should look like Vitya Labs. Triggers:
  "make it look like Vitya Labs", "use our brand", "vityalabs style", building a
  frontend/landing/component for any of the projects above. Provides the color
  tokens (warm-dark + light), Space Grotesk / Manrope type, pill shapes, glow,
  motion, per-project accents, wordmark rules, component recipes, and ready
  tokens.css + Tailwind preset.
---

# Vitya Labs Design System v1.0

The canonical brand look for every Vitya Labs surface. **Apply it by default**
whenever you build or restyle UI for a Vitya Labs project — don't invent a new
look. When in doubt, match the reference showcase.

**Canonical reference (open to see the intended result):**
`brand/design-system/vitya-labs-design-system-v1.html` (repo root).

**Drop-in assets:**
- `references/tokens.css` — CSS custom properties (`--vl-*`), warm-dark default + light mode.
  (Same file as `brand/design-system/tokens.css`.)
- `references/tailwind-preset.js` — Tailwind preset (`vl` namespace + accents).
  (Same file as `brand/design-system/tailwind-preset.js`.)

---

## 1. First move: wire up the tokens for the target stack

Detect the stack and pull in the tokens **before** styling anything:

| Stack | How to apply |
|---|---|
| **Tailwind** (React/Next/GrillHub/HOME) | Copy `tailwind-preset.js` into the repo, add to `presets: []`. Load fonts. Use `bg-vl-bg text-vl-text font-body`, `font-display`, `rounded-vl-pill`, `shadow-vl-glow`, `bg-vl-primary`, `text-accent-cici`, etc. |
| **Static HTML / Flask (Jinja) / vanilla** | Copy `tokens.css` into the project (`brand.css`), link it, add class `vl-surface` to `<body>`. Use `var(--vl-primary)`, `var(--vl-radius-pill)`, `var(--vl-font-display)`… |
| **Expo / React Native** | Mirror the token values into the RN theme object (same hex/rem values). |

**Fonts (always load both):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## 2. Modes

- **Warm-dark is canonical** (`:root`) — near-black warm background, orange signal, glow.
  Use it for landing pages, community/marketing surfaces, and by default.
- **Light mode** (`[data-theme="light"]` / `.vl-light`) — warm cream neutrals, for
  utility dashboards (CICI-style) or when a light surface is required. Same brand
  signal, type, and shapes; only the neutrals change.

Never introduce a cool-gray or pure-white-flat neutral ramp — the neutrals are
**warm** in both modes.

---

## 3. Foundations (the non-negotiables)

**Color** — full set in `tokens.css`. Signature:
- Background `#0c0e10` · surfaces `#111416 / #171a1c / #232629` · text `#eeeef0` · muted `#aaabad`.
- **Brand signal:** primary `#ff914d`, primary-deep `#f38239`, gold `#ffd176`.
  Primary fills use the 135° gradient with **dark** text (`#271200`) on top.
- **State:** success `#3fbf6f`, warning `#f0a63c`, danger `#f0555c`, info `#56a7e8`.
- **Light neutrals:** bg `#f7f4ef`, surface `#ffffff`, text `#17191b`, muted `#6b6d70`.

**Type** — two families, nothing else:
- **Space Grotesk** = display *and every UI label* (headings, buttons, eyebrows,
  tags, kickers, stat numbers). Tight tracking: h1 `-0.04em`, h2/h3 `-0.03em`.
  Eyebrows: `0.76rem`, `700`, `letter-spacing 0.2em`, UPPERCASE, primary color.
- **Manrope** = body copy, `line-height 1.72`.

**Shape** — pill everywhere (`999px`) for nav/buttons/tags/chips; cards use radius
`18 / 24 / 32`. Cards get the subtle gradient surface + 1px warm outline.

**Depth & motion** — `shadow-card` / `card-hover`; orange `glow` on primary CTAs.
Reveal with `vl-rise-in` (translateY 26→0, 700ms). Hover lift `translateY(-1px)`;
image/tile hover `scale(1.02–1.04)`. Base transition `180ms ease`.

---

## 4. Component recipes

Prefer these shapes over ad-hoc styling (Tailwind classes shown; CSS-var equivalents in `tokens.css`):

- **Primary button** — `inline-flex min-h-12 px-5 rounded-vl-pill font-display font-bold bg-vl-primary text-vl-on-primary shadow-vl-glow`; hover `-translate-y-px`.
- **Ghost button** — `rounded-vl-pill border border-white/10 bg-white/5 text-vl-text font-display font-bold`.
- **Tag / chip** — `rounded-vl-pill px-3 min-h-8 text-sm bg-white/5 border border-white/10`.
- **Card** — `rounded-vl-lg p-6 bg-vl-card border border-white/10`; optional radial accent glow bottom-right using `--vl-accent`.
- **Stat** — big `font-display` number + muted label.
- **Eyebrow** — `font-display text-[0.76rem] font-bold tracking-vl-eyebrow uppercase text-vl-primary`.
- **Input / Select** — `rounded-vl-md bg-vl-surface-high border border-white/10 text-vl-text`; focus ring in `--vl-primary`.
- **Toast / alert** — surface card with a left accent bar in the matching **state** color.
- **Project status badge** — pill labelled `live` / `beta` / `demo`.

---

## 5. Per-project accent + wordmark

Set one accent per project (`--vl-accent` or `text-accent-*`) — the warm-dark base
holds both warm and cool accents:

| Project | Accent | | Project | Accent |
|---|---|---|---|---|
| HOME | `#e8835f` | | EnerGourmet | `#ffd176` |
| GrillHub | `#ff914d` | | Shopper24 | `#7ec8ff` |
| CICI | `#0d6b9a` | | Vitya's Life | `#ffb66b` |

**Wordmark:** display name is **`Vitya Labs`** (lowercase `vitya labs` is fine as a
wordmark). `vitya-labs` is the GitHub slug, `vityalabs` the domain/package — never
use the slug/domain forms as the visible brand name. Footer signature style:
`Vitya Labs · vityalabs.com · contains AI-generated content` (keep the AI-content
disclosure when the surface has AI-generated content).

**Voice:** bilingual — HU body copy, EN eyebrows/labels. Playful but real; confident,
lowercase microcopy under UPPERCASE eyebrows. Metaphor set: *lab / workbench / node / signal*.

---

## 6. Brand check (run before you're done)

- [ ] Space Grotesk on every heading/label, Manrope on body — both fonts loaded.
- [ ] Warm neutrals (not cool gray); background is the warm-dark base (or `.vl-light`).
- [ ] Primary CTA = orange gradient, **dark** text, glow.
- [ ] Pills are truly pill (`999px`); cards use the 18/24/32 radius + warm outline.
- [ ] Accent set for the project; state colors used for success/warning/danger/info.
- [ ] Eyebrows uppercase, `0.2em` tracked, primary color.
- [ ] Result visually matches `brand/design-system/vitya-labs-design-system-v1.html`.
