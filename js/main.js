/**
 * main.js
 *
 * Entry point — boots the portfolio by calling all render
 * and behaviour initialisation functions in the correct order.
 *
 * Load order in index.html:
 *   config.js → icons.js → helpers.js → renderers.js → behaviour.js → main.js
 */

/* global renderMeta, renderNav, renderHero, renderBuilding, renderAbout,
          renderSkills, renderProjects, renderExperience, renderEducation,
          renderContact, renderFooter, initScrollAnimations, initNav */

(function boot() {
    // 1. Meta & SEO tags
    renderMeta();

    // 2. Navigation (must run before initNav so ham-btn exists in the DOM)
    renderNav();

    // 3. Page sections
    renderHero();
    renderBuilding();
    renderAbout();
    renderSkills();
    renderProjects();
    renderExperience();
    renderEducation();
    renderContact();
    renderFooter();

    // 4. Behaviour (must run after all sections are rendered)
    initScrollAnimations();
    initNav();
})();
