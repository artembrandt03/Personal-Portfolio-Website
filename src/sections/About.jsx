import SectionTitle from "../components/ui/SectionTitle.jsx";
import { getCopy } from "../i18n/copy.js";

export default function About({ language = "en", labelMode = "professional" }) {
  const c = getCopy(language);

  return (
    <div className="container">
      <SectionTitle
        primary={c.about.section.primary}
        secondary={c.about.section.secondary}
        labelMode={labelMode}
      />

      <div className="card">
        <p className="p">Placeholder — Coming soon.</p>
      </div>
    </div>
  );
}
