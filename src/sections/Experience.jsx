import { useState } from "react";
import { getCopy } from "../i18n/copy.js";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import ExperienceDetail from "../components/experience/ExperienceDetail.jsx";

import tsImagineLogo from "../assets/images/ts_imagine_logo.jpg";
import dawsonLogo from "../assets/images/Dawson-logo.jpg";

export default function Experience({ language = "en", labelMode = "professional" }) {
  const c = getCopy(language);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      id: "tsImagine",
      company: "TS Imagine",
      position: language === "en" ? "Quality Assurance Automation Intern" : "Stagiaire en Automatisation Assurance Qualité",
      period: language === "en" ? "April — May 2026" : "Avril — Mai 2026",
      logo: tsImagineLogo,
      snippet: language === "en"
        ? "Developed POC for test migration evaluation and maintained playwright test suites for trading applications."
        : "Développement de POC pour l'évaluation de la migration de tests et maintenance de suites de test Playwright.",
      description: language === "en"
        ? `• Built a proof-of-concept evaluating migration of automated tests into Canary, TS Imagine's internal Java/Cucumber/Playwright test framework, benchmarking migration time and complexity across test cases to support a stakeholder go/no-go decision.
• Authored and maintained end-to-end Playwright/TypeScript test modules from TestRail test cases for a client-facing trading application, refactoring existing tests for reusability.
• Collaborated with senior developers to debug flaky automated tests; worked within a Jira/Bitbucket/TeamCity workflow with daily standups.
• Maintained and updated TestRail test case documentation.`
        : `• Construit une preuve de concept évaluant la migration des tests automatisés vers Canary, le cadre de test interne Java/Cucumber/Playwright de TS Imagine, en mesurant le temps et la complexité de la migration pour soutenir une décision de progression.
• Actualisé et maintenu des modules de test end-to-end Playwright/TypeScript à partir de cas de test TestRail pour une application de trading destinée aux clients, en refactorisiant les tests existants pour la réutilisabilité.
• Collaboré avec des développeurs seniors pour déboguer les tests automatisés instables; travaillé dans un workflow Jira/Bitbucket/TeamCity avec des points quotidiens.
• Maintenu et actualisé la documentation des cas de test TestRail.`,
    },
    {
      id: "dawson",
      company: "Dawson College",
      position: language === "en" ? "Graduated — Computer Science Technology (CST 420.B0)" : "Diplômé — Techniques de l'informatique (CST 420.B0)",
      period: language === "en" ? "Graduated June 2026" : "Diplômé Juin 2026",
      logo: dawsonLogo,
      snippet: language === "en"
        ? "Three-year technical program focused on full-stack development and hands-on software engineering."
        : "Programme technique de trois ans axé sur le développement full-stack et l'ingénierie logicielle pratique.",
      description: language === "en"
        ? "Three-year technical program focused on full-stack development and hands-on software engineering. Completed coursework in web development, databases, software design patterns, networking, and agile methodologies."
        : "Programme technique de trois ans axé sur le développement full-stack et l'ingénierie logicielle pratique. Cours complétés en développement web, bases de données, motifs de conception logicielle, réseaux et méthodologies agiles.",
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
              <button
                onClick={() => setSelectedExperience(exp)}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  display: "block",
                  width: "100%",
                }}
              >
                <div className="experienceCard">
                  <div className="experienceHeader">
                    <img src={exp.logo} alt={exp.company} className="experienceLogo" />
                    <div className="experienceHeaderText">
                      <h3 className="experienceCompany">{exp.company}</h3>
                      <div className="experiencePosition">{exp.position}</div>
                    </div>
                  </div>

                  <div className="experienceMeta">
                    <span className="experienceDate">{exp.period}</span>
                  </div>

                  <p className="experienceDescription">{exp.snippet}</p>
                  <div className="pressToOpen">{c.experience.pressToOpen}</div>
                </div>
              </button>

              {idx < experiences.length - 1 && <div className="timelineConnector" />}
            </div>
          ))}
        </div>
      </div>

      {selectedExperience && (
        <ExperienceDetail
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
          language={language}
        />
      )}
    </section>
  );
}
