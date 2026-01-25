import Highlight from "../components/ui/Highlight.jsx";

export default function About() {
  return (
    <div className="container">
      <div className="sectionTitle">Character Sheet</div>
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
