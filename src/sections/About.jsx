import SwapTypeTitle from "../components/ui/SwapTypeTitle.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";

export default function About() {
  return (
    <div className="container">
      <SectionTitle primary="About Me" secondary="Character Sheet" />

      <div className="card">
        <p className="p">
          I’m a Computer Science Technology student in Dawson College’s CST program
          (420.B0), a three-year technical program focused on building practical,
          industry-ready software. I’m on track to graduate in June 2026.
        </p>

        <div style={{ height: 12 }} />

        <p className="p">
          I enjoy learning by building real systems and getting hands-on with code.
          I’m always curious to explore new programming languages, frameworks, and
          technologies, and I regularly go beyond coursework through personal
          projects and bootcamps to deepen my understanding.
        </p>

        <div style={{ height: 12 }} />

        <p className="p">
          This approach has helped me develop a versatile skill set across a wide
          range of projects, from backend systems to full-stack applications. I
          work well in team environments, value clear communication, and enjoy
          collaborating to turn ideas into polished, functional software.
        </p>
      </div>
    </div>
  );
}
