import Highlight from "./Highlight.jsx";
import SwapTypeTitle from "./SwapTypeTitle.jsx";

export default function SectionTitle({ primary, secondary }) {
  return (
    <div className="sectionTitle">
      <Highlight>
        [ <SwapTypeTitle primary={primary} secondary={secondary} /> ]
      </Highlight>
    </div>
  );
}
