const NAV = [
  { id: "start", label: "OVERVIEW" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "hobbies", label: "BEYOND" },
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
        <span>[ classified portfolio ]</span>
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
