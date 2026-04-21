import "./style.css";
import { renderHome } from "./pages/home.js";
import { renderPracticals, initPracticalsPage } from "./pages/practicals.js";
import { renderAbout } from "./pages/about.js";

// ── Router ──
const pages = {
  home: { render: renderHome },
  practicals: { render: renderPracticals, init: initPracticalsPage },
  about: { render: renderAbout },
};

let currentPage = "home";
const app = document.getElementById("app");

function navigate(page) {
  if (!pages[page]) return;
  currentPage = page;
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Render page
  app.innerHTML = renderFooter(pages[page].render());
  app.querySelector(".page").classList.add("active");

  // Update active nav link
  document.querySelectorAll(".navbar-links a[data-page]").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === page);
  });

  // Close mobile menu
  document.getElementById("navLinks")?.classList.remove("open");

  // Init page-specific JS
  if (pages[page].init) pages[page].init();

  // Trigger scroll reveal
  initRevealAnimations();
}

function renderFooter(content) {
  return `
    <div class="page">
      ${content}
      <footer class="footer">
        <div class="footer-inner">
          <div class="footer-brand">
            <div style="display:flex; align-items:center; gap:10px;">
              <img src="/images/Delhi_Skill_and_Entrepreneurship_logo.png" alt="DSEU Logo" style="height:40px;" />
              <div>
                <strong style="color:var(--white); font-family:var(--font);">DSEU Virtual Lab</strong><br/>
                <span style="font-size:0.75rem; color:var(--orange-400);">Automobile Engineering</span>
              </div>
            </div>
            <p>An interactive virtual laboratory platform by Delhi Skill & Entrepreneurship University for automobile engineering students.</p>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <a href="#" data-page="home">Home</a>
            <a href="#" data-page="practicals">Practicals</a>
            <a href="#" data-page="about">About</a>
            <a href="https://dseu.ac.in" target="_blank" rel="noopener noreferrer">DSEU Website</a>
          </div>
          <div class="footer-col">
            <h4>Resources</h4>
            <a href="#" data-page="practicals">Simulations</a>
            <a href="#" data-page="practicals">Download PPTs</a>
            <a href="#" data-page="about">Contact</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Delhi Skill & Entrepreneurship University. All rights reserved.</span>
          <span>Crafted with ❤️ by DSEU Students</span>
        </div>
      </footer>
    </div>
  `;
}

// ── Scroll Reveal ──
function initRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ── Navbar scroll ──
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    ?.classList.toggle("scrolled", window.scrollY > 20);
});

// ── Event Delegation for navigation ──
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-page]");
  if (link) {
    e.preventDefault();
    navigate(link.dataset.page);
  }
});

// ── Mobile toggle ──
document.getElementById("mobileToggle")?.addEventListener("click", () => {
  document.getElementById("navLinks")?.classList.toggle("open");
});

// ── Init ──
navigate("home");
