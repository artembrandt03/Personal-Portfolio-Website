import Tag from "../ui/Tag.jsx";

export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={() => onOpen(project)}
      style={{
        all: "unset",
        cursor: "pointer",
        display: "block",
        width: "100%",
      }}
    >
      <div
        className="card projectCard"
        data-rarity={project.rarity}
        style={{ transition: "border-color 120ms ease" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <Tag rarity={project.rarity} />
          <span style={{ color: "var(--faint)", fontSize: 12 }}>
            {project.meta ?? ""}
          </span>
        </div>

        <div style={{ marginTop: 10, fontSize: 16 }}>{project.title}</div>
        <div style={{ marginTop: 8, color: "var(--muted)", lineHeight: 1.6 }}>
          {project.oneLiner}
        </div>

        <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
          {project.stack.slice(0, 5).map((t) => (
            <span
              key={t}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 999,
                padding: "6px 10px",
                fontSize: 12,
                color: "var(--muted)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ marginTop: 14, color: "var(--faint)", fontSize: 12 }}>
          press to open
        </div>
      </div>
    </button>
  );
}
