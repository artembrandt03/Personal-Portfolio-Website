import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PixelBlastBg from "../background/PixelBlastBg.jsx";

export default function Shell({ children }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <PixelBlastBg />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
