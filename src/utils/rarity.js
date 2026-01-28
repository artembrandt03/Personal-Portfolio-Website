export const RARITY_ORDER = ["LEGENDARY", "EPIC", "RARE", "COMMON"];

export const rarityColorVar = (rarity) => {
  if (rarity === "LEGENDARY") return "var(--legendary)";
  if (rarity === "EPIC") return "var(--epic)";
  if (rarity === "RARE") return "var(--rare)";
  return "var(--common)";
};

export const rarityLabel = (rarity) => `[ ${rarity} ]`;
