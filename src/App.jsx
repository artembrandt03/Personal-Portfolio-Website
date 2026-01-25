import { useState } from "react";
import Shell from "./components/layout/Shell.jsx";

import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Hobbies from "./sections/Hobbies.jsx";
import Contact from "./sections/Contact.jsx";
import ProjectDetail from "./sections/ProjectDetail.jsx";

export default function App() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <Shell>
      {/* ENTRY */}
      <section id="start" className="section">
        <Home />
      </section>

      {/* CHARACTER SHEET */}
      <section id="about" className="section">
        <About />
      </section>

      {/* SKILL TREE */}
      <section id="skills" className="section">
        <Skills />
      </section>

      {/* INVENTORY */}
      <section id="projects" className="section">
        <Projects onOpen={setOpenProject} />
      </section>

      {/* NEW: HOBBIES / SIDE QUESTS */}
      <section id="hobbies" className="section">
        <Hobbies />
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <Contact />
      </section>

      <ProjectDetail
        project={openProject}
        onClose={() => setOpenProject(null)}
      />
    </Shell>
  );
}
