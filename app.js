let visibleCount = 6;
const galleryGrid = document.getElementById("gallery-grid");
const loadMoreBtn = document.getElementById("load-more-btn");
const counterSpan = document.getElementById("load-counter");
const toast = document.getElementById("toast");

function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function copyImage(path) {
  if (!path) return;
  if (typeof ClipboardItem === "undefined" || !navigator.clipboard || !navigator.clipboard.write) {
    showToast("Image copy isn't supported in this browser — use Download");
    return;
  }
  const blobPromise = fetch(path).then((res) => {
    if (!res.ok) throw new Error("Failed to load image");
    return res.blob();
  });
  navigator.clipboard
    .write([new ClipboardItem({ "image/png": blobPromise })])
    .then(() => showToast("Copied image to clipboard!"))
    .catch(() => showToast("Couldn't copy image — use Download instead"));
}

function renderCards(start, end) {
  const slice = HERO_DATA.slice(start, end);
  slice.forEach(item => {
    const card = document.createElement("div");
    card.className = "hero-card";
    card.innerHTML = `
      <div class="card-media">
        <img src="images/${item.file}" alt="${item.name}" loading="lazy" decoding="async" />
      </div>
      <div class="card-footer">
        <div class="card-info">
          <h4 class="card-title">${item.id} · ${item.name}</h4>
        </div>
        <div class="card-actions">
          <button class="btn-action btn-copy" data-file="images/${item.file}">Copy</button>
          <a href="images/${item.file}" download="${item.file}" class="btn-action btn-download">Download</a>
        </div>
      </div>
    `;
    galleryGrid.appendChild(card);
  });

  document.querySelectorAll(".btn-copy").forEach(btn => {
    btn.onclick = (e) => copyImage(e.target.getAttribute("data-file"));
  });
}

if (galleryGrid && typeof HERO_DATA !== "undefined") {
  renderCards(0, visibleCount);

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      const prev = visibleCount;
      visibleCount = Math.min(visibleCount + 12, HERO_DATA.length);
      renderCards(prev, visibleCount);
      counterSpan.textContent = `(Showing ${visibleCount} of ${HERO_DATA.length})`;

      if (visibleCount >= HERO_DATA.length) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.opacity = "0.5";
        loadMoreBtn.innerHTML = "<span>All 65 heroes loaded</span>";
      }
    });
  }
}

const lightbox = document.getElementById("lightbox");
const lightboxStage = document.getElementById("lightbox-stage");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxZoomLevel = document.getElementById("lightbox-zoom-level");
const lightboxCopyBtn = document.getElementById("lightbox-copy");
const lightboxDownloadLink = document.getElementById("lightbox-download");
const lightboxCloseBtn = document.getElementById("lightbox-close");
const MIN_ZOOM = 1;
const MAX_ZOOM = 6;
let zoomLevel = 1;
let panX = 0;
let panY = 0;
let dragging = false;
let suppressClick = false;
let dragStartX = 0;
let dragStartY = 0;

function applyZoom() {
  lightboxImg.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomLevel})`;
  lightboxZoomLevel.textContent = `${Math.round(zoomLevel * 100)}%`;
  lightboxStage.style.cursor = zoomLevel > 1 ? "grab" : "zoom-in";
}

function zoomTo(next, originX, originY) {
  const clamped = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
  const rect = lightboxStage.getBoundingClientRect();
  const px = originX - rect.left - rect.width / 2;
  const py = originY - rect.top - rect.height / 2;
  const ratio = clamped / zoomLevel;
  panX = px - ratio * (px - panX);
  panY = py - ratio * (py - panY);
  zoomLevel = clamped;
  if (zoomLevel === 1) {
    panX = 0;
    panY = 0;
  }
  applyZoom();
}

function zoomFromCenter(next) {
  const rect = lightboxStage.getBoundingClientRect();
  zoomTo(next, rect.left + rect.width / 2, rect.top + rect.height / 2);
}

function resetZoom() {
  zoomLevel = 1;
  panX = 0;
  panY = 0;
  applyZoom();
}

function openLightbox(src, alt) {
  if (!lightbox) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightboxCaption.textContent = alt || "";
  lightboxCopyBtn.dataset.file = src;
  lightboxDownloadLink.href = src;
  lightboxDownloadLink.download = src.split("/").pop();
  resetZoom();
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => lightboxCloseBtn.focus({ preventScroll: true }));
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lightboxImg.src = "";
}

if (galleryGrid) {
  galleryGrid.addEventListener("click", (e) => {
    const media = e.target.closest(".card-media");
    if (!media) return;
    const img = media.querySelector("img");
    if (img) openLightbox(img.getAttribute("src"), img.getAttribute("alt"));
  });
}

if (lightbox) {
  lightboxStage.addEventListener("wheel", (e) => {
    e.preventDefault();
    zoomTo(zoomLevel * (e.deltaY < 0 ? 1.12 : 1 / 1.12), e.clientX, e.clientY);
  }, { passive: false });

  lightboxStage.addEventListener("dblclick", (e) => {
    e.preventDefault();
    zoomTo(zoomLevel > 1 ? 1 : 2.5, e.clientX, e.clientY);
  });

  lightboxStage.addEventListener("pointerdown", (e) => {
    if (zoomLevel <= 1 || e.target !== lightboxImg) return;
    dragging = true;
    suppressClick = false;
    dragStartX = e.clientX - panX;
    dragStartY = e.clientY - panY;
    lightboxStage.setPointerCapture(e.pointerId);
    lightboxStage.style.cursor = "grabbing";
  });

  lightboxStage.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    panX = e.clientX - dragStartX;
    panY = e.clientY - dragStartY;
    if (Math.abs(e.movementX) > 0 || Math.abs(e.movementY) > 0) suppressClick = true;
    applyZoom();
  });

  lightboxStage.addEventListener("pointerup", () => {
    dragging = false;
    lightboxStage.style.cursor = zoomLevel > 1 ? "grab" : "zoom-in";
  });

  lightboxStage.addEventListener("pointercancel", () => {
    dragging = false;
  });

  lightboxStage.addEventListener("click", (e) => {
    if (suppressClick) {
      suppressClick = false;
      return;
    }
    if (e.target === lightboxStage) closeLightbox();
  });

  document.getElementById("lightbox-zoom-in").addEventListener("click", () => zoomFromCenter(zoomLevel * 1.3));
  document.getElementById("lightbox-zoom-out").addEventListener("click", () => zoomFromCenter(zoomLevel / 1.3));
  document.getElementById("lightbox-reset").addEventListener("click", resetZoom);
  lightboxCloseBtn.addEventListener("click", closeLightbox);
  lightboxCopyBtn.addEventListener("click", () => copyImage(lightboxImg.getAttribute("src")));

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("show")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "+" || e.key === "=") zoomFromCenter(zoomLevel * 1.3);
    else if (e.key === "-" || e.key === "_") zoomFromCenter(zoomLevel / 1.3);
    else if (e.key === "0") resetZoom();
  });
}
