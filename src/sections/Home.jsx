// src/sections/Home.jsx
import Highlight from "../components/ui/Highlight.jsx";
import { profile } from "../data/profile.js";

import githubIcon from "../assets/images/github.png";
import gitlabIcon from "../assets/images/gitlab.png";
import linkedinIcon from "../assets/images/linkedin.png";

import SwapTypeTitle from "../components/ui/SwapTypeTitle.jsx";

export default function Home() {
  return (
    <div className="container">
      <div className="grid2">
        {/* LEFT: ENTRY */}
        <div>
          <div className="sectionTitle">
            <SwapTypeTitle
              primary="Overview"
              secondary="Entry"
            />
          </div>
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

        {/* RIGHT: GET IN TOUCH */}
        <div className="card">
          <div className="cardTitle">
            <Highlight>Get in touch</Highlight>
          </div>

          {/* Location */}
          <div style={{ marginBottom: 12 }}>
            <div className="cardTitle" style={{ marginBottom: 6 }}>
              Location
            </div>
            <div>Montreal, QC</div>
          </div>

          {/* Email (plain text link) */}
          <div style={{ marginBottom: 14 }}>
            <div className="cardTitle" style={{ marginBottom: 6 }}>
              Email
            </div>
            <a href="mailto:artem.brandt03@gmail.com">artem.brandt03@gmail.com</a>
          </div>

          {/* Social buttons */}
          <div className="iconBtnRow">
            <a
              className="iconBtn"
              href="https://github.com/artembrandt03"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="iconBtnIcon" />
              GitHub
            </a>

            <a
              className="iconBtn"
              href="https://gitlab.com/ArtemBrandt"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitlabIcon} alt="GitLab" className="iconBtnIcon" />
              GitLab
            </a>

            <a
              className="iconBtn"
              href="https://www.linkedin.com/in/artem-brandt-48874428a/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="iconBtnIcon" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
