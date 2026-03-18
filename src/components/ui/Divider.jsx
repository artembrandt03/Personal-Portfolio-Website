export default function Divider({ soft = false }) {
  return (
    <div
      style={{
        height: 1,
        width: "100%",
        background: soft ? "rgba(var(--fg-rgb), 0.1)" : "var(--line)",
        margin: "18px 0",
      }}
    />
  );
}
