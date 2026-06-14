import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const SeriesSequences = () => (
  <TopicPageLayout topicId="series-sequences">
    <TexContent>
      <p className="text-muted-foreground mb-6">
        Последовательность — это упорядоченный список чисел. Прежде чем складывать бесконечно
        много слагаемых в ряд, нужно понять, к чему стремятся отдельные члены. Сходимость
        последовательностей — фундамент всей теории рядов.
      </p>

      <h2 className="subsection-title">Понятие последовательности</h2>
      <p className="mb-4">
        <strong>Последовательность</strong> {`$\\{a_n\\}$`} — это функция из натуральных чисел в
        вещественные: {`$a_1, a_2, a_3, \\ldots, a_n, \\ldots$`}
      </p>
      <div className="formula-block">
        {`$$a_n = f(n), \\quad n \\in \\mathbb{N}$$`}
      </div>
      <p className="mb-2">Примеры:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>{`$a_n = \\frac{1}{n}$`}: {`$1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\ldots$`}</li>
        <li>{`$a_n = (-1)^n$`}: {`$-1, 1, -1, 1, \\ldots$`}</li>
        <li>{`$a_n = \\frac{n}{n+1}$`}: {`$\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\ldots$`}</li>
      </ul>

      <h2 className="subsection-title">Сходимость последовательности</h2>
      <div className="formula-block">
        {`$$\\lim_{n \\to \\infty} a_n = L \\quad \\Leftrightarrow \\quad \\forall \\varepsilon > 0 \\; \\exists N: \\; n > N \\Rightarrow |a_n - L| < \\varepsilon$$`}
      </div>
      <p className="mb-4">
        <strong>Простое понимание:</strong> начиная с некоторого {`$N$`}, все члены
        последовательности оказываются сколь угодно близко к {`$L$`}.
      </p>

      <p className="mb-2"><strong>Основные пределы:</strong></p>
      <div className="formula-block">
        {`$$\\lim_{n \\to \\infty} \\frac{1}{n^p} = 0 \\; (p > 0), \\quad \\lim_{n \\to \\infty} r^n = 0 \\; (|r| < 1), \\quad \\lim_{n \\to \\infty} \\sqrt[n]{n} = 1$$`}
      </div>
      <div className="formula-block">
        {`$$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e, \\quad \\lim_{n \\to \\infty} \\frac{\\ln n}{n} = 0$$`}
      </div>

      <InfoBlock type="important" title="Важно помнить">
        <ul className="list-disc list-inside space-y-1">
          <li>Сходящаяся последовательность имеет <strong>единственный</strong> предел</li>
          <li>Сходящаяся последовательность <strong>ограничена</strong></li>
          <li>Ограниченность не гарантирует сходимость: {`$(-1)^n$`} ограничена, но расходится</li>
          <li>Монотонная ограниченная последовательность <strong>сходится</strong></li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">Задача 1: Предел рациональной последовательности</h2>
      <InfoBlock type="example" title="Найти lim (3n² + 2n)/(5n² - n + 1)">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Делим числитель и знаменатель на старшую степень ({`$n^2$`}):</p>
        <div className="formula-block">
          {`$$\\lim_{n \\to \\infty} \\frac{3n^2 + 2n}{5n^2 - n + 1} = \\lim_{n \\to \\infty} \\frac{3 + \\frac{2}{n}}{5 - \\frac{1}{n} + \\frac{1}{n^2}}$$`}
        </div>
        <p className="mb-2"><strong>Шаг 2.</strong> При {`$n \\to \\infty$`} дроби с {`$n$`} в знаменателе → 0:</p>
        <div className="formula-block">
          {`$$= \\frac{3 + 0}{5 - 0 + 0} = \\frac{3}{5}$$`}
        </div>
        <p><strong>Правило:</strong> для дробей с полиномами делите на старшую степень — предел равен отношению старших коэффициентов.</p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Иррациональная последовательность</h2>
      <InfoBlock type="example" title="Найти lim (√(n² + n) - n)">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Умножим и разделим на сопряжённое:</p>
        <div className="formula-block">
          {`$$\\sqrt{n^2 + n} - n = \\frac{(\\sqrt{n^2 + n} - n)(\\sqrt{n^2 + n} + n)}{\\sqrt{n^2 + n} + n}$$`}
        </div>
        <p className="mb-2"><strong>Шаг 2.</strong> Упрощаем числитель:</p>
        <div className="formula-block">
          {`$$= \\frac{n^2 + n - n^2}{\\sqrt{n^2 + n} + n} = \\frac{n}{\\sqrt{n^2 + n} + n}$$`}
        </div>
        <p className="mb-2"><strong>Шаг 3.</strong> Делим на {`$n$`}:</p>
        <div className="formula-block">
          {`$$= \\frac{1}{\\sqrt{1 + \\frac{1}{n}} + 1} \\xrightarrow{n \\to \\infty} \\frac{1}{1 + 1} = \\frac{1}{2}$$`}
        </div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Показательная последовательность</h2>
      <InfoBlock type="example" title="Найти lim (1 + 3/n)ⁿ">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Используем замечательный предел {`$\\lim (1 + \\frac{1}{m})^m = e$`}</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Преобразуем: пусть {`$m = \\frac{n}{3}$`}, тогда {`$n = 3m$`}:</p>
        <div className="formula-block">
          {`$$\\left(1 + \\frac{3}{n}\\right)^n = \\left(1 + \\frac{1}{m}\\right)^{3m} = \\left[\\left(1 + \\frac{1}{m}\\right)^m\\right]^3$$`}
        </div>
        <p className="mb-2"><strong>Шаг 3.</strong> При {`$n \\to \\infty$`} и {`$m \\to \\infty$`}:</p>
        <div className="formula-block">
          {`$$\\lim_{n \\to \\infty} \\left(1 + \\frac{3}{n}\\right)^n = e^3$$`}
        </div>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>«{`$\\infty - \\infty = 0$`}»:</strong> неопределённость! Нужно преобразовывать</li>
          <li><strong>Путают {`$n \\to \\infty$`} и {`$x \\to 0$`}:</strong> разные техники для разных пределов</li>
          <li><strong>Забывают про монотонность:</strong> при доказательстве сходимости она часто нужна</li>
          <li><strong>{`$\\lim a_n b_n \\neq \\lim a_n \\cdot \\lim b_n$`}</strong>, если один из пределов бесконечен</li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Иерархия роста:</strong> {`$\\ln n \\ll n^\\alpha \\ll a^n \\ll n! \\ll n^n$`} (для {`$\\alpha > 0$`}, {`$a > 1$`})</li>
          <li><strong>Рациональные дроби:</strong> делите на {`$n^{\\max}$`}, предел — отношение старших коэффициентов</li>
          <li><strong>Разность корней:</strong> умножайте на сопряжённое</li>
          <li><strong>Вид {`$(1 + \\frac{a}{n})^{bn}$`}:</strong> используйте {`$e^{ab}$`}</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">📝 Практические задачи</h2>
      <p className="text-muted-foreground mb-4">
        Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
      </p>

      <PracticeBlock
        number={1}
        title="Найти lim(n→∞) (n² - 1)/(2n² + 3n)"
        answer={`$\\frac{1}{2}$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Делим числитель и знаменатель на {`$n^2$`}:</p>
            <div className="formula-block">{`$$\\lim_{n \\to \\infty} \\frac{1 - \\frac{1}{n^2}}{2 + \\frac{3}{n}}$$`}</div>
            <p className="mb-2"><strong>Шаг 2.</strong> При {`$n \\to \\infty$`}:</p>
            <div className="formula-block">{`$$= \\frac{1 - 0}{2 + 0} = \\frac{1}{2}$$`}</div>
          </>
        }
      >
        <p>Для рациональной дроби делите на старшую степень {`$n$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={2}
        title="Найти lim(n→∞) (2ⁿ + 3ⁿ)/(3ⁿ + 4ⁿ)"
        answer={`$0$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Делим на {`$4^n$`} (наибольшее основание):</p>
            <div className="formula-block">{`$$\\lim_{n \\to \\infty} \\frac{(\\frac{1}{2})^n + (\\frac{3}{4})^n}{(\\frac{3}{4})^n + 1}$$`}</div>
            <p className="mb-2"><strong>Шаг 2.</strong> Поскольку {`$|r| < 1$`}, имеем {`$r^n \\to 0$`}:</p>
            <div className="formula-block">{`$$= \\frac{0 + 0}{0 + 1} = 0$$`}</div>
          </>
        }
      >
        <p>Делите на показательную функцию с наибольшим основанием.</p>
      </PracticeBlock>

      <PracticeBlock
        number={3}
        title="Найти lim(n→∞) (1 + 2/n)^(3n)"
        answer={`$e^6$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Используем замечательный предел. Пусть {`$m = n/2$`}:</p>
            <div className="formula-block">{`$$\\left(1 + \\frac{2}{n}\\right)^{3n} = \\left(1 + \\frac{1}{m}\\right)^{6m}$$`}</div>
            <p className="mb-2"><strong>Шаг 2.</strong> Применяем {`$\\lim(1 + 1/m)^m = e$`}:</p>
            <div className="formula-block">{`$$= \\left[\\left(1 + \\frac{1}{m}\\right)^m\\right]^6 \\to e^6$$`}</div>
          </>
        }
      >
        <p>Выражение вида {`$(1 + a/n)^{bn}$`} стремится к {`$e^{ab}$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={4}
        title="Доказать, что aₙ = n/(n+1) сходится, и найти предел"
        answer={`$1$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Преобразуем:</p>
            <div className="formula-block">{`$$a_n = \\frac{n}{n+1} = \\frac{1}{1 + \\frac{1}{n}}$$`}</div>
            <p className="mb-2"><strong>Шаг 2.</strong> При {`$n \\to \\infty$`}: {`$\\frac{1}{n} \\to 0$`}</p>
            <div className="formula-block">{`$$\\lim_{n \\to \\infty} a_n = \\frac{1}{1 + 0} = 1$$`}</div>
            <p className="mb-2">Последовательность монотонно возрастает и ограничена сверху единицей, поэтому сходится.</p>
          </>
        }
      >
        <p>Преобразуйте дробь и найдите предел.</p>
      </PracticeBlock>
    </TexContent>
  </TopicPageLayout>
);

export default SeriesSequences;
