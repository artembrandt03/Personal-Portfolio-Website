import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import FaultyTerminal from "../background/FaultyTerminal.jsx";

export default function Shell({ children }) {
  return (
    <>
      {/* Background layer */}
      <div className="bgLayer" aria-hidden="true">
        <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={0.4}
            pause={false}
            scanlineIntensity={0.5}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={0.9}
            chromaticAberration={0}
            dither={0}
            curvature={0.1}
            tint="#A7EF9E"
            mouseReact
            mouseStrength={0.5}
            pageLoadAnimation
            brightness={0.4}
          />
      </div>

      {/* App layer */}
      <div className="appLayer">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
