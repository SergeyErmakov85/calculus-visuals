// ─────────────────────────────────────────────────────────────────────────────
// ProgressIndicator — компактный индикатор прогресса/XP в шапке.
// Считает пройденные темы (по id из topicMap) из localStorage и live-обновляется
// по событию "lesson-progress-changed" (его шлёт lib/progress) и storage-событию.
// ─────────────────────────────────────────────────────────────────────────────
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { ALL_TOPICS } from "@/content/topicMap";
import { getCompletedLessons } from "@/lib/progress";

const XP_PER_TOPIC = 50;
const READY_TOPIC_IDS = ALL_TOPICS.filter((t) => t.status === "ready").map((t) => t.id);
const TOTAL = READY_TOPIC_IDS.length;

const countDone = () => {
  const done = new Set(getCompletedLessons());
  return READY_TOPIC_IDS.reduce((n, id) => n + (done.has(id) ? 1 : 0), 0);
};

export const ProgressIndicator = () => {
  const [done, setDone] = useState(0);

  useEffect(() => {
    const update = () => setDone(countDone());
    update();
    window.addEventListener("lesson-progress-changed", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("lesson-progress-changed", update);
      window.removeEventListener("storage", update);
    };
  }, []);

  const xp = done * XP_PER_TOPIC;
  const pct = TOTAL ? Math.round((done / TOTAL) * 100) : 0;

  return (
    <div
      className="flex items-center gap-2"
      title={`Пройдено ${done} из ${TOTAL} тем · ${xp} XP`}
      aria-label={`Прогресс: пройдено ${done} из ${TOTAL} тем, ${xp} XP`}
    >
      <Zap className="h-4 w-4 text-accent shrink-0" aria-hidden />
      <span className="text-sm font-medium text-foreground tabular-nums">{xp} XP</span>
      <div className="hidden sm:block h-1.5 w-16 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};
