import Highlight from "../components/ui/Highlight.jsx";
import SwapTypeTitle from "../components/ui/SwapTypeTitle.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";

export default function About() {
  return (
    <div className="container">
      <SectionTitle primary="About Me" secondary="Character Sheet" />
      <div className="card">
        <p className="p">
          <Highlight>Summary</Highlight> — Computer Science student who learns by shipping real projects.
          I like clean structure, strong fundamentals, and building systems that feel polished.
        </p>
        <div style={{ height: 12 }} />
        <p className="p">
          This site is organized like an inventory: the best projects are marked <Highlight>LEGENDARY</Highlight>,
          with deeper “quest logs” for details.
        </p>
      </div>
    </div>
  );
}
