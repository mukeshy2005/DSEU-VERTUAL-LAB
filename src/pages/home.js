import { practicals, universityInfo } from "../data/practicals.js";

export function renderHome() {
  const previewPracticals = practicals.slice(0, 4);

  return `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="dot"></span>
            ${universityInfo.shortName} — ${universityInfo.department}
          </div>
          <h2>
            Automobile Engineering<br/>
            <span class="highlight">Virtual Laboratory</span>
          </h2>
          <p>${universityInfo.description}</p>
          <div class="hero-actions">
            <a href="#" class="btn btn-primary" data-page="practicals">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Explore Practicals
            </a>
            <a href="#" class="btn btn-secondary" data-page="about">
              Learn More
            </a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="number">${practicals.length}<span>+</span></div>
              <div class="label">Simulations</div>
            </div>
            <div class="hero-stat">
              <div class="number">3<span>+</span></div>
              <div class="label">Categories</div>
            </div>
            <div class="hero-stat">
              <div class="number">24<span>/7</span></div>
              <div class="label">Access</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card-grid">
            ${previewPracticals
              .map(
                (p) => `
              <div class="hero-mini-card">
                <div class="icon">${p.icon}</div>
                <h4>${p.title.length > 30 ? p.title.substring(0, 30) + "..." : p.title}</h4>
                <p>${p.category}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="overline">Why Virtual Lab?</div>
          <h2>Learn by Doing, Anytime, Anywhere</h2>
          <p>Our virtual lab brings the automobile workshop to your screen with interactive simulations and detailed study materials.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card reveal">
            <div class="feature-icon">🖥️</div>
            <h3>Interactive Simulations</h3>
            <p>Hands-on virtual experiments that replicate real-world automobile systems and mechanisms.</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">📊</div>
            <h3>Presentation Materials</h3>
            <p>Download detailed PPTs for each practical to supplement your learning and revision.</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">🌐</div>
            <h3>Access Anywhere</h3>
            <p>No lab booking needed — access all simulations 24/7 from any device with a browser.</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">🎓</div>
            <h3>Curriculum Aligned</h3>
            <p>Every simulation is designed to match the DSEU Automobile Engineering syllabus.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Practicals -->
    <section class="section" style="padding-top: 20px;">
      <div class="container">
        <div class="section-header reveal">
          <div class="overline">Featured Experiments</div>
          <h2>Start Exploring</h2>
          <p>Jump into any of our interactive simulations and begin your hands-on learning journey.</p>
        </div>
        <div class="practicals-grid">
          ${practicals
            .slice(0, 3)
            .map((p) => renderPracticalCard(p))
            .join("")}
        </div>
        <div style="text-align:center; margin-top:40px;" class="reveal">
          <a href="#" class="btn btn-primary" data-page="practicals">
            View All ${practicals.length} Practicals →
          </a>
        </div>
      </div>
    </section>
  `;
}

export function renderPracticalCard(p) {
  const badgeClass =
    p.difficulty === "Beginner"
      ? "badge-beginner"
      : p.difficulty === "Advanced"
        ? "badge-advanced"
        : "badge-intermediate";

  const isAvailable = p.simulationUrl && p.simulationUrl !== "#";

  return `
    <div class="practical-card reveal">
      <div class="card-header">
        <div class="card-icon">${p.icon}</div>
        <span class="card-badge ${badgeClass}">${p.difficulty}</span>
      </div>
      <div class="card-id">PRACTICAL ${String(p.id).padStart(2, "0")}</div>
      <h3 class="card-title">${p.title}</h3>
      <p class="card-desc">${p.description}</p>
      <div class="card-meta">
        <div class="card-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
          ${p.category}
        </div>
        <div class="card-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          ${p.duration}
        </div>
      </div>
      <div class="card-tags">
        ${p.tags
          .slice(0, 3)
          .map((t) => `<span class="card-tag">${t}</span>`)
          .join("")}
      </div>
      <div class="card-actions">
        <a href="${isAvailable ? p.simulationUrl : "#"}" 
           target="${isAvailable ? "_blank" : ""}" 
           rel="noopener noreferrer"
           class="btn btn-primary btn-sm" 
           ${!isAvailable ? 'onclick="event.preventDefault(); alert(\'Simulation link coming soon!\')"' : ""}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          ${isAvailable ? "Launch Sim" : "Coming Soon"}
        </a>
        <a href="/ppts/${p.pptFile}" ${p.pptFile.endsWith('.pdf') ? 'target="_blank"' : 'download'} class="btn btn-secondary btn-sm" 
           onclick="event.preventDefault(); 
           fetch('/ppts/${p.pptFile}', {method:'HEAD'}).then(r => {
             if(r.ok) { ${p.pptFile.endsWith('.pdf') ? "window.open('/ppts/" + p.pptFile + "', '_blank')" : "window.location='/ppts/" + p.pptFile + "'"} }
             else alert('File not uploaded yet. Add ${p.pptFile} to the /public/ppts/ folder.');
           }).catch(() => alert('File not uploaded yet.'))">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          ${p.pptFile.endsWith('.pdf') ? 'PDF' : 'PPT'}
        </a>
      </div>
    </div>
  `;
}
