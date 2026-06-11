// Lesson completion tracking via localStorage
const KEY = "calculus-compass:completed-lessons";

const read = (): Set<string> => {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
};

const write = (set: Set<string>) => {
  try {
    window.localStorage.setItem(KEY, JSON.stringify([...set]));
    window.dispatchEvent(new CustomEvent("lesson-progress-changed"));
  } catch {
    /* noop */
  }
};

export const isLessonComplete = (id: string): boolean => read().has(id);

export const markLessonComplete = (id: string): void => {
  const s = read();
  if (s.has(id)) return;
  s.add(id);
  write(s);
};

export const unmarkLessonComplete = (id: string): void => {
  const s = read();
  if (!s.has(id)) return;
  s.delete(id);
  write(s);
};

export const getCompletedLessons = (): string[] => [...read()];
