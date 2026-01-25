import { useState } from "react";
import Shell from "./components/layout/Shell.jsx";

import Home from "./sections/Home.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import ProjectDetail from "./sections/ProjectDetail.jsx";

export default function App() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <Shell>
      <section id="home" className="section">
        <Home />
      </section>

      <section id="projects" className="section">
        <Projects onOpen={setOpenProject} />
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="about" className="section">
        <About />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

      <ProjectDetail project={openProject} onClose={() => setOpenProject(null)} />
    </Shell>
  );
}
