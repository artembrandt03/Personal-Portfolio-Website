import Divider from "../ui/Divider.jsx";
import { getCopy } from "../../i18n/copy.js";

export default function ExperienceDetail({ experience, onClose, language = "en" }) {
  if (!experience) return null;

  const c = getCopy(language);

  return (
    <div onClick={onClose} className="projectModalOverlay">
      <div onClick={(e) => e.stopPropagation()} className="projectModal">
        <div className="projectModalHeader">
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div className="projectModalTitle">{experience.company}</div>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>{experience.position}</div>
            <div style={{ fontSize: 12, color: "var(--faint)" }}>{experience.period}</div>
          </div>
          <button className="closeBtn" onClick={onClose}>
            [ {c.experience.close} ]
          </button>
        </div>

        <Divider />

        <div className="projectModalSection">
          {experience.description && (
            <div style={{ whiteSpace: "pre-line", lineHeight: 1.8, color: "var(--fg)", fontSize: 13 }}>
              {experience.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
