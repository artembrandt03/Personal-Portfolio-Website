import SectionTitle from "../components/ui/SectionTitle.jsx";
import { getCopy } from "../i18n/copy.js";

export default function About({ language = "en" }) {
  const c = getCopy(language);

  return (
    <div className="container">
      <SectionTitle
        primary={c.about.section.primary}
        secondary={c.about.section.secondary}
      />

      <div className="card">
        <p className="p">{c.about.p1}</p>

        <div style={{ height: 14 }} />

        <p className="p">{c.about.p2}</p>

        <div style={{ height: 14 }} />

        <p className="p">{c.about.p3}</p>
      </div>
    </div>
  );
}
