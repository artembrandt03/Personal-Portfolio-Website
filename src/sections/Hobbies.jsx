import Highlight from "../components/ui/Highlight.jsx";

export default function Hobbies() {
  return (
    <div className="container">
      <div className="sectionTitle">SIDE QUESTS</div>

      <div className="card">
        <div className="cardTitle">Off-Duty</div>

        <p className="muted">
          When I’m not coding, I’m usually doing something that still feels like a “build” —
          training, tinkering, or learning.
        </p>

        <div className="chipRow">
          <span className="chip">Long-distance running</span>
          <span className="chip">Video games</span>
          <span className="chip">Practical projects</span>
          <span className="chip">Learning-by-shipping</span>
        </div>

        <div style={{ height: 14 }} />

        <div className="cardTitle">Volunteering</div>

        <p className="muted">
          I volunteered as a <Highlight>Coach / Assistant Coach</Highlight> for a running
          program (ages 14–16), helping organize group runs, plan sessions, and keep the team
          safe and motivated.
        </p>

        <p className="muted" style={{ marginTop: 10 }}>
          I also worked as a <Highlight>Team Host</Highlight> at the John Molson MBA
          International Case Competition, supporting teams and coordinating logistics.
        </p>
      </div>
    </div>
  );
}

