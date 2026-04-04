import Highlight from "./Highlight.jsx";
import SwapTypeTitle from "./SwapTypeTitle.jsx";

export default function SectionTitle({ primary, secondary, labelMode = "professional" }) {
  const titleText = labelMode === "gamified" ? secondary : primary;

  return (
    <div className="sectionTitle">
      <Highlight>
        [ <SwapTypeTitle primary={titleText} secondary={titleText} /> ]
      </Highlight>
    </div>
  );
}
