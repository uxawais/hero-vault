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
    btn.onclick = (e) => {
      const path = e.target.getAttribute("data-file");
      const fullUrl = window.location.origin + window.location.pathname.replace(/[^/]*$/, '') + path;
      navigator.clipboard.writeText(fullUrl).then(() => {
        showToast("Copied image link to clipboard!");
      }).catch(() => {
        showToast("Copied: " + path);
      });
    };
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
