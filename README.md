# vitya-labs.github.io

Vitya Labs — experimental apps, utilities and playful prototypes.

## Featured projects

- GrillHub
- Hálózó
- TOTO
- Shopper24
- EnerGourmet

The game landing pages have moved to `vitya-games.github.io`. Existing app
support and privacy-policy routes remain in this repository for backwards
compatibility until the App Store Connect URLs have been migrated.

## Languages

The landing page is trilingual: English, Hungarian and — for fun — Pirate English.
Copy lives in `data-en` / `data-hu` / `data-pr` attributes (plus `data-title-*`,
`data-description-*` on `<body>` and `data-aria-*` for `aria-label`s), and the
switch in the header is driven by `site.js`. English is the fallback for any
missing translation, and `site.js` is kept byte-identical in all four site
repositories.

The four sites are four separate origins, so `localStorage` cannot carry the
chosen language between them. Links to a sibling site are rewritten to carry a
`?lang=` parameter, which the target page adopts on load and then removes from
the address bar.

Pirate English also swaps the artwork: an `<img>` carrying `data-logo-pr` shows
its pirate mascot in that language and returns to the original logo in English
and Hungarian.

The legacy `hotdog-runner/`, `gull-flyer/` and `grill-sitter/` support and
privacy pages are deliberately left untouched (English only, old wording) while
App Store Connect still points at them; see
`docs/ios-app-page-migration.md` in the Vitya Games repository.
