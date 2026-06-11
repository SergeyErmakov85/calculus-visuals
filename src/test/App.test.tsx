// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "../App";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe("App", () => {
  it("рендерится без ошибок", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
