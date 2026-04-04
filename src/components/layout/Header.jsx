import { useEffect, useRef, useState } from "react";
import { getCopy } from "../../i18n/copy.js";
import settingsIcon from "../../assets/images/setting.png";
import brightnessIcon from "../../assets/images/brightness.png";
import nightModeIcon from "../../assets/images/night-mode.png";
import briefcaseIcon from "../../assets/images/briefcase.png";
import gameIcon from "../../assets/images/game.png";

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
  labelMode = "professional",
  onToggleLabelMode,
}) {
  const c = getCopy(language);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsButtonRef = useRef(null);
  const settingsPanelRef = useRef(null);

  useEffect(() => {
    if (!isSettingsOpen) return;

    const handlePointerDown = (event) => {
      const isInButton = settingsButtonRef.current?.contains(event.target);
      const isInPanel = settingsPanelRef.current?.contains(event.target);

      if (!isInButton && !isInPanel) {
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

  const handleToggleLabelMode = () => {
    if (typeof onToggleLabelMode === "function") {
      onToggleLabelMode();
    }
    setIsMenuOpen(false);
  };

  const navLabels = c.header.nav?.[labelMode] ?? c.header.nav?.professional ?? c.header.nav;
  const nav = [
    { id: "start", label: navLabels.start },
    { id: "about", label: navLabels.about },
    { id: "skills", label: navLabels.skills },
    { id: "projects", label: navLabels.projects },
    { id: "hobbies", label: navLabels.hobbies },
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

  const settingsContent = (
    <div className={`headerSettingsPanel ${isSettingsOpen ? "isOpen" : ""}`} role="menu" ref={settingsPanelRef}>
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

      <div className="headerSettingsGroup">
        <span className="headerSettingsLabel">{c.header.settings?.labelMode ?? "Label Mode"}</span>
        <button
          className="modeToggle"
          onClick={handleToggleLabelMode}
          aria-label="Toggle label mode"
          aria-pressed={labelMode === "gamified"}
          role="menuitem"
        >
          <span className={`modeToggleOpt ${labelMode === "professional" ? "isActive" : ""}`}>
            <img src={briefcaseIcon} alt="" className="modeToggleIcon" />
          </span>
          <span className="modeToggleSep">|</span>
          <span className={`modeToggleOpt ${labelMode === "gamified" ? "isActive" : ""}`}>
            <img src={gameIcon} alt="" className="modeToggleIcon" />
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <header
        className="siteHeader"
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
            <div className="headerSettingsWrap" ref={settingsButtonRef}>
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
            </div>

            <nav className="headerNav">
              {nav.map((x) => (
                <button key={x.id} onClick={() => handleNavClick(x.id)} className="navBtn">
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
            <span className="headerMenuIcon" aria-hidden="true"></span>
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

              <button
                className="modeToggle headerMenuThemeToggle"
                onClick={handleToggleLabelMode}
                aria-label="Toggle label mode"
                aria-pressed={labelMode === "gamified"}
              >
                <span className={`modeToggleOpt ${labelMode === "professional" ? "isActive" : ""}`}>
                  <img src={briefcaseIcon} alt="" className="modeToggleIcon" />
                </span>
                <span className="modeToggleSep">|</span>
                <span className={`modeToggleOpt ${labelMode === "gamified" ? "isActive" : ""}`}>
                  <img src={gameIcon} alt="" className="modeToggleIcon" />
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

      <div className={`headerSettingsDock ${isSettingsOpen ? "isOpen" : ""}`}>
        <div className="container headerSettingsDockInner">{settingsContent}</div>
      </div>
    </>
  );
}
