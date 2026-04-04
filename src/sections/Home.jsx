// src/sections/Home.jsx
import { useRef, useState } from "react";
import Highlight from "../components/ui/Highlight.jsx";
import { profile } from "../data/profile.js";
import { getCopy } from "../i18n/copy.js";

import githubIcon from "../assets/images/github.png";
import gitlabIcon from "../assets/images/gitlab.png";
import linkedinIcon from "../assets/images/linkedin.png";
import uaFlagImage from "../assets/images/ua-flag.png";

import SectionTitle from "../components/ui/SectionTitle.jsx";

export default function Home({ language = "en", labelMode = "professional" }) {
  const c = getCopy(language);
  const [isUkraineBurstActive, setIsUkraineBurstActive] = useState(false);
  const [ukraineFlags, setUkraineFlags] = useState([]);
  const ukraineClicksRef = useRef([]);

  const handleLanguageChipClick = (lang) => {
    if (!String(lang).toLowerCase().includes("ukrain")) return;

    const now = Date.now();
    const recentClicks = ukraineClicksRef.current.filter((t) => now - t < 1800);
    recentClicks.push(now);
    ukraineClicksRef.current = recentClicks;

    if (recentClicks.length < 10) return;

    const burstItems = Array.from({ length: 85 }, (_, i) => ({
      id: `${now}-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 0.55}s`,
      duration: `${2.1 + Math.random() * 1.2}s`,
      size: `${20 + Math.random() * 22}px`,
      drift: `${(Math.random() - 0.5) * 120}px`,
      rotate: `${(Math.random() - 0.5) * 35}deg`,
    }));

    setUkraineFlags(burstItems);
    setIsUkraineBurstActive(true);
    ukraineClicksRef.current = [];

    window.setTimeout(() => {
      setIsUkraineBurstActive(false);
      setUkraineFlags([]);
    }, 3000);
  };

  return (
    <div className="container">
      {isUkraineBurstActive ? (
        <div className="ukraineBurst" aria-hidden="true">
          {ukraineFlags.map((flag) => (
            <span
              key={flag.id}
              className="ukraineBurstFlag"
              style={{
                left: flag.left,
                top: flag.top,
                animationDelay: flag.delay,
                animationDuration: flag.duration,
                "--flag-size": flag.size,
                "--drift-x": flag.drift,
                "--twist": flag.rotate,
              }}
            >
              <img src={uaFlagImage} alt="" className="ukraineBurstFlagImg" />
            </span>
          ))}
        </div>
      ) : null}

      <div className="grid2">
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
              {c.home.languages.map((lang, idx) => (
                <button
                  key={lang}
                  type="button"
                  className="kbd kbdButton"
                  onClick={() => handleLanguageChipClick(lang)}
                  aria-label={idx === 2 ? "Ukrainian easter egg" : undefined}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="card contactCard">
          <div className="cardTitle">
            <Highlight>{c.home.getInTouch}</Highlight>
          </div>

          <div style={{ marginBottom: 12 }}>
            <div className="cardTitle" style={{ marginBottom: 6 }}>
              {c.home.location}
            </div>
            <div>Montreal, QC</div>
          </div>

          <div style={{ marginBottom: 14 }}>
            <div className="cardTitle" style={{ marginBottom: 6 }}>
              {c.home.email}
            </div>
            <a href="mailto:artem.brandt03@gmail.com">artem.brandt03@gmail.com</a>
          </div>

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
