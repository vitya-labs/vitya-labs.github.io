# Vitya Labs — Design System v1.0

Finalized brand design system (output of the Claude Design handoff, phase 2 of
the brand plan — see `../vityalabs-brand-brief.md`).

## Files

| File | What it is |
|---|---|
| `vitya-labs-design-system-v1.html` | **Canonical showcase.** Open in a browser to see the intended look (foundations + components, warm-dark + light, HU/EN). |
| `tokens.css` | Drop-in CSS custom properties (`--vl-*`), warm-dark default + `[data-theme="light"]`. |
| `tailwind-preset.js` | Tailwind preset (`vl` namespace, brand/state/accent colors, fonts, radius, shadows, motion). |

## What v1.0 finalized

- **Two modes:** warm-dark (canonical) + a warm light mode for utility dashboards.
- **State colors** added: success / warning / danger / info (dark + strong pairs).
- **Type:** Space Grotesk (display + every UI label) + Manrope (body).
- **Shape/motion:** pill (999px), radius 18/24/32, orange glow, `rise-in` reveal.
- **Per-project accents** for all six flagships; **wordmark rule**
  (`Vitya Labs` display · `vitya-labs` slug · `vityalabs` domain/package).

## How to use

- **Tailwind project:** `presets: [require('./tailwind-preset')]`, load the two fonts,
  then use `bg-vl-bg`, `font-display`, `rounded-vl-pill`, `bg-vl-primary`, `text-accent-cici`, …
- **Static / Flask / vanilla:** link `tokens.css`, add class `vl-surface` to `<body>`,
  use `var(--vl-primary)`, `var(--vl-radius-pill)`, `var(--vl-font-display)`, …

> Claude Code users: a global skill (`vityalabs-brand`) applies this automatically
> when building any Vitya Labs UI.
