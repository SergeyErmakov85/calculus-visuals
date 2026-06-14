import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const DerivativesRules = () => (
  <TopicPageLayout topicId="derivatives-rules">
    <TexContent>
      <p className="text-muted-foreground mb-6">
        Брать производные по определению — через предел — долго. На практике используют набор
        готовых формул и правил: степенное правило, производные элементарных функций, правила
        суммы, произведения и частного. Они покрывают почти всё, что встречается в задачах.
      </p>

      <h2 className="subsection-title">Определение производной</h2>
      <p className="mb-4">
        Производная функции {`$f(x)$`} в точке {`$x$`} — это предел отношения приращений:
      </p>
      <div className="formula-block">
        {`$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$`}
      </div>
      <p className="mb-4">
        Геометрически это <strong>наклон касательной</strong> к графику в данной точке. Все правила
        ниже выводятся из этого определения.
      </p>

      <h2 className="subsection-title">Основные формулы производных</h2>
      <div className="formula-block">{`$$\\frac{d}{dx}(c) = 0 \\qquad \\frac{d}{dx}(x^n) = nx^{n-1}$$`}</div>
      <div className="formula-block">{`$$\\frac{d}{dx}(\\sin x) = \\cos x \\qquad \\frac{d}{dx}(\\cos x) = -\\sin x$$`}</div>
      <div className="formula-block">{`$$\\frac{d}{dx}(e^x) = e^x \\qquad \\frac{d}{dx}(\\ln x) = \\frac{1}{x}$$`}</div>

      <InfoBlock type="important" title="Важно помнить">
        <ul className="list-disc list-inside space-y-1">
          <li>Производная константы всегда равна нулю</li>
          <li>Степенное правило работает для любых {`$n$`}, включая дробные и отрицательные</li>
          <li>{`$e^x$`} — единственная функция, равная своей производной</li>
          <li>{`$(cf)' = cf'$`} и {`$(f + g)' = f' + g'$`} — линейность производной</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">Правила произведения и частного</h2>
      <p className="mb-2"><strong>Правило произведения:</strong></p>
      <div className="formula-block">{`$$(fg)' = f'g + fg'$$`}</div>
      <p className="mb-2"><strong>Правило частного:</strong></p>
      <div className="formula-block">{`$$\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$$`}</div>

      <h2 className="subsection-title">Задача 1: Степенное правило</h2>
      <InfoBlock type="example" title="Найти производную f(x) = 3x⁴ - 2x² + 5x - 7">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Применяем степенное правило к каждому слагаемому:</p>
        <ul className="list-disc list-inside mb-3">
          <li>{`$(3x^4)' = 12x^3$`}</li>
          <li>{`$(2x^2)' = 4x$`}</li>
          <li>{`$(5x)' = 5$`}</li>
          <li>{`$(7)' = 0$`}</li>
        </ul>
        <p className="mb-2"><strong>Шаг 2.</strong> Собираем:</p>
        <div className="formula-block">{`$$f'(x) = 12x^3 - 4x + 5$$`}</div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Правило произведения</h2>
      <InfoBlock type="example" title="Найти производную f(x) = x² · sin(x)">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> {`$f = x^2$`}, {`$g = \\sin x$`}, значит {`$f' = 2x$`}, {`$g' = \\cos x$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Применяем {`$(fg)' = f'g + fg'$`}:</p>
        <div className="formula-block">{`$$(x^2 \\sin x)' = 2x \\sin x + x^2 \\cos x$$`}</div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Правило частного</h2>
      <InfoBlock type="example" title="Найти производную f(x) = (x + 1)/(x - 1)">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> {`$f = x + 1$`}, {`$g = x - 1$`}, {`$f' = g' = 1$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> По формуле частного:</p>
        <div className="formula-block">{`$$\\left(\\frac{x+1}{x-1}\\right)' = \\frac{1 \\cdot (x-1) - (x+1) \\cdot 1}{(x-1)^2} = \\frac{-2}{(x-1)^2}$$`}</div>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Забывают уменьшить степень:</strong> {`$(x^3)' = 3x^2$`}, а не {`$3x^3$`}</li>
          <li><strong>Путают знаки в правиле частного:</strong> в числителе {`$f'g - fg'$`}, не наоборот</li>
          <li><strong>Забывают квадрат в знаменателе:</strong> {`$\\left(\\frac{f}{g}\\right)' = \\frac{\\ldots}{g^2}$`}</li>
          <li><strong>Считают {`$(fg)' = f'g'$`}:</strong> это неверно</li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Мнемоника для частного:</strong> «низ·производная верха минус верх·производная низа, всё на низ в квадрате»</li>
          <li><strong>Производная = наклон:</strong> если {`$f'(a) > 0$`}, функция растёт в точке {`$a$`}</li>
          <li><strong>Единицы:</strong> если {`$f$`} в метрах, {`$x$`} в секундах, то {`$f'$`} — в м/с</li>
          <li><strong>Проверка:</strong> производная полинома степени {`$n$`} имеет степень {`$n-1$`}</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">📝 Практические задачи</h2>
      <p className="text-muted-foreground mb-4">
        Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
      </p>

      <PracticeBlock
        number={1}
        title="Найти производную f(x) = 7x³"
        answer={`$21x^2$`}
        solution={
          <>
            <p className="mb-2">Степенное правило {`$\\frac{d}{dx}(ax^n) = anx^{n-1}$`}:</p>
            <div className="formula-block">{`$$\\frac{d}{dx}(7x^3) = 7 \\cdot 3 \\cdot x^{2} = 21x^2$$`}</div>
          </>
        }
      >
        <p>Используйте степенное правило.</p>
      </PracticeBlock>

      <PracticeBlock
        number={2}
        title="Найти производную f(x) = 5x⁴ - 3x³ + 2x - 4"
        answer={`$20x^3 - 9x^2 + 2$`}
        solution={
          <>
            <p className="mb-2">Дифференцируем каждое слагаемое:</p>
            <div className="formula-block">{`$$f'(x) = 20x^3 - 9x^2 + 2$$`}</div>
          </>
        }
      >
        <p>Продифференцируйте каждое слагаемое отдельно.</p>
      </PracticeBlock>

      <PracticeBlock
        number={3}
        title="Найти производную f(x) = √(5x)"
        answer={`$\\frac{\\sqrt{5}}{2\\sqrt{x}}$`}
        solution={
          <>
            <p className="mb-2">Перепишем как степень: {`$\\sqrt{5x} = \\sqrt{5}\\, x^{1/2}$`}.</p>
            <div className="formula-block">{`$$\\frac{d}{dx}\\left(\\sqrt{5}\\, x^{1/2}\\right) = \\sqrt{5} \\cdot \\frac{1}{2} x^{-1/2} = \\frac{\\sqrt{5}}{2\\sqrt{x}}$$`}</div>
          </>
        }
      >
        <p>Перепишите корень как степень {`$x^{1/2}$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={4}
        title="Найти производную f(x) = 8√x + 3/x"
        answer={`$\\frac{4}{\\sqrt{x}} - \\frac{3}{x^2}$`}
        solution={
          <>
            <p className="mb-2">Перепишем: {`$8\\sqrt{x} = 8x^{1/2}$`}, {`$\\frac{3}{x} = 3x^{-1}$`}.</p>
            <div className="formula-block">{`$$f'(x) = 4x^{-1/2} - 3x^{-2} = \\frac{4}{\\sqrt{x}} - \\frac{3}{x^2}$$`}</div>
          </>
        }
      >
        <p>Перепишите корни и дроби как степени с дробными/отрицательными показателями.</p>
      </PracticeBlock>
    </TexContent>
  </TopicPageLayout>
);

export default DerivativesRules;
