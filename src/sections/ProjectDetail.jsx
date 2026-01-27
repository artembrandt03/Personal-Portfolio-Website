// src/sections/ProjectDetail.jsx
import Divider from "../components/ui/Divider.jsx";
import Highlight from "../components/ui/Highlight.jsx";

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  const { links, quest } = project;
  const hasNewLayout = Array.isArray(project.overview) && project.overview.length > 0;

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
          <button
            className="btn"
            onClick={onClose}
            style={{ background: "var(--fg)", color: "var(--bg)" }}
          >
            [ Close ]
          </button>
        </div>

        <Divider />

        {hasNewLayout ? (
          <>
            <div className="sectionTitle">Overview</div>

            {project.overview.map((para, i) => (
              <p key={i} className="p" style={{ marginBottom: 12 }}>
                {para}
              </p>
            ))}

            {project.media?.screenshot ? (
              <>
                <Divider soft />
                <div className="sectionTitle">Screenshot</div>
                <img
                  src={project.media.screenshot}
                  alt={project.media.alt || project.title}
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    border: "1px solid var(--line)",
                  }}
                />
              </>
            ) : null}

            <Divider soft />

            <div className="sectionTitle">Links</div>
            <div className="row">
              {links?.github ? (
                <a className="btn" href={links.github} target="_blank" rel="noreferrer">
                  [ GitHub ]
                </a>
              ) : null}
              {links?.video ? (
                <a className="btn" href={links.video} target="_blank" rel="noreferrer">
                  [ Video ]
                </a>
              ) : null}
              {links?.live ? (
                <a className="btn" href={links.live} target="_blank" rel="noreferrer">
                  [ Live ]
                </a>
              ) : null}
            </div>
          </>
        ) : (
          <>
            <div className="p">
              <Highlight>Problem</Highlight> — {quest?.problem}
            </div>

            <div style={{ height: 12 }} />

            <div className="p">
              <Highlight>Solution</Highlight> — {quest?.solution}
            </div>

            <Divider soft />

            <div className="sectionTitle">Highlights</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.8 }}>
              {(quest?.highlights || []).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <Divider soft />

            <div className="sectionTitle">Links</div>
            <div className="row">
              {links?.github ? (
                <a className="btn" href={links.github} target="_blank" rel="noreferrer">
                  [ GitHub ]
                </a>
              ) : null}
              {links?.live ? (
                <a className="btn" href={links.live} target="_blank" rel="noreferrer">
                  [ Live ]
                </a>
              ) : null}
              {links?.video ? (
                <a className="btn" href={links.video} target="_blank" rel="noreferrer">
                  [ Video ]
                </a>
              ) : null}
            </div>

            <Divider soft />

            <div className="sectionTitle">Future Improvements</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.8 }}>
              {(quest?.improvements || []).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
