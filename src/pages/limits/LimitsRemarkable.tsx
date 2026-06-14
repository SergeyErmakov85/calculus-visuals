import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const LimitsRemarkable = () => (
  <TopicPageLayout topicId="limits-remarkable">
    <TexContent>
      <p className="text-muted-foreground mb-6">
        Два предела встречаются так часто, что их называют <strong>замечательными</strong>. Первый
        связывает синус с его аргументом, второй задаёт число {`$e$`}. Из них выводится целое
        семейство полезных следствий, которыми раскрывают неопределённости вида {`$\\frac{0}{0}$`} и
        {` `}{`$1^{\\infty}$`}.
      </p>

      <h2 className="subsection-title">Первый замечательный предел</h2>
      <div className="formula-block">{`$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$`}</div>
      <p className="mb-4">
        Вблизи нуля синус почти не отличается от своего аргумента: {`$\\sin x \\approx x$`}. Отсюда
        вытекают следствия:
      </p>
      <div className="formula-block">{`$$\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1, \\qquad \\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}, \\qquad \\lim_{x \\to 0} \\frac{\\arcsin x}{x} = 1$$`}</div>

      <h2 className="subsection-title">Второй замечательный предел</h2>
      <div className="formula-block">{`$$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e, \\qquad \\lim_{x \\to 0} (1 + x)^{1/x} = e$$`}</div>
      <p className="mb-4">
        Это определение числа {`$e \\approx 2{,}71828$`}. Раскрывает неопределённость
        {` `}{`$1^{\\infty}$`}. Его следствия для логарифмов и экспонент:
      </p>
      <div className="formula-block">{`$$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1, \\qquad \\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1, \\qquad \\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$$`}</div>

      <InfoBlock type="important" title="Важно помнить">
        <ul className="list-disc list-inside space-y-1">
          <li>В первом пределе аргумент синуса и знаменатель должны быть <strong>одинаковыми</strong> и стремиться к нулю</li>
          <li>Множители-константы выносятся: {`$\\frac{\\sin kx}{x} = k \\cdot \\frac{\\sin kx}{kx} \\to k$`}</li>
          <li>Второй предел раскрывает {`$1^{\\infty}$`}; вид {`$(1 + \\frac{a}{x})^{bx} \\to e^{ab}$`}</li>
          <li>Следствия {`$\\frac{\\ln(1+x)}{x} \\to 1$`} и {`$\\frac{e^x-1}{x} \\to 1$`} ускоряют вычисления</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">Задача 1: Подгонка аргумента</h2>
      <InfoBlock type="example" title="Найти lim(x→0) sin(3x)/(2x)">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Приводим к виду {`$\\frac{\\sin t}{t}$`}, домножая до аргумента {`$3x$`}:</p>
        <div className="formula-block">{`$$\\frac{\\sin 3x}{2x} = \\frac{3}{2} \\cdot \\frac{\\sin 3x}{3x}$$`}</div>
        <p className="mb-2"><strong>Шаг 2.</strong> При {`$x \\to 0$`} имеем {`$3x \\to 0$`}, поэтому {`$\\frac{\\sin 3x}{3x} \\to 1$`}:</p>
        <div className="formula-block">{`$$\\lim_{x \\to 0} \\frac{\\sin 3x}{2x} = \\frac{3}{2} \\cdot 1 = \\frac{3}{2}$$`}</div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Неопределённость 1^∞</h2>
      <InfoBlock type="example" title="Найти lim(x→∞) (1 + 2/x)^x">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Пусть {`$m = \\frac{x}{2}$`}, тогда {`$x = 2m$`} и {`$m \\to \\infty$`}:</p>
        <div className="formula-block">{`$$\\left(1 + \\frac{2}{x}\\right)^x = \\left(1 + \\frac{1}{m}\\right)^{2m} = \\left[\\left(1 + \\frac{1}{m}\\right)^m\\right]^2$$`}</div>
        <p className="mb-2"><strong>Шаг 2.</strong> Внутреннее выражение стремится к {`$e$`}:</p>
        <div className="formula-block">{`$$\\lim_{x \\to \\infty} \\left(1 + \\frac{2}{x}\\right)^x = e^2$$`}</div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Логарифмическое следствие</h2>
      <InfoBlock type="example" title="Найти lim(x→0) ln(1 + 5x)/x">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Домножаем до аргумента {`$5x$`}:</p>
        <div className="formula-block">{`$$\\frac{\\ln(1 + 5x)}{x} = 5 \\cdot \\frac{\\ln(1 + 5x)}{5x}$$`}</div>
        <p className="mb-2"><strong>Шаг 2.</strong> По следствию {`$\\frac{\\ln(1 + t)}{t} \\to 1$`}:</p>
        <div className="formula-block">{`$$\\lim_{x \\to 0} \\frac{\\ln(1 + 5x)}{x} = 5 \\cdot 1 = 5$$`}</div>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Разные аргументы:</strong> {`$\\frac{\\sin 3x}{x} \\neq 1$`} — нужно «дотянуть» знаменатель до {`$3x$`}</li>
          <li><strong>Применяют первый предел не в нуле:</strong> он работает только при аргументе {`$\\to 0$`}</li>
          <li><strong>Теряют показатель во втором пределе:</strong> {`$(1+\\frac{a}{x})^{bx} \\to e^{ab}$`}, а не {`$e$`}</li>
          <li><strong>Путают {`$\\frac{1-\\cos x}{x^2} \\to \\frac{1}{2}$`}</strong> с {`$\\frac{1-\\cos x}{x} \\to 0$`}</li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Видите {`$\\frac{0}{0}$`} с синусом/тангенсом:</strong> первый замечательный предел</li>
          <li><strong>Видите {`$1^{\\infty}$`} (скобка → 1, степень → ∞):</strong> второй замечательный предел</li>
          <li><strong>Логарифм или экспонента «минус 1»:</strong> следствия {`$\\frac{\\ln(1+x)}{x}$`}, {`$\\frac{e^x-1}{x}$`}</li>
          <li><strong>Приём:</strong> искусственно домножьте числитель и знаменатель до одинакового аргумента</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">📝 Практические задачи</h2>
      <p className="text-muted-foreground mb-4">
        Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
      </p>

      <PracticeBlock
        number={1}
        title="Найти lim(x→0) sin(5x)/sin(2x)"
        answer={`$\\frac{5}{2}$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Делим и домножаем каждую часть до её аргумента:</p>
            <div className="formula-block">{`$$\\frac{\\sin 5x}{\\sin 2x} = \\frac{5x \\cdot \\frac{\\sin 5x}{5x}}{2x \\cdot \\frac{\\sin 2x}{2x}}$$`}</div>
            <p className="mb-2"><strong>Шаг 2.</strong> Обе дроби {`$\\frac{\\sin t}{t} \\to 1$`}:</p>
            <div className="formula-block">{`$$= \\frac{5x}{2x} \\cdot \\frac{1}{1} = \\frac{5}{2}$$`}</div>
          </>
        }
      >
        <p>Приведите числитель и знаменатель к виду {`$\\frac{\\sin t}{t}$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={2}
        title="Найти lim(x→∞) (1 + 3/x)^(2x)"
        answer={`$e^6$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Пусть {`$m = \\frac{x}{3}$`}, тогда показатель {`$2x = 6m$`}:</p>
            <div className="formula-block">{`$$\\left(1 + \\frac{3}{x}\\right)^{2x} = \\left[\\left(1 + \\frac{1}{m}\\right)^m\\right]^6 \\to e^6$$`}</div>
            <p className="mb-2">Вид {`$(1 + \\frac{a}{x})^{bx} \\to e^{ab}$`}, здесь {`$a = 3$`}, {`$b = 2$`}.</p>
          </>
        }
      >
        <p>Используйте {`$(1 + a/x)^{bx} \\to e^{ab}$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={3}
        title="Найти lim(x→0) (e^(3x) - 1)/x"
        answer={`$3$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Домножаем до аргумента {`$3x$`}:</p>
            <div className="formula-block">{`$$\\frac{e^{3x} - 1}{x} = 3 \\cdot \\frac{e^{3x} - 1}{3x}$$`}</div>
            <p className="mb-2"><strong>Шаг 2.</strong> По следствию {`$\\frac{e^t - 1}{t} \\to 1$`}:</p>
            <div className="formula-block">{`$$= 3 \\cdot 1 = 3$$`}</div>
          </>
        }
      >
        <p>Примените следствие {`$\\frac{e^t - 1}{t} \\to 1$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={4}
        title="Найти lim(x→0) (1 - cos x)/x²"
        answer={`$\\frac{1}{2}$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Применяем тождество {`$1 - \\cos x = 2\\sin^2\\frac{x}{2}$`}:</p>
            <div className="formula-block">{`$$\\frac{1 - \\cos x}{x^2} = \\frac{2\\sin^2\\frac{x}{2}}{x^2} = \\frac{1}{2}\\left(\\frac{\\sin\\frac{x}{2}}{\\frac{x}{2}}\\right)^2$$`}</div>
            <p className="mb-2"><strong>Шаг 2.</strong> Дробь в скобке {`$\\to 1$`}, поэтому предел равен {`$\\frac{1}{2}$`}.</p>
          </>
        }
      >
        <p>Используйте тождество {`$1 - \\cos x = 2\\sin^2(x/2)$`}.</p>
      </PracticeBlock>
    </TexContent>
  </TopicPageLayout>
);

export default LimitsRemarkable;
