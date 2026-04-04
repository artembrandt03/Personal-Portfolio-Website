// src/sections/Home.jsx
import Highlight from "../components/ui/Highlight.jsx";
import { profile } from "../data/profile.js";
import { getCopy } from "../i18n/copy.js";

import githubIcon from "../assets/images/github.png";
import gitlabIcon from "../assets/images/gitlab.png";
import linkedinIcon from "../assets/images/linkedin.png";

import SectionTitle from "../components/ui/SectionTitle.jsx";

export default function Home({ language = "en", labelMode = "professional" }) {
  const c = getCopy(language);

  return (
    <div className="container">
      <div className="grid2">
        {/* LEFT: ENTRY */}
        <div className="card">
          <SectionTitle
            primary={c.home.section.primary}
            secondary={c.home.section.secondary}
            labelMode={labelMode}
          />
          <h1 className="h1">{profile.name}</h1>

          <div style={{ color: "var(--muted)", marginBottom: 14 }}>
            <Highlight>{c.home.title}</Highlight>
          </div>

          <p className="p">{c.home.tagline}</p>

          <div style={{ marginTop: 18 }}>
            <div className="cardTitle" style={{ marginBottom: 8 }}>
              {c.home.languagesLabel}
            </div>
            <div className="row">
              {c.home.languages.map((lang) => (
                <span key={lang} className="kbd">
                  {lang}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT: GET IN TOUCH */}
        <div className="card contactCard">
          <div className="cardTitle">
            <Highlight>{c.home.getInTouch}</Highlight>
          </div>

          {/* Location */}
          <div style={{ marginBottom: 12 }}>
            <div className="cardTitle" style={{ marginBottom: 6 }}>
              {c.home.location}
            </div>
            <div>Montreal, QC</div>
          </div>

          {/* Email (plain text link) */}
          <div style={{ marginBottom: 14 }}>
            <div className="cardTitle" style={{ marginBottom: 6 }}>
              {c.home.email}
            </div>
            <a href="mailto:artem.brandt03@gmail.com">artem.brandt03@gmail.com</a>
          </div>

          {/* Social buttons */}
          <div className="iconBtnRow contactBtnRow">
            <a
              className="iconBtn contactBtn"
              href="https://github.com/artembrandt03"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="iconBtnIcon" />
              GitHub
            </a>

            <a
              className="iconBtn contactBtn"
              href="https://gitlab.com/ArtemBrandt"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitlabIcon} alt="GitLab" className="iconBtnIcon" />
              GitLab
            </a>

            <a
              className="iconBtn contactBtn"
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
