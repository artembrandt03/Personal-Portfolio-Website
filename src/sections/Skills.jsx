// src/sections/Skills.jsx
import SectionTitle from "../components/ui/SectionTitle.jsx";
import { getCopy } from "../i18n/copy.js";

import programmingLanguagesIcon from "../assets/images/skills/programming-languages.png";
import frontendIcon from "../assets/images/skills/frontend.png";
import backendIcon from "../assets/images/skills/backend.png";
import databaseIcon from "../assets/images/skills/database.png";
import mlIcon from "../assets/images/skills/ml.png";
import devopsIcon from "../assets/images/skills/devops.png";
import engineeringPracticesIcon from "../assets/images/skills/eng-practices.png";

export default function Skills({ language = "en" }) {
  const c = getCopy(language);

  const iconByTitle = {
    "Programming Languages": programmingLanguagesIcon,
    "Frontend Development": frontendIcon,
    "Backend & APIs": backendIcon,
    "Databases & Data": databaseIcon,
    "AI & Machine Learning": mlIcon,
    "DevOps & Tooling": devopsIcon,
    "Engineering Practices": engineeringPracticesIcon,
  };

  return (
    <div className="container">
      <SectionTitle
        primary={c.skills.section.primary}
        secondary={c.skills.section.secondary}
      />

      <div className="grid2 skillsGrid">
        {c.skills.sections.map((sec, index) => {
          const colorClass = `skillsTreeCard--color${index % 7}`;
          const icon = iconByTitle[sec.title];

          return (
            <div key={sec.title} className={`card skillsTreeCard ${colorClass}`}>
              <div className="skillsTreeTitle">
                {icon && (
                  <img
                    src={icon}
                    alt={`${sec.title} icon`}
                    className="skillsTreeIcon"
                    loading="lazy"
                  />
                )}
                <span className="skillsTreeTitleText">
                  <span className="skillsTreeHash">##</span> {sec.title}
                </span>
              </div>

              <ul className="skillsTreeList" aria-label={sec.title}>
                {sec.skills.map((skill, skillIndex) => {
                  const isLast = skillIndex === sec.skills.length - 1;

                  return (
                    <li key={skill} className="skillsTreeItem">
                      <span className="skillsTreeBranch" aria-hidden="true">
                        {isLast ? "\u2514\u2500" : "\u251c\u2500"}
                      </span>
                      <span className="skillsTreeText">{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
