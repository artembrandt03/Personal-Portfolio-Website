import { useMemo, useState } from "react";
import Divider from "../components/ui/Divider.jsx";
import ProjectGrid from "../components/projects/ProjectGrid.jsx";
import Tag from "../components/ui/Tag.jsx";
import { projects } from "../data/projects.js";
import { RARITY_ORDER } from "../utils/rarity.js";
import SectionTitle from "../components/ui/SectionTitle.jsx";

const RARITY_BLURB = {
  LEGENDARY:
    "Portfolio highlights — the most complete, challenging, and polished builds I’m proudest of.",
  EPIC:
    "Large, hands-on projects with real features and structure — solid complexity and lots of learning.",
  RARE:
    "Unique builds and experiments — strong ideas, interesting tech, and problem-solving reps.",
  COMMON:
    "Where I started — simpler (but fun) projects that helped me build fundamentals and confidence.",
};

export default function Projects({ onOpen }) {
  const [filter, setFilter] = useState("LEGENDARY");

  const grouped = useMemo(() => {
    const map = new Map();
    for (const r of RARITY_ORDER) map.set(r, []);
    for (const p of projects) map.get(p.rarity)?.push(p);
    return map;
  }, []);

  const visible = (rarity) => filter === "ALL" || filter === rarity;

  return (
    <div className="container">
      <SectionTitle primary="Projects" secondary="Inventory" />

      <div className="filterRow">
        {RARITY_ORDER.map((r) => (
          <button
            key={r}
            className="rarityFilterBtn"
            data-rarity={r}
            onClick={() => setFilter(r)}
            aria-pressed={filter === r}
          >
            [ {r} ]
          </button>
        ))}

        <button
          className="rarityFilterBtn rarityFilterBtnAll"
          data-rarity="ALL"
          onClick={() => setFilter("ALL")}
          aria-pressed={filter === "ALL"}
        >
          [ ALL ]
        </button>
      </div>

      <Divider />

      {RARITY_ORDER.map((r) =>
        visible(r) ? (
          <div key={r} style={{ marginBottom: 28 }}>
          <div className="rarityHeader">
            <Tag rarity={r} />
            <span className="rarityCount">({grouped.get(r).length})</span>
          </div>

            {/* NEW: subsection description (your red highlighted area) */}
            <div className="rarityBlurb">{RARITY_BLURB[r]}</div>

            <ProjectGrid projects={grouped.get(r)} onOpen={onOpen} />
          </div>
        ) : null
      )}
    </div>
  );
}
