# Vitya Labs — Design System brief (Claude Design handoff)

This project is seeded from the Vitya Labs flagship repos. Your job: **finalize** a
portable design system from the seed below. Full source of truth:
`vitya-labs.github.io/brand/vityalabs-brand-brief.md`.

## What Vitya Labs is
Independent personal software workshop — "maker lab / playground". Useful, sometimes weird,
always buildable projects. Three pillars: **build fast, keep taste · personal need first ·
ship weird things**. Voice: bilingual (HU body / EN labels), playful but real, confident
lowercase microcopy with UPPERCASE eyebrows.

## Signature look (the "warm-dark" core — canonical)
- Near-black warm background `#0c0e10`, layered surfaces, orange signal `#ff914d` + gold
  `#ffd176`, soft ambient glow.
- Type: **Space Grotesk** (display + every UI label, tight tracking) + **Manrope** (body).
- Shape: pill everywhere (`999px`), radius scale 18/24/32, gradient cards, blur surfaces.
- Motion: `rise-in` reveal, hover lift, subtle float/glow.

## Please finalize
1. **Resolve the mode question** (owner deferred to you): warm-dark is canonical. Decide
   whether to add an official **light** mode (recommended — half the portfolio is utility
   dashboards) and whether "playful" (Vitya's Life cream/pixel world) is a sub-brand.
2. **Complete the token set** in `tokens/tokens.seed.json`, filling the gaps the repos
   lack: **state colors** (success/warning/danger/info), **explicit spacing scale**,
   **light-mode neutrals**, **form controls**, **focus/a11y states**, **data-viz palette**.
3. **Build the component library** with preview cards: buttons, tags/chips, stat card,
   project card (featured/half/standard/wide), hero, story/principle card, topbar, footer,
   inputs/select/toggle, alert/toast, table, dashboard tile.
4. **Lock wordmark + logo rules**: display name `Vitya Labs`; `vitya-labs`/`vityalabs`
   stay technical (slug/domain/package). Define monogram fallback + clear-space.
5. **Keep the source platform-independent** (`tokens.json` + CSS `:root`) so a downstream
   skill can emit both a Tailwind preset and plain CSS variables. Consumers span static
   HTML/CSS, Tailwind (React/Next), Flask/Jinja, and Expo.

## Per-project accent system
One shared warm-dark base + one `--project-accent` per project. Half warm, half cool — the
system must hold a cool accent (CICI blue, Shopper24 blue) on the warm-dark base. See
`foundations/accents.html`.
