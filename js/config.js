/**
 * config.js
 *
 * ✏️  EDIT ONLY THIS FILE to personalise your portfolio.
 * Everything else is auto-rendered — don't touch unless
 * you want to change layout / logic.
 */

/* global CONFIG */
const CONFIG = {

  /* ── PERSONAL ──────────────────────────────────────────────
     photo: path to your image file (e.g. "photo.jpg")
             place the file next to index.html
             set "" to show initials avatar instead           */
  name: {
    first: "Dixit",
    last: "Vala",
    full: "Dixit Prafulchandra Vala",
    initials: "DV"
  },
  // photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%231976D2'/%3E%3Ccircle cx='100' cy='78' r='36' fill='%23BBDEFB'/%3E%3Cellipse cx='100' cy='160' rx='52' ry='38' fill='%23BBDEFB'/%3E%3Ctext x='100' y='195' font-family='Roboto,sans-serif' font-size='13' fill='%231976D2' text-anchor='middle' font-weight='600'%3EYour Photo Here%3C/text%3E%3C/svg%3E",
  photo: "photo.jpg",
  // photo: "photo.jpg",
  // ↑ DEMO avatar — replace with your actual image filename e.g. "dixit.jpg"

  tagline: "Native Android Developer",
  location: "Navsari, Gujarat, India",
  email: "varadixit@gmail.com",
  phone: "+91 97373 24293",
  availability: "Open to new opportunities", // set "" to hide
  resumeFile: "resume.pdf",

  heroDesc: `I build polished, production-ready Android apps with <b>Kotlin &amp; Java</b>.
Currently working at <b>Keylogic Infotech</b>, building warehouse management tools
for enterprise devices. Passionate about clean architecture, great UX, and the Android platform.`,

  /* ── SOCIAL ───────────────────────────────────────────────*/
  social: [
    { label: "GitHub", icon: "github", url: "https://github.com/Dixitvara" },
    { label: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/vala-dixit" },
    { label: "Phone", icon: "phone", url: "tel:+919737324293" }
  ],

  /* ── ABOUT TEXT ───────────────────────────────────────────*/
  about: [
    `Hey! I'm <b>Dixit Prafulchandra Vala</b>, a Native Android Developer based in Navsari, Gujarat.
     I currently work at <b>Keylogic Infotech Pvt. Ltd.</b> where I build enterprise-grade Android
     applications for warehouse and inventory management.`,
    `I started with a <b>6-month Java Spring Boot internship</b> at Logwintech Pvt. Ltd., which gave me a
     strong backend foundation. I then moved into Android full-time — first as an intern at Keylogic,
     then stepping up as a full-time developer.`,
    `My work spans <b>Kotlin &amp; Java</b>, MVVM architecture, Dagger DI, Retrofit, ML Kit integration,
     and specialised hardware like <b>Zebra barcode scanning devices</b>. I'm also experienced in
     Navigation Component, SQLite, and Google Maps API.`,
    `Outside code, I'm into <b>backend development</b>, tinkering with Linux, and competitive gaming.`
  ],

  /* ── INFO CARDS ───────────────────────────────────────────*/
  infoCards: [
    { icon: "🏢", label: "Current Employer", value: "Keylogic Infotech Pvt. Ltd." },
    { icon: "📱", label: "Specialization", value: "Native Android · Kotlin & Java" },
    { icon: "📞", label: "Phone", value: "+91 97373 24293" },
    { icon: "✅", label: "Status", value: "Open to Opportunities", highlight: true }
  ],

  /* ── ACHIEVEMENTS ─────────────────────────────────────────*/
  achievements: [
    { emoji: "🥇", title: "1st Prize — Code without screen", meta: "MIND SPARK 2023 · Bhagwan Mahaveer University, Surat" },
    { emoji: "🥈", title: "Runners Up — Web Tricks", meta: "TEKXIANZE#2K23 · S.S. Agrawal Engineering, Navsari" },
    { emoji: "🎯", title: "Event Management Lead", meta: "EXPLORICA 2023 · S.S. Agrawal Engineering & Technology Dept.", full: true }
  ],

  /* ── CURRENTLY BUILDING ───────────────────────────────────
     Add any side projects / WIP apps here.
     progress: 0–100  (shows a live progress bar)
     status:   short label shown in the WIP badge            */
  currentlyBuilding: [
    {
      emoji: "💳",
      title: "PayTrack",
      status: "In Development",
      desc: "A personal finance tracker that helps users log daily expenses, categorise spending, and get a clear monthly summary of where their money goes. Built with clean MVVM architecture and offline-first local storage.",
      tech: ["Kotlin", "Room DB", "MVVM", "Coroutines", "Flow", "Jetpack"],
      progress: 35,
      links: [
        { label: "GitHub", icon: "github", url: "https://github.com/Dixitvara" }
      ]
    }
    /* ── To add another WIP project, copy the block above ── */
  ],

  /* ── SKILL CHIPS ──────────────────────────────────────────*/
  skillChips: [
    "🟣 Kotlin", "☕ Java", "📱 Android SDK", "🗂 XML Layouts",
    "🏗 MVVM", "💉 Dagger / Hilt", "🔗 Retrofit + OkHttp", "💾 SQLite / Room",
    "🔥 Firebase", "🧠 ML Kit", "🗺 Google Maps API", "🧭 Navigation Component",
    "🌱 Spring Boot", "🗄 MySQL", "🐙 Git / GitHub", "🔬 Postman"
  ],

  /* ── SKILL CARDS ──────────────────────────────────────────*/
  skillCards: [
    { icon: "📱", bg: "bg-b", title: "Android Development", desc: "Building native Android apps with deep knowledge of the SDK, Activity/Fragment lifecycle, and platform APIs.", tags: ["Kotlin", "Java", "Android SDK", "XML"] },
    { icon: "🏗", bg: "bg-p", title: "Architecture & DI", desc: "Structuring scalable, testable apps using MVVM and Clean Architecture with dependency injection via Dagger.", tags: ["MVVM", "Dagger", "ViewModel", "LiveData"] },
    { icon: "🔗", bg: "bg-t", title: "Networking & Data", desc: "Handling RESTful APIs with Retrofit/OkHttp and local persistence with SQLite for offline-first experiences.", tags: ["Retrofit", "OkHttp", "SQLite", "REST APIs"] },
    { icon: "🧠", bg: "bg-g", title: "ML Kit & Maps", desc: "Integrating Google's ML Kit for on-device language translation and Maps SDK for location-based features.", tags: ["ML Kit", "Translation", "Maps SDK", "Location"] },
    { icon: "🧭", bg: "bg-o", title: "Navigation & UI", desc: "Crafting smooth app flows with Navigation Component and custom view animations and motion events.", tags: ["Nav Component", "Animations", "RecyclerView", "Motion"] },
    { icon: "🌱", bg: "bg-pk", title: "Backend (Java)", desc: "Solid backend foundation from 6 months at Logwintech building REST APIs with Spring Boot and MySQL.", tags: ["Spring Boot", "MySQL", "Postman", "IntelliJ"] }
  ],

  /* ── PROJECTS ─────────────────────────────────────────────
     gradient: "blue"|"cyan"|"green"|"pink"|"purple"|"teal"
               or any raw CSS gradient string                 */
  projects: [
    { emoji: "📦", gradient: "blue", badge: "Enterprise · Zebra", title: "SM3 Warehouse — Zebra Device", tech: ["Kotlin", "Retrofit", "ML Kit", "DataWedge"], desc: "Client-based inventory & shipment management app for Zebra barcode scanners. Uses DataWedge to receive scanned data, shares via ViewModel, integrates ML Kit for language translation.", links: [{ label: "GitHub", icon: "github", url: "https://github.com/Dixitvara" }] },
    { emoji: "🗂", gradient: "cyan", badge: "Enterprise · Tablet", title: "SM3 Warehouse — Tablet Admin", tech: ["Kotlin", "Retrofit", "MVVM", "Dagger"], desc: "Admin-side tablet app for order management in the SM3 warehouse system. Built with MVVM architecture, Dagger DI, and collaborated closely with backend developers.", links: [{ label: "GitHub", icon: "github", url: "https://github.com/Dixitvara" }] },
    { emoji: "📏", gradient: "green", badge: "Maps + Geometry", title: "Distance & Field Measurement", tech: ["Kotlin", "Java", "Google Maps", "SQLite"], desc: "App that calculates distance and area from user-drawn map selections. Uses Google Maps API, custom motion events for coordinate tracking, and SQLite for measurement history.", links: [{ label: "GitHub", icon: "github", url: "https://github.com/Dixitvara" }] },
    { emoji: "📄", gradient: "pink", badge: "100+ Tools", title: "iMZi PDF Converter & Scanner", tech: ["Kotlin", "Retrofit", "API Migration"], desc: "Provided app support and migrated the PDF conversion pipeline from a third-party API to an in-house API. Features 100+ tools for PDF, ZIP, image, and format conversion — online & offline.", links: [{ label: "Play Store", icon: "external", url: "#" }] },
    { emoji: "🎴", gradient: "purple", badge: "Mini Game", title: "Magic Mind Reader", tech: ["Java", "Animation", "RecyclerView"], desc: "A fun Android mind-reading game built with dynamic RecyclerView layouts and screen-coordinate-based animations — MCA first-year mini project.", links: [{ label: "GitHub", icon: "github", url: "https://github.com/Dixitvara" }] },
    { emoji: "🏢", gradient: "teal", badge: "Spring Boot", title: "LW Residential Management", tech: ["Java", "Spring Boot", "MySQL"], desc: "Backend system for managing resident problems — maintenance payments, complaints, event booking, meeting management, guest check-in/out, and pre-invite guest system.", links: [{ label: "GitHub", icon: "github", url: "https://github.com/Dixitvara" }] }
  ],

  /* ── EXPERIENCE ───────────────────────────────────────────
     startDate / endDate: "YYYY-MM-DD"
     endDate: null  →  shows "Present" + live duration       */
  experience: [
    {
      emoji: "🏢", title: "Android Developer", company: "Keylogic Infotech Pvt. Ltd. · Full-time · Navsari",
      startDate: "2025-01-01", endDate: null,
      desc: "Working as a full-time Android developer — building and maintaining enterprise Android apps for clients. Developed warehouse management apps for Zebra barcode devices and tablet admin panels. Responsible for API integration, bug fixes, app support, and production releases.",
      tags: ["Kotlin", "Java", "MVVM", "Retrofit", "ML Kit", "MySQL"]
    },
    {
      emoji: "🎓", title: "Android Developer — Internship", company: "Keylogic Infotech Pvt. Ltd. · 6 Months · Navsari",
      startDate: "2024-07-01", endDate: "2024-12-31",
      desc: "Deep-dived into the Android ecosystem. Learned Kotlin and Java for Android, built demo and production apps, and developed a solid understanding of the Android OS, SDK, and development workflow.",
      tags: ["Kotlin", "Java", "Android SDK", "MySQL"]
    },
    {
      emoji: "🌱", title: "Java Backend Developer — Internship", company: "Logwintech Pvt. Ltd. · 6 Months",
      startDate: "2024-01-01", endDate: "2024-06-30",
      desc: "Gained a strong backend foundation working with Java and Spring Boot. Built the <b>LW Residential Management System</b> — a full-featured resident management platform covering maintenance, events, complaints, and guest management.",
      tags: ["Java", "Spring Boot", "MySQL", "REST APIs", "IntelliJ"]
    }
  ],

  /* ── EDUCATION ────────────────────────────────────────────*/
  education: [
    { icon: "🎓", degree: "Master of Computer Application", school: "S.S. Agrawal Engineering Department, Navsari · GTU", year: "2022 – 2024", cgpa: "8.19" },
    { icon: "🏫", degree: "Bachelor of Computer Application", school: "S.S. Agrawal Commerce & Management, Navsari · VNSGU", year: "2019 – 2022", cgpa: "6.97" }
  ],

  /* ── CONTACT ──────────────────────────────────────────────*/
  contactTitle: "Let's build something great 🚀",
  contactMessage: "Have an app idea, a project, or a role you think I'd be a great fit for? I'm always open to new conversations and opportunities."

}; // ← END OF CONFIG
