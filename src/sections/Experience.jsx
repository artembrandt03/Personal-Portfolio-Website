// src/sections/Experience.jsx
import { getCopy } from "../i18n/copy.js";
import SectionTitle from "../components/ui/SectionTitle.jsx";

import tsImagineLogo from "../assets/images/ts_imagine_logo.jpg";
import dawsonLogo from "../assets/images/Dawson-logo.jpg";

export default function Experience({ language = "en", labelMode = "professional" }) {
  const c = getCopy(language);

  const experiences = [
    {
      id: 1,
      company: "TS Imagine",
      position: language === "en" ? "Quality Assurance Automation Intern" : "Stagiaire en Automatisation Assurance Qualité",
      startDate: "April 2026",
      startDateFr: "Avril 2026",
      endDate: "May 2026",
      endDateFr: "Mai 2026",
      logo: tsImagineLogo,
      description: language === "en" 
        ? "Internship in QA automation, developing and implementing automated testing solutions."
        : "Stage en automatisation QA, développement et mise en œuvre de solutions de test automatisées.",
    },
    {
      id: 2,
      company: "Dawson College",
      position: language === "en" ? "Graduating - Computer Science Technology (CST 420.B0)" : "Diplômé - Techniques de l'informatique (CST 420.B0)",
      startDate: "September 2023",
      startDateFr: "Septembre 2023",
      endDate: "June 2026",
      endDateFr: "Juin 2026",
      logo: dawsonLogo,
      description: language === "en"
        ? "Three-year technical program focused on full-stack development and hands-on software engineering."
        : "Programme technique de trois ans axé sur le développement full-stack et l'ingénierie logicielle pratique.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          primary={c.experience.section.primary}
          secondary={c.experience.section.secondary}
          labelMode={labelMode}
        />

        <div className="experienceTimeline">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="experienceItem">
              <div className="timelineMarker" />
              <div className="experienceCard">
                <div className="experienceHeader">
                  <img src={exp.logo} alt={exp.company} className="experienceLogo" />
                  <div className="experienceHeaderText">
                    <h3 className="experienceCompany">{exp.company}</h3>
                    <div className="experiencePosition">{exp.position}</div>
                  </div>
                </div>

                <div className="experienceMeta">
                  <span className="experienceDate">
                    {language === "en" ? exp.startDate : exp.startDateFr} — {language === "en" ? exp.endDate : exp.endDateFr}
                  </span>
                </div>

                <p className="experienceDescription">{exp.description}</p>
              </div>

              {idx < experiences.length - 1 && <div className="timelineConnector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
