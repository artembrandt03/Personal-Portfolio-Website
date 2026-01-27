export default function GitHubChart() {
  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderRadius: "var(--radius)",
        padding: 16,
        background: "rgba(255,255,255,0.02)",
        width: "100%",
      }}
    >
      <div className="sectionTitle" style={{ marginBottom: 6 }}>
        GitHub Activity
      </div>

      <div
        style={{
          fontSize: 12,
          color: "var(--muted)",
          marginBottom: 10,
        }}
      >
        github.com/artembrandt03
      </div>

      <img
        src="https://ghchart.rshah.org/artembrandt03"
        alt="Artem Brandt GitHub contributions"
        style={{
          width: "100%",
          display: "block",
          filter: "invert(1)",
        }}
        loading="lazy"
      />
    </div>
  );
}
