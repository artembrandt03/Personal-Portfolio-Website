// src/sections/Skills.jsx
import SectionTitle from "../components/ui/SectionTitle.jsx";
import { getCopy } from "../i18n/copy.js";

export default function Skills({ language = "en" }) {
  const c = getCopy(language);

  return (
    <div className="container">
      <SectionTitle
        primary={c.skills.section.primary}
        secondary={c.skills.section.secondary}
      />

      <div className="grid2 skillsGrid">
        {c.skills.sections.map((sec) => (
          <div key={sec.title} className="card skillsTreeCard">
            <div className="skillsTreeTitle">## {sec.title}</div>

            <ul className="skillsTreeList" aria-label={sec.title}>
              {sec.skills.map((skill, index) => {
                const isLast = index === sec.skills.length - 1;

                return (
                  <li key={skill} className="skillsTreeItem">
                    <span className="skillsTreeBranch" aria-hidden="true">
                      {isLast ? "└──" : "├──"}
                    </span>
                    <span className="skillsTreeText">{skill}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}