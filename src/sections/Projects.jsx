// src/sections/Projects.jsx
import { useMemo, useState } from "react";
import Divider from "../components/ui/Divider.jsx";
import ProjectGrid from "../components/projects/ProjectGrid.jsx";
import Tag from "../components/ui/Tag.jsx";
import { projects } from "../data/projects.js";
import { RARITY_ORDER, rarityLabel } from "../utils/rarity.js";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import { getCopy } from "../i18n/copy.js";

export default function Projects({ onOpen, language = "en", labelMode = "professional" }) {
  const c = getCopy(language);
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
      <SectionTitle
        primary={c.projects.section.primary}
        secondary={c.projects.section.secondary}
        labelMode={labelMode}
      />

      {/* NEW: big black wrapper panel */}
      <div className="projectsPanel">
        <div className="filterRow">
          {RARITY_ORDER.map((r) => (
            <button
              key={r}
              className="rarityFilterBtn"
              data-rarity={r}
              onClick={() => setFilter(r)}
              aria-pressed={filter === r}
            >
              {rarityLabel(r, language, labelMode)}
            </button>
          ))}

          <button
            className="rarityFilterBtn rarityFilterBtnAll"
            data-rarity="ALL"
            onClick={() => setFilter("ALL")}
            aria-pressed={filter === "ALL"}
          >
            [ {c.projects.allLabel} ]
          </button>
        </div>

        <Divider />

        {RARITY_ORDER.map((r) =>
          visible(r) ? (
            <div key={r} className="projectsRarityBlock">
              <div className="rarityHeader">
                <Tag rarity={r} language={language} labelMode={labelMode} />
                <span className="rarityCount">({grouped.get(r).length})</span>
              </div>

              <div className="rarityBlurb">{c.projects.blurbs[r]}</div>

              <ProjectGrid
                projects={grouped.get(r)}
                onOpen={onOpen}
                language={language}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}