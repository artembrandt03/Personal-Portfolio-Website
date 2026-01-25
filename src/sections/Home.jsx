import Highlight from "../components/ui/Highlight.jsx";
import { profile } from "../data/profile.js";

export default function Home() {
  return (
    <div className="container">
      <div className="grid2">
        <div>
          <div className="sectionTitle">[ Entry ]</div>
          <h1 className="h1">{profile.name}</h1>
          <div style={{ color: "var(--muted)", marginBottom: 14 }}>
            <Highlight>{profile.title}</Highlight>
          </div>
          <p className="p">{profile.tagline}</p>

          <div style={{ marginTop: 18 }} className="row">
            <span className="kbd">scroll</span>
            <span className="kbd">click header nav</span>
            <span className="kbd">open projects</span>
          </div>
        </div>

        <div className="card">
          <div className="sectionTitle">Quick Stats</div>
          <div style={{ display: "grid", gap: 10 }}>
            {profile.stats.map((s) => (
              <div key={s.k} style={{ display: "flex", justifyContent: "space-between", gap: 14 }}>
                <span style={{ color: "var(--faint)" }}>{s.k}</span>
                <span style={{ color: "var(--fg)" }}>{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
