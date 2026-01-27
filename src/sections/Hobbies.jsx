import SectionTitle from "../components/ui/SectionTitle.jsx";
import Divider from "../components/ui/Divider.jsx";

import runningIcon from "../assets/images/runer-silhouette-running-fast.png";
import volunteerIcon from "../assets/images/volunteer.png";
import bootcampIcon from "../assets/images/flag-variant.png";
import gamingIcon from "../assets/images/game-controller.png";

export default function Hobbies() {
  return (
    <div className="container">
      <SectionTitle primary="Beyond the Code" secondary="Side Quests" />

      <div className="card">
        {/* Running */}
        <div className="miniHeader">
          <img className="miniIcon" src={runningIcon} alt="" />
          <div className="cardTitle">Running</div>
        </div>

        <p className="muted">
          I’m a long-distance runner, and I also coached / assisted coached a team where
          we trained Secondary 3–4 students for a full marathon — and we ran 42.2km together.
        </p>

        <a
          className="btn"
          href="https://www.linkedin.com/in/artem-brandt-48874428a/edit/forms/volunteer-experience/826865568/?profileFormEntryPoint=PROFILE_SECTION"
          target="_blank"
          rel="noreferrer"
        >
          [ More on LinkedIn ]
        </a>

        <Divider />

        {/* Volunteering */}
        <div className="miniHeader">
          <img className="miniIcon" src={volunteerIcon} alt="" />
          <div className="cardTitle">Volunteering</div>
        </div>

        <p className="muted">
          I volunteered at the John Molson MBA International Case Competition in 2025 and 2026,
          supporting teams and helping keep logistics running smoothly.
        </p>

        <a
          className="btn"
          href="https://www.linkedin.com/in/artem-brandt-48874428a/edit/forms/volunteer-experience/1972397201/?profileFormEntryPoint=PROFILE_SECTION"
          target="_blank"
          rel="noreferrer"
        >
          [ More on LinkedIn ]
        </a>

        <Divider />

        {/* Outside of school learning */}
        <div className="miniHeader">
          <img className="miniIcon" src={bootcampIcon} alt="" />
          <div className="cardTitle">Outside-of-School Learning</div>
        </div>

        <p className="muted">
          I like going beyond classes with bootcamps and structured learning tracks — mostly
          to sharpen practical skills and explore new tools.
        </p>

        <a
          className="btn"
          href="https://www.linkedin.com/in/artem-brandt-48874428a/details/certifications/"
          target="_blank"
          rel="noreferrer"
        >
          [ Certifications ]
        </a>

        <Divider />

        {/* Gaming */}
        <div className="miniHeader">
          <img className="miniIcon" src={gamingIcon} alt="" />
          <div className="cardTitle">Gaming</div>
        </div>

        <p className="muted">
          I’m into single-player story games, online games, and couch co-op. Ask me about my
          favorite games — I’ll definitely have recommendations!
        </p>
      </div>
    </div>
  );
}

