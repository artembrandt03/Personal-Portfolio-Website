export default function Divider({ soft = false }) {
  return (
    <div
      style={{
        height: 1,
        width: "100%",
        background: soft ? "rgba(255,255,255,0.10)" : "var(--line)",
        margin: "18px 0",
      }}
    />
  );
}
