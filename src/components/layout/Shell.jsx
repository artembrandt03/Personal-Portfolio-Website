import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import FaultyTerminal from "../background/FaultyTerminal.jsx";

export default function Shell({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
