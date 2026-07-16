import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { PageLoader } from "@/components/layout/PageLoader";
import Index from "./pages/Index";

// Все страницы, кроме главной, подгружаются лениво (code splitting):
// первый экран получает минимальный бандл, разделы догружаются по требованию.
const NotFound = lazy(() => import("./pages/NotFound"));
const SectionHub = lazy(() => import("./pages/SectionHub"));

// ── Function reference pages (calculus-compass) ──────────────────────────────
const PolynomialFunctions = lazy(() => import("./pages/functions/PolynomialFunctions"));
const RationalFunctions = lazy(() => import("./pages/functions/RationalFunctions"));
const TrigonometricFunctions = lazy(() => import("./pages/functions/TrigonometricFunctions"));
const ExponentialFunctions = lazy(() => import("./pages/functions/ExponentialFunctions"));
const LogarithmicFunctions = lazy(() => import("./pages/functions/LogarithmicFunctions"));
const PiecewiseFunctions = lazy(() => import("./pages/functions/PiecewiseFunctions"));
const AbsoluteValueFunctions = lazy(() => import("./pages/functions/AbsoluteValueFunctions"));
const SpecialFunctions = lazy(() => import("./pages/functions/SpecialFunctions"));

// ── Structured lessons (calculus-compass-08) ──────────────────────────────────
// Module 0 – What is a function
const FunctionDefinition = lazy(() => import("./pages/lessons/Module0/FunctionDefinition"));
const DomainRange = lazy(() => import("./pages/lessons/Module0/DomainRange"));
const GraphAnalysis = lazy(() => import("./pages/lessons/Module0/GraphAnalysis"));
// Module 1 – Polynomial functions
const LinearFunctions = lazy(() => import("./pages/lessons/Module1/LinearFunctions"));
const QuadraticFunctions = lazy(() => import("./pages/lessons/Module1/QuadraticFunctions"));
const CubicFunctions = lazy(() => import("./pages/lessons/Module1/CubicFunctions"));
const HigherDegree = lazy(() => import("./pages/lessons/Module1/HigherDegree"));
// Module 2 – Rational functions
const VerticalAsymptotes = lazy(() => import("./pages/lessons/Module2/VerticalAsymptotes"));
const HorizontalAsymptotes = lazy(() => import("./pages/lessons/Module2/HorizontalAsymptotes"));
const ObliqueAsymptotes = lazy(() => import("./pages/lessons/Module2/ObliqueAsymptotes"));
const RemovableDiscontinuities = lazy(() => import("./pages/lessons/Module2/RemovableDiscontinuities"));
// Module 3 – Limits
const LimitGeometry = lazy(() => import("./pages/lessons/Module3/LimitGeometry"));
const OneSidedLimits = lazy(() => import("./pages/lessons/Module3/OneSidedLimits"));
const LimitVsValue = lazy(() => import("./pages/lessons/Module3/LimitVsValue"));
const LimitAtInfinity = lazy(() => import("./pages/lessons/Module3/LimitAtInfinity"));
// Module 4 – Continuity
const ContinuityDefinition = lazy(() => import("./pages/lessons/Module4/ContinuityDefinition"));
const DiscontinuityTypes = lazy(() => import("./pages/lessons/Module4/DiscontinuityTypes"));
const ContinuityGeometry = lazy(() => import("./pages/lessons/Module4/ContinuityGeometry"));
// Module 5 – Derivative
const TangentLimit = lazy(() => import("./pages/lessons/Module5/TangentLimit"));
const DerivativeRate = lazy(() => import("./pages/lessons/Module5/DerivativeRate"));
const FunctionDerivativeLink = lazy(() => import("./pages/lessons/Module5/FunctionDerivativeLink"));
const Extrema = lazy(() => import("./pages/lessons/Module5/Extrema"));
// Module 6 – Trigonometric functions
const SinCos = lazy(() => import("./pages/lessons/Module6/SinCos"));
const Periodicity = lazy(() => import("./pages/lessons/Module6/Periodicity"));
const Tangent = lazy(() => import("./pages/lessons/Module6/Tangent"));
const Transformations = lazy(() => import("./pages/lessons/Module6/Transformations"));
// Module 7 – Exponential and logarithmic
const ExponentialGrowth = lazy(() => import("./pages/lessons/Module7/ExponentialGrowth"));
const LinearVsExponential = lazy(() => import("./pages/lessons/Module7/LinearVsExponential"));
const Logarithm = lazy(() => import("./pages/lessons/Module7/Logarithm"));
const Inverse = lazy(() => import("./pages/lessons/Module7/Inverse"));
// Module 8 – Piecewise functions
const PiecewiseAnalysis = lazy(() => import("./pages/lessons/Module8/PiecewiseAnalysis"));
const JunctionPoints = lazy(() => import("./pages/lessons/Module8/JunctionPoints"));
const Smoothness = lazy(() => import("./pages/lessons/Module8/Smoothness"));
// Module 9 – Absolute value
const AbsoluteValue = lazy(() => import("./pages/lessons/Module9/AbsoluteValue"));
const CornerPoints = lazy(() => import("./pages/lessons/Module9/CornerPoints"));
// Module 10 – Limits of intuition
const Oscillating = lazy(() => import("./pages/lessons/Module10/Oscillating"));
const NoLimit = lazy(() => import("./pages/lessons/Module10/NoLimit"));
const LimitsOfAnalysis = lazy(() => import("./pages/lessons/Module10/LimitsOfAnalysis"));

// ── Interactive guide (calculus-compass-guide) ────────────────────────────────
const GuidePage = lazy(() => import("./pages/Module"));

// ── Visualizations ────────────────────────────────────────────────────────────
const ConfidenceIntervalPage = lazy(() => import("./pages/visualizations/ConfidenceIntervalPage"));
const IntegralPage = lazy(() => import("./pages/visualizations/IntegralPage"));

// ── 4. Интегралы (strang #5,7-11 + remix #6-8) ────────────────────────────────
const IntegralsDefinite = lazy(() => import("./pages/integrals/IntegralsDefinite"));
const IntegralsIndefinite = lazy(() => import("./pages/integrals/IntegralsIndefinite"));
const IntegralsSubstitution = lazy(() => import("./pages/integrals/IntegralsSubstitution"));
const IntegralsByParts = lazy(() => import("./pages/integrals/IntegralsByParts"));
const IntegralsTechniques = lazy(() => import("./pages/integrals/IntegralsTechniques"));
const IntegralsApplications = lazy(() => import("./pages/integrals/IntegralsApplications"));

// ── 2. Пределы (strang #1 + remix #1) ─────────────────────────────────────────
const LimitsEpsilonDelta = lazy(() => import("./pages/limits/LimitsEpsilonDelta"));
const LimitsRemarkable = lazy(() => import("./pages/limits/LimitsRemarkable"));

// ── 3. Производные (strang #2-4 + remix #5) ───────────────────────────────────
const DerivativesRules = lazy(() => import("./pages/derivatives/DerivativesRules"));
const DerivativesChainRule = lazy(() => import("./pages/derivatives/DerivativesChainRule"));
const DerivativesTangentNormal = lazy(() => import("./pages/derivatives/DerivativesTangentNormal"));
const DerivativesApplications = lazy(() => import("./pages/derivatives/DerivativesApplications"));

// ── 5. Последовательности и ряды (strang #12-14 + remix #10-12) ───────────────
const SeriesSequences = lazy(() => import("./pages/series/SeriesSequences"));
const SeriesNumeric = lazy(() => import("./pages/series/SeriesNumeric"));
const SeriesConvergence = lazy(() => import("./pages/series/SeriesConvergence"));
const SeriesPower = lazy(() => import("./pages/series/SeriesPower"));
const SeriesTaylor = lazy(() => import("./pages/series/SeriesTaylor"));

// ── 6. Дифференциальные уравнения (_-_ гл.1-4) ────────────────────────────────
const DiffeqFirstOrder = lazy(() => import("./pages/diffeq/DiffeqFirstOrder"));
const DiffeqSecondOrder = lazy(() => import("./pages/diffeq/DiffeqSecondOrder"));
const DiffeqGraphical = lazy(() => import("./pages/diffeq/DiffeqGraphical"));
const DiffeqFourierPde = lazy(() => import("./pages/diffeq/DiffeqFourierPde"));

// ── 7. Линейная алгебра (_-_ + linear_algebra_add) ────────────────────────────
const LinearAlgebraMatrices = lazy(() => import("./pages/linear-algebra/LinearAlgebraMatrices"));
const LinearAlgebraDeterminants = lazy(() => import("./pages/linear-algebra/LinearAlgebraDeterminants"));
const LinearAlgebraVectorSpaces = lazy(() => import("./pages/linear-algebra/LinearAlgebraVectorSpaces"));
const LinearAlgebraEigen = lazy(() => import("./pages/linear-algebra/LinearAlgebraEigen"));
const LinearAlgebraSvdPca = lazy(() => import("./pages/linear-algebra/LinearAlgebraSvdPca"));
const LinearAlgebraApplications = lazy(() => import("./pages/linear-algebra/LinearAlgebraApplications"));

// ── 8. Теория вероятностей (probability_add + probability_tasks_add) ───────────
const ProbabilityCombinatorics = lazy(() => import("./pages/probability/ProbabilityCombinatorics"));
const ProbabilityEvents = lazy(() => import("./pages/probability/ProbabilityEvents"));
const ProbabilityTheorems = lazy(() => import("./pages/probability/ProbabilityTheorems"));
const ProbabilityTotalBayes = lazy(() => import("./pages/probability/ProbabilityTotalBayes"));
const ProbabilityDistributions = lazy(() => import("./pages/probability/ProbabilityDistributions"));
const ProbabilityProblems = lazy(() => import("./pages/probability/ProbabilityProblems"));

// ── 9. Статистика (statspark) ─────────────────────────────────────────────────
const StatisticsHypothesis = lazy(() => import("./pages/statistics/StatisticsHypothesis"));
const StatisticsGroupTests = lazy(() => import("./pages/statistics/StatisticsGroupTests"));
const StatisticsCorrelation = lazy(() => import("./pages/statistics/StatisticsCorrelation"));
const StatisticsFactor = lazy(() => import("./pages/statistics/StatisticsFactor"));
const StatisticsCluster = lazy(() => import("./pages/statistics/StatisticsCluster"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
          <Route path="/" element={<Index />} />

          {/* ── Function reference ── */}
          <Route path="/functions/polynomial" element={<PolynomialFunctions />} />
          <Route path="/functions/rational" element={<RationalFunctions />} />
          <Route path="/functions/trigonometric" element={<TrigonometricFunctions />} />
          <Route path="/functions/exponential" element={<ExponentialFunctions />} />
          <Route path="/functions/logarithmic" element={<LogarithmicFunctions />} />
          <Route path="/functions/piecewise" element={<PiecewiseFunctions />} />
          <Route path="/functions/absolute" element={<AbsoluteValueFunctions />} />
          <Route path="/functions/special" element={<SpecialFunctions />} />

          {/* ── Structured lessons Module 0 ── */}
          <Route path="/module/0/function-definition" element={<FunctionDefinition />} />
          <Route path="/module/0/domain-range" element={<DomainRange />} />
          <Route path="/module/0/graph-analysis" element={<GraphAnalysis />} />

          {/* ── Module 1 ── */}
          <Route path="/module/1/linear" element={<LinearFunctions />} />
          <Route path="/module/1/quadratic" element={<QuadraticFunctions />} />
          <Route path="/module/1/cubic" element={<CubicFunctions />} />
          <Route path="/module/1/higher-degree" element={<HigherDegree />} />

          {/* ── Module 2 ── */}
          <Route path="/module/2/vertical-asymptotes" element={<VerticalAsymptotes />} />
          <Route path="/module/2/horizontal-asymptotes" element={<HorizontalAsymptotes />} />
          <Route path="/module/2/oblique-asymptotes" element={<ObliqueAsymptotes />} />
          <Route path="/module/2/removable-discontinuities" element={<RemovableDiscontinuities />} />

          {/* ── Module 3 ── */}
          <Route path="/module/3/limit-geometry" element={<LimitGeometry />} />
          <Route path="/module/3/one-sided-limits" element={<OneSidedLimits />} />
          <Route path="/module/3/limit-vs-value" element={<LimitVsValue />} />
          <Route path="/module/3/limit-at-infinity" element={<LimitAtInfinity />} />

          {/* ── Module 4 ── */}
          <Route path="/module/4/continuity-definition" element={<ContinuityDefinition />} />
          <Route path="/module/4/discontinuity-types" element={<DiscontinuityTypes />} />
          <Route path="/module/4/continuity-geometry" element={<ContinuityGeometry />} />

          {/* ── Module 5 ── */}
          <Route path="/module/5/tangent-limit" element={<TangentLimit />} />
          <Route path="/module/5/derivative-rate" element={<DerivativeRate />} />
          <Route path="/module/5/function-derivative-link" element={<FunctionDerivativeLink />} />
          <Route path="/module/5/extrema" element={<Extrema />} />

          {/* ── Module 6 ── */}
          <Route path="/module/6/sin-cos" element={<SinCos />} />
          <Route path="/module/6/periodicity" element={<Periodicity />} />
          <Route path="/module/6/tangent" element={<Tangent />} />
          <Route path="/module/6/transformations" element={<Transformations />} />

          {/* ── Module 7 ── */}
          <Route path="/module/7/exponential-growth" element={<ExponentialGrowth />} />
          <Route path="/module/7/linear-vs-exponential" element={<LinearVsExponential />} />
          <Route path="/module/7/logarithm" element={<Logarithm />} />
          <Route path="/module/7/inverse" element={<Inverse />} />

          {/* ── Module 8 ── */}
          <Route path="/module/8/piecewise-analysis" element={<PiecewiseAnalysis />} />
          <Route path="/module/8/junction-points" element={<JunctionPoints />} />
          <Route path="/module/8/smoothness" element={<Smoothness />} />

          {/* ── Module 9 ── */}
          <Route path="/module/9/absolute-value" element={<AbsoluteValue />} />
          <Route path="/module/9/corner-points" element={<CornerPoints />} />

          {/* ── Module 10 ── */}
          <Route path="/module/10/oscillating" element={<Oscillating />} />
          <Route path="/module/10/no-limit" element={<NoLimit />} />
          <Route path="/module/10/limits-of-analysis" element={<LimitsOfAnalysis />} />

          {/* ── Interactive guide ── */}
          <Route path="/guide/:moduleId" element={<GuidePage />} />

          {/* ── Visualizations ── */}
          <Route path="/visualizations/probability" element={<ConfidenceIntervalPage />} />
          <Route path="/visualizations/integral" element={<IntegralPage />} />

          {/* ── 4. Интегралы ── */}
          <Route path="/integrals/definite" element={<IntegralsDefinite />} />
          <Route path="/integrals/indefinite" element={<IntegralsIndefinite />} />
          <Route path="/integrals/substitution" element={<IntegralsSubstitution />} />
          <Route path="/integrals/by-parts" element={<IntegralsByParts />} />
          <Route path="/integrals/techniques" element={<IntegralsTechniques />} />
          <Route path="/integrals/applications" element={<IntegralsApplications />} />

          {/* ── 2. Пределы ── */}
          <Route path="/limits/epsilon-delta" element={<LimitsEpsilonDelta />} />
          <Route path="/limits/remarkable" element={<LimitsRemarkable />} />

          {/* ── 3. Производные ── */}
          <Route path="/derivatives/rules" element={<DerivativesRules />} />
          <Route path="/derivatives/chain-rule" element={<DerivativesChainRule />} />
          <Route path="/derivatives/tangent-normal" element={<DerivativesTangentNormal />} />
          <Route path="/derivatives/applications" element={<DerivativesApplications />} />

          {/* ── 5. Последовательности и ряды ── */}
          <Route path="/series/sequences" element={<SeriesSequences />} />
          <Route path="/series/numeric" element={<SeriesNumeric />} />
          <Route path="/series/convergence" element={<SeriesConvergence />} />
          <Route path="/series/power" element={<SeriesPower />} />
          <Route path="/series/taylor" element={<SeriesTaylor />} />

          {/* ── 6. Дифференциальные уравнения ── */}
          <Route path="/diffeq/first-order" element={<DiffeqFirstOrder />} />
          <Route path="/diffeq/second-order" element={<DiffeqSecondOrder />} />
          <Route path="/diffeq/graphical" element={<DiffeqGraphical />} />
          <Route path="/diffeq/fourier-pde" element={<DiffeqFourierPde />} />

          {/* ── 7. Линейная алгебра ── */}
          <Route path="/linear-algebra/matrices" element={<LinearAlgebraMatrices />} />
          <Route path="/linear-algebra/determinants" element={<LinearAlgebraDeterminants />} />
          <Route path="/linear-algebra/vector-spaces" element={<LinearAlgebraVectorSpaces />} />
          <Route path="/linear-algebra/eigen" element={<LinearAlgebraEigen />} />
          <Route path="/linear-algebra/svd-pca" element={<LinearAlgebraSvdPca />} />
          <Route path="/linear-algebra/applications" element={<LinearAlgebraApplications />} />

          {/* ── 8. Теория вероятностей ── */}
          <Route path="/probability/combinatorics" element={<ProbabilityCombinatorics />} />
          <Route path="/probability/events" element={<ProbabilityEvents />} />
          <Route path="/probability/theorems" element={<ProbabilityTheorems />} />
          <Route path="/probability/total-bayes" element={<ProbabilityTotalBayes />} />
          <Route path="/probability/distributions" element={<ProbabilityDistributions />} />
          <Route path="/probability/problems" element={<ProbabilityProblems />} />

          {/* ── 9. Статистика ── */}
          <Route path="/statistics/hypothesis" element={<StatisticsHypothesis />} />
          <Route path="/statistics/group-tests" element={<StatisticsGroupTests />} />
          <Route path="/statistics/correlation" element={<StatisticsCorrelation />} />
          <Route path="/statistics/factor" element={<StatisticsFactor />} />
          <Route path="/statistics/cluster" element={<StatisticsCluster />} />

          {/* ── Редиректы со старых URL объединённых проектов ── */}
          <Route path="/section/:id" element={<Navigate to="/" replace />} />
          <Route path="/tickets" element={<Navigate to="/" replace />} />
          <Route path="/notes" element={<Navigate to="/" replace />} />
          <Route path="/progress" element={<Navigate to="/" replace />} />

          {/* ── Section hubs (topicMap) — одиночный сегмент, держать перед "*" ── */}
          <Route path="/:sectionId" element={<SectionHub />} />

          <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
