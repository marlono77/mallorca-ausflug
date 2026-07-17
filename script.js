// ===== Reiseplan-Daten (aus den Folien 2–10) =====

const days = [
  {
    kicker: "MI 12.08 · HINFLUG",
    tags: [],
    title: "Auf nach Cala Llombards",
    body: "Ankunft 23:10 Uhr in Palma, danach rund 1 Stunde Fahrt ins Häuschen. Erste Nacht ankommen, durchatmen, Urlaub beginnt.",
    footerLabel: "",
    footerText: "",
    note: "",
    images: [{ src: "assets/day1-hinflug.jpg", position: "50% 55%" }],
  },
  {
    kicker: "DO 13.08",
    tags: ["KURZ", "ENTSPANNT"],
    title: "Ankommen & Heimatstrand",
    body: "Sanfter Start nach der kurzen Nacht: Strandtag an Cala Llombards, baden, an den Felsterrassen chillen, Snack an der Strandbar.",
    footerLabel: "ZU HAUSE",
    footerText: "Sonnenuntergang am Mirador del Pontàs (5 Min.), Blick auf den Felsbogen.",
    note: "Einkauf: bei Lidl Santanyí (10 Min., tägl. bis 22 Uhr) für den ersten Vorrat – Frühstück, Getränke & Grundausstattung.",
    images: [{ src: "assets/day2-strand-a.jpg", position: "50% 58%" }],
  },
  {
    kicker: "FR 14.08",
    tags: ["LANGER TAG", "NATUR+KULTUR"],
    title: "Felanitx – Kloster, Burg & Städtchen",
    body: "Bergkloster Sant Salvador (360°-Panorama, hochfahrbar), dann Burgruine Castell de Santueri (4€, nur Bargeld). Optional Weinverkostung Bodega Es Fangar.",
    footerLabel: "AUSWÄRTS",
    footerText: "Bummeln in Felanitx, Dinner in einem der Lokale im Städtchen (ab ~18 Uhr).",
    note: "Hinweis: Freitag ideal – Burg (Sa/So zu), Restaurants (Di zu) und Bodega (Wo.-Ende zu) alle offen.",
    images: [{ src: "assets/day3-felanitx.jpg", position: "50% 55%" }],
  },
  {
    kicker: "SA 15.08",
    tags: ["KURZ", "KULTURELL"],
    title: "Santanyí & Cala Figuera",
    body: "Vormittags Städtchen Santanyí – Markttag! (9–14 Uhr, Kunsthandwerk, Obst), danach Fischerdorf Cala Figuera.",
    footerLabel: "ZU HAUSE",
    footerText: "Eigener Tapas-Abend zu Hause: kleine warme & kalte Tapas, Oliven, Brot & lokaler Wein.",
    note: "Großer Einkauf für die Tapas: Fleisch bei suma + Wein, Öl & Meersalz bei Vinos Artesanos. Feiertag Mariä Himmelfahrt – kann voller sein.",
    images: [
      { src: "assets/day4-santanyi-a.jpg", position: "50% 62%" },
      { src: "assets/day4-santanyi-b.jpg", position: "50% 50%" },
    ],
  },
  {
    kicker: "SO 16.08",
    tags: ["KURZ", "ENTSPANNT"],
    title: "Naturpark Mondragó & Portopetro",
    body: "Naturpark Mondragó (15 Min.): zwei traumhafte Sandstrände, Waldpfad, kristallklares Wasser. Park nur 9–16 Uhr, früh parken.",
    footerLabel: "AUSWÄRTS",
    footerText: "Hafenort Portopetro: Dinner am Wasser.",
    note: "Einkauf: Lidl/Eroski Santanyí haben sonntags offen, falls etwas fehlt. suma nur bis 13 Uhr, Weinladen zu.",
    images: [{ src: "assets/day5-mondrago.jpg", position: "50% 62%" }],
  },
  {
    kicker: "MO 17.08",
    tags: ["KURZ", "AKTIV"],
    title: "Die Instagram-Buchten",
    body: "Früh los und die Instagram-Buchten (Caló des Moro, Cala s'Almunia) anschauen – zu voll? Flexibel weiter zu einer ruhigeren Bucht. Wasserschuhe & Snacks mit. Nachmittags Rückzug ins Häuschen zum Ausruhen.",
    footerLabel: "ZU HAUSE",
    footerText: "Zu Hause: Steak, Wein auf der Terrasse. Danach eigene, selbst gefundene Sehenswürdigkeiten der Umgebung erkunden.",
    note: "Einkauf: aus dem Sa-Vorrat kochen; bei Bedarf kurz Lidl.",
    images: [
      { src: "assets/day6-buchten-a.jpg", position: "50% 60%" },
      { src: "assets/day6-buchten-b.jpg", position: "50% 68%" },
      { src: "assets/day6-buchten-c.jpg", position: "50% 58%" },
    ],
  },
  {
    kicker: "DI 18.08",
    tags: ["LANGER TAG", "KULTUR"],
    title: "Tropfsteinhöhlen & Ostküste",
    body: "Coves del Drach in Porto Cristo (~1 Std.): Tropfsteinhöhlen, unterirdischer See, klassisches Konzert, Bootsfahrt. Tickets vorab online. Danach Hafen o. Cala Mendia.",
    footerLabel: "ZU HAUSE",
    footerText: "Zurück ins Häuschen und dort gemütlich selbst kochen.",
    note: "Hinweis: Höhlen öffnen 10 Uhr – nicht zu früh losfahren nötig.",
    images: [
      { src: "assets/day7-drach-cave.jpg", position: "50% 58%" },
      { src: "assets/day7-drach-coast.jpg", position: "50% 56%" },
    ],
  },
  {
    kicker: "MI 19.08",
    tags: ["KURZ", "ENTSPANNT"],
    title: "Ruhetag & großes Finale",
    body: "Bewusst langsam: fauler Tag an Cala Llombards o. nochmal an die Lieblingsbucht der Woche. Buch, Schnorchel, langes Mittagessen.",
    footerLabel: "AUSWÄRTS O. ZU HAUSE",
    footerText: "Sonnenuntergang am Mirador mit Cava, danach Abschiedsdinner – auswärts o. gemütlich selbst gemacht, ganz nach Lust.",
    note: "Frischer Fisch: Mi ist zweiter Fischhallen-Tag (bis 13:30), falls ihr zu Hause fein essen wollt.",
    images: [],
  },
  {
    kicker: "DO 20.08",
    tags: ["HALBER TAG"],
    title: "Bonus-Vormittag & Abreise",
    body: "Abreisevorbereitungen: packen, Häuschen aufräumen & übergeben. Gegen 15 Uhr zum Flughafen Palma (~1 Std. Fahrt) für den Rückflug 18:30 Uhr.",
    footerLabel: "RÜCKFLUG",
    footerText: "Rückflug 18:30 Uhr ab Palma.",
    note: "",
    images: [],
  },
];

const FALLBACK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
  <path d="M12 3c-4 4-6 7.5-6 10.5a6 6 0 0 0 12 0C18 10.5 16 7 12 3Z"/>
</svg>`;

// ===== Screen-Elemente =====

const screens = {
  landing: document.getElementById("screen-landing"),
  itinerary: document.getElementById("screen-itinerary"),
};

const els = {
  kicker: document.getElementById("it-kicker"),
  tags: document.getElementById("it-tags"),
  title: document.getElementById("it-title"),
  body: document.getElementById("it-body"),
  footerBlock: document.getElementById("it-footer-block"),
  footerLabel: document.getElementById("it-footer-label"),
  footerText: document.getElementById("it-footer-text"),
  note: document.getElementById("it-note"),
  media: document.getElementById("it-media"),
  progress: document.getElementById("progress"),
  fabGroup: document.getElementById("fab-group"),
  fabBack: document.getElementById("fab-back"),
  fab: document.getElementById("fab-next"),
  fabIcon: document.getElementById("fab-icon"),
};

const ICON_NEXT = `<path d="M5 12h14M13 6l6 6-6 6"/>`;
const ICON_RESTART = `<path d="M4 4v6h6"/><path d="M20 20v-6h-6"/><path d="M4.5 15a8 8 0 0 0 13.9 3.4M19.5 9A8 8 0 0 0 5.6 5.6"/>`;

let dayIndex = 0; // -1 = landing, 0..days.length-1 = itinerary day
let currentScreen = "landing";

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("is-active"));
  screens[name].classList.add("is-active");
  currentScreen = name;
  els.fabGroup.classList.toggle("is-visible", name === "itinerary");
  updateFabIcon();
}

function updateFabIcon() {
  const isLastDay = currentScreen === "itinerary" && dayIndex === days.length - 1;
  els.fabIcon.innerHTML = isLastDay ? ICON_RESTART : ICON_NEXT;
  els.fab.setAttribute("aria-label", isLastDay ? "Zurück zum Anfang" : "Nächster Tag");
}

function renderDay(index) {
  const day = days[index];

  els.kicker.textContent = day.kicker;

  els.tags.innerHTML = "";
  day.tags.forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    els.tags.appendChild(span);
  });

  els.title.textContent = day.title;
  els.body.textContent = day.body;

  const hasFooter = Boolean(day.footerLabel);
  els.footerBlock.classList.toggle("is-visible", hasFooter);
  if (hasFooter) {
    els.footerLabel.textContent = day.footerLabel;
    els.footerText.textContent = day.footerText;
  }

  const hasNote = Boolean(day.note);
  els.note.classList.toggle("is-visible", hasNote);
  els.note.textContent = day.note;

  els.media.innerHTML = "";
  els.media.classList.toggle("media--stack", day.images.length > 1);
  if (day.images.length > 0) {
    day.images.forEach((image) => {
      const img = document.createElement("img");
      img.src = image.src;
      img.style.objectPosition = image.position || "50% 50%";
      img.alt = day.title;
      els.media.appendChild(img);
    });
  } else {
    const fallback = document.createElement("div");
    fallback.className = "media-fallback";
    fallback.innerHTML = FALLBACK_SVG;
    els.media.appendChild(fallback);
  }

  els.progress.textContent = `Tag ${index + 1} von ${days.length}`;
}

function goToDay(index) {
  dayIndex = index;
  renderDay(index);
  showScreen("itinerary");
}

function goToLanding() {
  dayIndex = -1;
  showScreen("landing");
}

// ===== "Ja!" startet den Reiseplan =====

document.getElementById("btn-yes").addEventListener("click", () => {
  goToDay(0);
});

// ===== Weiter/Zurück-Knöpfe unten rechts: Tag für Tag =====

function goForward() {
  if (currentScreen !== "itinerary") return;
  if (dayIndex + 1 < days.length) {
    goToDay(dayIndex + 1);
  } else {
    goToLanding();
  }
}

function goBack() {
  if (currentScreen !== "itinerary") return;
  if (dayIndex > 0) {
    goToDay(dayIndex - 1);
  } else {
    goToLanding();
  }
}

els.fab.addEventListener("click", goForward);
els.fabBack.addEventListener("click", goBack);

// Pfeiltasten als Komfort-Navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    if (currentScreen === "landing") return;
    goForward();
  } else if (e.key === "ArrowLeft") {
    if (currentScreen === "landing") return;
    goBack();
  }
});

// ===== "Nein"-Knopf: weicht aus, kehrt danach zurück =====

const noBtn = document.getElementById("btn-no");

const DODGE_RADIUS = 110; // px – ab hier weicht der Knopf aus
const RETURN_DELAY = 550; // ms Ruhe, bevor er zurückrutscht

let returnTimer = null;
let isHome = true;

function applyNoTransform(x, y) {
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function goHome() {
  isHome = true;
  applyNoTransform(0, 0);
}

// Liest den tatsächlich gerade gerenderten Transform-Versatz aus (nicht den
// Ziel-Wert) – wichtig, falls eine vorherige Ausweich-Animation noch läuft,
// wenn der nächste Sprung ausgelöst wird. So driftet die Position nie ab.
function getCurrentOffset(el) {
  const t = getComputedStyle(el).transform;
  if (!t || t === "none") return { x: 0, y: 0 };
  const match = t.match(/matrix\(([^)]+)\)/);
  if (!match) return { x: 0, y: 0 };
  const parts = match[1].split(",").map(Number);
  return { x: parts[4], y: parts[5] };
}

function dodge(clientX, clientY) {
  isHome = false;
  const screenRect = screens.landing.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  const currentOffset = getCurrentOffset(noBtn);
  const homeLeft = btnRect.left - currentOffset.x;
  const homeTop = btnRect.top - currentOffset.y;

  // Sicherer Bereich: innerhalb des Anzeigebildschirms (screen-landing), mit Rand
  const margin = 24;
  let minX = screenRect.left + margin - homeLeft;
  let maxX = screenRect.right - btnRect.width - margin - homeLeft;
  let minY = screenRect.top + margin - homeTop;
  let maxY = screenRect.bottom - btnRect.height - margin - homeTop;

  // Falls der Bildschirm kleiner als Knopf+Rand ist: Bereich nicht invertieren
  if (minX > maxX) [minX, maxX] = [maxX, minX];
  if (minY > maxY) [minY, maxY] = [maxY, minY];

  let newX, newY, tries = 0;
  do {
    newX = minX + Math.random() * (maxX - minX);
    newY = minY + Math.random() * (maxY - minY);
    tries++;
  } while (
    tries < 6 &&
    Math.hypot(clientX - (homeLeft + newX + btnRect.width / 2), clientY - (homeTop + newY + btnRect.height / 2)) < DODGE_RADIUS
  );

  applyNoTransform(newX, newY);
}

function distanceToButton(clientX, clientY) {
  const r = noBtn.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  return Math.hypot(clientX - cx, clientY - cy);
}

function handlePointerMove(clientX, clientY) {
  if (currentScreen !== "landing") return;

  const dist = distanceToButton(clientX, clientY);

  if (dist < DODGE_RADIUS) {
    clearTimeout(returnTimer);
    dodge(clientX, clientY);
  } else if (!isHome) {
    clearTimeout(returnTimer);
    returnTimer = setTimeout(goHome, RETURN_DELAY);
  }
}

document.addEventListener("mousemove", (e) => handlePointerMove(e.clientX, e.clientY));

// Touch: Antippen zählt als Annäherung, der Knopf weicht sofort aus
noBtn.addEventListener(
  "touchstart",
  (e) => {
    e.preventDefault();
    const t = e.touches[0];
    clearTimeout(returnTimer);
    dodge(t.clientX, t.clientY);
    returnTimer = setTimeout(goHome, RETURN_DELAY);
  },
  { passive: false }
);

// Klick/Tastatur-Fokus auf "Nein" weicht ebenfalls nur aus, statt zu navigieren
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const r = noBtn.getBoundingClientRect();
  dodge(r.left + r.width / 2, r.top + r.height / 2);
  clearTimeout(returnTimer);
  returnTimer = setTimeout(goHome, RETURN_DELAY);
});

window.addEventListener("resize", () => {
  // Bei Größenänderung (z.B. Rotation, mobiler Adressleiste) immer zurück auf
  // die Home-Position, damit der Knopf nie außerhalb des neuen Bildschirms landet.
  clearTimeout(returnTimer);
  goHome();
});
