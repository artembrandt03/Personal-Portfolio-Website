const LANGUAGE_LABEL = {
  en: "ENGLISH",
  fr: "FRANÇAIS",
};

export default function LanguageTransitionOverlay({
  active,
  targetLanguage = "en",
  durationMs = 1000,
}) {
  if (!active) return null;

  const label = LANGUAGE_LABEL[targetLanguage] ?? targetLanguage.toUpperCase();

  return (
    <div
      className="langTransitionOverlay"
      aria-live="polite"
      role="status"
      style={{ "--lang-transition-ms": `${durationMs}ms` }}
    >
      <div className="langTransitionInner">
        <div className="langTransitionLabel">SWITCHING TO</div>
        <div className="langTransitionTarget">{label}</div>
      </div>
    </div>
  );
}
