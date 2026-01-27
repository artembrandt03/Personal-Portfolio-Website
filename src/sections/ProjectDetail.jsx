import Divider from "../components/ui/Divider.jsx";

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  const { title, overview, media, stack, links } = project;

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
          width: "min(900px, 100%)",
          maxHeight: "85vh",
          overflowY: "auto",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius)",
          background: "rgba(0,0,0,0.92)",
          padding: 20,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <div style={{ fontSize: 18 }}>{title}</div>
          <button
            onClick={onClose}
            style={{
              border: "1px solid var(--line)",
              background: "var(--bg)",
              color: "var(--text)",
              borderRadius: 999,
              padding: "6px 12px",
              cursor: "pointer",
              fontSize: 12,
            }}
          >
            [ CLOSE ]
          </button>
        </div>

        <Divider />

        {(links?.github || links?.video || links?.live) && (
          <>
            <div className="row" style={{ gap: 10, flexWrap: "wrap" }}>
              {links.github && (
                <a className="btn" href={links.github} target="_blank" rel="noreferrer">
                  [ GitHub ]
                </a>
              )}
              {links.video && (
                <a className="btn" href={links.video} target="_blank" rel="noreferrer">
                  [ Video ]
                </a>
              )}
              {links.live && (
                <a className="btn" href={links.live} target="_blank" rel="noreferrer">
                  [ Live ]
                </a>
              )}
            </div>

            <Divider soft />
          </>
        )}

        <div className="sectionTitle">Overview</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {(overview || []).map((p, i) => (
            <p key={i} className="p" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              {p}
            </p>
          ))}
        </div>

        {media?.screenshot && (
          <>
            <Divider soft />

            <div className="sectionTitle">Screenshot</div>
            <div
              style={{
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                marginTop: 8,
              }}
            >
              <img
                src={media.screenshot}
                alt={media.alt || ""}
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </>
        )}

        {stack?.length > 0 && (
          <>
            <Divider soft />

            <div className="sectionTitle">Tech Stack</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
              {stack.map((t) => (
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
          </>
        )}
      </div>
    </div>
  );
}
