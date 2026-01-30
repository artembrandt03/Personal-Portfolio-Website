import SwapTypeTitle from "../components/ui/SwapTypeTitle.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";

export default function About() {
  return (
    <div className="container">
      <SectionTitle primary="About Me" secondary="Character Sheet" />

      <div className="card">
        <p className="p">
          I’m a <span className="highlight">Computer Science Technology student</span> in
          <span className="highlight">Dawson College’s CST program (420.B0)</span>, a
          three-year technical program focused on building practical, industry-ready
          software. I’m on track to <span className="highlight">graduate in June 2026</span>.
        </p>

        <div style={{ height: 14 }} />

        <p className="p">
          I enjoy learning by <span className="highlight">building real systems</span> and
          getting <span className="highlight">hands-on with code</span>. I regularly explore
          new programming languages, frameworks, and technologies, and go beyond
          coursework through <span className="highlight">personal projects and bootcamps</span>
          to deepen my understanding.
        </p>

        <div style={{ height: 14 }} />

        <p className="p">
          This approach has helped me build experience across
          <span className="highlight"> backend systems</span> and
          <span className="highlight">full-stack applications</span>. I work well in
          <span className="highlight">team environments</span>, value
          <span className="highlight">clear communication</span>, and enjoy collaborating
          to turn ideas into polished, functional software.
        </p>
      </div>
    </div>
  );
}
