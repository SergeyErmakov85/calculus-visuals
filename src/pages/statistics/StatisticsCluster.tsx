import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InlineMath, BlockMath } from "react-katex";
import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";

const ALGO_STEPS = [
  { n: 1, h: "Инициализация", b: <>Выбрать K начальных центроидов (случайно или методом K-means++)</> },
  { n: 2, h: "Присвоение", b: <>Каждый объект относится к ближайшему центроиду: <InlineMath math="c_i = \arg\min_j \|x_i - \mu_j\|^2" /></> },
  { n: 3, h: "Обновление", b: <>Пересчитать центроиды как средние точки кластеров</> },
  { n: 4, h: "Повторение", b: <>Повторять шаги 2-3 до сходимости (центроиды перестают меняться)</> },
];

const CLUSTERS: Array<[string, string, string, string, string, string]> = [
  ["1", "180", "35", "42", "Низкий доход, низкие расходы", "text-blue-600"],
  ["2", "480", "12", "55", "Средний доход, экономные", "text-green-600"],
  ["3", "520", "78", "58", "Средний доход, активные покупатели", "text-orange-600"],
  ["4", "850", "85", "45", "Высокий доход, премиум-сегмент", "text-purple-600"],
];

const StatisticsCluster = () => (
  <TopicPageLayout topicId="statistics-cluster">
    <section>
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="text-3xl">Кластерный анализ. Метод K-средних</CardTitle>
          <CardDescription className="text-base">Группировка объектов по сходству признаков</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            <strong>Кластерный анализ</strong> — это совокупность методов машинного обучения без учителя, позволяющих разбить множество объектов на группы (кластеры) так, чтобы объекты внутри группы были максимально похожи друг на друга, а объекты из разных групп — максимально различались.
          </p>

          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2">Основные методы кластеризации</h4>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Иерархические методы</strong> — строят дерево кластеров (дендрограмму)</li>
              <li>• <strong>Метод K-средних</strong> — разбиение на заранее заданное число кластеров</li>
              <li>• <strong>DBSCAN</strong> — плотностная кластеризация</li>
              <li>• <strong>Гауссовы смеси (GMM)</strong> — вероятностная модель кластеризации</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">Метод K-средних (K-means)</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Один из самых популярных и эффективных методов кластеризации, предложенный Стюартом Ллойдом в 1957 году.
            </p>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">Целевая функция</h5>
                <p className="text-sm mb-2">Метод минимизирует внутрикластерную сумму квадратов отклонений (WCSS):</p>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <BlockMath math="J = \sum_{j=1}^{K} \sum_{x_i \in C_j} \|x_i - \mu_j\|^2" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  где <InlineMath math="K" /> — число кластеров, <InlineMath math="C_j" /> — j-й кластер, <InlineMath math="\mu_j" /> — центроид кластера
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Расстояние между объектами</h5>
                <p className="text-sm mb-2">Обычно используется евклидово расстояние:</p>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <BlockMath math="d(x, y) = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}" />
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Центроид кластера</h5>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <BlockMath math="\mu_j = \frac{1}{|C_j|} \sum_{x_i \in C_j} x_i" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">Алгоритм K-средних</h4>
            <div className="space-y-3">
              {ALGO_STEPS.map(({ n, h, b }) => (
                <div key={n} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">{n}</span>
                  <div>
                    <h5 className="font-semibold">{h}</h5>
                    <p className="text-sm text-muted-foreground">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">Выбор оптимального числа кластеров K</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Метод локтя (Elbow method)</h5>
                <p className="text-sm text-muted-foreground">
                  Построить график зависимости WCSS от K. Оптимальное K — точка "локтя", где скорость уменьшения WCSS резко падает.
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Силуэтный коэффициент</h5>
                <div className="overflow-x-auto my-2">
                  <BlockMath math="s(i) = \frac{b(i) - a(i)}{\max(a(i), b(i))}" />
                </div>
                <p className="text-sm text-muted-foreground">
                  где <InlineMath math="a(i)" /> — среднее расстояние до точек своего кластера, <InlineMath math="b(i)" /> — до ближайшего чужого
                </p>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
            <h4 className="font-bold text-xl mb-4">Пример: Сегментация клиентов магазина</h4>
            <p className="mb-4">
              Маркетологи хотят разделить клиентов на группы для таргетированной рекламы. Данные: годовой доход и расходы на покупки.
            </p>

            <div className="bg-card p-4 rounded-lg mb-4">
              <h5 className="font-semibold mb-3">Исходные данные (выборка из 200 клиентов):</h5>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="p-2 text-left border">Клиент</th>
                      <th className="p-2 text-center border">Доход (тыс. руб./год)</th>
                      <th className="p-2 text-center border">Расходы (тыс. руб./год)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2 border">1</td><td className="p-2 text-center border">150</td><td className="p-2 text-center border">39</td></tr>
                    <tr className="bg-muted/50"><td className="p-2 border">2</td><td className="p-2 text-center border">810</td><td className="p-2 text-center border">81</td></tr>
                    <tr><td className="p-2 border">3</td><td className="p-2 text-center border">420</td><td className="p-2 text-center border">6</td></tr>
                    <tr className="bg-muted/50"><td className="p-2 border">4</td><td className="p-2 text-center border">540</td><td className="p-2 text-center border">77</td></tr>
                    <tr><td className="p-2 border">...</td><td className="p-2 text-center border">...</td><td className="p-2 text-center border">...</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-bold mb-2">Шаг 1: Стандартизация данных</h5>
                <p className="text-sm text-muted-foreground">
                  Приводим переменные к единому масштабу: <InlineMath math="z = \frac{x - \mu}{\sigma}" />
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-bold mb-2">Шаг 2: Определение числа кластеров</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Метод локтя показал оптимальное K = 4. Силуэтный коэффициент: 0.55 (хорошее разделение).
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-bold mb-2">Шаг 3: Результаты кластеризации</h5>
                <div className="overflow-x-auto mt-2">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="p-2 text-left border">Кластер</th>
                        <th className="p-2 text-center border">Доход (среднее)</th>
                        <th className="p-2 text-center border">Расходы (среднее)</th>
                        <th className="p-2 text-center border">N</th>
                        <th className="p-2 text-left border">Описание</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CLUSTERS.map(([k, inc, exp, n, desc, color], idx) => (
                        <tr key={k} className={idx % 2 === 1 ? "bg-muted/50" : undefined}>
                          <td className={`p-2 border font-semibold ${color}`}>{k}</td>
                          <td className="p-2 text-center border">{inc}</td>
                          <td className="p-2 text-center border">{exp}</td>
                          <td className="p-2 text-center border">{n}</td>
                          <td className="p-2 border text-sm">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-card p-4 rounded-lg mt-4">
              <h5 className="font-semibold mb-2">Маркетинговые рекомендации:</h5>
              <ul className="space-y-1 text-sm">
                <li>• <strong>Кластер 1:</strong> Базовые товары, акции, скидки</li>
                <li>• <strong>Кластер 2:</strong> Программы лояльности для активации расходов</li>
                <li>• <strong>Кластер 3:</strong> Кросс-продажи, персональные рекомендации</li>
                <li>• <strong>Кластер 4:</strong> VIP-обслуживание, эксклюзивные предложения</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
              <h5 className="font-semibold mb-2 text-green-700">Преимущества K-means</h5>
              <ul className="space-y-1 text-sm">
                <li>• Простота и понятность</li>
                <li>• Высокая скорость работы</li>
                <li>• Хорошо масштабируется</li>
                <li>• Гарантированная сходимость</li>
              </ul>
            </div>
            <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
              <h5 className="font-semibold mb-2 text-destructive">Ограничения</h5>
              <ul className="space-y-1 text-sm">
                <li>• Нужно заранее знать K</li>
                <li>• Чувствителен к выбросам</li>
                <li>• Находит только выпуклые кластеры</li>
                <li>• Результат зависит от инициализации</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-3">Области применения кластерного анализа</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-primary">Маркетинг</p>
                <p className="text-muted-foreground">Сегментация клиентов, персонализация</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Биология</p>
                <p className="text-muted-foreground">Классификация организмов, генов</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Медицина</p>
                <p className="text-muted-foreground">Группировка пациентов, диагностика</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Обработка изображений</p>
                <p className="text-muted-foreground">Сжатие, сегментация, распознавание</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  </TopicPageLayout>
);

export default StatisticsCluster;
