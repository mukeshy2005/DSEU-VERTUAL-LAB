import { practicals } from "../data/practicals.js";
import { renderPracticalCard } from "./home.js";

export function renderPracticals() {
  const categories = ["All", ...new Set(practicals.map((p) => p.category))];

  return `
    <section class="section" style="padding-top: 120px;">
      <div class="container">
        <div class="section-header">
          <div class="overline">Virtual Lab Experiments</div>
          <h2>All Practicals & Simulations</h2>
          <p>Browse all ${practicals.length} interactive simulations. Launch any experiment or download the presentation materials.</p>
        </div>

        <div class="filter-bar">
          <div class="search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
            <input type="text" id="searchInput" placeholder="Search practicals..." />
          </div>
          <div class="filter-tabs" id="filterTabs">
            ${categories
              .map(
                (cat, i) =>
                  `<button class="filter-tab ${i === 0 ? "active" : ""}" data-category="${cat}">${cat}</button>`
              )
              .join("")}
          </div>
        </div>

        <div class="practicals-grid" id="practicalsGrid">
          ${practicals.map((p) => renderPracticalCard(p)).join("")}
        </div>

        <div id="noResults" style="display:none; text-align:center; padding:60px 20px;">
          <div style="font-size:3rem; margin-bottom:16px;">🔍</div>
          <h3 style="color:var(--gray-800); font-family:var(--font); margin-bottom:8px;">No practicals found</h3>
          <p style="color:var(--gray-500);">Try a different search term or category filter.</p>
        </div>
      </div>
    </section>
  `;
}

export function initPracticalsPage() {
  const searchInput = document.getElementById("searchInput");
  const filterTabs = document.getElementById("filterTabs");
  const grid = document.getElementById("practicalsGrid");
  const noResults = document.getElementById("noResults");

  if (!searchInput || !filterTabs || !grid) return;

  let activeCategory = "All";

  function filterPracticals() {
    const query = searchInput.value.toLowerCase().trim();
    const cards = grid.querySelectorAll(".practical-card");
    let visibleCount = 0;

    cards.forEach((card, index) => {
      const practical = practicals[index];
      const matchesSearch =
        !query ||
        practical.title.toLowerCase().includes(query) ||
        practical.description.toLowerCase().includes(query) ||
        practical.tags.some((t) => t.toLowerCase().includes(query));

      const matchesCategory =
        activeCategory === "All" || practical.category === activeCategory;

      const visible = matchesSearch && matchesCategory;
      card.style.display = visible ? "" : "none";
      if (visible) visibleCount++;
    });

    noResults.style.display = visibleCount === 0 ? "block" : "none";
  }

  searchInput.addEventListener("input", filterPracticals);

  filterTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".filter-tab");
    if (!tab) return;

    filterTabs
      .querySelectorAll(".filter-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    activeCategory = tab.dataset.category;
    filterPracticals();
  });
}
