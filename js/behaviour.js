/**
 * behaviour.js
 *
 * UI behaviour: scroll-triggered animations and nav interactions.
 * Depends on: icons.js (I)
 */

/* global I */

/**
 * Set up IntersectionObservers for:
 *   - .reveal  → fade + slide in on scroll
 *   - .stag    → staggered child animations on scroll
 *   - .exp-card → staggered experience cards
 *   - .progress-wrap → animated progress bars
 */
function initScrollAnimations() {
    // General reveal + stagger
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add("vis");
        });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal, .stag").forEach(el => io.observe(el));

    // Experience card stagger with delay
    const expIO = new IntersectionObserver(entries => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) setTimeout(() => e.target.classList.add("vis"), i * 120);
        });
    }, { threshold: 0.1 });
    document.querySelectorAll(".exp-card").forEach(el => expIO.observe(el));

    // Progress bar animation (triggered when the bar enters the viewport)
    const progIO = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const fill = e.target.querySelector(".progress-fill");
                if (fill) {
                    setTimeout(() => { fill.style.width = fill.dataset.progress + "%"; }, 300);
                }
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll(".progress-wrap").forEach(el => progIO.observe(el));
}

/**
 * Initialise navigation interactions:
 *   - Hamburger toggle (open / close mobile drawer)
 *   - Close drawer on link click, outside click, or Escape key
 *   - Active nav link highlight on scroll
 *   - Nav shadow when page is scrolled
 */
function initNav() {
    const secs = document.querySelectorAll("section[id]");
    const drawer = document.getElementById("drawer");
    // Query ham button AFTER renderNav() has injected it into the DOM
    const hamBtn = document.getElementById("ham-btn");

    if (!hamBtn) {
        console.warn("ham-btn not found — make sure renderNav() has been called first.");
        return;
    }

    let isOpen = false;

    function openDrawer() {
        isOpen = true;
        drawer.classList.add("open");
        hamBtn.innerHTML = I.close;
        hamBtn.setAttribute("aria-label", "Close menu");
    }

    function closeDrawer() {
        isOpen = false;
        drawer.classList.remove("open");
        hamBtn.innerHTML = I.ham;
        hamBtn.setAttribute("aria-label", "Open menu");
    }

    // Toggle on hamburger click
    hamBtn.addEventListener("click", e => {
        e.stopPropagation();
        isOpen ? closeDrawer() : openDrawer();
    });

    // Close when a drawer link is tapped
    drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", closeDrawer));

    // Close when tapping anywhere outside the drawer + button
    document.addEventListener("click", e => {
        if (isOpen && !drawer.contains(e.target) && !hamBtn.contains(e.target)) {
            closeDrawer();
        }
    });

    // Close on Escape key
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && isOpen) closeDrawer();
    });

    // Active nav link highlight + nav shadow on scroll
    const allNavLinks = document.querySelectorAll(".n-links a, .drawer-link");

    function setActive() {
        let cur = "";
        secs.forEach(s => {
            if (window.scrollY >= s.offsetTop - 90) cur = s.id;
        });
        allNavLinks.forEach(a =>
            a.classList.toggle("active", a.getAttribute("href") === `#${cur}`)
        );
        document.getElementById("nav").style.boxShadow =
            window.scrollY > 12
                ? "0 2px 18px rgba(0,0,0,0.12)"
                : "0 1px 3px rgba(0,0,0,0.08)";
    }

    window.addEventListener("scroll", setActive, { passive: true });
    setActive(); // run once on load to set initial state
}
