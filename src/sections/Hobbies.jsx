import SectionTitle from "../components/ui/SectionTitle.jsx";
import Divider from "../components/ui/Divider.jsx";

import runningIcon from "../assets/images/runer-silhouette-running-fast.png";
import volunteerIcon from "../assets/images/volunteer.png";
import bootcampIcon from "../assets/images/flag-variant.png";
import gamingIcon from "../assets/images/game-controller.png";
import { getCopy } from "../i18n/copy.js";

export default function Hobbies({ language = "en" }) {
  const c = getCopy(language);

  return (
    <div className="container">
      <SectionTitle
        primary={c.hobbies.section.primary}
        secondary={c.hobbies.section.secondary}
      />

      <div className="card">
        {/* Running */}
        <div className="miniHeader">
          <img className="miniIcon" src={runningIcon} alt="" />
          <div className="cardTitle">{c.hobbies.running.title}</div>
        </div>

        <p className="muted">{c.hobbies.running.body}</p>

        <a
          className="btn"
          href="https://www.linkedin.com/in/artem-brandt-48874428a/edit/forms/volunteer-experience/826865568/?profileFormEntryPoint=PROFILE_SECTION"
          target="_blank"
          rel="noreferrer"
        >
          [ {c.hobbies.moreOnLinkedIn} ]
        </a>

        <Divider />

        {/* Volunteering */}
        <div className="miniHeader">
          <img className="miniIcon" src={volunteerIcon} alt="" />
          <div className="cardTitle">{c.hobbies.volunteering.title}</div>
        </div>

        <p className="muted">{c.hobbies.volunteering.body}</p>

        <a
          className="btn"
          href="https://www.linkedin.com/in/artem-brandt-48874428a/edit/forms/volunteer-experience/1972397201/?profileFormEntryPoint=PROFILE_SECTION"
          target="_blank"
          rel="noreferrer"
        >
          [ {c.hobbies.moreOnLinkedIn} ]
        </a>

        <Divider />

        {/* Outside of school learning */}
        <div className="miniHeader">
          <img className="miniIcon" src={bootcampIcon} alt="" />
          <div className="cardTitle">{c.hobbies.learning.title}</div>
        </div>

        <p className="muted">{c.hobbies.learning.body}</p>

        <a
          className="btn"
          href="https://www.linkedin.com/in/artem-brandt-48874428a/details/certifications/"
          target="_blank"
          rel="noreferrer"
        >
          [ {c.hobbies.certifications} ]
        </a>

        <Divider />

        {/* Gaming */}
        <div className="miniHeader">
          <img className="miniIcon" src={gamingIcon} alt="" />
          <div className="cardTitle">{c.hobbies.gaming.title}</div>
        </div>

        <p className="muted">{c.hobbies.gaming.body}</p>
      </div>
    </div>
  );
}

