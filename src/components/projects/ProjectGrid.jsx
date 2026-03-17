import ProjectCard from "./ProjectCard.jsx";

export default function ProjectGrid({ projects, onOpen, language = "en" }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 14,
      }}
    >
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          project={p}
          onOpen={onOpen}
          language={language}
        />
      ))}
      <style>{`
        @media (max-width: 880px) {
          div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
