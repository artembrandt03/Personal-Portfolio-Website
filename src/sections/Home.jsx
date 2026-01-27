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
          <div className="sectionTitle">Socials</div>

          <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
            <div>
              <div style={{ color: "var(--muted)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Location
              </div>
              <div>Montreal, QC</div>
            </div>

            <div>
              <div style={{ color: "var(--muted)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Email
              </div>
              <a href="mailto:artem.brandt03@gmail.com">artem.brandt03@gmail.com</a>
            </div>

            <div>
              <div style={{ color: "var(--muted)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                GitHub
              </div>
              <a href="https://github.com/artembrandt03" target="_blank" rel="noreferrer">
                github.com/artembrandt03
              </a>
            </div>

            <div>
              <div style={{ color: "var(--muted)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                LinkedIn
              </div>
              <a href="https://www.linkedin.com/in/artem-brandt-48874428a/" target="_blank" rel="noreferrer">
                linkedin.com/in/…
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
