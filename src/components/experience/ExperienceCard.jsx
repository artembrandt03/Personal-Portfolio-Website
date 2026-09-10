import { getCopy } from "../../i18n/copy.js";

export default function ExperienceCard({ experience, onOpen, language = "en" }) {
  const c = getCopy(language);

  return (
    <button
      onClick={() => onOpen(experience)}
      style={{
        all: "unset",
        cursor: "pointer",
        display: "block",
        width: "100%",
      }}
    >
      <div className="card experienceCard">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
          <img 
            src={experience.logo} 
            alt={experience.company} 
            className="experienceCardLogo"
          />
          <span style={{ color: "var(--faint)", fontSize: 12, textAlign: "right" }}>
            {experience.period}
          </span>
        </div>

        <div style={{ marginTop: 10, fontSize: 16 }}>{experience.company}</div>
        <div style={{ marginTop: 4, fontSize: 14, color: "var(--muted)" }}>{experience.position}</div>
        <div style={{ marginTop: 8, color: "var(--muted)", lineHeight: 1.6, fontSize: 13 }}>
          {experience.snippet}
        </div>

        <div className="pressToOpen">{c.experience.pressToOpen}</div>
      </div>
    </button>
  );
}
