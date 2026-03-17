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
          <div key={sec.title} className="card skillsCard">
            <div className="skillsSubTitle">{sec.title}</div>

            <div className="skillsPills">
              {sec.skills.map((s) => (
                <span key={s} className="skillPill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}