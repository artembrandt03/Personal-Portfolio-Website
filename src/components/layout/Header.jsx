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
      <div className="container headerBar">
        <div className="headerBrand">
          <span style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Artem Brandt
          </span>
          <span style={{ color: "var(--muted)", fontSize: 12 }}>
            classified portfolio
          </span>
        </div>

        <nav className="headerNav">
          {NAV.map((x) => (
            <button
              key={x.id}
              onClick={() => scrollToId(x.id)}
              className="navBtn"
            >
              [ {x.label} ]
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
