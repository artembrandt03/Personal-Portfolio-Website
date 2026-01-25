const NAV = [
  { id: "home", label: "Start" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
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
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <span style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Artem Brandt
          </span>
          <span style={{ color: "var(--muted)", fontSize: 12 }}>
            classified portfolio
          </span>
        </div>

        <nav style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          {NAV.map((x) => (
            <button
              key={x.id}
              onClick={() => scrollToId(x.id)}
              style={{
                all: "unset",
                cursor: "pointer",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: 12,
                padding: "8px 6px",
              }}
            >
              [ {x.label} ]
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
