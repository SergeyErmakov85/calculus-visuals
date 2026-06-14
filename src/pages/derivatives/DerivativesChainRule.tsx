import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const DerivativesChainRule = () => (
  <TopicPageLayout topicId="derivatives-chain-rule">
    <TexContent>
      <p className="text-muted-foreground mb-6">
        Цепное правило — ключ к дифференцированию <strong>сложных функций</strong> (функций от
        функций). Когда одна функция «вложена» в другую — {`$\\sin(x^2)$`}, {`$e^{3x}$`},
        {` `}{`$\\sqrt{x^2+1}$`} — цепное правило показывает, как разворачивать производную слой за слоем.
      </p>

      <h2 className="subsection-title">Формула цепного правила</h2>
      <p className="mb-4">Если {`$y = f(g(x))$`}, то</p>
      <div className="formula-block">{`$$\\frac{dy}{dx} = f'(g(x)) \\cdot g'(x)$$`}</div>
      <p className="mb-4">или в нотации Лейбница: если {`$y = f(u)$`} и {`$u = g(x)$`}, то</p>
      <div className="formula-block">{`$$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$`}</div>
      <p className="mb-4">
        <strong>Словами:</strong> производная сложной функции = производная внешней × производная внутренней.
      </p>

      <InfoBlock type="important" title="Важно помнить">
        <ul className="list-disc list-inside space-y-1">
          <li>Сначала дифференцируем «внешнюю» функцию, оставляя внутреннюю как есть</li>
          <li>Затем умножаем на производную «внутренней» функции</li>
          <li>Для многократно вложенных функций применяем правило несколько раз</li>
          <li>В нотации Лейбница дроби как бы «сокращаются» — удобно для запоминания</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">Общие формулы со сложным аргументом</h2>
      <div className="formula-block">{`$$\\frac{d}{dx}[f(x)]^n = n[f(x)]^{n-1} \\cdot f'(x)$$`}</div>
      <div className="formula-block">{`$$\\frac{d}{dx} e^{f(x)} = e^{f(x)} \\cdot f'(x)$$`}</div>
      <div className="formula-block">{`$$\\frac{d}{dx} \\ln(f(x)) = \\frac{f'(x)}{f(x)}$$`}</div>
      <div className="formula-block">{`$$\\frac{d}{dx} \\sin(f(x)) = \\cos(f(x)) \\cdot f'(x)$$`}</div>

      <h2 className="subsection-title">Задача 1: Степень от функции</h2>
      <InfoBlock type="example" title="Найти производную f(x) = (3x² + 1)⁵">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Внешняя {`$u^5$`}, внутренняя {`$u = 3x^2 + 1$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Производная внешней: {`$5u^4$`}; внутренней: {`$u' = 6x$`}.</p>
        <p className="mb-2"><strong>Шаг 3.</strong> По цепному правилу:</p>
        <div className="formula-block">{`$$f'(x) = 5(3x^2 + 1)^4 \\cdot 6x = 30x(3x^2 + 1)^4$$`}</div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Экспонента от функции</h2>
      <InfoBlock type="example" title="Найти производную f(x) = e^(sin x)">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Внешняя {`$e^u$`}, внутренняя {`$u = \\sin x$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Применяем формулу:</p>
        <div className="formula-block">{`$$\\frac{d}{dx} e^{\\sin x} = e^{\\sin x} \\cdot \\cos x$$`}</div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Двойное вложение</h2>
      <InfoBlock type="example" title="Найти производную f(x) = sin²(3x)">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Запишем как {`$(\\sin(3x))^2$`} — три слоя: {`$u^2$`}, {`$\\sin v$`}, {`$v = 3x$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Применяем цепное правило дважды:</p>
        <div className="formula-block">{`$$f'(x) = 2\\sin(3x) \\cdot \\cos(3x) \\cdot 3$$`}</div>
        <p className="mb-2"><strong>Шаг 3.</strong> Упрощаем через {`$2\\sin\\theta\\cos\\theta = \\sin(2\\theta)$`}:</p>
        <div className="formula-block">{`$$= 6\\sin(3x)\\cos(3x) = 3\\sin(6x)$$`}</div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 4: Логарифм</h2>
      <InfoBlock type="example" title="Найти производную f(x) = ln(x² + 1)">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2">Внешняя {`$\\ln u$`}, внутренняя {`$u = x^2 + 1$`}:</p>
        <div className="formula-block">{`$$f'(x) = \\frac{1}{x^2 + 1} \\cdot 2x = \\frac{2x}{x^2 + 1}$$`}</div>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Забывают умножить на внутреннюю:</strong> {`$(\\sin(3x))' = 3\\cos(3x)$`}, а не {`$\\cos(3x)$`}</li>
          <li><strong>Неправильный порядок:</strong> сначала дифференцируют внешнюю, затем внутреннюю</li>
          <li><strong>Путают структуру:</strong> в {`$e^{x^2}$`} внутренняя функция — {`$x^2$`}, не {`$x$`}</li>
          <li><strong>Не видят вложенность:</strong> {`$\\sqrt{x^2+1} = (x^2+1)^{1/2}$`} — это сложная функция</li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>«Луковица»:</strong> снимаем слои один за другим, от внешнего к внутреннему</li>
          <li><strong>Сигналы вложенности:</strong> скобки внутри функций ({`$\\sin(\\ldots)$`}, {`$e^{\\ldots}$`}, {`$(\\ldots)^n$`})</li>
          <li><strong>Мнемоника Лейбница:</strong> {`$\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}$`} — «сокращаем {`$du$`}»</li>
          <li><strong>Проверка:</strong> если аргумент функции — не просто {`$x$`}, нужно цепное правило</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">📝 Практические задачи</h2>
      <p className="text-muted-foreground mb-4">
        Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
      </p>

      <PracticeBlock
        number={1}
        title="Найти производную f(x) = (√x + 1)⁴"
        answer={`$\\frac{2(\\sqrt{x} + 1)^3}{\\sqrt{x}}$`}
        solution={
          <>
            <p className="mb-2">Пусть {`$u = \\sqrt{x} + 1$`}, тогда {`$y = u^4$`}, {`$\\frac{dy}{du} = 4u^3$`}, {`$\\frac{du}{dx} = \\frac{1}{2\\sqrt{x}}$`}.</p>
            <div className="formula-block">{`$$\\frac{dy}{dx} = 4(\\sqrt{x}+1)^3 \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{2(\\sqrt{x}+1)^3}{\\sqrt{x}}$$`}</div>
          </>
        }
      >
        <p>Определите внешнюю и внутреннюю функции.</p>
      </PracticeBlock>

      <PracticeBlock
        number={2}
        title="Найти производную f(x) = (3x³ + 8x² + 3)⁶"
        answer={`$6(9x^2 + 16x)(3x^3 + 8x^2 + 3)^5$`}
        solution={
          <>
            <p className="mb-2">Пусть {`$u = 3x^3 + 8x^2 + 3$`}, тогда {`$y = u^6$`}, {`$u' = 9x^2 + 16x$`}.</p>
            <div className="formula-block">{`$$f'(x) = 6(9x^2 + 16x)(3x^3 + 8x^2 + 3)^5$$`}</div>
          </>
        }
      >
        <p>Шестая степень от полинома — применяйте цепное правило.</p>
      </PracticeBlock>

      <PracticeBlock
        number={3}
        title="Найти производную f(t) = √(7t⁴ + 12)"
        answer={`$\\frac{14t^3}{\\sqrt{7t^4 + 12}}$`}
        solution={
          <>
            <p className="mb-2">Перепишем как {`$(7t^4 + 12)^{1/2}$`}. Пусть {`$u = 7t^4 + 12$`}, {`$u' = 28t^3$`}.</p>
            <div className="formula-block">{`$$\\frac{dy}{dt} = \\frac{1}{2\\sqrt{7t^4+12}} \\cdot 28t^3 = \\frac{14t^3}{\\sqrt{7t^4+12}}$$`}</div>
          </>
        }
      >
        <p>Корень — это степень {`$1/2$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={4}
        title="Найти производную f(θ) = 3sin(4θ)"
        answer={`$12\\cos(4\\theta)$`}
        solution={
          <>
            <p className="mb-2">Пусть {`$u = 4\\theta$`}, {`$y = 3\\sin u$`}, {`$\\frac{du}{d\\theta} = 4$`}.</p>
            <div className="formula-block">{`$$\\frac{dy}{d\\theta} = 3\\cos(4\\theta) \\cdot 4 = 12\\cos(4\\theta)$$`}</div>
          </>
        }
      >
        <p>Аргумент синуса — сложная функция; умножьте на производную внутренней.</p>
      </PracticeBlock>
    </TexContent>
  </TopicPageLayout>
);

export default DerivativesChainRule;
