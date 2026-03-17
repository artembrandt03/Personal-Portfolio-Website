import { getCopy } from "../../i18n/copy.js";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header({ language = "en", onToggleLanguage }) {
  const c = getCopy(language);

  const nav = [
    { id: "start", label: c.header.nav.start },
    { id: "about", label: c.header.nav.about },
    { id: "skills", label: c.header.nav.skills },
    { id: "projects", label: c.header.nav.projects },
    { id: "hobbies", label: c.header.nav.hobbies },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="container headerBar">
        <div className="headerBrand">
          <div className="brandStack">
            <span className="brandTitle">{c.header.brandTitle}</span>
          </div>
        </div>

        <div className="headerLang">
          <button
            className="langToggle"
            onClick={onToggleLanguage}
            aria-label="Toggle language"
            aria-pressed={language === "fr"}
          >
            <span className={`langToggleOpt ${language === "en" ? "isActive" : ""}`}>
              ENG
            </span>
            <span className="langToggleSep">|</span>
            <span className={`langToggleOpt ${language === "fr" ? "isActive" : ""}`}>
              FR
            </span>
          </button>
        </div>

        <nav className="headerNav">
          {nav.map((x) => (
            <button
              key={x.id}
              onClick={() => scrollToId(x.id)}
              className="navBtn"
            >
              [ {x.label} ]
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
