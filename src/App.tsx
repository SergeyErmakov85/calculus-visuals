import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SectionHub from "./pages/SectionHub";

// ── Function reference pages (calculus-compass) ──────────────────────────────
import PolynomialFunctions from "./pages/functions/PolynomialFunctions";
import RationalFunctions from "./pages/functions/RationalFunctions";
import TrigonometricFunctions from "./pages/functions/TrigonometricFunctions";
import ExponentialFunctions from "./pages/functions/ExponentialFunctions";
import LogarithmicFunctions from "./pages/functions/LogarithmicFunctions";
import PiecewiseFunctions from "./pages/functions/PiecewiseFunctions";
import AbsoluteValueFunctions from "./pages/functions/AbsoluteValueFunctions";
import SpecialFunctions from "./pages/functions/SpecialFunctions";

// ── Structured lessons (calculus-compass-08) ──────────────────────────────────
// Module 0 – What is a function
import FunctionDefinition from "./pages/lessons/Module0/FunctionDefinition";
import DomainRange from "./pages/lessons/Module0/DomainRange";
import GraphAnalysis from "./pages/lessons/Module0/GraphAnalysis";
// Module 1 – Polynomial functions
import LinearFunctions from "./pages/lessons/Module1/LinearFunctions";
import QuadraticFunctions from "./pages/lessons/Module1/QuadraticFunctions";
import CubicFunctions from "./pages/lessons/Module1/CubicFunctions";
import HigherDegree from "./pages/lessons/Module1/HigherDegree";
// Module 2 – Rational functions
import VerticalAsymptotes from "./pages/lessons/Module2/VerticalAsymptotes";
import HorizontalAsymptotes from "./pages/lessons/Module2/HorizontalAsymptotes";
import ObliqueAsymptotes from "./pages/lessons/Module2/ObliqueAsymptotes";
import RemovableDiscontinuities from "./pages/lessons/Module2/RemovableDiscontinuities";
// Module 3 – Limits
import LimitGeometry from "./pages/lessons/Module3/LimitGeometry";
import OneSidedLimits from "./pages/lessons/Module3/OneSidedLimits";
import LimitVsValue from "./pages/lessons/Module3/LimitVsValue";
import LimitAtInfinity from "./pages/lessons/Module3/LimitAtInfinity";
// Module 4 – Continuity
import ContinuityDefinition from "./pages/lessons/Module4/ContinuityDefinition";
import DiscontinuityTypes from "./pages/lessons/Module4/DiscontinuityTypes";
import ContinuityGeometry from "./pages/lessons/Module4/ContinuityGeometry";
// Module 5 – Derivative
import TangentLimit from "./pages/lessons/Module5/TangentLimit";
import DerivativeRate from "./pages/lessons/Module5/DerivativeRate";
import FunctionDerivativeLink from "./pages/lessons/Module5/FunctionDerivativeLink";
import Extrema from "./pages/lessons/Module5/Extrema";
// Module 6 – Trigonometric functions
import SinCos from "./pages/lessons/Module6/SinCos";
import Periodicity from "./pages/lessons/Module6/Periodicity";
import Tangent from "./pages/lessons/Module6/Tangent";
import Transformations from "./pages/lessons/Module6/Transformations";
// Module 7 – Exponential and logarithmic
import ExponentialGrowth from "./pages/lessons/Module7/ExponentialGrowth";
import LinearVsExponential from "./pages/lessons/Module7/LinearVsExponential";
import Logarithm from "./pages/lessons/Module7/Logarithm";
import Inverse from "./pages/lessons/Module7/Inverse";
// Module 8 – Piecewise functions
import PiecewiseAnalysis from "./pages/lessons/Module8/PiecewiseAnalysis";
import JunctionPoints from "./pages/lessons/Module8/JunctionPoints";
import Smoothness from "./pages/lessons/Module8/Smoothness";
// Module 9 – Absolute value
import AbsoluteValue from "./pages/lessons/Module9/AbsoluteValue";
import CornerPoints from "./pages/lessons/Module9/CornerPoints";
// Module 10 – Limits of intuition
import Oscillating from "./pages/lessons/Module10/Oscillating";
import NoLimit from "./pages/lessons/Module10/NoLimit";
import LimitsOfAnalysis from "./pages/lessons/Module10/LimitsOfAnalysis";

// ── Interactive guide (calculus-compass-guide) ────────────────────────────────
import GuidePage from "./pages/Module";

// ── Visualizations ────────────────────────────────────────────────────────────
import ConfidenceIntervalPage from "./pages/visualizations/ConfidenceIntervalPage";
import IntegralPage from "./pages/visualizations/IntegralPage";

// ── 4. Интегралы (strang #5,7-11 + remix #6-8) ────────────────────────────────
import IntegralsDefinite from "./pages/integrals/IntegralsDefinite";
import IntegralsIndefinite from "./pages/integrals/IntegralsIndefinite";
import IntegralsSubstitution from "./pages/integrals/IntegralsSubstitution";
import IntegralsByParts from "./pages/integrals/IntegralsByParts";
import IntegralsTechniques from "./pages/integrals/IntegralsTechniques";
import IntegralsApplications from "./pages/integrals/IntegralsApplications";

// ── 2. Пределы (strang #1 + remix #1) ─────────────────────────────────────────
import LimitsEpsilonDelta from "./pages/limits/LimitsEpsilonDelta";
import LimitsRemarkable from "./pages/limits/LimitsRemarkable";

// ── 3. Производные (strang #2-4 + remix #5) ───────────────────────────────────
import DerivativesRules from "./pages/derivatives/DerivativesRules";
import DerivativesChainRule from "./pages/derivatives/DerivativesChainRule";
import DerivativesTangentNormal from "./pages/derivatives/DerivativesTangentNormal";
import DerivativesApplications from "./pages/derivatives/DerivativesApplications";

// ── 5. Последовательности и ряды (strang #12-14 + remix #10-12) ───────────────
import SeriesSequences from "./pages/series/SeriesSequences";
import SeriesNumeric from "./pages/series/SeriesNumeric";
import SeriesConvergence from "./pages/series/SeriesConvergence";
import SeriesPower from "./pages/series/SeriesPower";
import SeriesTaylor from "./pages/series/SeriesTaylor";

// ── 6. Дифференциальные уравнения (_-_ гл.1-4) ────────────────────────────────
import DiffeqFirstOrder from "./pages/diffeq/DiffeqFirstOrder";
import DiffeqSecondOrder from "./pages/diffeq/DiffeqSecondOrder";
import DiffeqGraphical from "./pages/diffeq/DiffeqGraphical";
import DiffeqFourierPde from "./pages/diffeq/DiffeqFourierPde";

// ── 7. Линейная алгебра (_-_ + linear_algebra_add) ────────────────────────────
import LinearAlgebraMatrices from "./pages/linear-algebra/LinearAlgebraMatrices";
import LinearAlgebraDeterminants from "./pages/linear-algebra/LinearAlgebraDeterminants";
import LinearAlgebraVectorSpaces from "./pages/linear-algebra/LinearAlgebraVectorSpaces";
import LinearAlgebraEigen from "./pages/linear-algebra/LinearAlgebraEigen";
import LinearAlgebraSvdPca from "./pages/linear-algebra/LinearAlgebraSvdPca";
import LinearAlgebraApplications from "./pages/linear-algebra/LinearAlgebraApplications";

// ── 8. Теория вероятностей (probability_add + probability_tasks_add) ───────────
import ProbabilityCombinatorics from "./pages/probability/ProbabilityCombinatorics";
import ProbabilityEvents from "./pages/probability/ProbabilityEvents";
import ProbabilityTheorems from "./pages/probability/ProbabilityTheorems";
import ProbabilityTotalBayes from "./pages/probability/ProbabilityTotalBayes";
import ProbabilityDistributions from "./pages/probability/ProbabilityDistributions";
import ProbabilityProblems from "./pages/probability/ProbabilityProblems";

// ── 9. Статистика (statspark) ─────────────────────────────────────────────────
import StatisticsHypothesis from "./pages/statistics/StatisticsHypothesis";
import StatisticsGroupTests from "./pages/statistics/StatisticsGroupTests";
import StatisticsCorrelation from "./pages/statistics/StatisticsCorrelation";
import StatisticsFactor from "./pages/statistics/StatisticsFactor";
import StatisticsCluster from "./pages/statistics/StatisticsCluster";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
