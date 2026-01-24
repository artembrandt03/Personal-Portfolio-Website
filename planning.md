# Portfolio Website – Concept & Structure

## Overall Vision
A **gamified but mature developer portfolio** inspired by the **Red Barrels / Outlast UI aesthetic**, without horror elements.

The site should feel like:
- a **classified terminal / briefing interface**
- minimal, high-contrast, text-first
- memorable but still recruiter-safe

Tone:
- not overly serious
- confident, intentional, and polished
- feels like a “system interface,” not a theme demo

---

## Visual Aesthetic
- **Black background**, white text
- **Monospace / terminal-style font**
- Minimal color usage (mostly white with rare accent colors)
- Strong typography hierarchy
- No clutter, no gradients, no flashy visuals

Key UI patterns:
- Highlighted white-background text blocks for emphasis
- ALL CAPS for navigation and section headers
- Tight spacing, deliberate layout
- Subtle motion only (fades, slight transitions)

No horror elements:
- No gore
- No jump scares
- No audio by default
- No aggressive effects

---

## Website Structure

### 1. Landing Page (Menu Screen)
Acts like a “main menu” or system entry point.

Contains:
- Name + role/title
- Short tagline
- Quick stats (experience, languages, projects completed)
- Main navigation options:
  - Projects
  - Overview / About
  - Skills
  - Contact

---

### 2. Projects Section – “Inventory / Loot”
Projects are categorized by **rarity**, making it easy for recruiters to prioritize.

Rarity tiers:
- **Legendary** – top 2–3 strongest, most polished projects
- **Epic** – complex, well-built projects
- **Rare** – solid but smaller scope
- **Common** – labs, experiments, coursework

Each project includes:
- Title
- One-line description
- Tech stack tags
- Links:
  - GitHub
  - Live demo (if available)
  - Case study / details page

Visual style:
- Text-first cards or rows
- Rarity indicated with subtle tags (e.g. `[LEGENDARY]`)
- Minimal accent colors per rarity
- No flashy RPG visuals

---

### 3. Project Detail Pages – “Quest Logs”
Individual project breakdowns.

Includes:
- Problem statement
- Solution overview
- Architecture / design decisions
- Challenges faced
- What would be improved next
- Screenshots or short demo video (optional)

---

### 4. Skills Section – “Skill Tree”
Skills are grouped by category rather than a flat list.

Categories:
- Backend
- Frontend
- Databases
- DevOps / Tooling
- Testing / Architecture

Each skill includes:
- Name
- Proficiency level (subtle, not gamified visually)
- Optional short note or usage context

Focus is clarity, not visual gimmicks.

---

### 5. About Section – “Character Sheet”
A concise personal overview.

Includes:
- Short narrative (background, interests, goals)
- Focus on building, learning, and shipping projects
- Links to:
  - GitHub
  - LinkedIn
  - Resume (PDF)

Kept brief and professional.

---

### 6. Contact Section
Simple and direct.

Options:
- Email
- LinkedIn
- Optional contact form

Presented as a “message” or “invite” rather than a generic form.

---

## Technology Direction
- Built as a **React application** (likely Vite-based)
- Static deployment (CDN-backed) for instant load times
- Hosted on a platform that supports:
  - Fast global delivery
  - Custom domain (e.g. artembrandt.ca)
  - SPA routing

---

## Design Principles
- Content first, effects second
- Animations used sparingly and intentionally
- Everything should feel deliberate
- The site should reflect **taste and restraint**, not just technical ability

---

## Key Goals
- Be instantly memorable
- Guide recruiters toward the strongest projects
- Communicate skill level without bragging
- Load instantly, feel professional, stand out visually

---

## Build Order (Conceptual)
1. Lock typography and base colors
2. Build layout with text-only content
3. Add projects and rarity structure
4. Add project detail pages
5. Apply subtle motion and polish last

---

## Project Rarity order distribution
**LEGENDARY (Gold):**
- DawsonDial
- MERN Project Convergence
- Book Reading App

**EPIC (Purple):**

- HairHub
- Weather + Gemini
- Fireworks Simulator

**RARE (Blue):**
- Science Platform (MQTT/WebSocket)
- GreenTravel+
- Virtual Store (Java)
- Love Letter (Java)
- AlcoPredictor (AI)
- Task Management System (DB2)

**COMMON (Green):**
- Simon
- Dicee
- Hangman