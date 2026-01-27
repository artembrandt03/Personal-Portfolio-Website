import Divider from "../components/ui/Divider.jsx";
import Highlight from "../components/ui/Highlight.jsx";

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  const { links, media, overview, stack } = project;

  const screenshots = Array.isArray(media?.screenshots)
    ? media.screenshots.filter(Boolean)
    : media?.screenshot
      ? [media.screenshot]
      : [];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 18,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(860px, 100%)",
          maxHeight: "85vh",
          overflow: "auto",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius)",
          background: "rgba(0,0,0,0.92)",
          padding: 18,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <div style={{ fontSize: 16 }}>{project.title}</div>
        <button className="closeBtn" onClick={onClose}>
          [ CLOSE ]
        </button>
        </div>

        <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
          {links?.github ? (
            <a className="btn" href={links.github} target="_blank" rel="noreferrer">
              [ GITHUB ]
            </a>
          ) : null}
          {links?.live ? (
            <a className="btn" href={links.live} target="_blank" rel="noreferrer">
              [ LIVE ]
            </a>
          ) : null}
          {links?.video ? (
            <a className="btn" href={links.video} target="_blank" rel="noreferrer">
              [ VIDEO ]
            </a>
          ) : null}
          {links?.devpost ? (
            <a className="btn" href={links.devpost} target="_blank" rel="noreferrer">
              [ DEVPOST ]
            </a>
          ) : null}
        </div>

        <Divider />

        <div className="sectionTitle">Overview</div>
        <div style={{ marginTop: 10 }}>
          {(overview || []).map((p, i) => (
            <div key={i} className="p" style={{ marginTop: i === 0 ? 0 : 10 }}>
              {p}
            </div>
          ))}
          {!overview?.length ? (
            <div className="p">
              <Highlight>Overview</Highlight> — {project.oneLiner}
            </div>
          ) : null}
        </div>

        {screenshots.length ? (
          <>
            <Divider soft />
            <div className="sectionTitle">Screenshot</div>

            <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
              {screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={media?.alt || `${project.title} screenshot ${i + 1}`}
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    border: "1px solid var(--line)",
                    display: "block",
                  }}
                  loading="lazy"
                />
              ))}
            </div>
          </>
        ) : null}

        <Divider soft />

        <div className="sectionTitle">Tech Stack</div>
        <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
          {(stack || []).map((t) => (
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
      </div>
    </div>
  );
}
