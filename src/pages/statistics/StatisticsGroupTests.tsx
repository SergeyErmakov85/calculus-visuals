import { Card, CardContent } from "@/components/ui/card";
import { InlineMath, BlockMath } from "react-katex";
import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";

const TAGS = ["t‑тест", "Welch", "Mann–Whitney U", "Wilcoxon", "ANOVA", "Kruskal–Wallis"];

const StatisticsGroupTests = () => (
  <TopicPageLayout topicId="statistics-group-tests">
    {/* Differences */}
    <section>
      <Card className="shadow-elegant">
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">Анализ различий (групповые сравнения)</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {TAGS.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border border-accent/20 mb-6">
              <h4 className="font-bold mb-2">Когда что использовать:</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="font-semibold text-primary">Две независимые группы:</span> нормальность + гомогенность дисперсий → t‑тест; при неодинаковых дисперсиях → Welch; при нарушениях нормальности → Mann–Whitney U.</li>
                <li><span className="font-semibold text-primary">Две связанные выборки:</span> парный t‑тест; при несоблюдении нормальности → Wilcoxon signed‑rank.</li>
                <li><span className="font-semibold text-primary">Более двух групп:</span> ANOVA; при нарушениях предпосылок → Kruskal–Wallis.</li>
                <li><span className="font-semibold text-primary">Категориальные частоты:</span> χ² Пирсона (или точный критерий Фишера).</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Независимый t‑тест (равные дисперсии)</h4>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <BlockMath math="t=\frac{\bar{x}_1-\bar{x}_2}{s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}" />
                    <BlockMath math="s_p^2=\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Независимый t‑тест (Welch)</h4>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <BlockMath math="t=\frac{\bar{x}_1-\bar{x}_2}{\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}}" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Парный t‑тест</h4>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <BlockMath math="t=\frac{\bar{d}}{s_d/\sqrt{n}}" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">U‑тест Манна–Уитни</h4>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <BlockMath math="U=\min(U_1,U_2)" />
                    <BlockMath math="U_1=n_1n_2+\frac{n_1(n_1+1)}{2}-R_1" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Однофакторная ANOVA</h4>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <BlockMath math="F=\frac{MS_{\text{between}}}{MS_{\text{within}}}" />
                    <BlockMath math="SS_{\text{between}}=\sum_i n_i(\bar{x}_i-\bar{x})^2" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Размеры эффектов</h4>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <BlockMath math="d=\frac{\bar{x}_1-\bar{x}_2}{s_p}" />
                    <BlockMath math="\eta^2=\frac{SS_{\text{between}}}{SS_{\text{total}}}" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">χ² Пирсона</h4>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <BlockMath math="\chi^2=\sum\frac{(O-E)^2}{E}" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-2">Предпосылки и проверки:</h4>
              <ul className="space-y-1 text-sm list-disc list-inside">
                <li><strong>Нормальность:</strong> QQ‑plot, тесты Шапиро–Уилка / Андерсона–Дарлинга</li>
                <li><strong>Гомогенность дисперсий:</strong> тест Левена / Брауна–Форсайта</li>
                <li><strong>Независимость наблюдений:</strong> дизайн исследования и рандомизация</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>

    {/* Reference / cheat sheet */}
    <section>
      <Card className="shadow-elegant">
        <CardContent className="p-6 space-y-6">
          <h3 className="text-2xl font-bold mb-4">Шпаргалка: выбор теста</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-semibold">Ситуация</th>
                  <th className="text-left p-3 font-semibold">Рекомендуемый тест</th>
                  <th className="text-left p-3 font-semibold">Эффект</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3">2 независимые группы, нормальность, равные дисперсии</td><td className="p-3">t (пул. дисперсия)</td><td className="p-3">d, g</td></tr>
                <tr><td className="p-3">2 независимые группы, неодинаковые дисперсии</td><td className="p-3">Welch t</td><td className="p-3">d, g</td></tr>
                <tr><td className="p-3">2 связанные выборки</td><td className="p-3">парный t</td><td className="p-3">d<sub>завис.</sub></td></tr>
                <tr><td className="p-3">Нарушена нормальность</td><td className="p-3">Mann–Whitney U / Wilcoxon</td><td className="p-3">r = Z/√N</td></tr>
                <tr><td className="p-3">k &gt; 2 групп (норм.)</td><td className="p-3">ANOVA (+ пост‑хок)</td><td className="p-3">η², част. η²</td></tr>
                <tr><td className="p-3">k &gt; 2 групп (робаст.)</td><td className="p-3">Kruskal–Wallis</td><td className="p-3">r, ε²</td></tr>
                <tr><td className="p-3">Категориальные частоты</td><td className="p-3">χ² / Фишер</td><td className="p-3">φ, Cramér V</td></tr>
                <tr><td className="p-3">Линейная связь, интервальные</td><td className="p-3">Корреляция Пирсона</td><td className="p-3">r, r²</td></tr>
                <tr><td className="p-3">Монотонная связь/ранги</td><td className="p-3">Спирмен / Кендэлл</td><td className="p-3">ρ / τ</td></tr>
              </tbody>
            </table>
          </div>

          <div>
            <h4 className="font-bold mb-3">Прикидка объёма выборки</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm mb-2"><strong>Две группы, двусторонний t:</strong></p>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <BlockMath math="n_{\text{на группу}}\approx\frac{2\sigma^2\left(z_{1-\alpha/2}+z_{1-\beta}\right)^2}{\Delta^2}" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">где Δ — минимально важная разница, σ — SD</p>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Корреляция r (Fisher z):</strong></p>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <BlockMath math="n\approx\frac{\left(z_{1-\alpha/2}+z_{1-\beta}\right)^2}{\text{atanh}(r)^2}+3" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <h4 className="font-bold mb-2">Как оформлять результат (пример):</h4>
            <div className="font-mono text-sm space-y-2">
              <p>Независимый t (Welch): t(23.7)=2.31, p=0.029, d=0.62 [0.12; 1.11]</p>
              <p>Корреляция Пирсона: r(58)=0.41, p&lt;.001, 95% ДИ [0.20; 0.59]</p>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Добавляйте графики, проверку предпосылок и обсуждение ограничений дизайна.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  </TopicPageLayout>
);

export default StatisticsGroupTests;
