import { useEffect, useState } from "react";
import Shell from "./components/layout/Shell.jsx";

import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Hobbies from "./sections/Hobbies.jsx";
import ProjectDetail from "./sections/ProjectDetail.jsx";
import GitHubChart from "./components/ui/GitHubChart.jsx";

export default function App() {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("portfolio-language");
    return saved === "fr" ? "fr" : "en";
  });
  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    <Shell language={language} onToggleLanguage={toggleLanguage}>
      {/* ENTRY */}
      <section id="start" className="section">
        <Home language={language} />
      </section>

      <section className="section">
        <div className="container">
          <GitHubChart language={language} />
        </div>
      </section>

      {/* CHARACTER SHEET */}
      <section id="about" className="section">
        <About language={language} />
      </section>

      {/* SKILL TREE */}
      <section id="skills" className="section">
        <Skills language={language} />
      </section>

      {/* INVENTORY */}
      <section id="projects" className="section">
        <Projects onOpen={setOpenProject} language={language} />
      </section>

      {/* NEW: HOBBIES / SIDE QUESTS */}
      <section id="hobbies" className="section">
        <Hobbies language={language} />
      </section>

      <ProjectDetail
        project={openProject}
        language={language}
        onClose={() => setOpenProject(null)}
      />
    </Shell>
  );
}
