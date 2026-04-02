const LAB_PROJECTS = [
  {
    key: "grillhub",
    name: "GrillHub",
    kicker: "Közösségi BBQ platform",
    icon: "GH",
    accent: "#ff914d",
    layout: "featured",
    screenshotSrc: "./assets/screenshots/grillhub.png",
    screenshotAlt: "GrillHub project screenshot",
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
    primaryLinkLabel: "Projekt megnyitása",
    secondaryLinkLabel: "Repository"
  },
  {
    key: "energourmet",
    name: "EnerGourmet",
    kicker: "AI assisted energy drink sommelier",
    icon: "EG",
    accent: "#ffd176",
    layout: "half",
    screenshotSrc: "./assets/screenshots/energourmet.png",
    screenshotAlt: "EnerGourmet project screenshot",
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
    primaryLinkLabel: "Kóstoló oldal",
    secondaryLinkLabel: "Repository"
  },
  {
    key: "shopper24",
    name: "Shopper24",
    kicker: "Bevásárlás-optimalizáló app",
    icon: "S24",
    accent: "#7ec8ff",
    layout: "half",
    screenshotSrc: "./assets/screenshots/shopper24.png",
    screenshotAlt: "Shopper24 project screenshot",
    summary:
      "Nyers bevásárlólistából boltban is használható útvonalat készít: kategóriák szerint rendezi a tételeket, és vizuális áruháztérképen mutatja az útvonal logikáját.",
    details: [
      "Szöveges lista feldolgozása és boltszakasz szerinti rendezése.",
      "Kategória-alapú színkódolás és vizuális térképes visszajelzés.",
      "Egyszerű utilityből használható shopping assistant élményt csinál."
    ],
    tags: ["Flask", "List processing", "Store map"],
    noteTitle: "Haszon",
    note:
      "A projekt erőssége, hogy nagyon hétköznapi problémát old meg gyors, vizuálisan egyértelmű formában.",
    primaryLinkLabel: "App megnyitása",
    secondaryLinkLabel: "Repository"
  },
  {
    key: "vityasLife",
    name: "Vitya's Life",
    kicker: "Személyes játékprojekt",
    icon: "VL",
    iconSrc: "./assets/icons/vityas-life-favicon.png",
    iconAlt: "Vitya's Life pixel favicon",
    accent: "#ffb66b",
    layout: "half",
    screenshotSrc: "./assets/screenshots/vityas-life.png",
    screenshotAlt: "Vitya's Life project screenshot",
    summary:
      "Böngészős, sokoban-jellegű puzzle játék irodai hangulattal, amely a 2024-2025-ös énemet és annak rutinjait, fókuszait és belső poénjait fordítja át játékos pályákra.",
    details: [
      "Statikus webes build, gyors indulással és könnyű deployjal.",
      "Billentyűs irányítás, undo, reset és hint rendszer a puzzle loophoz.",
      "A személyes tematika miatt egyszerre játék és korszaklenyomat."
    ],
    tags: ["Vanilla JS", "Puzzle game", "Static web"],
    noteTitle: "Miért más?",
    note:
      "Ez a legszemélyesebb projekt a négy közül: nem utility, hanem játékos önportré webes formában.",
    primaryLinkLabel: "Játék indítása",
    secondaryLinkLabel: "Repository"
  }
];

const config = window.VITYA_LABS_CONFIG || {};

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
    anchor.textContent = `${label} hamarosan`;
    anchor.setAttribute("aria-disabled", "true");
  }

  return anchor;
}

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
    return `<img src="${project.iconSrc}" alt="${project.iconAlt || ""}" loading="lazy">`;
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

    const detailItems = project.details
      .map((detail) => `<li class="project-detail">${detail}</li>`)
      .join("");

    const tagItems = project.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    const iconAria = project.iconSrc ? "" : ' aria-hidden="true"';

    card.appendChild(buildProjectPreview(project, projectLinks.liveUrl));

    card.insertAdjacentHTML(
      "beforeend",
      `
        <div class="project-header">
          <div>
            <p class="project-kicker">${project.kicker}</p>
            <h3 class="project-title">${project.name}</h3>
          </div>
          <div class="project-icon"${iconAria}>${buildProjectIcon(project)}</div>
        </div>
        <p class="project-summary">${project.summary}</p>
        <div class="project-metadata">${tagItems}</div>
        <ul class="project-details">${detailItems}</ul>
        <div class="project-footer">
          <div class="project-note">
            <strong>${project.noteTitle}</strong>
            <span>${project.note}</span>
          </div>
          <div class="project-links"></div>
        </div>
      `
    );

    const linksContainer = card.querySelector(".project-links");
    linksContainer.append(
      buildProjectLink(projectLinks.liveUrl, project.primaryLinkLabel, "project-primary-link"),
      buildProjectLink(projectLinks.repoUrl, project.secondaryLinkLabel, "project-secondary-link")
    );

    container.appendChild(card);
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
  renderProjects();
  renderSignalGrid();
  applyConfiguredLinks();
  fillFooterYear();
  window.requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
  });
}

initializePage();
