import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PixelBlastBg from "../background/PixelBlastBg.jsx";

export default function Shell({
  children,
  language,
  onToggleLanguage,
  isLanguageTransitionActive = false,
  theme = "dark",
  onToggleTheme,
}) {
  const backToTopLabel = language === "fr" ? "Retour en haut" : "Back to top";

  const handleBackToTop = () => {
    const topSection = document.getElementById("start");

    if (topSection) {
      topSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <PixelBlastBg />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header
          language={language}
          onToggleLanguage={onToggleLanguage}
          isLanguageTransitionActive={isLanguageTransitionActive}
          theme={theme}
          onToggleTheme={onToggleTheme}
        />
        <main>{children}</main>
        <div className="backToTopGap">
          <div className="container backToTopWrap">
            <button type="button" className="backToTopBtn" onClick={handleBackToTop}>
              [ {backToTopLabel} ]
            </button>
          </div>
        </div>
        <Footer language={language} />
      </div>
    </div>
  );
}
