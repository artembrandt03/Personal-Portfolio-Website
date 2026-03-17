export const RARITY_ORDER = ["LEGENDARY", "EPIC", "RARE", "COMMON"];

const RARITY_LABELS = {
  en: {
    LEGENDARY: "LEGENDARY",
    EPIC: "EPIC",
    RARE: "RARE",
    COMMON: "COMMON",
  },
  fr: {
    LEGENDARY: "LÉGENDAIRE",
    EPIC: "ÉPIQUE",
    RARE: "RARE",
    COMMON: "COMMUN",
  },
};

export const rarityColorVar = (rarity) => {
  if (rarity === "LEGENDARY") return "var(--legendary)";
  if (rarity === "EPIC") return "var(--epic)";
  if (rarity === "RARE") return "var(--rare)";
  return "var(--common)";
};

export const rarityLabel = (rarity, language = "en") => {
  const labels = RARITY_LABELS[language] ?? RARITY_LABELS.en;
  return `[ ${labels[rarity] ?? rarity} ]`;
};
