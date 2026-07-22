// ---------------------------------------------------------------------------
// Language state
// ---------------------------------------------------------------------------
// The site is bilingual (English / Hungarian). English is the default; the
// choice is persisted in localStorage and reflected on <html lang>.
const SUPPORTED_LANGS = ["en", "hu"];
const LANG_STORAGE_KEY = "vitya-lang";

function readInitialLang() {
  const stored = window.localStorage
    ? window.localStorage.getItem(LANG_STORAGE_KEY)
    : null;
  return SUPPORTED_LANGS.includes(stored) ? stored : "en";
}

let lang = readInitialLang();

// ---------------------------------------------------------------------------
// Static UI copy (everything outside the project cards)
// ---------------------------------------------------------------------------
const I18N = {
  en: {
    "meta.title": "Vitya Labs | Hobby projects, experiments and useful tools",
    "meta.description":
      "Vitya Labs landing page for the HOME, GrillHub, Hálózó, TOTO, Shopper24, EnerGourmet, Vitya's Life and Usage Limit Reached projects.",
    "brand.tagline": "maker lab / playground",
    "nav.projects": "Projects",
    "nav.about": "What is this",
    "nav.principles": "Principles",
    "nav.contact": "Contact",
    "nav.cta": "Open lab",
    "hero.eyebrow": "Independent software workshop",
    "hero.title": "A project lab for the ideas that refused to stay in draft.",
    "hero.text":
      "Vitya Labs is a personal organisation for useful, sometimes strange, but always build-ready projects. Among them: a full home-operations platform, a community app for organising cook-outs, a CPM/Gantt construction scheduler, a community app for reporting and finding lost animals, a shopping optimiser, an AI drink-pairing tool, a game that processes my 2024–2025 self, and a pixel-octopus runner for the \"usage limit reached\" wait.",
    "hero.ctaProjects": "Explore projects",
    "hero.ctaContact": "Get in touch",
    "hero.statsAria": "Vitya Labs quick overview",
    "hero.stat1": "featured projects",
    "hero.stat2": "personal org",
    "hero.stat3": "built out of curiosity",
    "panel.label": "lab signal",
    "panel.heading": "A useful playground",
    "panel.body":
      "Productivity, community workflows, AI experiments and personal storytelling in one place.",
    "panel.item1": "home operations platform",
    "panel.item2": "community workflows",
    "panel.item3": "personal software",
    "panel.item4": "AI assisted experiments",
    "projects.eyebrow": "The workbench",
    "projects.title": "Active projects",
    "projects.subtitle":
      "These are Vitya Labs' current nodes: community apps, utilities, AI experiments and playful web projects.",
    "projects.pill": "8 active nodes",
    "story.eyebrow": "Lab notes",
    "story.title":
      "Where a hobby project isn't a side quest, but a real prototype.",
    "story.p1":
      "Vitya Labs isn't about polishing a portfolio. It's more of a personal engineering lab where good ideas quickly get a working UI, a real workflow and a bit of character too.",
    "story.p2":
      "The common thread is that each project starts from a concrete personal or community problem: seeing the household at a glance, organising a cook-out, scheduling a construction project, finding lost animals with the community, wandering less in the store, picking a better energy drink for your food just for fun, telling the story of a period through a game, or turning an out-of-quota wait into a quick pixel run.",
    "story.card1.title": "Build fast, keep taste",
    "story.card1.body":
      "Speed matters, but the look and the vibe are part of the product too.",
    "story.card2.title": "Personal need first",
    "story.card2.body":
      "Most projects start from wishing this already existed in my own life.",
    "story.card3.title": "Ship weird things",
    "story.card3.body":
      "They don't only have to be useful. They can be memorable, witty or a little absurd too.",
    "principles.eyebrow": "Build principles",
    "principles.title": "How do these projects come together?",
    "principles.card1.kicker": "Platform",
    "principles.card1.title": "A hobby project can grow into a system",
    "principles.card1.body":
      "HOME is a full multi-tenant SaaS: maintenance, meters, costs and documents in one engine you can share with your family — on the web, in a native mobile app, and through an MCP server for AI assistants too.",
    "principles.card2.kicker": "Community",
    "principles.card2.title": "Built around real workflows",
    "principles.card2.body":
      "In GrillHub the events, recipes, invites and shopping lists build on each other instead of living as separate islands.",
    "principles.card3.kicker": "Utility",
    "principles.card3.title": "The practical can be striking too",
    "principles.card3.body":
      "Shopper24 shows that even a simple list-processing tool can be far clearer when it works with a map and a route.",
    "principles.card4.kicker": "Experiment",
    "principles.card4.title": "AI isn't just an automaton — it's a character",
    "principles.card4.body":
      "In EnerGourmet the pairing engine gives a useful and entertaining answer at once, while Vitya's Life turns a personal theme into a game.",
    "footer.eyebrow": "Ready for the next node?",
    "footer.title": "Curious about the projects? Jump straight into the live apps.",
    "footer.body":
      "Each project has its own live link above — pick one and take a look. New nodes get added over time.",
    "footer.ctaProjects": "Explore the projects",
    "footer.ctaContact": "Contact",
    "footer.aiNote": "Contains AI-generated content",
    "lang.aria": "Language",
    "link.soon": "soon"
  },
  hu: {
    "meta.title": "Vitya Labs | Hobbi projektek, kísérletek és hasznos eszközök",
    "meta.description":
      "Vitya Labs landing oldal a HOME, GrillHub, Hálózó, TOTO, Shopper24, EnerGourmet, Vitya's Life és Usage Limit Reached projektekhez.",
    "brand.tagline": "maker lab / playground",
    "nav.projects": "Projektek",
    "nav.about": "Mi ez",
    "nav.principles": "Elvek",
    "nav.contact": "Kapcsolat",
    "nav.cta": "Labor megnyitása",
    "hero.eyebrow": "Független szoftverműhely",
    "hero.title":
      "Projektlabor azoknak az ötleteknek, amik nem akartak draftban maradni.",
    "hero.text":
      "A Vitya Labs egy személyes szervezet hasznos, néha furcsa, de mindig építésre kész projekteknek. Köztük van egy teljes háztartás-üzemeltető platform, közös sütést szervező community app, CPM/Gantt építőipari ütemező, elveszett és kóbor állatokat közösséggel megtaláló app, bevásárlás-optimalizáló eszköz, AI italpárosító, egy játék, ami a 2024-2025-ös énemet dolgozza fel, és egy pixel-polip runner az „usage limit reached\" várakozásra.",
    "hero.ctaProjects": "Projektjeink",
    "hero.ctaContact": "Kapcsolat",
    "hero.statsAria": "Vitya Labs gyors áttekintés",
    "hero.stat1": "kiemelt projekt",
    "hero.stat2": "személyes org",
    "hero.stat3": "kíváncsiságból építve",
    "panel.label": "labor jel",
    "panel.heading": "Hasznos játszótér",
    "panel.body":
      "Produktivitás, közösségi workflow, AI-kísérletek és személyes storytelling egy helyen.",
    "panel.item1": "háztartás-üzemeltető platform",
    "panel.item2": "közösségi workflow-k",
    "panel.item3": "személyes szoftver",
    "panel.item4": "AI-alapú kísérletek",
    "projects.eyebrow": "A műhely",
    "projects.title": "Aktív projektek",
    "projects.subtitle":
      "Ezek a Vitya Labs jelenlegi node-jai: közösségi appok, utilityk, AI kísérletek és játékos webes projektek.",
    "projects.pill": "8 aktív node",
    "story.eyebrow": "Labor jegyzetek",
    "story.title":
      "Ahol a hobbi projekt nem side quest, hanem valódi prototípus.",
    "story.p1":
      "A Vitya Labs nem portfólió-polírozásra készült. Inkább egy saját mérnöklabor, ahol a jó ötletek gyorsan kapnak működő UI-t, valódi workflow-t és egy kis karaktert is.",
    "story.p2":
      "A közös nevező az, hogy mindegyik projekt egy konkrét személyes vagy közösségi problémából indul: a háztartás működését egyben látni, sütést szervezni, építkezést ütemezni, elveszett állatokat közösséggel megtalálni, boltban kevesebbet keringeni, ételhez funból jobb energiaitalt választani, játékon keresztül elmesélni egy időszakot, vagy egy kvóta-várakozást gyors pixeles futássá alakítani.",
    "story.card1.title": "Építs gyorsan, de ízlésesen",
    "story.card1.body":
      "A gyorsaság fontos, de a megjelenés és a hangulat is része a terméknek.",
    "story.card2.title": "Előbb a személyes igény",
    "story.card2.body":
      "A legtöbb projekt onnan indul, hogy jó lenne, ha ez már létezne a saját életemben.",
    "story.card3.title": "Adj ki furcsa dolgokat",
    "story.card3.body":
      "Nem csak hasznosnak kell lenniük. Lehetnek emlékezetesek, szellemesek vagy kicsit abszurdak is.",
    "principles.eyebrow": "Építési elvek",
    "principles.title": "Hogy állnak össze ezek a projektek?",
    "principles.card1.kicker": "Platform",
    "principles.card1.title": "A hobbi projekt is nőhet rendszerré",
    "principles.card1.body":
      "A HOME egy teljes multi-tenant SaaS: karbantartás, mérőórák, költségek és dokumentumok egyetlen, családdal megosztható motorban — weben, natív mobil appban és MCP szerveren át AI asszisztenseknek is.",
    "principles.card2.kicker": "Community",
    "principles.card2.title": "Valódi workflowk köré épülnek",
    "principles.card2.body":
      "GrillHubnál az események, a receptek, a meghívók és a shopping listák egymásra épülnek, nem külön szigetként léteznek.",
    "principles.card3.kicker": "Utility",
    "principles.card3.title": "A praktikum látványos is lehet",
    "principles.card3.body":
      "Shopper24 megmutatja, hogy egy egyszerű lista-feldolgozó eszköz is lehet sokkal átláthatóbb, ha térképpel és útvonallal dolgozik.",
    "principles.card4.kicker": "Experiment",
    "principles.card4.title": "Az AI nem csak automata, hanem karakter is",
    "principles.card4.body":
      "EnerGourmetnél a pairing motor egyszerre ad hasznos és szórakoztató választ, a Vitya's Life pedig játékká alakít személyes témát.",
    "footer.eyebrow": "Kész a következő node-ra?",
    "footer.title": "Kíváncsi vagy a projektekre? Ugorj be egyből az élő appokba.",
    "footer.body":
      "Minden projektnek saját élő linkje van fent — válassz egyet és nézd meg. Idővel új node-ok is érkeznek.",
    "footer.ctaProjects": "Nézd meg a projekteket",
    "footer.ctaContact": "Kapcsolat",
    "footer.aiNote": "AI által generált tartalmat tartalmaz",
    "lang.aria": "Nyelv",
    "link.soon": "hamarosan"
  }
};

function tr(key) {
  const dict = I18N[lang] || I18N.en;
  return dict[key] != null ? dict[key] : (I18N.en[key] != null ? I18N.en[key] : key);
}

// ---------------------------------------------------------------------------
// Project data
// ---------------------------------------------------------------------------
// Language-neutral fields live at the top level; everything the user reads
// lives under `i18n[lang]` so a project card can be re-rendered on toggle.
const LAB_PROJECTS = [
  {
    key: "home",
    name: "HOME",
    icon: "H",
    iconSrc: "./assets/icons/home-logo.png",
    iconAlt: "HOME logo",
    accent: "#e8835f",
    layout: "featured",
    active: true,
    screenshotSrc: "./assets/screenshots/home.png",
    screenshotAlt: "HOME project screenshot",
    i18n: {
      en: {
        kicker: "Home Operations & Maintenance Engine",
        activeLabel: "Currently building this",
        summary:
          "A multi-tenant home-operations platform: the full lifecycle of properties, vehicles, devices and subscriptions — maintenance, meters, costs, reminders and documents in one shared system.",
        details: [
          "A household-based multi-tenant model with invites and permission levels, so a family can run the house together.",
          "Maintenance plans, recurring costs, meter readings and weather-based suggestions driven by scheduled jobs.",
          "Alongside the web app, an Expo-based native mobile app, so the household fits in your pocket.",
          "A dedicated MCP server through which AI assistants can read and control the household too."
        ],
        tags: ["Next.js 15", "Spring Boot 3", "Expo mobile app", "MCP server"],
        noteTitle: "Why the flagship?",
        note:
          "It's the lab's most complex system: a full SaaS with web, mobile and an MCP server that runs household operations end-to-end.",
        primaryLinkLabel: "Open app"
      },
      hu: {
        kicker: "Háztartás-üzemeltető motor",
        activeLabel: "Most ezen dolgozom",
        summary:
          "Multi-tenant háztartás-üzemeltető platform: ingatlanok, járművek, eszközök és előfizetések teljes életciklusa — karbantartás, mérőórák, költségek, emlékeztetők és dokumentumok egy közös rendszerben.",
        details: [
          "Háztartás-alapú multi-tenant modell meghívókkal és jogosultsági szintekkel, hogy egy család együtt vihesse a házat.",
          "Karbantartási tervek, visszatérő költségek, mérőóra-leolvasások és időjárás-alapú javaslatok ütemezett jobokkal.",
          "A webes app mellett Expo-alapú natív mobil app, így a háztartás zsebből is kezelhető.",
          "Saját MCP szerver, amin keresztül AI asszisztensek is olvashatják és vezérelhetik a háztartást."
        ],
        tags: ["Next.js 15", "Spring Boot 3", "Expo mobil app", "MCP szerver"],
        noteTitle: "Miért zászlóshajó?",
        note:
          "Ez a labor legkomplexebb rendszere: egy teljes SaaS webbel, mobil appal és MCP szerverrel, ami a háztartás működtetését kezeli end-to-end.",
        primaryLinkLabel: "App megnyitása"
      }
    }
  },
  {
    key: "grillhub",
    name: "GrillHub",
    icon: "GH",
    iconSrc: "./assets/icons/grillhub-logo.png",
    iconAlt: "GrillHub logo",
    accent: "#ff914d",
    layout: "featured",
    screenshotSrc: "./assets/screenshots/grillhub.png",
    screenshotAlt: "GrillHub project screenshot",
    i18n: {
      en: {
        kicker: "Community BBQ platform",
        summary:
          "A community app built for organising cook-outs, where events, recipes, invites, profiles and shopping lists meet in the same workflow.",
        details: [
          "Create cooking events with date, location and guest management.",
          "Public and personal recipes with image upload, search and editing.",
          "Friend management, shopping lists and AI recipe generation in a multi-service stack."
        ],
        tags: ["React 19", "Spring Boot", "FastAPI AI"],
        noteTitle: "Why interesting?",
        note:
          "It's the strongest community project in the bunch: it's heading toward a real social cooking platform.",
        primaryLinkLabel: "Open project"
      },
      hu: {
        kicker: "Közösségi BBQ platform",
        summary:
          "Közös sütések szervezésére épített community app, ahol az események, receptek, meghívók, profilok és bevásárlólisták ugyanabban a workflow-ban találkoznak.",
        details: [
          "Főzési események létrehozása dátummal, helyszínnel és vendégkezeléssel.",
          "Publikus és saját receptek, képfeltöltéssel, kereséssel és szerkesztéssel.",
          "Barátkezelés, shopping listák és AI receptgenerálás egy több service-es stackben."
        ],
        tags: ["React 19", "Spring Boot", "FastAPI AI"],
        noteTitle: "Miért érdekes?",
        note:
          "Ez a legerősebb közösségi projekt a csomagban: egy valódi social cooking platform irányába megy.",
        primaryLinkLabel: "Projekt megnyitása"
      }
    }
  },
  {
    key: "halozo",
    name: "Hálózó",
    icon: "HÁ",
    accent: "#2a75ba",
    layout: "wide",
    screenshotSrc: "./assets/screenshots/halozo.png",
    screenshotAlt: "Hálózó project screenshot",
    i18n: {
      en: {
        kicker: "CPM network & Gantt scheduler",
        summary:
          "A project-management tool for construction schedules: draw a CPM network diagram interactively and it generates a Gantt chart on the fly. Every edit re-runs the Critical Path Method, so the network and the Gantt stay in sync.",
        details: [
          "Interactive activity-on-node network editor (React Flow) with drag-to-connect dependencies and a red-highlighted critical path.",
          "A full CPM engine: FS / SS / FF / SF dependencies with lag, forward + backward pass, total float and cycle detection.",
          "Working-day calendar that skips weekends and holidays, per-project roles (owner / editor / viewer) and a companion Expo mobile app."
        ],
        tags: ["React 18 + Vite", "React Flow", "Spring Boot 3", "Expo mobile app"],
        noteTitle: "Why interesting?",
        note:
          "The whole app is built around one live computation: change a task or a dependency and the critical path and Gantt recompute instantly.",
        primaryLinkLabel: "Open app"
      },
      hu: {
        kicker: "CPM hálódiagram és Gantt ütemező",
        summary:
          "Projektmenedzsment eszköz építőipari ütemezéshez: interaktívan rajzolsz egy CPM hálódiagramot, ő pedig menet közben Gantt-diagramot generál. Minden szerkesztésre újraszámol a kritikus út módszer, így a háló és a Gantt mindig szinkronban marad.",
        details: [
          "Interaktív tevékenység-csomópont hálószerkesztő (React Flow), húzással köthető függőségekkel és pirossal kiemelt kritikus úttal.",
          "Teljes CPM motor: FS / SS / FF / SF függőségek késleltetéssel, oda- és visszaszámítás, teljes tartalék és körfüggőség-felismerés.",
          "Munkanap-naptár, ami kihagyja a hétvégéket és ünnepnapokat, projektenkénti szerepkörök (tulaj / szerkesztő / néző) és Expo mobil app is."
        ],
        tags: ["React 18 + Vite", "React Flow", "Spring Boot 3", "Expo mobil app"],
        noteTitle: "Miért érdekes?",
        note:
          "Az egész app egyetlen élő számítás köré épül: módosíts egy feladatot vagy függőséget, és a kritikus út meg a Gantt azonnal újraszámol.",
        primaryLinkLabel: "App megnyitása"
      }
    }
  },
  {
    key: "toto",
    name: "TOTO",
    icon: "TOTO",
    iconSrc: "./assets/icons/toto-logo.png",
    iconAlt: "TOTO logo",
    accent: "#fd9000",
    layout: "half",
    screenshotSrc: "./assets/screenshots/toto.png",
    screenshotAlt: "TOTO project screenshot",
    i18n: {
      en: {
        kicker: "Track Others Together Outside",
        summary:
          "A community app for quickly reporting and finding lost and stray animals with real-time geolocation — so animal lovers can help each other bring a dog or cat back home.",
        details: [
          "Map and feed views of nearby reports, with colour-coded pins and Lost / Found / Stray filters.",
          "Reporting with a photo, map location marking, status and a description of the circumstances.",
          "Profile with statistics and gamification, a notification centre, and a bilingual (Hungarian / English) interface."
        ],
        tags: ["React Native / Expo", "Spring Boot", "PostgreSQL + MinIO"],
        noteTitle: "Why interesting?",
        note:
          "A mobile-first community safety net: it turns real-time location and the power of the community into fast, simple animal search.",
        primaryLinkLabel: "Open app"
      },
      hu: {
        kicker: "Track Others Together Outside",
        summary:
          "Közösségi app elveszett és kóbor állatok gyors bejelentésére és megtalálására, valós idejű geolokációval — hogy az állatbarátok együtt segíthessenek egymásnak hazatalálni egy-egy kutyát vagy macskát.",
        details: [
          "Térkép- és feed-nézet a közeli bejelentésekről, színkódolt pinekkel és Elveszett / Megtalált / Kóbor szűrőkkel.",
          "Bejelentés fotóval, térképes helyjelöléssel, státusszal és a körülmények leírásával.",
          "Profil statisztikákkal és gamifikációval, értesítési központ, kétnyelvű (magyar / angol) felület."
        ],
        tags: ["React Native / Expo", "Spring Boot", "PostgreSQL + MinIO"],
        noteTitle: "Miért érdekes?",
        note:
          "Mobile-first közösségi mentőháló: a valós idejű helyadatot és a közösség erejét fordítja gyors, egyszerű állatkeresésbe.",
        primaryLinkLabel: "App megnyitása"
      }
    }
  },
  {
    key: "energourmet",
    name: "EnerGourmet",
    icon: "EG",
    accent: "#ffd176",
    layout: "half",
    screenshotSrc: "./assets/screenshots/energourmet.png",
    screenshotAlt: "EnerGourmet project screenshot",
    i18n: {
      en: {
        kicker: "AI-assisted energy drink sommelier",
        summary:
          "An AI-assisted pairing app that recommends and warns against energy-drink flavours based on your food, with a short rationale and plenty of character.",
        details: [
          "A bilingual experience with Hungarian and English answers.",
          "Two recommended and two flavours to avoid from a single request.",
          "A Gemini-based engine that makes pairing not just useful but entertaining."
        ],
        tags: ["Flask", "Gemini 2.5 Flash", "Pairing UI"],
        noteTitle: "Character",
        note:
          "The whole project deliberately plays with what an energy-drink sommelier would be like, in full seriousness.",
        primaryLinkLabel: "Tasting page"
      },
      hu: {
        kicker: "AI-alapú energiaital sommelier",
        summary:
          "AI által támogatott pairing app, ami étel alapján ajánl és ellenjavall energiaital-ízeket, rövid indoklással és karakteres prezentációval.",
        details: [
          "Kétnyelvű élmény magyar és angol nyelvű válaszokkal.",
          "Két ajánlott és két kerülendő ízirány egyetlen kérésből.",
          "Gemini alapú motor, ami a pairinget nem csak hasznossá, hanem szórakoztatóvá is teszi."
        ],
        tags: ["Flask", "Gemini 2.5 Flash", "Pairing UI"],
        noteTitle: "Karakter",
        note:
          "Az egész projekt tudatosan játszik azzal, milyen lenne egy energiaital sommelier teljes komolysággal.",
        primaryLinkLabel: "Kóstoló oldal"
      }
    }
  },
  {
    key: "shopper24",
    name: "Shopper24",
    icon: "S24",
    iconSrc: "./assets/icons/shopper24-logo.png",
    iconAlt: "Shopper24 logo",
    accent: "#7ec8ff",
    layout: "half",
    screenshotSrc: "./assets/screenshots/shopper24.png",
    screenshotAlt: "Shopper24 project screenshot",
    i18n: {
      en: {
        kicker: "Shopping optimiser app",
        summary:
          "Turns a raw shopping list into a route you can actually use in the store: it sorts items by category and shows the route logic on a visual store map.",
        details: [
          "Processing a text list and sorting it by store section.",
          "Category-based colour coding and visual map feedback.",
          "Turns a simple utility into a usable shopping-assistant experience."
        ],
        tags: ["Flask", "List processing", "Store map"],
        noteTitle: "Value",
        note:
          "The project's strength is that it solves a very everyday problem in a fast, visually obvious way.",
        primaryLinkLabel: "Open app"
      },
      hu: {
        kicker: "Bevásárlás-optimalizáló app",
        summary:
          "Nyers bevásárlólistából boltban is használható útvonalat készít: kategóriák szerint rendezi a tételeket, és vizuális áruháztérképen mutatja az útvonal logikáját.",
        details: [
          "Szöveges lista feldolgozása és boltszakasz szerinti rendezése.",
          "Kategória-alapú színkódolás és vizuális térképes visszajelzés.",
          "Egyszerű utilityből használható shopping assistant élményt csinál."
        ],
        tags: ["Flask", "Listafeldolgozás", "Bolttérkép"],
        noteTitle: "Haszon",
        note:
          "A projekt erőssége, hogy nagyon hétköznapi problémát old meg gyors, vizuálisan egyértelmű formában.",
        primaryLinkLabel: "App megnyitása"
      }
    }
  },
  {
    key: "vityasLife",
    name: "Vitya's Life",
    icon: "VL",
    iconSrc: "./assets/icons/vityas-life-favicon.png",
    iconAlt: "Vitya's Life pixel favicon",
    iconRendering: "pixelated",
    accent: "#ffb66b",
    layout: "half",
    screenshotSrc: "./assets/screenshots/vityas-life.png",
    screenshotAlt: "Vitya's Life project screenshot",
    i18n: {
      en: {
        kicker: "Personal game project",
        summary:
          "A browser-based, sokoban-style puzzle game with an office vibe that turns my 2024–2025 self — its routines, focuses and inside jokes — into playful levels.",
        details: [
          "Six hand-built office shifts: push every labeled folder crate onto a glowing tray.",
          "No undo and no reset — every shove is final, so a wedged crate means starting the career over.",
          "Because of the personal theme it's both a game and a snapshot of an era."
        ],
        tags: ["Vanilla JS", "Puzzle game", "itch.io"],
        noteTitle: "Why different?",
        note:
          "It's the most personal project in the lab's bundle: not a utility, but a playful self-portrait in web form.",
        primaryLinkLabel: "Play on itch.io"
      },
      hu: {
        kicker: "Személyes játékprojekt",
        summary:
          "Böngészős, sokoban-jellegű puzzle játék irodai hangulattal, amely a 2024-2025-ös énemet és annak rutinjait, fókuszait és belső poénjait fordítja át játékos pályákra.",
        details: [
          "Hat kézzel épített irodai műszak: told minden feliratozott dossziét egy világító tálcára.",
          "Nincs undo és nincs reset — minden tolás végleges, egy beszorult láda az egész karriert újraindítja.",
          "A személyes tematika miatt egyszerre játék és korszaklenyomat."
        ],
        tags: ["Vanilla JS", "Puzzle játék", "itch.io"],
        noteTitle: "Miért más?",
        note:
          "Ez a legszemélyesebb projekt a labor csomagjából: nem utility, hanem játékos önportré webes formában.",
        primaryLinkLabel: "Játszd itch.io-n"
      }
    }
  },
  {
    key: "usageLimit",
    name: "Usage Limit Reached",
    icon: "UL",
    iconSrc: "./assets/icons/usage-limit-favicon.png",
    iconAlt: "Usage Limit Reached pixel octopus",
    iconRendering: "pixelated",
    accent: "#e56e3c",
    layout: "half",
    screenshotSrc: "./assets/screenshots/usage-limit-reached.png",
    screenshotAlt: "Usage Limit Reached project screenshot",
    i18n: {
      en: {
        kicker: "Pixel Octopus endless runner",
        summary:
          "A Chrome-\"no internet\" dino game reimagined for the out-of-quota wait: a pixel octopus runs, code blocks stand in for the cacti and bugs replace the birds — all on a playful \"Usage limit reached\" screen.",
        details: [
          "A single self-contained index.html with no dependencies — it runs offline and drops in anywhere.",
          "Speed ramps up, day/night flips every 500 points, and the high score is kept in localStorage.",
          "A fan-made parody of that out-of-quota feeling — no brand assets used, just the joke."
        ],
        tags: ["Vanilla JS", "Endless runner", "itch.io"],
        noteTitle: "Character",
        note:
          "The lab's smallest build: one HTML file that turns waiting for a reset into a quick pixel-art run.",
        primaryLinkLabel: "Play on itch.io"
      },
      hu: {
        kicker: "Pixel Octopus végtelen runner",
        summary:
          "A Chrome \"nincs internet\" dínó játéka újragondolva a kvóta-várakozásra: egy pixel polip fut, kódblokkok helyettesítik a kaktuszokat és bugok a madarakat — egy játékos \"Usage limit reached\" képernyőn.",
        details: [
          "Egyetlen önálló index.html, függőségek nélkül — offline is fut és bárhová bemásolható.",
          "A sebesség folyamatosan gyorsul, 500 pontonként vált a nappal/éjszaka, a legjobb pontszám a localStorage-ben marad.",
          "Fan-made paródia a kvóta-elfogyás érzéséről — semmilyen márkaelem, csak a poén."
        ],
        tags: ["Vanilla JS", "Végtelen runner", "itch.io"],
        noteTitle: "Karakter",
        note:
          "A labor legkisebb buildje: egyetlen HTML fájl, ami a resetre várást gyors pixeles futássá alakítja.",
        primaryLinkLabel: "Játszd itch.io-n"
      }
    }
  }
];

const config = window.VITYA_LABS_CONFIG || {};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function getNestedValue(target, path) {
  return path.split(".").reduce((current, segment) => {
    if (!current || typeof current !== "object") {
      return undefined;
    }
    return current[segment];
  }, target);
}

function isConfiguredUrl(value) {
  return (
    typeof value === "string" &&
    value.length > 0 &&
    !value.startsWith("TODO_") &&
    !value.includes("TODO_ADD_")
  );
}

// Returns the current-language copy block for a project.
function projectCopy(project) {
  return project.i18n[lang] || project.i18n.en;
}

// ---------------------------------------------------------------------------
// Configured (external) links — currently just the contact e-mail.
// ---------------------------------------------------------------------------
function applyConfiguredLinks() {
  const linkNodes = document.querySelectorAll("[data-config-link]");

  linkNodes.forEach((node) => {
    const path = node.getAttribute("data-config-link");
    const href = getNestedValue(config, path);
    const missingLabel = node.getAttribute("data-missing-label");

    if (isConfiguredUrl(href)) {
      node.setAttribute("href", href);
      if (href.startsWith("http")) {
        node.setAttribute("target", "_blank");
        node.setAttribute("rel", "noreferrer");
      }
      return;
    }

    node.classList.add("link-disabled");
    node.removeAttribute("href");
    if (missingLabel) {
      node.textContent = missingLabel;
    }
    node.setAttribute("aria-disabled", "true");
  });
}

function buildProjectLink(url, label, className) {
  const anchor = document.createElement("a");
  anchor.className = className;
  anchor.textContent = label;

  if (isConfiguredUrl(url)) {
    anchor.href = url;
    if (url.startsWith("http")) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }
  } else {
    anchor.classList.add("link-disabled");
    anchor.textContent = `${label} ${tr("link.soon")}`;
    anchor.setAttribute("aria-disabled", "true");
  }

  return anchor;
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------
function renderSignalGrid() {
  const container = document.getElementById("signal-grid");
  if (!container) {
    return;
  }

  container.replaceChildren();

  LAB_PROJECTS.forEach((project) => {
    const tile = document.createElement("a");
    tile.className = "signal-tile";
    tile.href = `#project-${project.key}`;
    tile.setAttribute("aria-label", `${project.name} details`);
    tile.style.setProperty("--project-accent", project.accent);

    tile.innerHTML = `
      <img src="${project.screenshotSrc}" alt="${project.screenshotAlt}" loading="lazy">
      <span class="signal-caption">${project.name}</span>
    `;

    container.appendChild(tile);
  });
}

function buildProjectPreview(project, liveUrl) {
  const preview = document.createElement(isConfiguredUrl(liveUrl) ? "a" : "div");
  preview.className = "project-media";
  preview.innerHTML = `<img src="${project.screenshotSrc}" alt="${project.screenshotAlt}" loading="lazy">`;

  if (preview.tagName === "A") {
    preview.href = liveUrl;
    preview.target = "_blank";
    preview.rel = "noreferrer";
    preview.setAttribute("aria-label", `${project.name} preview`);
  }

  return preview;
}

function buildProjectIcon(project) {
  if (project.iconSrc) {
    const renderingClass =
      project.iconRendering === "pixelated" ? " project-icon-image--pixelated" : "";

    return `<img class="project-icon-image${renderingClass}" src="${project.iconSrc}" alt="${project.iconAlt || ""}" loading="lazy">`;
  }

  return project.icon;
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) {
    return;
  }

  container.replaceChildren();

  LAB_PROJECTS.forEach((project) => {
    const copy = projectCopy(project);
    const projectLinks = getNestedValue(config, `projects.${project.key}`) || {};
    const card = document.createElement("article");
    const projectId = `project-${project.key}`;
    const layoutClass =
      project.layout === "featured"
        ? "project-card--featured"
        : project.layout === "wide"
          ? "project-card--wide"
          : project.layout === "half"
            ? "project-card--half"
            : "project-card--standard";

    card.className = `project-card ${layoutClass}`;
    card.id = projectId;
    card.style.setProperty("--project-accent", project.accent);

    if (project.active) {
      card.classList.add("project-card--active");
    }

    const detailItems = copy.details
      .map((detail) => `<li class="project-detail">${detail}</li>`)
      .join("");

    const tagItems = copy.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    const iconAria = project.iconSrc ? "" : ' aria-hidden="true"';

    const activeBadge = project.active
      ? `<span class="project-status">${copy.activeLabel || ""}</span>`
      : "";

    card.appendChild(buildProjectPreview(project, projectLinks.liveUrl));

    card.insertAdjacentHTML(
      "beforeend",
      `
        <div class="project-header">
          <div>
            <p class="project-kicker">${copy.kicker}</p>
            <h3 class="project-title">${project.name}</h3>
            ${activeBadge}
          </div>
          <div class="project-icon"${iconAria}>${buildProjectIcon(project)}</div>
        </div>
        <p class="project-summary">${copy.summary}</p>
        <div class="project-metadata">${tagItems}</div>
        <ul class="project-details">${detailItems}</ul>
        <div class="project-footer">
          <div class="project-note">
            <strong>${copy.noteTitle}</strong>
            <span>${copy.note}</span>
          </div>
          <div class="project-links"></div>
        </div>
      `
    );

    const linksContainer = card.querySelector(".project-links");
    linksContainer.append(
      buildProjectLink(projectLinks.liveUrl, copy.primaryLinkLabel, "project-primary-link")
    );

    container.appendChild(card);
  });
}

// Applies the static (non-card) copy to every element tagged with data-i18n.
function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = tr(node.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", tr(node.getAttribute("data-i18n-aria")));
  });

  // Document-level metadata.
  document.documentElement.lang = lang;
  document.title = tr("meta.title");
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", tr("meta.description"));
  }
}

// Reflects the active language on the toggle buttons.
function syncLangToggle() {
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

// Re-renders everything that carries copy for the current language.
function applyLanguage() {
  applyStaticI18n();
  applyConfiguredLinks();
  renderProjects();
  syncLangToggle();
}

function setLanguage(next) {
  if (!SUPPORTED_LANGS.includes(next) || next === lang) {
    return;
  }
  lang = next;
  if (window.localStorage) {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  }
  applyLanguage();
}

function initLanguageToggle() {
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
  });
}

function fillFooterYear() {
  const yearNode = document.getElementById("current-year");
  if (!yearNode) {
    return;
  }

  yearNode.textContent = String(new Date().getFullYear());
}

function initializePage() {
  initLanguageToggle();
  applyLanguage();
  renderSignalGrid();
  fillFooterYear();
  window.requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
  });
}

initializePage();
