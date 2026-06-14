import { InlineMath, BlockMath } from 'react-katex';
import { ArrowDown, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const HypothesisTestingDiagram = () => {
  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle className="text-3xl">Проверка статистических гипотез</CardTitle>
        <CardDescription className="text-base">
          Основы научного метода в статистике
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-foreground">
          <strong>Статистическая гипотеза</strong> — это предположение о свойствах генеральной совокупности, которое можно проверить с помощью выборочных данных. Проверка гипотез позволяет принимать обоснованные решения на основе данных.
        </p>

        {/* Key concepts */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-primary">Нулевая гипотеза (H₀)</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Гипотеза об отсутствии эффекта или различий. Предполагает, что наблюдаемые различия случайны.
            </p>
            <div className="mt-2 bg-background/50 p-2 rounded text-center">
              <InlineMath math="H_0: \mu_1 = \mu_2" />
            </div>
          </div>
          <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-accent" />
              <h4 className="font-semibold text-accent">Альтернативная гипотеза (H₁)</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Гипотеза о наличии эффекта или различий. То, что мы пытаемся доказать.
            </p>
            <div className="mt-2 bg-background/50 p-2 rounded text-center">
              <InlineMath math="H_1: \mu_1 \neq \mu_2" />
            </div>
          </div>
        </div>

        {/* Visual flowchart */}
        <div className="bg-muted/30 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-center mb-6">Алгоритм проверки гипотезы</h3>
          
          <div className="flex flex-col items-center gap-2">
            {/* Step 1 */}
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-center w-full max-w-md">
              1. Сформулировать H₀ и H₁
            </div>
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
            
            {/* Step 2 */}
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-center w-full max-w-md">
              2. Выбрать уровень значимости α (обычно 0.05)
            </div>
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
            
            {/* Step 3 */}
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-center w-full max-w-md">
              3. Выбрать статистический критерий
            </div>
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
            
            {/* Step 4 */}
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-center w-full max-w-md">
              4. Рассчитать статистику и p-value
            </div>
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
            
            {/* Decision point */}
            <div className="bg-secondary border-2 border-primary px-6 py-4 rounded-lg font-medium text-center w-full max-w-md">
              <div className="mb-2">5. Сравнить p-value с α</div>
              <div className="text-sm text-muted-foreground">
                <InlineMath math="p\text{-value} \lessgtr \alpha" />
              </div>
            </div>
            
            {/* Two branches */}
            <div className="flex gap-8 mt-2 w-full max-w-lg">
              <div className="flex-1 flex flex-col items-center gap-2">
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
                <div className="bg-destructive/10 border border-destructive/30 px-4 py-3 rounded-lg text-center w-full">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <XCircle className="w-5 h-5 text-destructive" />
                    <span className="font-medium text-destructive">p ≥ α</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Не отклоняем H₀
                  </p>
                  <p className="text-xs mt-1">
                    Недостаточно доказательств
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2">
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
                <div className="bg-green-500/10 border border-green-500/30 px-4 py-3 rounded-lg text-center w-full">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-600">p &lt; α</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Отклоняем H₀
                  </p>
                  <p className="text-xs mt-1">
                    Принимаем H₁
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error types */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Ошибки при проверке гипотез</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-border p-3 bg-muted"></th>
                  <th className="border border-border p-3 bg-muted font-semibold">H₀ верна</th>
                  <th className="border border-border p-3 bg-muted font-semibold">H₀ ложна</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 font-semibold bg-muted">Не отклоняем H₀</td>
                  <td className="border border-border p-3 bg-green-500/10 text-center">
                    <span className="text-green-600 font-medium">Верное решение</span>
                    <div className="text-xs text-muted-foreground mt-1">
                      Вероятность: <InlineMath math="1 - \alpha" />
                    </div>
                  </td>
                  <td className="border border-border p-3 bg-destructive/10 text-center">
                    <span className="text-destructive font-medium">Ошибка II рода (β)</span>
                    <div className="text-xs text-muted-foreground mt-1">
                      Пропуск эффекта
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-semibold bg-muted">Отклоняем H₀</td>
                  <td className="border border-border p-3 bg-destructive/10 text-center">
                    <span className="text-destructive font-medium">Ошибка I рода (α)</span>
                    <div className="text-xs text-muted-foreground mt-1">
                      Ложная тревога
                    </div>
                  </td>
                  <td className="border border-border p-3 bg-green-500/10 text-center">
                    <span className="text-green-600 font-medium">Верное решение</span>
                    <div className="text-xs text-muted-foreground mt-1">
                      Мощность: <InlineMath math="1 - \beta" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* p-value explanation */}
        <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
          <h4 className="font-semibold mb-2">Что такое p-value?</h4>
          <p className="text-sm text-muted-foreground mb-3">
            <strong>p-value</strong> — это вероятность получить такие же или более экстремальные результаты, если нулевая гипотеза верна.
          </p>
          <div className="bg-background/50 p-3 rounded text-center">
            <BlockMath math="p\text{-value} = P(\text{данные} \mid H_0 \text{ верна})" />
          </div>
          <ul className="text-sm mt-3 space-y-1">
            <li>• <InlineMath math="p < 0.05" /> — статистически значимый результат</li>
            <li>• <InlineMath math="p < 0.01" /> — высоко значимый результат</li>
            <li>• <InlineMath math="p < 0.001" /> — очень высоко значимый результат</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
