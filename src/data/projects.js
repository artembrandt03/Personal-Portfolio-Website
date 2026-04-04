import dawsonDialPreview from "../assets/images/previews/Dawson-Dial.png";
import convergencePreview from "../assets/images/previews/MERN-Convergence.png";
import bookAppPreview from "../assets/images/previews/Book-App.png";
import weatherPreview from "../assets/images/previews/Weather-API.png";
import fireworksPreview from "../assets/images/previews/Fireworks.png";
import metroPreview from "../assets/images/previews/Metro-Trip-Planner.png";
import sciencePreview1 from "../assets/images/previews/MQTT-1.png";
import sciencePreview2 from "../assets/images/previews/MQTT-2.png";
import greenTravelPreview from "../assets/images/previews/GreenTravelPlus.png";
import virtualStorePreview from "../assets/images/previews/VirtualStore.png";
import loveLetterPreview from "../assets/images/previews/LoveLetter.png";
import jdbcPreview from "../assets/images/previews/JDBC.png";
import diceePreview from "../assets/images/previews/Dicee.png";
import simonPreview from "../assets/images/previews/Simon.png";
import stockedDemo1 from "../assets/images/previews/stocked-demo-1.png";
import stockedDemo2 from "../assets/images/previews/stocked-demo-2.png";
import stockedDemo3 from "../assets/images/previews/stocked-demo-3.png";
import stockedDemo4 from "../assets/images/previews/stocked-demo-4.png";
import stockedDemo5 from "../assets/images/previews/stocked-demo-5.png";
import stockedDemo6 from "../assets/images/previews/stocked-demo-6.png";
import stockedDemo7 from "../assets/images/previews/stocked-demo-7.png";


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
    id: "stocked",
    title: "Stocked — Real-Time Trading Simulation Platform",
    rarity: "LEGENDARY",
    oneLiner:
      "Practice-trading platform with live market data, portfolio sandboxing, structured learning paths, and an AI trading mentor.",
    stack: [
      "React 19",
      "Vite 7",
      "Node.js",
      "Express 5",
      "Supabase/PostgreSQL",
      "Finnhub API",
      "Google Gemini API",
      "Stripe",
      "TradingView Charts",
      "Azure App Service",
      "GitLab CI/CD",
      "Semgrep"
    ],
    meta: "Full-Stack Web Platform",
    overview: [
      "Stocked is a full-stack trading simulation platform designed for learners who want hands-on market practice without financial risk. Users buy and sell stocks with virtual funds, track portfolio performance, and explore live dashboard data powered by Finnhub and TradingView charts.",
      "Beyond trading, the platform includes progressive educational courses with quizzes and progress tracking, a Gemini-powered AI mentor for contextual guidance, and partner tooling for gated course publishing via Stripe subscriptions. The system supports secure Supabase authentication (email/password + Google OAuth) and ships through automated GitLab CI/CD to separate Azure dev and production environments."
    ],
    media: {
      screenshots: [
        stockedDemo1,
        stockedDemo2,
        stockedDemo3,
        stockedDemo4,
        stockedDemo5,
        stockedDemo6,
        stockedDemo7
      ],
      alt: "Stocked platform screenshots"
    },
    links: {
      github: "https://github.com/artembrandt03/Stocked",
      live: "https://stocked-production-d6hfhqduhmfmcbhg.eastus-01.azurewebsites.net/",
      video: "https://www.youtube.com/watch?v=I-qPv1IeRpo"
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
    title: "Science Platform — MQTT & WebSocket",
    rarity: "RARE",
    oneLiner:
      "Python-based monitoring simulation: MQTT sensor pipeline + async WebSocket chat with CLI and browser clients.",
    stack: ["Python", "MQTT", "WebSockets", "asyncio", "JavaScript"],
    meta: "Networking Mini Project",
    overview: [
      "Science Platform is a Data Communications mini project simulating forest monitoring where Raspberry Pi-style sensors publish environmental data and images over MQTT.",
      "It also includes a real-time WebSocket chat system (browser + CLI clients) so “scientists” can communicate live while observing incoming sensor messages."
    ],
    media: {
      screenshots: [sciencePreview1, sciencePreview2],
      alt: "Science Platform screenshots"
    },
    links: {
      github: "https://github.com/artembrandt03/MQTT-And-WebSocketChat",
      live: "",
      video: ""
    }
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

  {
    id: "greentravel",
    title: "GreenTravel+ — Hackathon Full-Stack",
    rarity: "RARE",
    oneLiner:
      "Hackathon project for eco-friendly travel decisions: flight options optimized for both price and carbon emissions, plus AI insights.",
    stack: ["React", "Vite", "Flask", "MongoDB", "Gemini"],
    meta: "Hackathon Web App",
    overview: [
      "GreenTravel+ was built during JACHacks 2025 to encourage eco-friendly travel decisions by ranking flight options using both cost and carbon emissions.",
      "The app integrates multiple APIs (including Google Gemini for contextual suggestions) and uses a clean separation between a React frontend and Flask backend with MongoDB reference data."
    ],
    media: {
      screenshot: greenTravelPreview,
      alt: "GreenTravel+ preview"
    },
    links: {
      github: "https://github.com/artembrandt03/GreenTravelPlus",
      live: "",
      video: "https://www.youtube.com/watch?v=D1hUhAS9oo0",
      devpost: "https://devpost.com/software/greentravel"
    }
  },

  {
    id: "virtualstore",
    title: "Virtual Store Application — Java",
    rarity: "RARE",
    oneLiner:
      "Console store with cart, coupons, loyalty points, filtering/sorting, CSV persistence, and full JUnit coverage (48 tests).",
    stack: ["Java", "Maven", "JUnit", "CSV"],
    meta: "Console Application",
    overview: [
      "A team-built Java console shopping system where guests and registered users can browse products, manage a cart, apply coupons, and complete purchases with loyalty points.",
      "The project emphasizes layered architecture (business/data/display), file-based persistence via CSV, and strong reliability through a fully passing JUnit test suite."
    ],
    media: {
      screenshot: virtualStorePreview,
      alt: "Virtual Store preview"
    },
    links: {
      github: "https://github.com/artembrandt03/VirtualStore-Application-Project--Java-3",
      live: "",
      video: ""
    }
  },

  {
    id: "loveletter",
    title: "Love Letter — Java Card Game",
    rarity: "RARE",
    oneLiner:
      "Turn-based console card game built with clean OOP classes, validation, and reusable game mechanics.",
    stack: ["Java"],
    meta: "Console Game",
    overview: [
      "A Java implementation of the Love Letter card game developed for Programming 2, focused on object-oriented design and clean separation of responsibilities.",
      "Includes turn flow, input validation, deck/hand/discard management, and modular helper methods to keep gameplay logic readable and maintainable."
    ],
    media: {
      screenshot: loveLetterPreview,
      alt: "Love Letter preview"
    },
    links: {
      github: "https://github.com/artembrandt03/LoveLetter-CardGame---Java-2-project",
      live: "",
      video: ""
    }
  },

  {
    id: "alcopredictor",
    title: "AlcoPredictor — ML Project",
    rarity: "RARE",
    oneLiner:
      "ML project predicting early signs of student alcohol consumption with an ethics-first approach (Decision Tree + Random Forest).",
    stack: ["Python", "Scikit-learn", "TensorFlow", "Streamlit"],
    meta: "Machine Learning Project",
    overview: [
      "AlcoPredictor was developed during the AI LaunchLab Summer 2024 cohort (with Dawson AI) to explore early-intervention style predictions using anonymized student data.",
      "The project evaluated classic ML models (Decision Tree and Random Forest), prioritized ethics and privacy, and used tools like Google Colab and Streamlit for development and presentation."
    ],
    media: null,
    links: {
      github: "https://github.com/artembrandt03/AlcoPredictor-Ai-Model",
      live: "",
      video: ""
    }
  },

  {
    id: "taskmgmt",
    title: "Task Management System — DB Project",
    rarity: "RARE",
    oneLiner:
      "JIRA-inspired team/sprint/ticket system using a relational DB with PL/SQL logic and a Java UI connected via JDBC.",
    stack: ["SQL", "PL/SQL", "JDBC", "Java"],
    meta: "Database Application",
    overview: [
      "A Database 2 course project inspired by JIRA that supports teams, sprints, and ticket workflows with role-based login for admins and employees.",
      "Built around a relational database with PL/SQL procedures/triggers for integrity and a Java application using JDBC for data manipulation and status tracking."
    ],
    media: {
      screenshot: jdbcPreview,
      alt: "Task Management System preview"
    },
    links: {
      github: "https://github.com/artembrandt03/Task-Management-App-JDBC?tab=readme-ov-file",
      live: "",
      video: ""
    }
  },

  {
    id: "simon",
    title: "Simon Game — Mini Web Project",
    rarity: "COMMON",
    oneLiner:
      "Classic Simon memory game with sequence playback, input locking, and score-based game-over flow.",
    stack: ["HTML", "CSS", "JavaScript", "jQuery"],
    meta: "Web Application",
    overview: [
      "A web recreation of the classic Simon memory game: the app generates a growing color sequence and you repeat it by clicking the buttons.",
      "This project focuses on DOM/event handling, timed sequence playback with setTimeout, basic state management using arrays, and sound feedback."
    ],
    media: {
      screenshot: simonPreview,
      alt: "Simon game preview"
    },
    links: {
      github: "https://github.com/artembrandt03/Simon-Game",
      live: "https://artembrandt03.github.io/Simon-Game/",
      video: ""
    }
  },

  {
    id: "dicee",
    title: "Dicee — Mini Web Game",
    rarity: "COMMON",
    oneLiner:
      "Front-end dice roll simulator that updates dice images and announces Player 1, Player 2, or Draw.",
    stack: ["HTML", "CSS", "JavaScript"],
    meta: "Web Application",
    overview: [
      "Dicee is a small front-end project that simulates a two-player dice roll and displays the winner (or a draw).",
      "It’s intentionally lightweight: no build tools or frameworks—just HTML/CSS/JS DOM updates driven by random rolls."
    ],
    media: {
      screenshot: diceePreview,
      alt: "Dicee game preview"
    },
    links: {
      github: "https://github.com/artembrandt03/Dicee-Game",
      live: "https://artembrandt03.github.io/Dicee-Game/",
      video: ""
    }
  },

  {
    id: "hangman",
    title: "Hangman — Java (First Project)",
    rarity: "COMMON",
    oneLiner:
      "My first Java project: console hangman built with loops, arrays, random word selection, and input validation.",
    stack: ["Java", "Console", "Arrays", "Scanner", "Random"],
    meta: "Console Application",
    overview: [
      "This Hangman game was my first-ever Java project, built during my introductory programming class at Dawson College.",
      "It focuses on fundamentals: variables/data types, loops and conditionals, random word selection, and handling user input to drive a full win/lose game loop."
    ],
    media: null,
    links: {
      github: "https://github.com/artembrandt03/Hangman---Java-1-mini-project",
      live: "",
      video: ""
    }
  }
];
