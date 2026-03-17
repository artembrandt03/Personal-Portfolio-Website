import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PixelBlastBg from "../background/PixelBlastBg.jsx";

export default function Shell({ children, language, onToggleLanguage }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <PixelBlastBg />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header language={language} onToggleLanguage={onToggleLanguage} />
        <main>{children}</main>
        <Footer language={language} />
      </div>
    </div>
  );
}
