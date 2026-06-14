// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";

import LimitsEpsilonDelta from "../pages/limits/LimitsEpsilonDelta";
import LimitsRemarkable from "../pages/limits/LimitsRemarkable";
import DerivativesRules from "../pages/derivatives/DerivativesRules";
import DerivativesChainRule from "../pages/derivatives/DerivativesChainRule";
import DerivativesTangentNormal from "../pages/derivatives/DerivativesTangentNormal";
import DerivativesApplications from "../pages/derivatives/DerivativesApplications";
import IntegralsSubstitution from "../pages/integrals/IntegralsSubstitution";
import SeriesSequences from "../pages/series/SeriesSequences";
import SeriesConvergence from "../pages/series/SeriesConvergence";
import SeriesTaylor from "../pages/series/SeriesTaylor";
import SectionHub from "../pages/SectionHub";

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

// IntersectionObserver мокаем (используется в PageTOC scrollspy).
class IO {
  observe() {}
  unobserve() {}
  disconnect() {}
}
// @ts-expect-error — тестовый мок
window.IntersectionObserver = IO;

const PAGES: Array<[string, React.ComponentType]> = [
  ["LimitsEpsilonDelta", LimitsEpsilonDelta],
  ["LimitsRemarkable", LimitsRemarkable],
  ["DerivativesRules", DerivativesRules],
  ["DerivativesChainRule", DerivativesChainRule],
  ["DerivativesTangentNormal", DerivativesTangentNormal],
  ["DerivativesApplications", DerivativesApplications],
  ["IntegralsSubstitution", IntegralsSubstitution],
  ["SeriesSequences", SeriesSequences],
  ["SeriesConvergence", SeriesConvergence],
  ["SeriesTaylor", SeriesTaylor],
];

describe("Страницы тем рендерятся без ошибок", () => {
  it.each(PAGES)("%s", (_name, Page) => {
    const { container } = render(
      <MemoryRouter>
        <Page />
      </MemoryRouter>
    );
    expect(container.querySelector("h1")).toBeTruthy();
  });
});

describe("SectionHub", () => {
  it("рендерит хаб раздела по slug", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/series"]}>
        <Routes>
          <Route path="/:sectionId" element={<SectionHub />} />
        </Routes>
      </MemoryRouter>
    );
    expect(container.textContent).toContain("ряд");
  });
});
