export const projects = [
  {
    id: "dawsondial",
    title: "DawsonDial — College Management System",
    rarity: "LEGENDARY",
    oneLiner:
      "C# Avalonia desktop system with roles, scheduling, EF Core + PostgreSQL, logging, and tests.",
    stack: ["C#", ".NET", "Avalonia", "EF Core", "PostgreSQL"],
    links: {
      github: "",
      live: "",
      video: "https://www.youtube.com/watch?v=5MVbZ24Strk",
    },
    quest: {
      problem:
        "Simulate real academic admin workflows (users, courses, events, schedules) with role-based access.",
      solution:
        "Desktop app with Admin/Student/Teacher flows, secure auth, audit logging, and a clean service/repository architecture.",
      highlights: [
        "Role-based menus and authorization",
        "PBKDF2 password hashing",
        "EF Core migrations + PostgreSQL",
        "Admin audit logging",
      ],
      improvements: ["Optional: installer/release packaging", "UI polish passes"],
    },
  },

  {
    id: "convergence",
    title: "Project Convergence — MERN Data Visualization",
    rarity: "LEGENDARY",
    oneLiner:
      "React + Node/Express + MongoDB app exploring urbanization vs internet usage with maps, charts, tests, and CI/CD.",
    stack: ["React", "Vite", "Chart.js", "Leaflet", "Node", "Express", "MongoDB"],
    links: {
      github: "",
      live: "https://2025-520-project-brandt-masumi-jiang.justlearning.net/",
      video: "",
    },
    quest: {
      problem:
        "Show global + country-level trends (2000–2024) with strong performance and clear data storytelling.",
      solution:
        "Interactive charts/maps with lazy loading + optimized delivery; tested REST API; CI/CD to deploy.",
      highlights: ["Lazy-loaded heavy components", "API tests", "CI/CD pipeline"],
      improvements: ["More narrative insights per country", "More mobile polish"],
    },
  },

  {
    id: "bookapp",
    title: "Book Reading App — Android (Kotlin)",
    rarity: "LEGENDARY",
    oneLiner:
      "Offline reading app with Room, Compose, MVVM, TTS, full-text search, and localization.",
    stack: ["Kotlin", "Jetpack Compose", "Room", "MVVM", "Hilt", "Coroutines"],
    links: { github: "", live: "", video: "https://www.youtube.com/watch?v=dwgH2oGBw1E" },
    quest: {
      problem: "Deliver a complete mobile reading experience with offline support.",
      solution:
        "Download + parse HTML books into chapters, store locally, track progress, search, and narrate with TTS.",
      highlights: ["Room persistence", "TTS", "Localization (EN/FR)"],
      improvements: ["Better typography controls", "More book source integrations"],
    },
  },

  {
    id: "hairhub",
    title: "HairHub — Hair Salon Web Platform",
    rarity: "EPIC",
    oneLiner:
      "Flask full-stack salon system with roles, appointments, admin dashboard, PostgreSQL, and Blueprints.",
    stack: ["Python", "Flask", "WTForms", "PostgreSQL", "Docker"],
    links: { github: "", live: "", video: "" },
    quest: {
      problem: "Support clients, professionals, and admins with booking and management flows.",
      solution:
        "Blueprint-based backend with RBAC, database workflows, and clean separation of concerns.",
      highlights: ["RBAC", "Blueprint architecture", "DB-driven workflows"],
      improvements: ["Public deployment", "More automated testing"],
    },
  },

  {
    id: "weather",
    title: "Weather Forecast App — OpenWeather + Gemini",
    rarity: "EPIC",
    oneLiner:
      "Vite + vanilla JS frontend with Express proxy backend, caching, geolocation, rate-limited Gemini summaries.",
    stack: ["Vite", "JavaScript", "Node", "Express", "OpenWeather", "Gemini"],
    links: { github: "", live: "https://weather-api-project-ptff.onrender.com/", video: "" },
    quest: {
      problem: "Build a clean weather app with secure key handling and AI summaries.",
      solution:
        "Server-side proxy keeps keys private; client provides fast UX with caching and location support.",
      highlights: ["API keys never on client", "Rate limiting", "Local storage caching"],
      improvements: ["Move to fast host", "Mobile optimization"],
    },
  },

  {
    id: "fireworks",
    title: "Fireworks Simulator — C# MonoGame",
    rarity: "EPIC",
    oneLiner:
      "Real-time simulation with patterns, input controls, audio, cleanup, benchmarking, and tests.",
    stack: ["C#", "MonoGame", "OOP", "Testing"],
    links: { github: "", live: "", video: "https://www.youtube.com/watch?v=2KNP2KN5YVg" },
    quest: {
      problem: "Simulate fireworks physics and patterns in a real-time loop.",
      solution:
        "Modular multi-project solution with clean separation (rendering/physics/shapes), plus testing/benchmarking.",
      highlights: ["Pattern system", "Performance benchmarking", "Unit tests"],
      improvements: ["More pattern types", "Preset show editor"],
    },
  },

  {
    id: "science",
    title: "Science Platform — MQTT + WebSocket",
    rarity: "RARE",
    oneLiner:
      "MQTT sensor pipeline + async WebSocket chat with CLI and browser clients.",
    stack: ["Python", "MQTT", "WebSockets", "asyncio", "JavaScript"],
    links: { github: "", live: "", video: "" },
    quest: {
      problem: "Simulate forest monitoring data and real-time scientist communication.",
      solution:
        "Sensors publish JSON and images via MQTT; chat runs over websockets with browser + CLI clients.",
      highlights: ["Protocol integration", "Async server", "Topic-based filtering"],
      improvements: ["Persist chat history", "Better dashboard UI"],
    },
  },

  {
    id: "metro-trip-planner",
    title: "Metro Trip Planner",
    rarity: "EPIC",
    oneLiner:
      "Full-stack STM metro trip planner with Leaflet map, route validation, and live Wikipedia station summaries.",
    stack: ["React", "Vite", "Node.js", "Express", "Leaflet", "STM Open Data", "Wikipedia API"],
    links: {
      github: "https://github.com/artembrandt03/Metro-Trip-Planner",
      live: "",
      video: "",
    },
    quest: {
      problem:
        "Help users plan valid STM metro trips between Montreal stations and visualize the route clearly.",
      solution:
        "React UI + Express backend using STM GeoJSON for coordinates/lines and Wikipedia API for station info in map popups.",
      highlights: [
        "Line-aware trip validation (prevents cross-line invalid trips)",
        "Interactive Leaflet map with clickable stations",
        "Wikipedia summaries per station (REST API)",
        "Uses official STM open data (GeoJSON)",
      ],
      improvements: ["Add transfer support (multi-line trips)", "Better mobile layout"],
    },
  },

  { id: "greentravel", title: "GreenTravel+ — Hackathon Full-Stack", rarity: "RARE", oneLiner: "Hackathon app for eco-friendly travel decisions using AI and multiple APIs.", stack: ["React", "Flask", "MongoDB", "Gemini"], links: { github: "", live: "", video: "" }, quest: { problem: "Encourage greener travel choices.", solution: "Combine flight data + emissions + AI insights.", highlights: ["Multi-API integration"], improvements: ["Revive deployment"] } },

  { id: "virtualstore", title: "Virtual Store — Java", rarity: "RARE", oneLiner: "Layered console store with cart, coupons, points, filtering, CSV persistence, and JUnit tests.", stack: ["Java", "Maven", "JUnit"], links: { github: "", live: "", video: "" }, quest: { problem: "Build a complete store workflow in a console app.", solution: "Layered design with persistence and tests.", highlights: ["48 tests passing"], improvements: ["Add DB + UI"] } },

  { id: "loveletter", title: "Love Letter — Java Card Game", rarity: "RARE", oneLiner: "OOP card game with turn flow, validation, and reusable classes.", stack: ["Java"], links: { github: "", live: "", video: "" }, quest: { problem: "Implement a full game loop with rules.", solution: "Modular classes for deck/player/cards.", highlights: ["Validation + game flow"], improvements: ["Better UI"] } },

  { id: "alcopredictor", title: "AlcoPredictor — ML Project", rarity: "RARE", oneLiner: "ML model predicting early signs of alcohol consumption with ethics-first approach.", stack: ["Python", "Scikit-learn", "TensorFlow", "Streamlit"], links: { github: "", live: "", video: "" }, quest: { problem: "Early intervention via predictions.", solution: "Trained/evaluated models with ethical considerations.", highlights: ["Decision Tree + Random Forest"], improvements: ["Deployment + metrics page"] } },

  { id: "taskmgmt", title: "Task Management System — DB Project", rarity: "RARE", oneLiner: "JIRA-inspired system using relational DB, PL/SQL, triggers, and JDBC.", stack: ["SQL", "PL/SQL", "JDBC", "Java"], links: { github: "", live: "", video: "" }, quest: { problem: "Manage teams/sprints/tickets with DB integrity.", solution: "Normalized DB with triggers + Java UI.", highlights: ["DB-heavy architecture"], improvements: ["Finish remaining flows"] } },

  { id: "simon", title: "Simon Game — Mini Web", rarity: "COMMON", oneLiner: "Classic Simon memory game with jQuery.", stack: ["HTML", "CSS", "JavaScript", "jQuery"], links: { github: "", live: "https://artembrandt03.github.io/Simon-Game/", video: "" }, quest: { problem: "Practice DOM + timing.", solution: "Sequence playback + input locking.", highlights: ["Timing control"], improvements: ["Better animations"] } },

  { id: "dicee", title: "Dicee — Mini Web", rarity: "COMMON", oneLiner: "Two-player dice roll with DOM updates.", stack: ["HTML", "CSS", "JavaScript"], links: { github: "", live: "https://artembrandt03.github.io/Dicee-Game/", video: "" }, quest: { problem: "Practice random + DOM.", solution: "Roll dice and show winner.", highlights: ["Simple and clean"], improvements: ["Add stats"] } },

  { id: "hangman", title: "Hangman — Java", rarity: "COMMON", oneLiner: "First Java project: console hangman.", stack: ["Java"], links: { github: "", live: "", video: "" }, quest: { problem: "Practice fundamentals.", solution: "Loops, arrays, input validation.", highlights: ["Foundational project"], improvements: ["OOP refactor"] } },
];
