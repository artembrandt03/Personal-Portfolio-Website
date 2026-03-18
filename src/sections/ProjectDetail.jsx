import Divider from "../components/ui/Divider.jsx";
import Highlight from "../components/ui/Highlight.jsx";
import { getCopy } from "../i18n/copy.js";

export default function ProjectDetail({ project, onClose, language = "en" }) {
  if (!project) return null;

  const c = getCopy(language);

  const { links, media, overview, stack } = project;

  const screenshots = Array.isArray(media?.screenshots)
    ? media.screenshots.filter(Boolean)
    : media?.screenshot
      ? [media.screenshot]
      : [];

  return (
    <div onClick={onClose} className="projectModalOverlay">
      <div onClick={(e) => e.stopPropagation()} className="projectModal">
        <div className="projectModalHeader">
          <div className="projectModalTitle">{project.title}</div>
        <button className="closeBtn" onClick={onClose}>
          [ {c.projectDetail.close} ]
        </button>
        </div>

        <div className="projectModalActions">
          {links?.github ? (
            <a className="btn" href={links.github} target="_blank" rel="noreferrer">
              [ GITHUB ]
            </a>
          ) : null}
          {links?.live ? (
            <a className="btn" href={links.live} target="_blank" rel="noreferrer">
              [ {c.projectDetail.live} ]
            </a>
          ) : null}
          {links?.video ? (
            <a className="btn" href={links.video} target="_blank" rel="noreferrer">
              [ {c.projectDetail.video} ]
            </a>
          ) : null}
          {links?.devpost ? (
            <a className="btn" href={links.devpost} target="_blank" rel="noreferrer">
              [ DEVPOST ]
            </a>
          ) : null}
        </div>

        <Divider />

        <div className="sectionTitle">{c.projectDetail.overview}</div>
        <div className="projectModalSection">
          {(overview || []).map((p, i) => (
            <div key={i} className="p" style={{ marginTop: i === 0 ? 0 : 10 }}>
              {p}
            </div>
          ))}
          {!overview?.length ? (
            <div className="p">
              <Highlight>{c.projectDetail.overview}</Highlight> — {project.oneLiner}
            </div>
          ) : null}
        </div>

        {screenshots.length ? (
          <>
            <Divider soft />
            <div className="sectionTitle">{c.projectDetail.screenshot}</div>

            <div className="projectModalShots">
              {screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={media?.alt || `${project.title} screenshot ${i + 1}`}
                  className="projectModalShot"
                  loading="lazy"
                />
              ))}
            </div>
          </>
        ) : null}

        <Divider soft />

        <div className="sectionTitle">{c.projectDetail.techStack}</div>
        <div className="projectModalStack">
          {(stack || []).map((t) => (
            <span key={t} className="projectModalStackTag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
