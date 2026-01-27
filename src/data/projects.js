import dawsonDialPreview from "../assets/images/previews/Dawson-Dial.png";
import convergencePreview from "../assets/images/previews/MERN-Convergence.png";
import bookAppPreview from "../assets/images/previews/Book-App.png";
import weatherPreview from "../assets/images/previews/Weather-API.png";
import fireworksPreview from "../assets/images/previews/Fireworks.png";
import metroPreview from "../assets/images/previews/Metro-Trip-Planner.png";


export const projects = [
  {
    id: "dawsondial",
    title: "DawsonDial — College Management System",
    rarity: "LEGENDARY",
    oneLiner:
      "Full-scale college management desktop app simulating real academic admin workflows: users, courses, enrollment, scheduling, events, and admin logging.",
    stack: ["C#", ".NET", "Avalonia", "EF Core", "PostgreSQL"],
    meta: "Desktop Application",
    overview: [
      "DawsonDial is a full-scale college management desktop application that simulates real academic administration workflows such as user management, course enrollment, scheduling, events, and administrative logging.",
      "The system supports three roles — Admin, Student, and Teacher — each with its own permissions, menus, and responsibilities. It’s built with a clean separation of concerns and secure authentication practices."
    ],
    media: {
      screenshot: dawsonDialPreview,
      alt: "DawsonDial preview"
    },
    links: {
      github: "https://github.com/artembrandt03/DawsonDial",
      live: "",
      video: "https://www.youtube.com/watch?v=5MVbZ24Strk",
    },
  },

  {
    id: "convergence",
    title: "Project Convergence — MERN Data Visualization",
    rarity: "LEGENDARY",
    oneLiner:
      "Full-stack data visualization platform exploring the relationship between urbanization and internet connectivity worldwide from 2000–2024.",
    stack: [
      "React",
      "Vite",
      "Chart.js",
      "Leaflet",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    meta: "Web Application",
    overview: [
      "Project Convergence is a full-stack MERN data visualization platform that explores how urban population growth and internet connectivity evolved together worldwide between 2000 and 2024.",
      "Users can explore global and country-level trends through interactive charts and maps that update dynamically by year. The project emphasizes performance optimization, scalability, and clear data storytelling across client, server, and database layers."
    ],
    media: {
      screenshot: convergencePreview,
      alt: "Project Convergence preview"
    },
    links: {
      github: "https://github.com/artembrandt03/MERN-WebProject",
      live: "https://2025-520-project-brandt-masumi-jiang.justlearning.net/",
      video: ""
    }
  },


  {
    id: "bookapp",
    title: "Book Reading App — Android (Kotlin)",
    rarity: "LEGENDARY",
    oneLiner:
      "Offline-first Android reading app supporting book downloads, full-text search, text-to-speech narration, and reading progress tracking.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "MVVM",
      "Hilt",
      "Coroutines"
    ],
    meta: "Mobile Application",
    overview: [
      "The Book Reading App delivers a complete mobile reading experience that allows users to download, store, and read HTML-formatted books directly on their device.",
      "It supports offline reading, full-text search, text-to-speech narration, localization, and automatic progress tracking. The app is designed with modern Android practices and a clean MVVM architecture."
    ],
    media: {
      screenshot: bookAppPreview,
      alt: "Book Reading App preview"
    },
    links: {
      github: "https://github.com/artembrandt03/BookReadingApp-Android-Project",
      live: "",
      video: "https://www.youtube.com/watch?v=dwgH2oGBw1E"
    }
  },


  {
    id: "hairhub",
    title: "HairHub — Hair Salon Web Platform",
    rarity: "EPIC",
    oneLiner:
      "Full-stack salon management platform with role-based accounts, appointment booking, profile management, and an admin dashboard.",
    stack: ["Python", "Flask", "WTForms", "PostgreSQL", "Docker"],
    meta: "Web Application",
    overview: [
      "HairHub is a full-stack Flask web application that simulates a real-world hair salon management system for clients, professionals, and administrators.",
      "Users can register, manage profiles (including avatars), create and manage appointments, and access protected admin tools like user management, appointment oversight, and report workflows."
    ],
    media: null,
    links: {
      github: "https://github.com/artembrandt03/HairHub-Barbershop-Fullstack-Project",
      live: "",
      video: ""
    }
  },

  {
    id: "weather",
    title: "Weather Forecast App — OpenWeather + Gemini",
    rarity: "EPIC",
    oneLiner:
      "Full-stack weather app with city search, geolocation, caching, and AI-generated summaries—built with a secure server proxy for API keys.",
    stack: ["Vite", "JavaScript", "Node.js", "Express", "OpenWeather", "Gemini"],
    meta: "Web Application",
    overview: [
      "This weather forecast web app lets users search cities, use geolocation, and view detailed forecast data with a smooth, polished UI and smart caching for faster reloads.",
      "It also generates AI summaries and suggestions using Google Gemini, while keeping all API keys private through an Express backend proxy with rate limiting and usage protections."
    ],
    media: {
      screenshot: weatherPreview,
      alt: "Weather Forecast App preview"
    },
    links: {
      github: "https://github.com/artembrandt03/Weather-API-Project",
      live: "https://weather-api-project-ptff.onrender.com/",
      video: "https://www.youtube.com/watch?v=dwLjwfxsJsA"
    }
  },

  {
    id: "fireworks",
    title: "Fireworks Simulator — C# MonoGame",
    rarity: "EPIC",
    oneLiner:
      "Real-time fireworks simulation featuring particle physics, multiple explosion patterns, sound, interactive controls, and a scripted show mode.",
    stack: ["C#", "MonoGame", "OOP", "Testing"],
    meta: "Desktop Application",
    overview: [
      "Fireworks Simulator is a real-time MonoGame simulation where users can launch fireworks manually, trigger different explosion patterns, and run scripted multi-wave shows with sound and on-screen controls.",
      "The project is built as a multi-project C# solution with clean separation between rendering, physics logic, reusable shape utilities, and test/benchmark projects for reliability and performance."
    ],
    media: {
      screenshot: fireworksPreview,
      alt: "Fireworks Simulator preview"
    },
    links: {
      github: "https://github.com/artembrandt03/Fireworks-Simulation-Project",
      live: "",
      video: "https://www.youtube.com/watch?v=2KNP2KN5YVg"
    }
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
      "Full-stack STM metro trip planner that validates routes on the same line, visualizes them on a map, and fetches station summaries from Wikipedia.",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Leaflet",
      "STM Open Data",
      "Wikipedia API"
    ],
    meta: "Web Application",
    overview: [
      "Metro Trip Planner is a full-stack web app that helps users plan trips between STM metro stations in Montreal by selecting a start and end station and visualizing the route on an interactive map.",
      "It uses official STM open data for station and line accuracy, validates trips to prevent invalid cross-line routes, and enriches stations with real-time Wikipedia summaries directly in map popups."
    ],
    media: {
      screenshot: metroPreview,
      alt: "Metro Trip Planner preview"
    },
    links: {
      github: "https://github.com/artembrandt03/Metro-Trip-Planner",
      live: "",
      video: ""
    }
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
