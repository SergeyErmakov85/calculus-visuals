import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const SeriesPower = () => (
  <TopicPageLayout topicId="series-power">
    <TexContent>
      <p className="text-muted-foreground mb-6">
        Степенной ряд — это «бесконечный многочлен». Его сумма зависит от переменной {`$x$`}, а
        значит, степенной ряд задаёт функцию. Это мост от числовых рядов к разложениям функций
        (ряд Тейлора) и один из мощнейших инструментов анализа.
      </p>

      <h2 className="subsection-title">Что такое степенной ряд</h2>
      <p className="mb-4">
        <strong>Степенной ряд</strong> по степеням {`$(x - a)$`} — это
      </p>
      <div className="formula-block">
        {`$$\\sum_{n=0}^{\\infty} c_n (x - a)^n = c_0 + c_1 (x-a) + c_2 (x-a)^2 + \\ldots$$`}
      </div>
      <p className="mb-4">
        Числа {`$c_n$`} — <strong>коэффициенты</strong>, точка {`$a$`} — <strong>центр</strong>.
        При каждом фиксированном {`$x$`} получается обычный числовой ряд, который может сходиться
        или расходиться.
      </p>

      <h2 className="subsection-title">Радиус и интервал сходимости</h2>
      <p className="mb-4">
        Для каждого степенного ряда существует <strong>радиус сходимости</strong> {`$R \\geq 0$`}
        такой, что ряд сходится при {`$|x - a| < R$`} и расходится при {`$|x - a| > R$`}:
      </p>
      <div className="formula-block">
        {`$$|x - a| < R \\;\\Rightarrow\\; \\text{сходится}, \\qquad |x - a| > R \\;\\Rightarrow\\; \\text{расходится}$$`}
      </div>
      <p className="mb-4">
        <strong>Интервал сходимости</strong> — это {`$(a - R, \\, a + R)$`}; поведение на самих
        концах {`$x = a \\pm R$`} нужно проверять отдельно. Радиус удобно искать по признаку
        Д'Аламбера или Коши:
      </p>
      <div className="formula-block">
        {`$$\\frac{1}{R} = \\lim_{n \\to \\infty} \\left| \\frac{c_{n+1}}{c_n} \\right| \\qquad \\text{или} \\qquad \\frac{1}{R} = \\lim_{n \\to \\infty} \\sqrt[n]{|c_n|}$$`}
      </div>

      <InfoBlock type="important" title="Три случая для R">
        <ul className="list-disc list-inside space-y-1">
          <li>{`$R = 0$`}: ряд сходится только в центре {`$x = a$`}</li>
          <li>{`$0 < R < \\infty$`}: сходится на интервале, концы проверяются отдельно</li>
          <li>{`$R = \\infty$`}: сходится для всех {`$x$`} (как {`$e^x$`}, {`$\\sin x$`}, {`$\\cos x$`})</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">Почленное дифференцирование и интегрирование</h2>
      <p className="mb-4">
        Внутри интервала сходимости степенной ряд можно дифференцировать и интегрировать почленно —
        радиус сходимости при этом сохраняется:
      </p>
      <div className="formula-block">
        {`$$\\left(\\sum_{n=0}^{\\infty} c_n x^n\\right)' = \\sum_{n=1}^{\\infty} n\\, c_n x^{n-1}, \\qquad \\int \\sum_{n=0}^{\\infty} c_n x^n \\, dx = \\sum_{n=0}^{\\infty} \\frac{c_n}{n+1} x^{n+1} + C$$`}
      </div>
      <p className="mb-4">
        Именно это свойство позволяет получать новые разложения из уже известных — например, ряд
        для {`$\\ln(1+x)$`} интегрированием геометрического ряда.
      </p>

      <h2 className="subsection-title">Задача 1: Радиус сходимости</h2>
      <InfoBlock type="example" title="Найти радиус сходимости ряда Σ xⁿ/n">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Здесь {`$c_n = \\frac{1}{n}$`}. По признаку Д'Аламбера:</p>
        <div className="formula-block">{`$$\\frac{1}{R} = \\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right| = \\lim_{n \\to \\infty} \\frac{n}{n+1} = 1$$`}</div>
        <p className="mb-2"><strong>Шаг 2.</strong> Значит {`$R = 1$`}, интервал {`$(-1, 1)$`}.</p>
        <p className="mb-2"><strong>Шаг 3.</strong> Концы: при {`$x = 1$`} получаем гармонический ряд {`$\\sum \\frac{1}{n}$`} — расходится; при {`$x = -1$`} — ряд {`$\\sum \\frac{(-1)^n}{n}$`}, сходится по Лейбницу.</p>
        <p><strong>Ответ:</strong> область сходимости {`$[-1, \\, 1)$`}.</p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Ряд с факториалом</h2>
      <InfoBlock type="example" title="Найти радиус сходимости ряда Σ xⁿ/n!">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> {`$c_n = \\frac{1}{n!}$`}. Отношение:</p>
        <div className="formula-block">{`$$\\frac{1}{R} = \\lim_{n \\to \\infty} \\frac{n!}{(n+1)!} = \\lim_{n \\to \\infty} \\frac{1}{n+1} = 0$$`}</div>
        <p><strong>Вывод:</strong> {`$R = \\infty$`} — ряд сходится при всех {`$x$`} (это разложение {`$e^x$`}).</p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Получение нового ряда интегрированием</h2>
      <InfoBlock type="example" title="Вывести ряд для ln(1 + x)">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Берём геометрический ряд:</p>
        <div className="formula-block">{`$$\\frac{1}{1+t} = 1 - t + t^2 - t^3 + \\ldots = \\sum_{n=0}^{\\infty} (-1)^n t^n, \\quad |t| < 1$$`}</div>
        <p className="mb-2"><strong>Шаг 2.</strong> Интегрируем почленно от {`$0$`} до {`$x$`}:</p>
        <div className="formula-block">{`$$\\ln(1+x) = \\int_0^x \\frac{dt}{1+t} = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\ldots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1} x^n}{n}$$`}</div>
        <p><strong>Область:</strong> {`$-1 < x \\leq 1$`}.</p>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Забывают про концы интервала:</strong> {`$|x-a| < R$`} даёт интервал, но {`$x = a \\pm R$`} проверяют отдельно</li>
          <li><strong>Путают {`$R$`} и {`$1/R$`}:</strong> предел отношения коэффициентов равен {`$\\frac{1}{R}$`}, а не {`$R$`}</li>
          <li><strong>Дифференцируют вне интервала сходимости:</strong> почленные операции законны только внутри</li>
          <li><strong>Теряют {`$+C$`} при интегрировании:</strong> постоянную находят по значению в центре</li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Факториал в знаменателе ⇒ {`$R = \\infty$`}:</strong> ряд сходится всюду</li>
          <li><strong>Полином в коэффициентах ⇒ {`$R = 1$`}</strong> (как у {`$\\sum \\frac{x^n}{n^p}$`})</li>
          <li><strong>Новые ряды из известных:</strong> подстановка, дифференцирование, интегрирование</li>
          <li><strong>Геометрический ряд</strong> {`$\\frac{1}{1-x}$`} — «родитель» многих разложений</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">📝 Практические задачи</h2>
      <p className="text-muted-foreground mb-4">
        Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
      </p>

      <PracticeBlock
        number={1}
        title="Найти радиус сходимости ряда Σ n·xⁿ"
        answer={`$R = 1$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> {`$c_n = n$`}. Отношение:</p>
            <div className="formula-block">{`$$\\frac{1}{R} = \\lim_{n \\to \\infty} \\frac{n+1}{n} = 1$$`}</div>
            <p className="mb-2"><strong>Шаг 2.</strong> Значит {`$R = 1$`}. На концах {`$x = \\pm 1$`} общий член {`$\\pm n \\not\\to 0$`} — ряд расходится. Область сходимости {`$(-1, 1)$`}.</p>
          </>
        }
      >
        <p>Используйте признак Д'Аламбера для коэффициентов.</p>
      </PracticeBlock>

      <PracticeBlock
        number={2}
        title="Найти радиус сходимости ряда Σ xⁿ/2ⁿ"
        answer={`$R = 2$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> {`$c_n = \\frac{1}{2^n}$`}. Применяем признак Коши:</p>
            <div className="formula-block">{`$$\\frac{1}{R} = \\lim_{n \\to \\infty} \\sqrt[n]{\\frac{1}{2^n}} = \\frac{1}{2}$$`}</div>
            <p className="mb-2"><strong>Шаг 2.</strong> Отсюда {`$R = 2$`}, интервал {`$(-2, 2)$`}.</p>
          </>
        }
      >
        <p>Корень {`$n$`}-й степени удобен для коэффициентов вида {`$c^n$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={3}
        title="Найти сумму ряда Σ (n≥1) n·xⁿ⁻¹ при |x| < 1"
        answer={`$\\frac{1}{(1-x)^2}$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Берём геометрический ряд {`$\\sum_{n=0}^{\\infty} x^n = \\frac{1}{1-x}$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> Дифференцируем почленно:</p>
            <div className="formula-block">{`$$\\left(\\frac{1}{1-x}\\right)' = \\frac{1}{(1-x)^2} = \\sum_{n=1}^{\\infty} n x^{n-1}$$`}</div>
            <p className="mb-2">Это и есть искомая сумма при {`$|x| < 1$`}.</p>
          </>
        }
      >
        <p>Узнайте в ряде производную геометрического ряда.</p>
      </PracticeBlock>
    </TexContent>
  </TopicPageLayout>
);

export default SeriesPower;
