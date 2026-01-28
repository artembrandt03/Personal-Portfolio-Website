import { useEffect, useMemo, useState } from "react";

export default function SwapTypeTitle({
  primary,          // professional name
  secondary,        // gamified name
  typeMs = 45,
  deleteMs = 25,
  holdMs = 3000,
  pauseBetweenMs = 500,
}) {
  const a = useMemo(() => primary.toUpperCase(), [primary]);
  const b = useMemo(() => secondary.toUpperCase(), [secondary]);

  const [text, setText] = useState("");
  const [target, setTarget] = useState(a);
  const [mode, setMode] = useState("typing"); // typing | holding | deleting | swapping

  useEffect(() => {
    let t;

    if (mode === "typing") {
      if (text.length < target.length) {
        t = setTimeout(() => setText(target.slice(0, text.length + 1)), typeMs);
      } else {
        t = setTimeout(() => setMode("holding"), holdMs);
      }
    }

    if (mode === "holding") {
      t = setTimeout(() => setMode("deleting"), holdMs);
    }

    if (mode === "deleting") {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), deleteMs);
      } else {
        t = setTimeout(() => setMode("swapping"), pauseBetweenMs);
      }
    }

    if (mode === "swapping") {
      setTarget((prev) => (prev === a ? b : a));
      setMode("typing");
    }

    return () => clearTimeout(t);
  }, [a, b, text, target, mode, typeMs, deleteMs, holdMs, pauseBetweenMs]);

  return (
    <span className="swapType">
      {text}
      <span className="swapCursor">_</span>
    </span>
  );
}
