export default function Footer() {
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
          © {new Date().getFullYear()} Artem Brandt
        </div>

        <div style={{ fontSize: 12, color: "var(--muted)" }}>
          Want to see how this portfolio was built?{" "}
          <a
            href="https://github.com/artembrandt03/Personal-Portfolio-Website/tree/main"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "underline" }}
          >
            Explore the full development journey on GitHub
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
