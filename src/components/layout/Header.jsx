import { useState } from "react";
import { getCopy } from "../../i18n/copy.js";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header({
  language = "en",
  onToggleLanguage,
  isLanguageTransitionActive = false,
}) {
  const c = getCopy(language);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleLanguage = () => {
    if (typeof onToggleLanguage === "function") {
      onToggleLanguage();
    }
    setIsMenuOpen(false);
  };

  const nav = [
    { id: "start", label: c.header.nav.start },
    { id: "about", label: c.header.nav.about },
    { id: "skills", label: c.header.nav.skills },
    { id: "projects", label: c.header.nav.projects },
    { id: "hobbies", label: c.header.nav.hobbies },
  ];

  const handleNavClick = (id) => {
    scrollToId(id);
    setIsMenuOpen(false);
  };

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

        <div className="headerDesktopRight">
          <div className="headerLang">
            <button
              className="langToggle"
              onClick={handleToggleLanguage}
              aria-label="Toggle language"
              aria-pressed={language === "fr"}
              disabled={isLanguageTransitionActive}
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
                onClick={() => handleNavClick(x.id)}
                className="navBtn"
              >
                [ {x.label} ]
              </button>
            ))}
          </nav>
        </div>

        <button
          type="button"
          className={`headerMenuToggle ${isMenuOpen ? "isOpen" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="headerMenuIcon" aria-hidden="true">
            
          </span>
          <span className="headerMenuLabel">MENU</span>
        </button>
      </div>

      <div className={`headerMenuPanel ${isMenuOpen ? "isOpen" : ""}`}>
        <div className="container headerMenuInner">
          <button
            className="langToggle headerMenuLangToggle"
            onClick={handleToggleLanguage}
            aria-label="Toggle language"
            aria-pressed={language === "fr"}
            disabled={isLanguageTransitionActive}
          >
            <span className={`langToggleOpt ${language === "en" ? "isActive" : ""}`}>
              ENG
            </span>
            <span className="langToggleSep">|</span>
            <span className={`langToggleOpt ${language === "fr" ? "isActive" : ""}`}>
              FR
            </span>
          </button>

          <nav className="headerMenuNav" aria-label="Primary navigation">
            {nav.map((x) => (
              <button
                key={x.id}
                onClick={() => handleNavClick(x.id)}
                className="navBtn headerMenuNavBtn"
              >
                [ {x.label} ]
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
