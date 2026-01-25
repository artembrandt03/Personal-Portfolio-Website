export default function Highlight({ children }) {
  return (
    <span
      style={{
        background: "var(--fg)",
        color: "var(--bg)",
        padding: "0.12em 0.32em",
        lineHeight: 1.6,
      }}
    >
      {children}
    </span>
  );
}
