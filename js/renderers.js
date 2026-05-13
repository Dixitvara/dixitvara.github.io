/**
 * renderers.js
 *
 * DOM rendering functions — one per portfolio section.
 * Depends on: config.js (CONFIG), icons.js (I), helpers.js (calcDuration, fmtDate, gradient, getStats)
 */

/* global CONFIG, I, calcDuration, fmtDate, gradient, getStats, photoHTML */

/** Update all <meta> / Open Graph tags */
function renderMeta() {
    const title = `${CONFIG.name.first} ${CONFIG.name.last} — ${CONFIG.tagline}`;
    const desc = `${CONFIG.name.full} — ${CONFIG.tagline} based in ${CONFIG.location}`;
    document.getElementById("page-title").textContent = title;
    document.getElementById("page-desc").content = desc;
    document.getElementById("og-title").content = title;
    document.getElementById("og-desc").content = desc;
    if (CONFIG.photo) document.getElementById("og-image").content = CONFIG.photo;
}

/** Render the fixed top navigation bar and mobile drawer */
function renderNav() {
    const navLinks = ["about", "building", "skills", "projects", "experience", "education"];

    document.getElementById("nav").innerHTML = `
    <a href="#hero" class="n-logo">
      <div class="n-logo-avatar">${CONFIG.photo
            ? `<img src="${CONFIG.photo}" alt="${CONFIG.name.initials}" onerror="this.parentElement.textContent='${CONFIG.name.initials}'">`
            : CONFIG.name.initials}</div>
      <span class="n-logo-text">${CONFIG.name.first}<em>${CONFIG.name.last}</em></span>
    </a>
    <ul class="n-links">
      ${navLinks.map(l => `<li><a href="#${l}">${l.charAt(0).toUpperCase() + l.slice(1)}</a></li>`).join("")}
    </ul>
    <a href="#contact" class="n-cta">${I.mail2} Contact</a>
    <button class="n-hamburger" id="ham-btn" aria-label="Open menu">${I.ham}</button>
  `;

    document.getElementById("drawer").innerHTML = `
    ${navLinks.map(l => `<a href="#${l}" class="drawer-link">${l.charAt(0).toUpperCase() + l.slice(1)}</a>`).join("")}
    <a href="#contact" class="drawer-cta">${I.mail2} Contact Me</a>
  `;
}

/** Render the hero section with phone mockup */
function renderHero() {
    const stats = getStats();
    document.getElementById("hero-inner").innerHTML = `
    <div>
      ${CONFIG.availability ? `<div class="avail-chip"><div class="dot"></div>${CONFIG.availability}</div>` : ""}
      <p class="hero-greeting">Hello, I'm</p>
      <h1 class="hero-name"><span class="blue">${CONFIG.name.first}</span> ${CONFIG.name.last}</h1>
      <p class="hero-role">Native <strong>${CONFIG.tagline}</strong></p>
      <p class="hero-desc">${CONFIG.heroDesc}</p>
      <div class="hero-actions">
        <a href="#projects" class="btn-fill">${I.grid} View My Work</a>
        <a href="mailto:${CONFIG.email}" class="btn-out">${I.email} Get In Touch</a>
      </div>
      <div class="hero-stats">
        ${stats.map(s => `<div><div class="stat-num">${s.num}</div><div class="stat-lbl">${s.lbl}</div></div>`).join("")}
      </div>
    </div>
    <div class="hero-card">
      <div class="phone-shell">
        <div class="phone-bezel">
          <div class="phone-island"></div>
          <div class="phone-status">
            <span>9:41</span>
            <div class="phone-status-icons">
              <svg width="12" height="9" viewBox="0 0 12 9" fill="rgba(255,255,255,0.8)"><rect x="0" y="4" width="2" height="5" rx="0.5"/><rect x="3" y="2.5" width="2" height="6.5" rx="0.5"/><rect x="6" y="1" width="2" height="8" rx="0.5"/><rect x="9" y="0" width="2" height="9" rx="0.5"/></svg>
              <svg width="12" height="9" viewBox="0 0 24 16" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="2"><path d="M5 8a9.77 9.77 0 0114 0M1 4a15.36 15.36 0 0122 0M9 12a4.59 4.59 0 016 0"/><circle cx="12" cy="15" r="1" fill="rgba(255,255,255,0.8)" stroke="none"/></svg>
              <svg width="22" height="9" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="rgba(255,255,255,0.5)" stroke-width="1"/><rect x="2" y="2" width="13" height="7" rx="1.5" fill="rgba(255,255,255,0.8)"/><path d="M20 3.5v4a2 2 0 000-4z" fill="rgba(255,255,255,0.4)"/></svg>
            </div>
          </div>
          <div class="phone-screen-content">
            <div class="phone-profile-wrap">
              <div class="phone-profile-photo">
                ${CONFIG.photo
            ? `<img src="${CONFIG.photo}" alt="${CONFIG.name.full}" onerror="this.style.display='none';this.parentElement.innerHTML='<span class=ph-initials>${CONFIG.name.initials}</span>'">`
            : `<span class="ph-initials">${CONFIG.name.initials}</span>`}
              </div>
              <div class="phone-profile-name">${CONFIG.name.first} ${CONFIG.name.last}</div>
              <div class="phone-profile-role">${CONFIG.tagline}</div>
            </div>
            <div class="phone-cards">
              <div class="phone-card">
                <div class="phone-card-icon green">🏢</div>
                <div class="phone-card-text">
                  <div class="phone-card-label">Currently at</div>
                  <div class="phone-card-value">Keylogic Infotech</div>
                </div>
              </div>
              <div class="phone-card">
                <div class="phone-card-icon blue">📱</div>
                <div class="phone-card-text">
                  <div class="phone-card-label">Specialization</div>
                  <div class="phone-card-value">Android · Kotlin</div>
                </div>
              </div>
              <div class="phone-card">
                <div class="phone-card-icon purple">✨</div>
                <div class="phone-card-text">
                  <div class="phone-card-label">Status</div>
                  <div class="phone-card-value">Open to Work</div>
                </div>
              </div>
            </div>
          </div>
          <div class="phone-home-bar"><div class="phone-home-pill"></div></div>
        </div>
      </div>
    </div>
  `;
}

/** Render the "Currently Building" WIP section */
function renderBuilding() {
    if (!CONFIG.currentlyBuilding.length) {
        document.getElementById("building").style.display = "none";
        return;
    }
    document.getElementById("building-inner").innerHTML = `
    <div class="building-header reveal">
      <div class="building-eyebrow"><div class="wip-dot"></div> Currently Building</div>
      <h2 class="building-title">What I'm working on right now</h2>
      <p class="building-sub">Side projects I'm actively building in my own time.</p>
    </div>
    <div class="building-grid stag reveal">
      ${CONFIG.currentlyBuilding.map(p => `
        <div class="building-card">
          <div class="building-card-top">
            <div class="building-card-icon">${p.emoji}</div>
            <div class="wip-badge"><div class="dot"></div>${p.status}</div>
          </div>
          <div class="building-card-body">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="building-tech">${p.tech.map(t => `<span class="btc">${t}</span>`).join("")}</div>
            <div class="progress-wrap">
              <div class="progress-label">
                <span>Progress</span>
                <span>${p.progress}%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" data-progress="${p.progress}"></div>
              </div>
            </div>
            <div class="building-links">
              ${p.links.map(l => `<a href="${l.url}" target="_blank" class="btn-ghost-white">${I[l.icon] || ""} ${l.label}</a>`).join("")}
            </div>
          </div>
        </div>`).join("")}
    </div>
  `;
}

/** Render the About / Info / Achievements section */
function renderAbout() {
    document.getElementById("about-inner").innerHTML = `
    <div class="about-grid reveal">
      <div>
        <div class="sec-head">
          <div class="eyebrow">👋 About Me</div>
          <h2 class="sec-title">Passionate Android developer from Gujarat</h2>
        </div>
        <div class="about-text">${CONFIG.about.map(p => `<p>${p}</p>`).join("")}</div>
      </div>
      <div>
        <div class="info-cards">
          ${CONFIG.infoCards.map(c => `
            <div class="ic">
              <div class="ic-icon">${c.icon}</div>
              <div><div class="ic-lbl">${c.label}</div><div class="ic-val${c.highlight ? " avail" : ""}">${c.value}</div></div>
            </div>`).join("")}
        </div>
        <div class="sec-head" style="margin-bottom:0.8rem"><div class="eyebrow">🏆 Achievements</div></div>
        <div class="ach-grid">
          ${CONFIG.achievements.map(a => `
            <div class="ach-card${a.full ? " full" : ""}">
              <div class="ach-emoji">${a.emoji}</div>
              <div class="ach-title">${a.title}</div>
              <div class="ach-meta">${a.meta}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

/** Render the Skills section (chips + cards) */
function renderSkills() {
    document.getElementById("skills-inner").innerHTML = `
    <div class="sec-head reveal">
      <div class="eyebrow">🛠 Skills</div>
      <h2 class="sec-title">My Tech Stack</h2>
      <p class="sec-sub">Languages, tools and technologies I use to build Android apps.</p>
    </div>
    <div class="chips-row stag reveal">${CONFIG.skillChips.map(c => `<span class="chip">${c}</span>`).join("")}</div>
    <div class="sk-grid stag reveal">
      ${CONFIG.skillCards.map(c => `
        <div class="sk-card">
          <div class="sk-icon ${c.bg}">${c.icon}</div>
          <h3>${c.title}</h3><p>${c.desc}</p>
          <div class="s-tags">${c.tags.map(t => `<span class="st">${t}</span>`).join("")}</div>
        </div>`).join("")}
    </div>
  `;
}

/** Render the Projects grid */
function renderProjects() {
    document.getElementById("projects-inner").innerHTML = `
    <div class="sec-head reveal">
      <div class="eyebrow">🚀 Projects</div>
      <h2 class="sec-title">Things I've Built</h2>
      <p class="sec-sub">Real-world Android apps I've developed — from enterprise warehouse tools to fun mobile games.</p>
    </div>
    <div class="proj-grid stag reveal">
      ${CONFIG.projects.map(p => `
        <div class="proj-card">
          <div class="proj-top" style="background:${gradient(p.gradient)}">${p.emoji}<span class="proj-badge">${p.badge}</span></div>
          <div class="proj-body">
            <div class="proj-tech">${p.tech.map(t => `<span class="tc">${t}</span>`).join("")}</div>
            <h3>${p.title}</h3><p>${p.desc}</p>
            <div class="proj-acts">${p.links.map(l => `<a href="${l.url}" target="_blank" class="btn-t">${I[l.icon] || ""} ${l.label}</a>`).join("")}</div>
          </div>
        </div>`).join("")}
    </div>
  `;
}

/** Render the Experience timeline */
function renderExperience() {
    document.getElementById("exp-inner").innerHTML = `
    <div class="sec-head reveal">
      <div class="eyebrow">💼 Experience</div>
      <h2 class="sec-title">Where I've Worked</h2>
      <p class="sec-sub">My professional journey — from backend internship to full-time Android developer.</p>
    </div>
    <div class="exp-list">
      ${CONFIG.experience.map(e => `
        <div class="exp-card">
          <div class="exp-logo">${e.emoji}</div>
          <div>
            <span class="exp-date">${fmtDate(e.startDate)} — ${fmtDate(e.endDate)}</span>
            <span class="exp-duration">${calcDuration(e.startDate, e.endDate)}</span>
            <div class="exp-title">${e.title}</div>
            <div class="exp-co">${e.company}</div>
            <div class="exp-desc">${e.desc}</div>
            <div class="exp-tags">${e.tags.map(t => `<span class="et">${t}</span>`).join("")}</div>
          </div>
        </div>`).join("")}
    </div>
  `;
}

/** Render the Education section */
function renderEducation() {
    document.getElementById("edu-inner").innerHTML = `
    <div class="sec-head reveal">
      <div class="eyebrow">🎓 Education</div>
      <h2 class="sec-title">Academic Background</h2>
    </div>
    <div class="edu-grid stag reveal">
      ${CONFIG.education.map(e => `
        <div class="edu-card">
          <div class="edu-icon">${e.icon}</div>
          <div>
            <div class="edu-degree">${e.degree}</div>
            <div class="edu-school">${e.school}</div>
            <div class="edu-badges"><span class="badge-yr">${e.year}</span></div>
          </div>
        </div>`).join("")}
    </div>
  `;
}

/** Render the Contact / CTA section */
function renderContact() {
    document.getElementById("contact-inner").innerHTML = `
    <div class="contact-card reveal">
      <h2>${CONFIG.contactTitle}</h2>
      <p>${CONFIG.contactMessage}</p>
      <div style="margin-bottom:2.2rem">
        <a href="mailto:${CONFIG.email}" class="contact-email-btn">${I.email} ${CONFIG.email}</a>
      </div>
      <div class="soc-row">
        ${CONFIG.social.map(s => `<a href="${s.url}" target="_blank" class="soc-btn">${I[s.icon] || ""} ${s.label}</a>`).join("")}
      </div>
    </div>
  `;
}

/** Render the footer */
function renderFooter() {
    document.getElementById("footer").innerHTML = `
    <p>© ${new Date().getFullYear()} <em>${CONFIG.name.full}</em> · ${CONFIG.tagline} · ${CONFIG.location}</p>
    <p>Free to host on
      <a href="https://pages.github.com" target="_blank">GitHub Pages</a> ·
      <a href="https://netlify.com" target="_blank">Netlify</a> ·
      <a href="https://vercel.com" target="_blank">Vercel</a>
    </p>
  `;
}
