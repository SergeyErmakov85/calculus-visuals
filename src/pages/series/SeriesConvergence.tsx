import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const SeriesConvergence = () => (
  <TopicPageLayout topicId="series-convergence">
    <TexContent>
      <p className="text-muted-foreground mb-6">
        Признаки сходимости позволяют определить, сходится ли ряд, не вычисляя его сумму явно.
        Это ключевой навык: для большинства рядов сумму в замкнутом виде найти невозможно, но
        ответить на вопрос «конечна ли она?» — вполне реально.
      </p>

      <InfoBlock type="important" title="С чего начинать">
        <p>
          Любое исследование начинают с <strong>необходимого условия</strong>: если
          {` `}{`$\\lim_{n\\to\\infty} a_n \\neq 0$`}, ряд сразу расходится. Если же {`$a_n \\to 0$`},
          вопрос остаётся открытым — применяем один из признаков ниже.
        </p>
      </InfoBlock>

      <h2 className="subsection-title">Признак сравнения</h2>
      <p className="mb-4">Пусть {`$0 \\leq a_n \\leq b_n$`} для всех достаточно больших {`$n$`}:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Если {`$\\sum b_n$`} сходится, то {`$\\sum a_n$`} тоже сходится</li>
        <li>Если {`$\\sum a_n$`} расходится, то {`$\\sum b_n$`} тоже расходится</li>
      </ul>
      <p className="mb-2"><strong>Предельный признак сравнения:</strong></p>
      <div className="formula-block">
        {`$$\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = L, \\quad 0 < L < \\infty \\;\\Rightarrow\\; \\sum a_n \\text{ и } \\sum b_n \\text{ ведут себя одинаково}$$`}
      </div>
      <p className="mb-4">
        Эталоны для сравнения — p-ряды {`$\\sum \\frac{1}{n^p}$`}: сходятся при {`$p > 1$`} и
        расходятся при {`$p \\leq 1$`}.
      </p>

      <h2 className="subsection-title">Признак Д'Аламбера (отношения)</h2>
      <div className="formula-block">
        {`$$L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|$$`}
      </div>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>{`$L < 1$`} — ряд <strong>сходится</strong> абсолютно</li>
        <li>{`$L > 1$`} — ряд <strong>расходится</strong></li>
        <li>{`$L = 1$`} — признак <strong>не даёт ответа</strong></li>
      </ul>
      <p className="mb-4">Особенно удобен, когда в общем члене есть факториалы или степени вида {`$c^n$`}.</p>

      <h2 className="subsection-title">Радикальный признак Коши (корня)</h2>
      <div className="formula-block">
        {`$$L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|}$$`}
      </div>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>{`$L < 1$`} — ряд <strong>сходится</strong>; {`$L > 1$`} — <strong>расходится</strong>; {`$L = 1$`} — неопределённость</li>
      </ul>
      <p className="mb-4">Незаменим, когда общий член имеет вид {`$(\\ldots)^n$`}.</p>

      <h2 className="subsection-title">Знакочередующиеся ряды: признак Лейбница</h2>
      <p className="mb-4">Для ряда {`$\\sum (-1)^n b_n$`} с {`$b_n > 0$`}: если {`$b_n$`} монотонно убывает и {`$b_n \\to 0$`}, то ряд сходится.</p>
      <div className="formula-block">
        {`$$b_n \\geq b_{n+1} > 0, \\quad \\lim_{n \\to \\infty} b_n = 0 \\;\\Rightarrow\\; \\sum (-1)^n b_n \\text{ сходится}$$`}
      </div>
      <p className="mb-4">
        Так, {`$\\sum \\frac{(-1)^{n+1}}{n}$`} сходится (условно), хотя ряд из модулей —
        гармонический — расходится.
      </p>

      <h2 className="subsection-title">Задача 1: Признак сравнения</h2>
      <InfoBlock type="example" title="Исследовать ряд Σ 1/(n² + 3n)">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Заметим оценку:</p>
        <div className="formula-block">{`$$\\frac{1}{n^2 + 3n} < \\frac{1}{n^2} \\quad \\text{для всех } n \\geq 1$$`}</div>
        <p className="mb-2"><strong>Шаг 2.</strong> Ряд {`$\\sum \\frac{1}{n^2}$`} сходится (p-ряд, {`$p = 2 > 1$`}).</p>
        <p><strong>Вывод:</strong> по признаку сравнения наш ряд <strong>сходится</strong>.</p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Признак Д'Аламбера</h2>
      <InfoBlock type="example" title="Исследовать ряд Σ n!/nⁿ">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Отношение соседних членов:</p>
        <div className="formula-block">{`$$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!} = \\left(\\frac{n}{n+1}\\right)^n$$`}</div>
        <p className="mb-2"><strong>Шаг 2.</strong> Предел:</p>
        <div className="formula-block">{`$$L = \\lim_{n \\to \\infty} \\left(1 - \\frac{1}{n+1}\\right)^n = \\frac{1}{e} < 1$$`}</div>
        <p><strong>Вывод:</strong> {`$L = \\frac{1}{e} < 1$`}, ряд <strong>сходится</strong>.</p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Признак Лейбница</h2>
      <InfoBlock type="example" title="Исследовать ряд Σ (-1)ⁿ⁺¹/n">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Здесь {`$b_n = \\frac{1}{n} > 0$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Проверяем условия Лейбница: {`$b_n$`} убывает ({`$\\frac{1}{n+1} < \\frac{1}{n}$`}) и {`$b_n \\to 0$`}.</p>
        <p className="mb-2"><strong>Вывод:</strong> ряд <strong>сходится</strong>. Поскольку ряд из модулей {`$\\sum \\frac{1}{n}$`} расходится, сходимость <strong>условная</strong>.</p>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Делают вывод при {`$L = 1$`}:</strong> признаки Д'Аламбера и Коши при {`$L=1$`} ничего не дают</li>
          <li><strong>Сравнивают с неизвестным рядом:</strong> эталон должен быть рядом, про который сходимость известна</li>
          <li><strong>Забывают модуль:</strong> в признаках Д'Аламбера и Коши берут {`$|a_n|$`}</li>
          <li><strong>Путают абсолютную и условную сходимость:</strong> проверяйте отдельно ряд из модулей</li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как выбрать признак">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Факториалы или {`$c^n$`}:</strong> признак Д'Аламбера</li>
          <li><strong>Общий член вида {`$(\\ldots)^n$`}:</strong> радикальный признак Коши</li>
          <li><strong>Дроби с полиномами:</strong> сравнение с p-рядом</li>
          <li><strong>Знакочередование {`$(-1)^n$`}:</strong> признак Лейбница</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">📝 Практические задачи</h2>
      <p className="text-muted-foreground mb-4">
        Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
      </p>

      <PracticeBlock
        number={1}
        title="Исследовать ряд Σ 1/(n·2ⁿ) на сходимость"
        answer={`Сходится (признак Д'Аламбера, $L = 1/2$)`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Отношение:</p>
            <div className="formula-block">{`$$\\frac{a_{n+1}}{a_n} = \\frac{n \\cdot 2^n}{(n+1) \\cdot 2^{n+1}} = \\frac{n}{2(n+1)}$$`}</div>
            <p className="mb-2"><strong>Шаг 2.</strong> Предел:</p>
            <div className="formula-block">{`$$L = \\lim_{n \\to \\infty} \\frac{n}{2(n+1)} = \\frac{1}{2} < 1 \\;\\Rightarrow\\; \\text{сходится}$$`}</div>
          </>
        }
      >
        <p>Степень {`$2^n$`} подсказывает признак Д'Аламбера.</p>
      </PracticeBlock>

      <PracticeBlock
        number={2}
        title="Исследовать ряд Σ 1/√n на сходимость"
        answer={`Расходится (p-ряд с $p = 1/2 < 1$)`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Это p-ряд: {`$\\sum \\frac{1}{n^{1/2}}$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> Здесь {`$p = \\frac{1}{2} \\leq 1$`}, поэтому ряд <strong>расходится</strong>.</p>
          </>
        }
      >
        <p>Сравните с критерием p-ряда.</p>
      </PracticeBlock>

      <PracticeBlock
        number={3}
        title="Исследовать ряд Σ (n/(2n+1))ⁿ"
        answer={`Сходится (признак Коши, $L = 1/2$)`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Общий член имеет вид {`$(\\ldots)^n$`} — применяем радикальный признак:</p>
            <div className="formula-block">{`$$\\sqrt[n]{a_n} = \\frac{n}{2n+1}$$`}</div>
            <p className="mb-2"><strong>Шаг 2.</strong> Предел:</p>
            <div className="formula-block">{`$$L = \\lim_{n \\to \\infty} \\frac{n}{2n+1} = \\frac{1}{2} < 1 \\;\\Rightarrow\\; \\text{сходится}$$`}</div>
          </>
        }
      >
        <p>Корень {`$n$`}-й степени «снимает» внешнюю степень.</p>
      </PracticeBlock>

      <PracticeBlock
        number={4}
        title="Исследовать ряд Σ (2n+1)/(n² + n) на сходимость"
        answer={`Расходится (сравнение с гармоническим рядом)`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> При больших {`$n$`}: {`$\\frac{2n+1}{n^2+n} \\approx \\frac{2}{n}$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> Предельное сравнение с {`$\\frac{1}{n}$`}:</p>
            <div className="formula-block">{`$$\\lim_{n \\to \\infty} \\frac{(2n+1)/(n^2+n)}{1/n} = \\lim_{n \\to \\infty} \\frac{2n+1}{n+1} = 2$$`}</div>
            <p className="mb-2">Предел конечен и положителен, а гармонический ряд {`$\\sum \\frac{1}{n}$`} расходится — значит наш ряд тоже <strong>расходится</strong>.</p>
          </>
        }
      >
        <p>Найдите асимптотику общего члена и сравните с гармоническим рядом.</p>
      </PracticeBlock>
    </TexContent>
  </TopicPageLayout>
);

export default SeriesConvergence;
