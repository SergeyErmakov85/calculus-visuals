// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";

import SubsectionPage from "../pages/SubsectionPage";
import { SUBSECTIONS } from "../content/subsections";
import { getSection, getTopic } from "../content/topicMap";

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

// Все URL подразделов из реестра: /sectionId/topicSlug/subSlug.
const URLS: string[] = Object.entries(SUBSECTIONS).flatMap(([topicKey, subs]) =>
  subs.map((s) => `/${topicKey}/${s.slug}`)
);

const renderAt = (url: string) =>
  render(
    <MemoryRouter initialEntries={[url]}>
      <Routes>
        <Route path="/:sectionId/:topicSlug/:subSlug" element={<SubsectionPage />} />
      </Routes>
    </MemoryRouter>
  );

describe("Реестр подразделов согласован с topicMap", () => {
  it.each(Object.keys(SUBSECTIONS))("%s указывает на существующую тему", (topicKey) => {
    const [sectionId, topicSlug] = [
      topicKey.slice(0, topicKey.lastIndexOf("/")),
      topicKey.slice(topicKey.lastIndexOf("/") + 1),
    ];
    expect(getSection(sectionId)).toBeTruthy();
    expect(getTopic(`${sectionId}-${topicSlug}`)).toBeTruthy();
  });
});

describe("Страницы подразделов рендерятся без ошибок", () => {
  it.each(URLS)("%s", (url) => {
    const { container } = renderAt(url);
    expect(container.querySelector("h1")).toBeTruthy();
  });

  it("несуществующий подраздел даёт NotFound", () => {
    const { container } = renderAt("/diffeq/first-order/9-9");
    expect(container.textContent).toContain("404");
  });
});
