// @vitest-environment jsdom
import { render, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { ProgressIndicator } from "../components/navigation/ProgressIndicator";
import { markLessonComplete } from "../lib/progress";
import { ALL_TOPICS } from "../content/topicMap";

const firstReady = ALL_TOPICS.find((t) => t.status === "ready")!;

describe("ProgressIndicator", () => {
  beforeEach(() => window.localStorage.clear());

  it("стартует с 0 XP", () => {
    const { container } = render(<ProgressIndicator />);
    expect(container.textContent).toContain("0 XP");
  });

  it("увеличивает XP при отметке темы пройденной", () => {
    const { container } = render(<ProgressIndicator />);
    act(() => markLessonComplete(firstReady.id));
    expect(container.textContent).toContain("50 XP");
  });
});
