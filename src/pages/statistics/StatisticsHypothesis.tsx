import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, FileText } from "lucide-react";
import { InlineMath, BlockMath } from "react-katex";
import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { HypothesisTestingDiagram } from "@/components/statistics/HypothesisTestingDiagram";

const StatisticsHypothesis = () => (
  <TopicPageLayout topicId="statistics-hypothesis">
    <section>
      <HypothesisTestingDiagram />
    </section>

    {/* Introduction */}
    <section>
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="text-3xl">Что такое дисперсионный анализ?</CardTitle>
          <CardDescription className="text-base">Основы и применение метода</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-foreground">
          <p>
            <strong>Дисперсионный анализ (ANOVA)</strong> — это статистический метод, который позволяет проверить гипотезу о равенстве средних значений в нескольких группах. Метод был разработан Рональдом Фишером в 1920-х годах и является одним из самых важных инструментов в статистике.
          </p>
          <p>
            Однофакторный дисперсионный анализ используется, когда исследуется влияние одного категориального фактора на количественную переменную. Например, влияние типа удобрения на урожайность, влияние метода обучения на результаты экзамена, или влияние дозы препарата на артериальное давление.
          </p>
        </CardContent>
      </Card>
    </section>

    {/* Key Concepts */}
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Ключевые концепции</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-elegant hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Гипотезы</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              <strong><InlineMath math="H_0:" /></strong> <InlineMath math="\mu_1 = \mu_2 = \ldots = \mu_k" />
            </p>
            <p className="text-sm">Нулевая гипотеза утверждает, что средние значения во всех группах равны.</p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong><InlineMath math="H_1:" /></strong> хотя бы два средних различаются
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <CardTitle>F-статистика</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="bg-muted p-3 rounded-lg">
              <BlockMath math="F = \frac{MS_A}{MS_E}" />
            </div>
            <p className="text-sm">Отношение межгрупповой дисперсии к внутригрупповой дисперсии. Чем больше F, тем сильнее различия между группами.</p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Условия применения</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Нормальность распределения</li>
              <li>Независимость наблюдений</li>
              <li>Гомогенность дисперсий</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Formulas */}
    <section>
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="text-3xl">Математические формулы</CardTitle>
          <CardDescription className="text-base">Основные расчёты дисперсионного анализа</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">Общая сумма квадратов (<InlineMath math="SS_T" />)</h3>
            <div className="bg-muted p-4 rounded-lg">
              <BlockMath math="SS_T = \sum_{i=1}^{k} \sum_{j=1}^{n_i} (x_{ij} - \bar{x})^2" />
            </div>
            <p className="text-sm text-muted-foreground">Измеряет общую вариацию данных относительно общего среднего.</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">Межгрупповая сумма квадратов (<InlineMath math="SS_A" />)</h3>
            <div className="bg-muted p-4 rounded-lg">
              <BlockMath math="SS_A = \sum_{i=1}^{k} n_i(\bar{x}_i - \bar{x})^2" />
            </div>
            <p className="text-sm text-muted-foreground">Вариация, обусловленная различиями между группами.</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">Внутригрупповая сумма квадратов (<InlineMath math="SS_E" />)</h3>
            <div className="bg-muted p-4 rounded-lg">
              <BlockMath math="SS_E = \sum_{i=1}^{k} \sum_{j=1}^{n_i} (x_{ij} - \bar{x}_i)^2" />
            </div>
            <p className="text-sm text-muted-foreground">Вариация внутри групп (случайная ошибка).</p>
          </div>

          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <p className="text-sm font-semibold mb-2">Основное уравнение:</p>
            <div className="text-center">
              <BlockMath math="SS_T = SS_A + SS_E" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">Средние квадраты</h3>
            <div className="bg-muted p-4 rounded-lg space-y-3">
              <BlockMath math="MS_A = \frac{SS_A}{k - 1}" />
              <BlockMath math="MS_E = \frac{SS_E}{N - k}" />
            </div>
            <p className="text-sm text-muted-foreground">
              где <InlineMath math="k" /> — количество групп, <InlineMath math="N" /> — общее количество наблюдений
            </p>
          </div>
        </CardContent>
      </Card>
    </section>

    {/* Steps */}
    <section>
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="text-3xl">Этапы проведения анализа</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4">
            {[
              { n: 1, h: "Формулировка гипотез", b: <>Определите нулевую (<InlineMath math="H_0" />) и альтернативную (<InlineMath math="H_1" />) гипотезы, выберите уровень значимости <InlineMath math="\alpha" /> (обычно 0.05).</> },
              { n: 2, h: "Проверка условий", b: <>Убедитесь в нормальности распределения (тест Шапиро-Уилка), независимости наблюдений и равенстве дисперсий (тест Левена).</> },
              { n: 3, h: "Расчёт сумм квадратов", b: <>Вычислите <InlineMath math="SS_T" />, <InlineMath math="SS_A" /> и <InlineMath math="SS_E" /> по формулам выше.</> },
              { n: 4, h: "Вычисление F-статистики", b: <><InlineMath math="F = \frac{MS_A}{MS_E}" />. Сравните полученное значение с критическим из F-распределения.</> },
              { n: 5, h: "Принятие решения", b: <>Если <InlineMath math="p\text{-value} < \alpha" />, отклоняем <InlineMath math="H_0" />. Это означает, что есть статистически значимые различия между группами.</> },
              { n: 6, h: "Post-hoc анализ", b: <>Если <InlineMath math="H_0" /> отклонена, используйте тесты множественных сравнений (Тьюки, Бонферрони) для определения, какие именно группы различаются.</> },
            ].map(({ n, h, b }) => (
              <li key={n} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {n}
                </span>
                <div>
                  <h4 className="font-semibold mb-1">{h}</h4>
                  <p className="text-sm text-muted-foreground">{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </section>

    {/* Example */}
    <section>
      <Card className="shadow-elegant bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="text-3xl">Практический пример</CardTitle>
          <CardDescription className="text-base">Влияние типа удобрения на урожайность</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground">
            Исследователь хочет определить, влияет ли тип удобрения на урожайность томатов. Он разделил участок на три части и применил три разных типа удобрения (A, B, C). После сбора урожая получены следующие данные (кг):
          </p>
          <div className="bg-card p-4 rounded-lg">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Удобрение A</h4>
                <p className="text-sm">25, 28, 26, 27, 29</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Удобрение B</h4>
                <p className="text-sm">30, 32, 31, 33, 30</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Удобрение C</h4>
                <p className="text-sm">22, 24, 23, 25, 21</p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Результаты анализа:</p>
            <ul className="space-y-2 text-sm">
              <li>• <strong>F-статистика:</strong> 45.32</li>
              <li>• <strong><InlineMath math="p" />-value:</strong> <InlineMath math="< 0.001" /></li>
              <li>• <strong>Вывод:</strong> Существуют статистически значимые различия в урожайности между группами (<InlineMath math="p < 0.05" />)</li>
              <li>• <strong>Post-hoc тест:</strong> Удобрение B даёт значимо лучшие результаты, чем A и C</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>

    {/* Applications */}
    <section>
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="text-3xl">Области применения</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Медицина</h4>
              <p className="text-sm text-muted-foreground">Сравнение эффективности различных методов лечения, доз препаратов</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Сельское хозяйство</h4>
              <p className="text-sm text-muted-foreground">Оценка влияния удобрений, методов выращивания, сортов растений</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Образование</h4>
              <p className="text-sm text-muted-foreground">Сравнение эффективности различных методов обучения</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Промышленность</h4>
              <p className="text-sm text-muted-foreground">Контроль качества, оптимизация производственных процессов</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  </TopicPageLayout>
);

export default StatisticsHypothesis;
