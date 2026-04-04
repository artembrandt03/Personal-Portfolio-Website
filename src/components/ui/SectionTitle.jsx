import Highlight from "./Highlight.jsx";

export default function SectionTitle({ primary, secondary, labelMode = "professional" }) {
  const titleText = labelMode === "gamified" ? secondary : primary;

  return (
    <div className="sectionTitle">
      <Highlight>
        [ {titleText.toUpperCase()} ]
      </Highlight>
    </div>
  );
}
