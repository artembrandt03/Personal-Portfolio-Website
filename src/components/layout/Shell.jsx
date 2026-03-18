import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PixelBlastBg from "../background/PixelBlastBg.jsx";

export default function Shell({
  children,
  language,
  onToggleLanguage,
  isLanguageTransitionActive = false,
}) {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <PixelBlastBg />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header
          language={language}
          onToggleLanguage={onToggleLanguage}
          isLanguageTransitionActive={isLanguageTransitionActive}
        />
        <main>{children}</main>
        <Footer language={language} />
      </div>
    </div>
  );
}
