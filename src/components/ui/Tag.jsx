import { rarityColorVar, rarityLabel } from "../../utils/rarity.js";

export default function Tag({ rarity }) {
  const c = rarityColorVar(rarity);
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontSize: 12,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: c,
      }}
    >
      {rarityLabel(rarity)}
    </span>
  );
}
