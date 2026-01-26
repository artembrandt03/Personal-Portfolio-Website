const NAV = [
  { id: "start", label: "START" },
  { id: "about", label: "CHARACTER" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "INVENTORY" },
  { id: "hobbies", label: "SIDE QUESTS" },
  { id: "contact", label: "CONTACT" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="container"
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
          minWidth: 0, // IMPORTANT: lets the nav shrink instead of overflow
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, minWidth: 0 }}>
          <span style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Artem Brandt
          </span>
          <span style={{ color: "var(--muted)", fontSize: 12 }}>
            classified portfolio
          </span>
        </div>

        <nav
          style={{
            display: "flex",
            gap: 18,
            flexWrap: "nowrap",     // no wrap
            overflow: "hidden",     // no inner scrollbar
            minWidth: 0,
          }}
        >
          {NAV.map((x) => (
            <button key={x.id} onClick={() => scrollToId(x.id)} className="navBtn">
              [ {x.label} ]
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
