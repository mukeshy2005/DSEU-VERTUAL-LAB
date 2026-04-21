import { practicals, universityInfo } from "../data/practicals.js";

export function renderAbout() {
  const categories = [...new Set(practicals.map((p) => p.category))];

  return `
    <section class="section" style="padding-top: 120px;">
      <div class="container">
        <div class="section-header">
          <div class="overline">About the Virtual Lab</div>
          <h2>Empowering Future Automobile Engineers</h2>
          <p>A comprehensive virtual laboratory by ${universityInfo.name} for hands-on learning in automobile engineering.</p>
        </div>

        <div class="about-grid">
          <div class="about-content reveal">
            <h3>About ${universityInfo.shortName}</h3>
            <p>
              ${universityInfo.name} (${universityInfo.shortName}) is a state university 
              established by the Government of NCT of Delhi, dedicated to providing 
              skill-based education and fostering entrepreneurship among students.
            </p>
            <p>
              The Department of Automobile Engineering at ${universityInfo.shortName} is 
              committed to developing industry-ready professionals through a blend of 
              theoretical knowledge and practical expertise. This Virtual Lab is a 
              step towards making quality engineering education accessible to all.
            </p>
            <p>
              Our virtual simulations are designed by students and faculty, covering 
              key topics from the automobile engineering curriculum. Each simulation 
              provides an interactive, risk-free environment to understand complex 
              mechanical systems.
            </p>

            <div class="about-stats">
              <div class="about-stat-card">
                <div class="num">${practicals.length}</div>
                <div class="lbl">Simulations</div>
              </div>
              <div class="about-stat-card">
                <div class="num">${categories.length}</div>
                <div class="lbl">Categories</div>
              </div>
              <div class="about-stat-card">
                <div class="num">24/7</div>
                <div class="lbl">Availability</div>
              </div>
              <div class="about-stat-card">
                <div class="num">Free</div>
                <div class="lbl">For All Students</div>
              </div>
            </div>
          </div>

          <div class="about-visual reveal">
            <div class="about-feature-card">
              <div class="icon">🎯</div>
              <h4>Curriculum Aligned</h4>
              <p>All practicals follow the DSEU automobile engineering syllabus.</p>
            </div>
            <div class="about-feature-card">
              <div class="icon">🔬</div>
              <h4>Student Created</h4>
              <p>Simulations built by talented DSEU students themselves.</p>
            </div>
            <div class="about-feature-card">
              <div class="icon">📱</div>
              <h4>Device Friendly</h4>
              <p>Access from laptops, tablets, or mobile phones seamlessly.</p>
            </div>
            <div class="about-feature-card">
              <div class="icon">📥</div>
              <h4>Downloadable PPTs</h4>
              <p>Presentation materials available for every experiment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact / Visit -->
    <section class="section" style="padding-top: 20px;">
      <div class="container">
        <div class="section-header reveal">
          <div class="overline">Get in Touch</div>
          <h2>Visit ${universityInfo.shortName}</h2>
        </div>
        <div class="features-grid" style="max-width: 900px; margin: 0 auto;">
          <div class="feature-card reveal">
            <div class="feature-icon">🌐</div>
            <h3>Official Website</h3>
            <p><a href="${universityInfo.website}" target="_blank" rel="noopener noreferrer" style="color:var(--orange-400); text-decoration:underline;">${universityInfo.website}</a></p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">🏛️</div>
            <h3>University</h3>
            <p>${universityInfo.name}</p>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">🔧</div>
            <h3>Department</h3>
            <p>${universityInfo.department}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
