import { useMemo, useSyncExternalStore } from "react";

const GLOBAL_ANIMATION_START_MS = Date.now();
const SYNC_CHAR_COUNT = 20;
const clockListeners = new Set();
let clockNow = Date.now();
let clockInterval = null;

function emitClockTick() {
  clockNow = Date.now();
  clockListeners.forEach((listener) => listener());
}

function subscribeClock(listener) {
  clockListeners.add(listener);

  if (!clockInterval) {
    clockInterval = setInterval(emitClockTick, 33);
  }

  return () => {
    clockListeners.delete(listener);

    if (clockListeners.size === 0 && clockInterval) {
      clearInterval(clockInterval);
      clockInterval = null;
    }
  };
}

function getClockSnapshot() {
  return clockNow;
}

function renderWordPhase(elapsed, word, typeDurationMs, holdMs, deleteDurationMs, pauseBetweenMs) {
  if (elapsed < typeDurationMs) {
    const progress = elapsed / typeDurationMs;
    const chars = Math.min(word.length, Math.floor(progress * word.length));
    return word.slice(0, chars);
  }

  const afterType = elapsed - typeDurationMs;
  if (afterType < holdMs) {
    return word;
  }

  const afterHold = afterType - holdMs;
  if (afterHold < deleteDurationMs) {
    const progress = afterHold / deleteDurationMs;
    const chars = Math.max(0, Math.ceil(word.length * (1 - progress)));
    return word.slice(0, chars);
  }

  const afterDelete = afterHold - deleteDurationMs;
  if (afterDelete < pauseBetweenMs) {
    return "";
  }

  return "";
}

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
  const now = useSyncExternalStore(subscribeClock, getClockSnapshot, getClockSnapshot);

  const typeDurationMs = Math.max(typeMs * SYNC_CHAR_COUNT, 1);
  const deleteDurationMs = Math.max(deleteMs * SYNC_CHAR_COUNT, 1);
  const singleWordCycleMs = typeDurationMs + holdMs + deleteDurationMs + pauseBetweenMs;
  const fullCycleMs = singleWordCycleMs * 2;

  const elapsed = (now - GLOBAL_ANIMATION_START_MS) % fullCycleMs;

  const text =
    elapsed < singleWordCycleMs
      ? renderWordPhase(elapsed, a, typeDurationMs, holdMs, deleteDurationMs, pauseBetweenMs)
      : renderWordPhase(
          elapsed - singleWordCycleMs,
          b,
          typeDurationMs,
          holdMs,
          deleteDurationMs,
          pauseBetweenMs
        );

  return (
    <span className="swapType">
      {text}
      <span className="swapCursor">_</span>
    </span>
  );
}
