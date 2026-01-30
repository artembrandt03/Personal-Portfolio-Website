// src/sections/Skills.jsx
import SectionTitle from "../components/ui/SectionTitle.jsx";

const SKILL_SECTIONS = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C#", "JavaScript", "HTML", "CSS", "SQL", "Bash"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "Vite", "Avalonia", "HTML/CSS", "JavaScript (ES Modules)", "Bootstrap"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "Flask", ".NET (Entity Framework)", "JDBC", "REST APIs"],
  },
  {
    title: "Databases & Data",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "MySQL", "Room (Android)"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "Transformers",
      "Neural Networks",
      "Decision Trees",
      "Transfer Learning",
      "Model Fine-tuning",
      "Google Colab",
    ],
  },
  {
    title: "DevOps & Tooling",
    skills: [
      "Git (GitHub, GitLab)",
      "Docker",
      "CI/CD",
      "Linux",
      "Nginx",
      "Postman",
      "VS Code",
      "Visual Studio",
    ],
  },
  {
    title: "Engineering Practices",
    skills: [
      "Team collaboration",
      "Agile & SCRUM",
      "Version control workflows",
      "Testing & debugging",
      "Project-based development",
      "DevOps mindset",
    ],
  },
];

export default function Skills() {
  return (
    <div className="container">
      <SectionTitle primary="Skills" secondary="Skill Tree" />

      <div className="grid2 skillsGrid">
        {SKILL_SECTIONS.map((sec) => (
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