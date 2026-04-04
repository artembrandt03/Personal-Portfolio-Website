export const RARITY_ORDER = ["LEGENDARY", "EPIC", "RARE", "COMMON"];

const RARITY_LABELS = {
  en: {
    gamified: {
      LEGENDARY: "LEGENDARY",
      EPIC: "EPIC",
      RARE: "RARE",
      COMMON: "COMMON",
    },
    professional: {
      LEGENDARY: "HIGHLIGHTS",
      EPIC: "ADVANCED",
      RARE: "INTERMEDIATE",
      COMMON: "BEGINNER",
    },
  },
  fr: {
    gamified: {
      LEGENDARY: "LÉGENDAIRE",
      EPIC: "ÉPIQUE",
      RARE: "RARE",
      COMMON: "COMMUN",
    },
    professional: {
      LEGENDARY: "POINTS FORTS",
      EPIC: "AVANCÉ",
      RARE: "INTERMÉDIAIRE",
      COMMON: "DÉBUTANT",
    },
  },
};

export const rarityColorVar = (rarity) => {
  if (rarity === "LEGENDARY") return "var(--legendary)";
  if (rarity === "EPIC") return "var(--epic)";
  if (rarity === "RARE") return "var(--rare)";
  return "var(--common)";
};

export const rarityLabel = (rarity, language = "en", labelMode = "professional") => {
  const labelsByLanguage = RARITY_LABELS[language] ?? RARITY_LABELS.en;
  const labels = labelsByLanguage[labelMode] ?? labelsByLanguage.professional;
  return `[ ${labels[rarity] ?? rarity} ]`;
};
