import { useMemo, useState } from "react";
import Divider from "../components/ui/Divider.jsx";
import ProjectGrid from "../components/projects/ProjectGrid.jsx";
import Tag from "../components/ui/Tag.jsx";
import { projects } from "../data/projects.js";
import { RARITY_ORDER } from "../utils/rarity.js";

export default function Projects({ onOpen }) {
  const [filter, setFilter] = useState("ALL");

  const grouped = useMemo(() => {
    const map = new Map();
    for (const r of RARITY_ORDER) map.set(r, []);
    for (const p of projects) map.get(p.rarity)?.push(p);
    return map;
  }, []);

  const visible = (rarity) => filter === "ALL" || filter === rarity;

  return (
    <div className="container">
      <div className="sectionTitle">Inventory</div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <button className="btn" onClick={() => setFilter("ALL")}>
          [ All ]
        </button>
        {RARITY_ORDER.map((r) => (
          <button key={r} className="btn" onClick={() => setFilter(r)}>
            <Tag rarity={r} />
          </button>
        ))}
      </div>

      <Divider />

      {RARITY_ORDER.map((r) =>
        visible(r) ? (
          <div key={r} style={{ marginBottom: 28 }}>
            <div className="sectionTitle">
              <Tag rarity={r} /> <span style={{ color: "var(--faint)" }}>({grouped.get(r).length})</span>
            </div>
            <ProjectGrid projects={grouped.get(r)} onOpen={onOpen} />
          </div>
        ) : null
      )}
    </div>
  );
}
