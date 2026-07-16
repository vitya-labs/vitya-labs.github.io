# Vitya Labs — Brand

Everything about the Vitya Labs brand lives here. The **source of truth** is
`design-system/`; the brief is the planning record behind it.

## Contents

| Path | What it is | Status |
|---|---|---|
| `design-system/` | **Finalized Design System v1.0** — canonical showcase, `tokens.css`, `tailwind-preset.js`. Start here. | ✅ current |
| `vityalabs-brand-brief.md` | Phase-1 planning brief: the brand support points extracted from the flagship repos + the rationale/decisions handed to Claude Design. | 📄 record |

## How to apply the brand

- **Tokens:** use `design-system/tokens.css` (static / Flask / vanilla) or
  `design-system/tailwind-preset.js` (React / Next / Tailwind). See
  `design-system/README.md`.
- **Reference:** open `design-system/vitya-labs-design-system-v1.html` to see the intended look.
- **Automated (Claude Code):** the `vityalabs-brand` skill
  (`.claude/skills/vityalabs-brand/`) applies this system to any Vitya Labs UI.

## How it was built

1. **Support points** — extracted from the flagship repos → `vityalabs-brand-brief.md`.
2. **Claude Design** — the brief was handed to claude.ai/design, which finalized the
   system (two-mode warm-dark + light, state colors, form controls, wordmark rules).
3. **Design system + skill** — the output landed in `design-system/`, wrapped as a
   reusable skill.

> The earlier `design-handoff/` seed (previews + seed tokens sent to Claude Design)
> was scaffolding and has been removed now that `design-system/` supersedes it.
