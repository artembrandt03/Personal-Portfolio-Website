import Divider from "../ui/Divider.jsx";
import { getCopy } from "../../i18n/copy.js";

export default function ExperienceDetail({ experience, onClose, language = "en" }) {
  if (!experience) return null;

  const c = getCopy(language);

  const bullets = Array.isArray(experience.description)
    ? experience.description
    : experience.description
      ? [experience.description]
      : [];

  return (
    <div onClick={onClose} className="projectModalOverlay">
      <div onClick={(e) => e.stopPropagation()} className="projectModal">
        <div className="projectModalHeader">
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            {experience.logo && (
              <img
                src={experience.logo}
                alt={experience.company}
                className="experienceCardLogo"
              />
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div className="projectModalTitle">{experience.company}</div>
              <div style={{ fontSize: 13, color: "var(--muted)" }}>{experience.position}</div>
              <div style={{ fontSize: 12, color: "var(--faint)" }}>{experience.period}</div>
            </div>
          </div>
          <button className="closeBtn" onClick={onClose}>
            [ {c.experience.close} ]
          </button>
        </div>

        <Divider />

        <div className="sectionTitle">{c.experience.highlights}</div>
        <div className="projectModalSection">
          {bullets.map((point, i) => (
            <div key={i} className="p" style={{ marginTop: i === 0 ? 0 : 10 }}>
              {point}
            </div>
          ))}
        </div>

        {experience.stack?.length ? (
          <>
            <Divider soft />
            <div className="sectionTitle">{c.projectDetail.techStack}</div>
            <div className="projectModalStack">
              {experience.stack.map((t) => (
                <span key={t} className="projectModalStackTag">
                  {t}
                </span>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
