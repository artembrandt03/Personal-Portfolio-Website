import PixelBlast from "./PixelBlast.jsx";

export default function PixelBlastBg() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none", // critical
      }}
    >
      <PixelBlast
        variant="square"
        pixelSize={5}
        color="#B19EFF"
        patternScale={2}
        patternDensity={1.6}
        speed={0.35}
        edgeFade={0.25}
        transparent
      />
    </div>
  );
}