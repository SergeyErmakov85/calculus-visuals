import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const DerivativesApplications = () => (
  <TopicPageLayout topicId="derivatives-applications">
    <TexContent>
      <p className="text-muted-foreground mb-6">
        Производные — это инструмент <strong>оптимизации</strong>: поиска наибольших и наименьших
        значений. От максимальной площади при заданном периметре до минимальных затрат — все такие
        задачи сводятся к исследованию функции на экстремум. Базовую теорию локальных экстремумов
        смотрите в разделе «Экстремумы и исследование функции», здесь — её применение.
      </p>

      <h2 className="subsection-title">Критические точки и тесты на экстремум</h2>
      <p className="mb-4">
        В точках локального экстремума производная обращается в ноль или не существует — это
        <strong> критические точки</strong>:
      </p>
      <div className="formula-block">{`$$f'(c) = 0 \\quad \\text{или} \\quad f'(c) \\text{ не существует}$$`}</div>
      <p className="mb-2"><strong>Тест второй производной</strong> (если {`$f'(c) = 0$`}):</p>
      <div className="formula-block">{`$$f''(c) > 0 \\Rightarrow \\text{минимум}, \\qquad f''(c) < 0 \\Rightarrow \\text{максимум}$$`}</div>

      <InfoBlock type="important" title="Наибольшее и наименьшее значение на отрезке">
        <ul className="list-disc list-inside space-y-1">
          <li>Найдите критические точки внутри отрезка {`$[a, b]$`}</li>
          <li>Вычислите {`$f$`} в критических точках <strong>и на концах</strong> {`$a$`}, {`$b$`}</li>
          <li>Наибольшее из значений — глобальный максимум, наименьшее — глобальный минимум</li>
          <li>{`$f''(c) = 0$`} — тест неопределён, используйте знак первой производной</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">Задача 1: Экстремум на отрезке</h2>
      <InfoBlock type="example" title="Найти max и min функции f(x) = x³ - 3x на [-2, 2]">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> {`$f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 0 \\Rightarrow x = \\pm 1$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Вычисляем значения в критических точках и на концах:</p>
        <ul className="list-disc list-inside mb-3">
          <li>{`$f(-2) = -8 + 6 = -2$`}</li>
          <li>{`$f(-1) = -1 + 3 = 2$`}</li>
          <li>{`$f(1) = 1 - 3 = -2$`}</li>
          <li>{`$f(2) = 8 - 6 = 2$`}</li>
        </ul>
        <p><strong>Ответ:</strong> максимум {`$= 2$`} (при {`$x = -1$`} и {`$x = 2$`}); минимум {`$= -2$`} (при {`$x = 1$`} и {`$x = -2$`}).</p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Оптимизация площади</h2>
      <InfoBlock type="example" title="Найти максимальную площадь прямоугольника с периметром 20">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Стороны {`$x$`} и {`$y$`}, периметр {`$2x + 2y = 20 \\Rightarrow y = 10 - x$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Площадь как функция одной переменной:</p>
        <div className="formula-block">{`$$S(x) = x(10 - x) = 10x - x^2$$`}</div>
        <p className="mb-2"><strong>Шаг 3.</strong> {`$S'(x) = 10 - 2x = 0 \\Rightarrow x = 5$`}; {`$S''(x) = -2 < 0$`} — максимум.</p>
        <p><strong>Ответ:</strong> при {`$x = y = 5$`} (квадрат) площадь максимальна: {`$S_{\\max} = 25$`}.</p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Минимизация периметра</h2>
      <InfoBlock type="example" title="Прямоугольник площади 100 м². Какие размеры дают минимальный периметр?">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> {`$xy = 100 \\Rightarrow y = \\frac{100}{x}$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Периметр: {`$P(x) = 2x + \\frac{200}{x}$`}.</p>
        <p className="mb-2"><strong>Шаг 3.</strong> {`$P'(x) = 2 - \\frac{200}{x^2} = 0 \\Rightarrow x^2 = 100 \\Rightarrow x = 10$`}.</p>
        <p className="mb-2"><strong>Шаг 4.</strong> {`$P''(x) = \\frac{400}{x^3} > 0$`} — минимум.</p>
        <p><strong>Ответ:</strong> квадрат {`$10 \\times 10$`} м, периметр {`$= 40$`} м.</p>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Забывают концы отрезка:</strong> глобальный экстремум может быть на границе</li>
          <li><strong>Путают локальный и глобальный:</strong> локальный максимум может быть меньше глобального минимума</li>
          <li><strong>Не сводят к одной переменной:</strong> в задачах оптимизации используйте ограничение</li>
          <li><strong>Не проверяют тип точки:</strong> критическая точка — не обязательно нужный экстремум</li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>«Горки»:</strong> максимум — вершина ({`$f'' < 0$`}), минимум — дно ({`$f'' > 0$`})</li>
          <li><strong>Алгоритм на отрезке:</strong> критические точки → значения в них и на концах → выбрать max/min</li>
          <li><strong>Оптимизация:</strong> всегда сводите к функции одной переменной через ограничение</li>
          <li><strong>Физика:</strong> {`$f' = 0$`} — «остановка», {`$f'' < 0$`} — замедление</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">📝 Практические задачи</h2>
      <p className="text-muted-foreground mb-4">
        Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
      </p>

      <PracticeBlock
        number={1}
        title="Найти max и min функции f(x) = x⁴ - 2x² на [-2, 2]"
        answer={`Максимум $8$ при $x = \\pm 2$; минимум $-1$ при $x = \\pm 1$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> {`$f'(x) = 4x^3 - 4x = 4x(x-1)(x+1) = 0 \\Rightarrow x = -1, 0, 1$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> Значения:</p>
            <ul className="list-disc list-inside mb-2">
              <li>{`$f(\\pm 2) = 16 - 8 = 8$`}</li>
              <li>{`$f(\\pm 1) = 1 - 2 = -1$`}</li>
              <li>{`$f(0) = 0$`}</li>
            </ul>
          </>
        }
      >
        <p>Проверьте все критические точки И концы отрезка.</p>
      </PracticeBlock>

      <PracticeBlock
        number={2}
        title="Найти экстремумы f(x) = x³ - 6x² + 9x + 1"
        answer={`Максимум при $x = 1$: $f(1) = 5$; минимум при $x = 3$: $f(3) = 1$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> {`$f'(x) = 3(x-1)(x-3) = 0 \\Rightarrow x = 1, 3$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> {`$f''(x) = 6x - 12$`}: {`$f''(1) = -6 < 0$`} (макс), {`$f''(3) = 6 > 0$`} (мин).</p>
            <p className="mb-2"><strong>Шаг 3.</strong> {`$f(1) = 5$`}, {`$f(3) = 1$`}.</p>
          </>
        }
      >
        <p>Классифицируйте критические точки по знаку второй производной.</p>
      </PracticeBlock>

      <PracticeBlock
        number={3}
        title="Из проволоки длины 100 см делают прямоугольник. Максимальная площадь?"
        answer={`Квадрат $25 \\times 25$, площадь $625$ см²`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> {`$2x + 2y = 100 \\Rightarrow y = 50 - x$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> {`$S(x) = x(50 - x) = 50x - x^2$`}.</p>
            <p className="mb-2"><strong>Шаг 3.</strong> {`$S'(x) = 50 - 2x = 0 \\Rightarrow x = 25$`}, {`$S'' = -2 < 0$`} — максимум.</p>
            <div className="formula-block">{`$$S_{\\max} = 25 \\cdot 25 = 625 \\text{ см}^2$$`}</div>
          </>
        }
      >
        <p>Выразите площадь через одну сторону, используя длину проволоки.</p>
      </PracticeBlock>
    </TexContent>
  </TopicPageLayout>
);

export default DerivativesApplications;
