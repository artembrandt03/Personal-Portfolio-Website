import SectionTitle from "../components/ui/SectionTitle.jsx";

const GROUPS = [
  {
    key: "lang",
    title: "Programming Languages",
    color: "lang",
    nodes: ["Java", "Python", "C#", "JavaScript", "SQL", "Bash", "HTML", "CSS"],
  },
  {
    key: "front",
    title: "Frontend",
    color: "front",
    nodes: ["React", "Vite", "Avalonia", "Bootstrap", "ES Modules"],
  },
  {
    key: "db",
    title: "Databases & Data",
    color: "db",
    nodes: ["PostgreSQL", "MongoDB", "SQLite", "MySQL", "Room (Android)"],
  },
  {
    key: "back",
    title: "Backend & APIs",
    color: "back",
    nodes: ["Node.js", "Express", "Flask", "REST APIs", "JDBC", ".NET / EF Core"],
  },
  {
    key: "ml",
    title: "AI / ML",
    color: "ml",
    nodes: ["Scikit-learn", "TensorFlow", "Transformers", "Neural Nets", "Fine-tuning"],
  },
  {
    key: "devops",
    title: "DevOps & Tooling",
    color: "devops",
    nodes: ["Git", "Docker", "CI/CD", "Linux", "Nginx", "Postman"],
  },
  {
    key: "eng",
    title: "Engineering Practices",
    color: "eng",
    nodes: ["Teamwork", "Agile / Scrum", "Testing", "Debugging", "Project-based dev"],
  },
];

export default function Skills() {
  return (
    <div className="container">
      <SectionTitle primary="Skills" secondary="Skill Tree" />

      <div className="skillTree">
        {/* Grid layout - first 6 in 2 columns */}
        <div className="skillCluster skillClusterLang">
          <Cluster group={GROUPS[0]} />
        </div>

        <div className="skillCluster skillClusterFront">
          <Cluster group={GROUPS[1]} />
        </div>

        <div className="skillCluster skillClusterDb">
          <Cluster group={GROUPS[2]} />
        </div>

        <div className="skillCluster skillClusterBack">
          <Cluster group={GROUPS[3]} />
        </div>

        <div className="skillCluster skillClusterMl">
          <Cluster group={GROUPS[4]} />
        </div>

        <div className="skillCluster skillClusterDevops">
          <Cluster group={GROUPS[5]} />
        </div>

        {/* Engineering spans full width at bottom */}
        <div className="skillCluster skillClusterEng">
          <Cluster group={GROUPS[6]} />
        </div>
      </div>
    </div>
  );
}

function Cluster({ group }) {
  return (
    <div className={`skillGroup skillGroup_${group.color}`}>
      <div className="skillGroupTitle">{group.title}</div>
      <div className="skillNodes">
        {group.nodes.map((n) => (
          <div key={n} className="skillNode" title={n}>
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}