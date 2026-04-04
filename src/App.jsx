import { useEffect, useState } from "react";
import Shell from "./components/layout/Shell.jsx";

import Home from "./sections/Home.jsx";
import Experience from "./sections/Experience.jsx";
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
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved === "dark" ? "dark" : "light";
  });
  const [labelMode, setLabelMode] = useState(() => {
    const saved = localStorage.getItem("portfolio-label-mode");
    return saved === "gamified" ? "gamified" : "professional";
  });
  const [openProject, setOpenProject] = useState(null);
  const [isLanguageTransitionActive, setIsLanguageTransitionActive] = useState(false);

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.setAttribute("data-theme", theme === "light" ? "light" : "");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio-label-mode", labelMode);
  }, [labelMode]);

  const toggleLanguage = () => {
    const nextLanguage = language === "en" ? "fr" : "en";
    setLanguage(nextLanguage);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleLabelMode = () => {
    setLabelMode((prev) => (prev === "professional" ? "gamified" : "professional"));
  };

  return (
    <>
      <Shell
        language={language}
        onToggleLanguage={toggleLanguage}
        isLanguageTransitionActive={isLanguageTransitionActive}
        theme={theme}
        onToggleTheme={toggleTheme}
          labelMode={labelMode}
          onToggleLabelMode={toggleLabelMode}
      >
        {/* ENTRY */}
        <section id="start" className="section">
          <Home language={language} labelMode={labelMode} />
        </section>

        <section className="section">
          <div className="container">
            <GitHubChart language={language} />
          </div>
        </section>

        {/* EXPERIENCE / QUEST LOG */}
        <section id="experience">
          <Experience language={language} labelMode={labelMode} />
        </section>

        {/* SKILL TREE */}
        <section id="skills" className="section">
          <Skills language={language} labelMode={labelMode} />
        </section>

        {/* INVENTORY */}
        <section id="projects" className="section">
          <Projects onOpen={setOpenProject} language={language} labelMode={labelMode} />
        </section>

        {/* NEW: HOBBIES / SIDE QUESTS */}
        <section id="hobbies" className="section">
          <Hobbies language={language} labelMode={labelMode} />
        </section>

        <ProjectDetail
          project={openProject}
          language={language}
          onClose={() => setOpenProject(null)}
        />
      </Shell>
    </>
  );
}
