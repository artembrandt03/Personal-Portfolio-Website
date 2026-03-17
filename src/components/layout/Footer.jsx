import { getCopy } from "../../i18n/copy.js";

export default function Footer({ language = "en" }) {
  const c = getCopy(language);
  const version = "v-1.2";
  const lastUpdated = "2026-03-16";

  return (
    <footer style={{ borderTop: "1px solid var(--line)" }}>
      <div
        className="container"
        style={{
          padding: "28px var(--padX)",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div style={{ color: "var(--muted)", fontSize: 12 }}>
          © 2026 Artem Brandt. {c.footer.rightsReserved}
        </div>

        <div style={{ fontSize: 12, color: "var(--muted)" }}>
          {c.footer.sourceCode}{" "}
          <a
            href="https://github.com/artembrandt03/Personal-Portfolio-Website/tree/main"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "underline" }}
          >
            {version}
          </a>
          {" "}• {c.footer.lastUpdated}: {lastUpdated}
        </div>
      </div>
    </footer>
  );
}
