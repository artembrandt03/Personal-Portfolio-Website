import { getCopy } from "../../i18n/copy.js";

export default function GitHubChart({ language = "en" }) {
  const c = getCopy(language);

  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderRadius: "var(--radius)",
        padding: 16,
        background: "var(--panel-bg)",
        color: "var(--fg)",
        width: "100%",
      }}
    >
      <div className="sectionTitle" style={{ marginBottom: 6 }}>
        {c.githubChart.title}
      </div>

      <div
        style={{
          fontSize: 12,
          color: "var(--muted)",
          marginBottom: 10,
        }}
      >
        artembrandt03
      </div>

      <div className="githubChartScroll">
        <img
          src="https://ghchart.rshah.org/artembrandt03"
          alt={c.githubChart.alt}
          className="githubChartImg"
          loading="lazy"
        />
      </div>

      <div className="githubChartScrollHint">{c.githubChart.scrollHint}</div>
    </div>
  );
}
