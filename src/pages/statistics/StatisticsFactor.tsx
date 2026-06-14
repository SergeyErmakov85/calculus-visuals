import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, FileText } from "lucide-react";
import { InlineMath, BlockMath } from "react-katex";
import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { CorrelationMatrix } from "@/components/statistics/CorrelationMatrix";

const LOADINGS: Array<[string, string, string, string, string, string, number]> = [
  ["Общительный", "0.82", "0.12", "-0.05", "0.18", "0.09", 0],
  ["Выполняю обещания", "0.09", "0.76", "0.14", "0.11", "-0.03", 1],
  ["Справляюсь со стрессом", "-0.11", "0.08", "0.79", "0.16", "0.02", 2],
  ["Открыт новому", "0.15", "0.07", "0.04", "0.81", "0.19", 3],
  ["Помогаю другим", "0.13", "0.21", "0.08", "0.11", "0.74", 4],
];

const StatisticsFactor = () => (
  <TopicPageLayout topicId="statistics-factor">
    <section>
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="text-2xl">Что такое факторный анализ?</CardTitle>
          <CardDescription className="text-base">Метод снижения размерности и поиска скрытых переменных</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-foreground">
          <p>
            <strong>Факторный анализ (Factor Analysis)</strong> — это статистический метод, который позволяет выявить скрытые (латентные) факторы, объясняющие корреляции между наблюдаемыми переменными. Метод широко применяется в психологии, социологии, маркетинге и других науках для упрощения структуры данных.
          </p>
          <p>Основная идея: если несколько переменных коррелируют между собой, возможно, они отражают влияние одного или нескольких общих факторов.</p>

          <div className="bg-accent/10 p-6 rounded-lg border border-accent/20 mt-6">
            <h4 className="font-bold text-lg mb-3">Основная модель факторного анализа:</h4>
            <div className="bg-background p-4 rounded-lg overflow-x-auto">
              <BlockMath math="X_i = \lambda_{i1}F_1 + \lambda_{i2}F_2 + \ldots + \lambda_{im}F_m + \varepsilon_i" />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              где <InlineMath math="X_i" /> — наблюдаемая переменная, <InlineMath math="F_j" /> — латентные факторы, <InlineMath math="\lambda_{ij}" /> — факторные нагрузки, <InlineMath math="\varepsilon_i" /> — уникальная ошибка
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Виды факторного анализа
              </h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Исследовательский (EFA)</strong> — поиск структуры факторов</li>
                <li><strong>Конфирматорный (CFA)</strong> — проверка заданной модели</li>
                <li><strong>Метод главных компонент (PCA)</strong> — снижение размерности</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Методы вращения факторов
              </h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Varimax</strong> — ортогональное вращение (факторы независимы)</li>
                <li><strong>Promax</strong> — косоугольное вращение (факторы могут коррелировать)</li>
                <li><strong>Oblimin</strong> — косоугольное вращение</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>

    <section>
      <CorrelationMatrix />
    </section>

    <section>
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="text-2xl">Пример из психологии: Опросник "Большая Пятёрка"</CardTitle>
          <CardDescription className="text-base">Практическое применение факторного анализа</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-foreground">
          <div>
            <h4 className="font-bold text-lg mb-3">Описание исследования</h4>
            <p className="mb-4">
              Психолог проводит исследование личностных черт с помощью опросника из 25 вопросов. Каждый вопрос оценивается по шкале от 1 до 5. В исследовании участвовало 200 респондентов. Цель — выявить основные факторы (личностные черты), которые объясняют ответы на вопросы.
            </p>
            <div className="bg-muted p-6 rounded-lg">
              <h5 className="font-bold mb-3">Примеры вопросов:</h5>
              <ul className="space-y-2 text-sm">
                <li>• "Я общительный человек" (экстраверсия)</li>
                <li>• "Я всегда выполняю обещания" (добросовестность)</li>
                <li>• "Я легко справляюсь со стрессом" (эмоциональная стабильность)</li>
                <li>• "Я открыт новому опыту" (открытость опыту)</li>
                <li>• "Я стараюсь помогать другим" (доброжелательность)</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3">Шаги анализа</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-bold mb-2">Шаг 1: Проверка адекватности данных</h5>
                <p className="text-sm mb-2">Тест Кайзера-Мейера-Олкина (KMO) и тест Бартлетта на сферичность:</p>
                <div className="bg-background p-3 rounded overflow-x-auto">
                  <BlockMath math="\text{KMO} = \frac{\sum\sum_{i\neq j} r_{ij}^2}{\sum\sum_{i\neq j} r_{ij}^2 + \sum\sum_{i\neq j} p_{ij}^2}" />
                </div>
                <p className="text-sm mt-2 text-muted-foreground">
                  KMO = 0.87 (отлично, &gt; 0.8), тест Бартлетта: <InlineMath math="p < 0.001" /> (данные подходят для FA)
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-bold mb-2">Шаг 2: Определение количества факторов</h5>
                <p className="text-sm mb-2">Используем критерий Кайзера (собственные значения &gt; 1) и график каменистой осыпи (scree plot):</p>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Фактор 1: λ = 6.2 (объясняет 24.8% дисперсии)</li>
                  <li>Фактор 2: λ = 3.8 (15.2%)</li>
                  <li>Фактор 3: λ = 2.9 (11.6%)</li>
                  <li>Фактор 4: λ = 2.1 (8.4%)</li>
                  <li>Фактор 5: λ = 1.7 (6.8%)</li>
                </ul>
                <p className="text-sm mt-2 text-muted-foreground">Всего: 5 факторов объясняют 66.8% общей дисперсии</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-bold mb-2">Шаг 3: Вращение и интерпретация</h5>
                <p className="text-sm mb-3">Применяем вращение Varimax для упрощения структуры. Матрица факторных нагрузок (выборка):</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="p-2 text-left border">Вопрос</th>
                        <th className="p-2 text-center border">F1</th>
                        <th className="p-2 text-center border">F2</th>
                        <th className="p-2 text-center border">F3</th>
                        <th className="p-2 text-center border">F4</th>
                        <th className="p-2 text-center border">F5</th>
                      </tr>
                    </thead>
                    <tbody>
                      {LOADINGS.map(([q, f1, f2, f3, f4, f5, boldIdx], idx) => {
                        const vals = [f1, f2, f3, f4, f5];
                        return (
                          <tr key={q} className={idx % 2 === 1 ? "bg-muted/50" : undefined}>
                            <td className="p-2 border">{q}</td>
                            {vals.map((v, vi) => (
                              <td key={vi} className={`p-2 text-center border${vi === boldIdx ? " font-bold" : ""}`}>
                                {v}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-3 text-muted-foreground">
                  Жирным выделены высокие нагрузки (&gt; 0.7), указывающие на принадлежность вопроса к фактору
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-bold mb-2">Шаг 4: Интерпретация факторов</h5>
                <div className="space-y-2 text-sm">
                  <p><strong>Фактор 1 (24.8%):</strong> Экстраверсия — общительность, активность, позитивные эмоции</p>
                  <p><strong>Фактор 2 (15.2%):</strong> Добросовестность — организованность, ответственность, целеустремлённость</p>
                  <p><strong>Фактор 3 (11.6%):</strong> Эмоциональная стабильность — устойчивость к стрессу, уверенность</p>
                  <p><strong>Фактор 4 (8.4%):</strong> Открытость опыту — любознательность, креативность</p>
                  <p><strong>Фактор 5 (6.8%):</strong> Доброжелательность — альтруизм, сотрудничество, доверие</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 p-6 rounded-lg border border-accent/20 mt-6">
            <h4 className="font-bold text-lg mb-3">Выводы и практическое применение</h4>
            <div className="space-y-3 text-sm">
              <p><strong>Результат:</strong> Факторный анализ подтвердил, что 25 вопросов опросника хорошо группируются в 5 основных личностных черт (модель "Большая Пятёрка"), что согласуется с теорией личности.</p>
              <p><strong>Надёжность:</strong> Для каждого фактора рассчитали внутреннюю согласованность (альфа Кронбаха), все значения &gt; 0.75, что свидетельствует о хорошей надёжности шкал.</p>
              <p><strong>Применение:</strong> На основе факторов можно создать краткие шкалы для оценки личности, использовать в подборе персонала, психологическом консультировании и научных исследованиях.</p>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg mt-6">
            <h4 className="font-bold text-lg mb-3">Когда использовать факторный анализ?</h4>
            <ul className="space-y-2 text-sm list-disc list-inside">
              <li>У вас много коррелирующих переменных, которые нужно упростить</li>
              <li>Вы хотите выявить латентные (скрытые) конструкты</li>
              <li>Необходимо создать составные шкалы или индексы</li>
              <li>Проверка теоретической структуры данных (CFA)</li>
              <li>Снижение размерности перед регрессией или другими методами</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  </TopicPageLayout>
);

export default StatisticsFactor;
