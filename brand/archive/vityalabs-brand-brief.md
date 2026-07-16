# Vitya Labs — Brand Brief (támpontok)

> ⚠️ **ARCHÍV — phase-1 record.** Ez a tervezési dokumentum, nem a jelenlegi
> spec. A benne nyitva hagyott kérdések **mind eldőltek a v1.0-ban**: a
> mód-stratégia **kétmódú** (warm-dark + light) lett, a state színek / light mód /
> form-elemek / wordmark szabály **pótolva**. A jelenlegi forrás:
> [`../design-system/`](../design-system/). Ezt a fájlt a *miértért* (indoklás,
> döntéstörténet) őrizzük.

> **Mi ez a dokumentum?** A Vitya Labs brand *támpontjainak* összegyűjtése a flagship
> repókból (gitops, homelab, vitya-labs.github.io, vityas-life, grillhub + a bennük
> hivatkozott HOME, CICI, Shopper24, EnerGourmet). Ez a **1. fázis**: nyersanyag +
> irány. Nem végleges design system — azt a **2. fázisban** a Claude Design zárja le
> ebből, a **3. fázisban** pedig az abból visszakapott komponenskönyvtárból csinálunk
> egy **skill**-t, amivel a design ráhúzható minden projektre.
>
> **A dokumentum célja:** ez a brief az input a Claude Designnak. Minden ami itt le van
> írva, a repókban ténylegesen létező jelekből (`styles.css`, `script.js`, Tailwind
> config, app-ok inline CSS-e, README-k) van kiolvasva — nem kitalálva.

---

## 0. Fázisterv (hogy hol tartunk)

| Fázis | Mit csinálunk | Output |
|---|---|---|
| **1. Támpontok** *(ez a doc)* | Repókból kiolvasott brand-jelek összeírása + nyitott döntések | `brand/vityalabs-brand-brief.md` |
| **2. Claude Design** | A briefet átadjuk a Claude Designnak, ami véglegesíti a design systemet (tokenek, komponensek, preview-k) | Design system projekt claude.ai/design-en, majd letöltve `brand/design-system/` |
| **3. Skill** | A visszakapott komponenskönyvtárból skill, ami bármelyik repóra ráhúzza a designt | `.claude/skills/vityalabs-brand/` |

---

## 1. Brand-esszencia

**Vitya Labs** = egy személyes, független szoftver-műhely („maker lab / playground",
„independent software workshop"). Nem cég-portfólió, hanem *saját mérnöklabor*, ahol a
jó ötletek gyorsan kapnak működő UI-t, valódi workflow-t és egy kis karaktert.

**Pozicionálás (a landing copyból, szó szerinti jelek):**
- „Projektlabor azoknak az ötleteknek, amik nem akartak draftban maradni."
- „100% kíváncsiságból építve" · „1 személyes org" · „6 kiemelt projekt"
- A projektek egy konkrét **személyes vagy közösségi problémából** indulnak.

**A három vezérelv (a site „Lab notes" szekciójából — ezek a brand pillérei):**
1. **Build fast, keep taste** — a gyorsaság fontos, de a megjelenés és a hangulat is a termék része.
2. **Personal need first** — a legtöbb projekt onnan indul, hogy „jó lenne, ha ez már létezne".
3. **Ship weird things** — nem elég hasznosnak lenni; lehet emlékezetes, szellemes, kicsit abszurd is.

**Metafora-készlet, amit a brand használ:** *lab / workbench / node / signal / prototype*
(„The workbench", „active nodes", „lab signal", „next node"). Ezt érdemes megtartani a
copy-hangnemben.

---

## 2. Név és írásmód  ⚠️ *(nyitott döntés)*

A repók **három** írásmódot használnak párhuzamosan:

| Alak | Hol fordul elő | Szerep |
|---|---|---|
| `Vitya Labs` | landing title, brand-copy, footer | **megjelenített brand név** |
| `vitya-labs` | GitHub org (`github.com/vitya-labs`) | technikai slug |
| `vityalabs` | domain (`vityalabs.com`, `*.vityalabs.com`), Java package `com.vityalabs.grillhub` | technikai / domain |

**Döntendő a Claude Designnál:** a megjelenített forma maradjon `Vitya Labs` (két szó),
és a `vitya-labs` / `vityalabs` maradjon technikai alak? Javaslat: **igen** — display =
`Vitya Labs`, wordmark kisbetűvel is működjön (`vitya labs`), a `vityalabs` csak
URL/package szinten. Ezt a wordmark-szabályt a design systemben rögzíteni kell.

---

## 3. Hangvétel (tone of voice)

- **Kétnyelvű, HU-domináns.** A landing és több app magyar, de a technikai/termék-címkék
  angolul (`Independent software workshop`, `The workbench`, `lab signal`). EnerGourmet
  kifejezetten kétnyelvű (HU+EN válaszok). → **A brand kétnyelvű; a UI-copy alap HU, a
  „kicker"/eyebrow/label réteg EN.**
- **Játékos, de nem gyerekes.** Karakter és humor megengedett (energiaital-sommelier
  „teljes komolysággal", játékos önportré), de a termékek valódi workflow-t visznek.
- **Rövid, magabiztos, kisbetűs mikrocopy.** Sok uppercase eyebrow + laza, tegező HU törzs.
- **Kötelező jelölés:** a landingon szerepel „Contains AI-generated content" — az
  AI-tartalom átlátható jelölése a brand része, tartsuk meg.

---

## 4. Vizuális identitás — a jelenlegi rendszer

### 4.1 A központi „meleg-sötét" mód (landing + GrillHub)

Ez a **fő Vitya Labs esztétika**. Forrás: `vitya-labs.github.io/styles.css` +
`grillhub/frontend/tailwind.config.js`.

**Színek — core:**
```
--background      #0c0e10   (közel-fekete, enyhén meleg)
--surface         #111416
--surface-strong  #171a1c
--surface-high    #232629
--text            #eeeef0
--muted           #aaabad
--outline         rgba(116,117,120,0.18)
--primary         #ff914d   (Vitya narancs — a brand szignálszíne)
--primary-deep    #f38239
--tertiary        #ffd176   (arany/amber kiemelés)
--glow            0 0 40px rgba(255,145,77,0.15)
```

**GrillHub Tailwind-je ugyanezt a családot erősíti** (`amber.*` és `grill.*` skálák,
`fire-gradient`, `warm-gradient`, `hero-gradient`), tehát a **meleg narancs→amber→mély
barna** átmenet a brand vizuális aláírása.

**Gradiensek / atmoszféra:**
- Háttér: radiális narancs + arany „ambient" foltok közel-fekete alapon.
- `ambient` blur-blobok (blur 120px, opacity ~0.22) — a brand „glow" hangulata.
- Primary gomb: `linear-gradient(135deg, primary, primary-deep)`, sötét (`#271200`) szöveggel + glow.

### 4.2 Tipográfia

| Szerep | Font | Használat |
|---|---|---|
| **Display / heading / UI-label** | **Space Grotesk** (500/700/800) | h1–h3, gomb, eyebrow, tag, kicker, stat-szám. Feszes tracking: `-0.02em … -0.08em`. |
| **Törzs** | **Manrope** (400–800) | bekezdések, leírások, line-height ~1.7. |
| *(app-specifikus)* | **Be Vietnam Pro** | Vitya's Life törzs — a játékos módban (lásd 4.5). |

**Tipográfiai szabályok, amiket a rendszer következetesen használ:**
- **Eyebrow / kicker:** Space Grotesk, ~0.76rem, `700`, `letter-spacing: 0.14–0.24em`,
  `uppercase`, `--primary` színnel.
- **H1 hero:** `clamp(3rem, 8vw, 5.9rem)`, `line-height: 0.98`, `letter-spacing: -0.04em`.
- **Szekció H2:** `clamp(2.2rem, 5vw, 4rem)`.
- **Nagy displaynél extrém feszes tracking** (`-0.06 … -0.08em`) + gyakran `uppercase`.

### 4.3 Forma-nyelv

- **Pill mindenütt:** `border-radius: 999px` a navon, gombokon, tageken, chipeken.
- **Kártya radius skála:** `--radius-lg 32px`, `--radius-md 24px`, `--radius-sm 18px`.
- **Kártya-háttér:** `linear-gradient(180deg, rgba(23,26,28,.92), rgba(17,20,22,.95))`
  finom felső highlighttal, 1px halvány outline-nal.
- **Üveg/blur felületek:** sticky topbar `backdrop-filter: blur(18px)` + áttetsző alap.
- **Belső glow és mély árnyékok:** `box-shadow` a kártyákon (`card`, `card-hover`),
  `glow-amber` / `glow-orange`.

### 4.4 Komponens-inventár (ami már létezik és brandhordozó)

A design systemnek ezeket kell „hivatalossá" tennie:

- **Topbar** — pill alakú, sticky, blur, brand-mark + brand-copy + nav + CTA.
- **Brand-mark** — kör, 2.75rem, arany szegély + belső glow, benne a logó.
- **Primary / Ghost gomb** — pill, Space Grotesk 700.
- **Hero** — kétoszlopos (copy + „signal" panel), eyebrow → H1 → törzs → CTA-k → stat-kártyák.
- **Stat-kártya** — nagy Space Grotesk szám + muted label.
- **Panel-frame + signal-tile grid** — négyzetes tile-ok per-projekt akcenttel, hover-zoom.
- **Project-card** — layout-variánsok: `featured` (span 6, magas), `half`, `standard` (span 5), `wide` (span 12). Fejléc + media (16:10/16:9) + tagek + részletlista (akcent-bullet) + CTA-k. `:target` kiemelés akcent-glow-val.
- **Tag / chip** — pill, áttetsző surface, 1px outline.
- **Story-card / Principle-card** — számozott/kickeres tartalmi kártyák.
- **Footer** — eyebrow → nagy H2 → CTA-k → meta sor (uppercase, letterspaced).
- **Reveal-animáció** — `[data-reveal]` → `rise-in` (translateY 26px → 0, opacity, 700ms).

### 4.5 Motion

- **Reveal:** `rise-in` 700ms ease, belépő elemekre.
- **Hover:** `translateY(-1px)` gombokon/linkeken; `scale(1.02–1.04)` képeken/tile-okon.
- **Ambient:** `float` (3s), `glow` (2s alternate) — dekoratív, visszafogott.
- **Alap transition:** 180ms ease a legtöbb interaktív állapotra.

---

## 5. Per-projekt akcent-rendszer

A rendszer **egy közös meleg-sötét alapot** használ, és **projektenként egy akcentszínt**
(`--project-accent`) húz rá (tile-gradiensek, kártya-`:target`, kicker, bullet, primary-link).
Forrás: `vitya-labs.github.io/script.js`.

| Projekt | Akcent | Karakter / kategória | Stack (a briefből) |
|---|---|---|---|
| **HOME** | `#e8835f` | Home operations SaaS (flagship) | Next.js 15 · Spring Boot 3 · Expo · MCP szerver |
| **GrillHub** | `#ff914d` | Közösségi BBQ platform | React 19 · Spring Boot · FastAPI AI |
| **CICI** | `#0d6b9a` | Fogyasztás/számla utility dashboard | Expo Web · Spring Boot · MinIO |
| **EnerGourmet** | `#ffd176` | AI energiaital-„sommelier" | Flask · Gemini 2.5 Flash |
| **Shopper24** | `#7ec8ff` | Bevásárlás-optimalizáló | Flask · store map |
| **Vitya's Life** | `#ffb66b` | Személyes puzzle-játék | Vanilla JS · static |

**Tanulság a designnak:** az akcentek fele meleg (narancs/arany), fele hideg (kék).
A rendszernek **bírnia kell hideg akcentet is** a meleg-sötét alapon anélkül, hogy
szétesne a brand. A `color-mix(in srgb, var(--project-accent) …%)` mintát a jelenlegi CSS
már használja — ezt tokenszinten érdemes megtartani.

---

## 6. ⚠️ A fő stratégiai feszültség: sötét-utility vs. világos-játékos

A repókban **két külön vizuális világ** él:

- **A) Meleg-sötét, utility/community** — landing, GrillHub, (és jellemzően HOME/CICI/
  Shopper24). Fekete alap, narancs-arany, Space Grotesk + Manrope, pill + glow.
- **B) Világos-krém, „irodai pixel", játékos** — **Vitya's Life**: krém háttér
  (`#fff5e4`), tűpont-raszter textúra, ferde post-it kártyák, pixelated sprite-ok,
  sárga/zöld/kék paletta, Be Vietnam Pro + Space Grotesk, CRT/monitor motívum.

**Ez a brand legnagyobb eldöntendő kérdése.** Három lehetséges irány a Claude Designnak:

1. **Egy rendszer, sötét-first** — A) a kanonikus Vitya Labs system; B) „expressive
   sub-brand"-ként kezelt kivétel (játékokra). *Legkevesebb munka, tiszta core.*
2. **Kétmódú rendszer (dark + light) közös tokenekkel** — ugyanaz a forma-nyelv,
   tipográfia és narancs-szignál, de van hivatalos **light** felület is (a krém-világ
   megszelídített változata utility appokhoz, pl. CICI dashboard). *Legrugalmasabb.*
3. **Tokenizált „mood" réteg** — egy core token-készlet + cserélhető „mood"-ok
   (`dark-warm`, `light-cream`, `playful`), projektenként választva. *Legkomplexebb, de
   ez skálázik a legjobban a jövőbeli projektekre.*

**Javaslat:** a **2.** felé menni (kétmódú, közös token-alap), mert a portfólió fele
utility-dashboard, ahol a világos mód is kellhet, de a narancs-szignál + Space Grotesk +
pill-forma mindkét módban közös brand-kapocs marad. A végső döntés a Claude Designé.

---

## 7. Logó / mark

- **Org mark:** `assets/icons/vitya-logo.jpg` — kör alakú brand-markként használva (arany
  szegély, belső glow).
- **Per-projekt logók:** `home-logo.png`, `grillhub-logo.png`, `cici-logo.png`,
  `shopper24-logo.png`, `vityas-life-favicon.png` (+ EnerGourmet: nincs kép, `EG` monogram).
- **Fallback monogram:** ha nincs logó, Space Grotesk monogram akcentszínnel (`H`, `GH`,
  `CICI`, `EG`, `S24`, `VL`).
- **Pixelated kivétel:** Vitya's Life ikon `image-rendering: pixelated`.

**Döntendő:** egységes logórendszer kell (nagyon eltérő stílusú per-projekt logók vannak).
A Claude Design feladata: definiálni a mark-konstrukciót, a monogram-fallbacket és a
clear-space / min-méret szabályokat.

---

## 8. Alkalmazási környezetek (hova kell ráhúzni a designt)

A skill (3. fázis) ezekre a felületekre kell hogy működjön — **több stack, ezért
framework-független tokenek kellenek:**

| Felület | Stack | Hogyan fogyaszt designt |
|---|---|---|
| Landing | Static HTML + CSS változók | CSS custom properties |
| GrillHub | React 19 + **Tailwind** | Tailwind theme extend (már `amber`/`grill`) |
| HOME | Next.js 15 (web) + Expo (mobil) | Tailwind / RN-token |
| CICI, Shopper24 | Expo Web / Flask | CSS változók / Tailwind |
| EnerGourmet | Flask (Jinja) | CSS változók |
| Vitya's Life | Static, inline CSS | CSS változók |
| homelab / gitops | Homepage dashboard, docs | CSS + markdown |

**Következmény a token-formátumra:** a design system **forrása legyen platform-független**
(pl. egy `tokens.json` / CSS custom property réteg), amiből generálható:
- CSS `:root` változók (static appok, Flask, játék),
- Tailwind `theme.extend` preset (GrillHub, HOME),
- opcionálisan RN/Expo token-objektum.

---

## 9. Javasolt token-struktúra (kiindulás a Claude Designnak)

```
color/
  bg, surface, surface-strong, surface-high     ← neutrálisok (dark + light változat)
  text, muted, outline
  brand/primary (#ff914d), primary-deep (#f38239), tertiary (#ffd176)
  accent/<project>                               ← per-projekt akcentek (6 db)
  state/success, warning, danger                 ← MÉG NINCS a rendszerben → Claude Design pótolja
radius/ sm(18) md(24) lg(32) pill(999)
font/ display("Space Grotesk"), body("Manrope"), mono?
type-scale/ eyebrow, h1, h2, h3, body, small     ← a 4.2 méret/tracking szabályokkal
shadow/ card, card-hover, glow-amber, glow-orange
gradient/ fire, warm, hero, ambient
motion/ reveal(rise-in 700ms), hover-lift, durations(180ms), easings
space/ (MÉG NINCS explicit skála → Claude Design definiálja)
```

**Hiányok, amiket a Claude Designnak pótolnia kell** (a repókban nincs / inkonzisztens):
- **State színek** (success/warning/danger/info) — sehol nincs rendszerezve.
- **Explicit spacing-skála** — most ad-hoc rem értékek.
- **Light mód** neutrális skála (ha a 6. pont 2/3 iránya nyer).
- **Form-elemek** (input, select, checkbox, toggle) — nincs közös definíció.
- **Focus/a11y állapotok** — a fókusz-kontraszt és -gyűrű nincs rögzítve.
- **Adat-vizualizáció paletta** (CICI/Shopper24 dashboardok) — nincs.

---

## 10. Mit adunk át a Claude Designnak (2. fázis brief)

**Kérés a Claude Design felé:**
1. Zárd le a **6. pont** módozat-kérdését (javaslat: kétmódú, közös token-alap).
2. Csináld meg a **teljes token-készletet** (9. pont) a hiányokkal együtt, dark + light.
3. Építsd meg a **komponenskönyvtárat** (4.4 inventár) preview-kártyákkal: topbar, gombok,
   kártyák (project-card variánsok), tag/chip, stat-card, hero, story/principle-card,
   footer, form-elemek, *(új)* alert/toast, table, dashboard-tile.
4. Rögzítsd a **wordmark + logó szabályokat** (2. és 7. pont).
5. Add vissza platform-független forrásként (`tokens.json` + CSS `:root`), amiből a skill
   Tailwind-presetet és CSS-változókat tud generálni.

---

## 11. A skill terve (3. fázis, előzetes)

A visszakapott design systemből egy `vityalabs-brand` skill, ami egy tetszőleges repóban:
1. **Felismeri a stacket** (Tailwind / static CSS / Flask / Expo).
2. **Beinjektálja a tokeneket** a megfelelő formában (Tailwind preset vagy `brand.css` `:root`).
3. **Behúzza a fontokat** (Space Grotesk + Manrope) és a base-stílusokat.
4. **Legenerálja/odamásolja a komponenseket** a cél-stack nyelvén (React/TSX vagy HTML+CSS).
5. **Beállítja a projekt-akcentet** (`--project-accent`) a repóhoz.
6. Ad egy rövid **„brand check"** listát (kontraszt, font betöltés, pill-radius, glow).

A skill forrása a `brand/design-system/` (Claude Design output) lesz, hogy egy helyről
frissüljön minden projekt.

---

## Függelék — forrásfájlok, amikből ez a brief készült

- `vitya-labs.github.io/styles.css` — core color/type/komponens rendszer
- `vitya-labs.github.io/script.js` — per-projekt akcentek + metaadat + copy
- `vitya-labs.github.io/index.html` — struktúra, hangvétel, kétnyelvűség
- `grillhub/frontend/tailwind.config.js` — amber/grill skálák, gradiensek, glow, motion
- `vityas-life/index.html` — a világos „irodai pixel" mód (B irány)
- `gitops/README.md`, `homelab/README.md` — infra-kontextus, deploy modell
- `*/README.md`, `site-config.js` — projekt-leírások, domainek, link-konfiguráció
