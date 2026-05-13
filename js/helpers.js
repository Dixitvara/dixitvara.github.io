/**
 * helpers.js
 *
 * Pure utility functions shared across the portfolio renderers.
 * Depends on: config.js (CONFIG)
 */

/* global CONFIG, GRADIENTS */

/**
 * Calculate the human-readable duration between two dates.
 * Counts inclusively: Jan–Jun = 6 months (not 5).
 * For an open endDate we use today's date but do NOT add the +1
 * because the current month is still in progress.
 *
 * @param {string} startStr - ISO date string "YYYY-MM-DD"
 * @param {string|null} endStr  - ISO date string or null for "Present"
 * @returns {string} e.g. "1 yr 3 mo"
 */
function calcDuration(startStr, endStr) {
    const start = new Date(startStr);
    const end = endStr ? new Date(endStr) : new Date();
    // +1 makes Jan→Jun = 6 months (both endpoints are fully completed months)
    const inclusive = endStr ? 1 : 0;
    let months = (end.getFullYear() - start.getFullYear()) * 12
        + (end.getMonth() - start.getMonth())
        + inclusive;
    if (months < 1) months = 1;
    const years = Math.floor(months / 12);
    const mo = months % 12;
    const parts = [];
    if (years) parts.push(years + " yr");
    if (mo) parts.push(mo + " mo");
    return parts.join(" ") || "< 1 mo";
}

/**
 * Format a date string to "Mon YYYY" or "Present".
 *
 * @param {string|null} str - ISO date string or null
 * @returns {string}
 */
function fmtDate(str) {
    if (!str) return "Present";
    return new Date(str).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

/** Named gradient presets */
const GRADIENTS = {
    blue: "linear-gradient(135deg,#1565C0,#1E88E5)",
    cyan: "linear-gradient(135deg,#0277BD,#039BE5)",
    green: "linear-gradient(135deg,#2E7D32,#43A047)",
    pink: "linear-gradient(135deg,#AD1457,#E91E63)",
    purple: "linear-gradient(135deg,#6A1B9A,#AB47BC)",
    teal: "linear-gradient(135deg,#00695C,#00897B)"
};

/**
 * Resolve a gradient preset name or return the raw CSS value.
 *
 * @param {string} g - preset name or raw CSS gradient
 * @returns {string}
 */
function gradient(g) {
    return GRADIENTS[g] || g;
}

/**
 * Build the profile photo HTML for a given container size.
 * Falls back to initials if no photo is configured.
 *
 * @returns {string} HTML string
 */
function photoHTML() {
    if (CONFIG.photo) {
        return `<img src="${CONFIG.photo}" alt="${CONFIG.name.full}" onerror="this.parentElement.innerHTML='<span class=ph-initials>${CONFIG.name.initials}</span>'">`;
    }
    return `<span class="ph-initials">${CONFIG.name.initials}</span>`;
}

/**
 * Compute dynamic hero stats from config data.
 *
 * @returns {{ num: string, lbl: string }[]}
 */
function getStats() {
    let totalMonths = 0;
    CONFIG.experience.forEach(e => {
        const s = new Date(e.startDate);
        const end = e.endDate ? new Date(e.endDate) : new Date();
        totalMonths += Math.max(0, (end.getFullYear() - s.getFullYear()) * 12 + (end.getMonth() - s.getMonth()));
    });
    const yrs = (totalMonths / 12).toFixed(1).replace(/\.0$/, "");
    return [
        { num: yrs + "+", lbl: "Yrs Experience" },
        { num: CONFIG.projects.length + "+", lbl: "Projects Built" },
        { num: CONFIG.currentlyBuilding.length, lbl: "In Dev" },
        { num: CONFIG.experience.length, lbl: "Companies" }
    ];
}
