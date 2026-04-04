import { useEffect, useRef, useState } from "react";
import { getCopy } from "../../i18n/copy.js";
import settingsIcon from "../../assets/images/setting.png";
import brightnessIcon from "../../assets/images/brightness.png";
import nightModeIcon from "../../assets/images/night-mode.png";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header({
  language = "en",
  onToggleLanguage,
  isLanguageTransitionActive = false,
  theme = "dark",
  onToggleTheme,
}) {
  const c = getCopy(language);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef(null);

  useEffect(() => {
    if (!isSettingsOpen) return;

    const handlePointerDown = (event) => {
      if (!settingsRef.current?.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isSettingsOpen]);

  const handleToggleLanguage = () => {
    if (typeof onToggleLanguage === "function") {
      onToggleLanguage();
    }
    setIsMenuOpen(false);
  };

  const handleToggleTheme = () => {
    if (typeof onToggleTheme === "function") {
      onToggleTheme();
    }
  };

  const nav = [
    { id: "start", label: c.header.nav.start },
    { id: "about", label: c.header.nav.about },
    { id: "skills", label: c.header.nav.skills },
    { id: "projects", label: c.header.nav.projects },
    { id: "hobbies", label: c.header.nav.hobbies },
  ];
  const mobileWarning =
    c.header.mobileWarning ??
    (language === "fr"
      ? "Interface mobile en cours de developpement. Des bugs visuels peuvent apparaitre."
      : "Mobile UI in development. Visual bugs may appear.");

  const handleNavClick = (id) => {
    scrollToId(id);
    setIsMenuOpen(false);
    setIsSettingsOpen(false);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1200,
        background: "var(--header-bg)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--panel-border)",
      }}
    >
      <div className="container headerBar">
        <div className="headerBrand">
          <div className="brandStack">
            <span className="brandTitle">{c.header.brandTitle}</span>
          </div>
        </div>

        <div className="headerDesktopRight">
          <div className="headerSettingsWrap" ref={settingsRef}>
            <button
              type="button"
              className={`headerSettingsBtn ${isSettingsOpen ? "isOpen" : ""}`}
              aria-label="Open settings"
              aria-haspopup="menu"
              aria-expanded={isSettingsOpen}
              onClick={() => setIsSettingsOpen((open) => !open)}
            >
              <img src={settingsIcon} alt="" className="headerSettingsIcon" />
            </button>

            <div className={`headerSettingsPanel ${isSettingsOpen ? "isOpen" : ""}`} role="menu">
              <div className="headerSettingsGroup">
                <span className="headerSettingsLabel">{c.header.settings?.language ?? "Language"}</span>
                <button
                  className="langToggle"
                  onClick={handleToggleLanguage}
                  aria-label="Toggle language"
                  aria-pressed={language === "fr"}
                  disabled={isLanguageTransitionActive}
                  role="menuitem"
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

              <div className="headerSettingsGroup">
                <span className="headerSettingsLabel">{c.header.settings?.colorTheme ?? "Color Theme"}</span>
                <button
                  className="themeToggle"
                  onClick={handleToggleTheme}
                  aria-label="Toggle theme"
                  aria-pressed={theme === "light"}
                  role="menuitem"
                >
                  <span className={`themeToggleOpt ${theme === "light" ? "isActive" : ""}`}>
                    <img src={brightnessIcon} alt="" className="themeToggleIcon" />
                  </span>
                  <span className="themeToggleSep">|</span>
                  <span className={`themeToggleOpt ${theme === "dark" ? "isActive" : ""}`}>
                    <img src={nightModeIcon} alt="" className="themeToggleIcon" />
                  </span>
                </button>
              </div>
            </div>
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

      <div className="container headerMobileWarning" role="note">
        {mobileWarning}
      </div>

      <div className={`headerMenuPanel ${isMenuOpen ? "isOpen" : ""}`}>
        <div className="container headerMenuInner">
          <div className="headerMenuToggles">
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

            <button
              className="themeToggle headerMenuThemeToggle"
              onClick={handleToggleTheme}
              aria-label="Toggle theme"
              aria-pressed={theme === "light"}
            >
              <span className={`themeToggleOpt ${theme === "light" ? "isActive" : ""}`}>
                LIGHT
              </span>
              <span className="themeToggleSep">|</span>
              <span className={`themeToggleOpt ${theme === "dark" ? "isActive" : ""}`}>
                DARK
              </span>
            </button>
          </div>

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
