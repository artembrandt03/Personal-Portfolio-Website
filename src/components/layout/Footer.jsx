export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container" style={{ padding: "28px var(--padX)" }}>
        <div style={{ color: "var(--muted)", fontSize: 12 }}>
          © {new Date().getFullYear()} Artem Brandt
        </div>
      </div>
    </footer>
  );
}
