import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const SeriesNumeric = () => (
  <TopicPageLayout topicId="series-numeric">
    <TexContent>
      <p className="text-muted-foreground mb-6">
        Числовой ряд — это «бесконечная сумма» членов последовательности. Удивительно, но
        бесконечное число слагаемых может давать конечный результат. Чтобы придать смысл такой
        сумме, вводят понятие частичных сумм и их предела.
      </p>

      <h2 className="subsection-title">Что такое ряд</h2>
      <p className="mb-4">
        Если {`$\\{a_n\\}$`} — последовательность, то выражение
      </p>
      <div className="formula-block">
        {`$$\\sum_{n=1}^{\\infty} a_n = a_1 + a_2 + a_3 + \\ldots$$`}
      </div>
      <p className="mb-4">
        называется <strong>числовым рядом</strong>, а {`$a_n$`} — его <strong>общим членом</strong>.
      </p>

      <h2 className="subsection-title">Частичные суммы и сумма ряда</h2>
      <p className="mb-4">
        <strong>n-я частичная сумма</strong> — это сумма первых {`$n$`} членов:
      </p>
      <div className="formula-block">
        {`$$S_n = \\sum_{k=1}^{n} a_k = a_1 + a_2 + \\ldots + a_n$$`}
      </div>
      <p className="mb-4">
        Ряд <strong>сходится</strong>, если последовательность частичных сумм имеет конечный предел.
        Этот предел и называют <strong>суммой ряда</strong>:
      </p>
      <div className="formula-block">
        {`$$S = \\lim_{n \\to \\infty} S_n = \\sum_{n=1}^{\\infty} a_n$$`}
      </div>
      <p className="mb-4">
        Если предел частичных сумм бесконечен или не существует, ряд <strong>расходится</strong>.
      </p>

      <h2 className="subsection-title">Геометрический ряд</h2>
      <p className="mb-4">
        Важнейший пример — ряд из членов геометрической прогрессии с знаменателем {`$r$`}:
      </p>
      <div className="formula-block">
        {`$$\\sum_{n=0}^{\\infty} r^n = \\begin{cases} \\dfrac{1}{1-r}, & |r| < 1 \\;\\text{(сходится)} \\\\[2mm] \\text{расходится}, & |r| \\geq 1 \\end{cases}$$`}
      </div>
      <p className="mb-4">
        В общем виде {`$\\sum_{n=0}^{\\infty} a r^n = \\dfrac{a}{1-r}$`} при {`$|r| < 1$`}.
        <strong> Геометрический смысл:</strong> при {`$|r| < 1$`} члены убывают так быстро, что
        накопленная сумма конечна.
      </p>

      <h2 className="subsection-title">Гармонический ряд и p-ряды</h2>
      <p className="mb-4">
        <strong>Гармонический ряд</strong> расходится, хотя его члены стремятся к нулю:
      </p>
      <div className="formula-block">
        {`$$\\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\ldots = \\infty$$`}
      </div>
      <p className="mb-4">
        Это частный случай <strong>p-ряда</strong> {`$\\sum \\frac{1}{n^p}$`}:
      </p>
      <div className="formula-block">
        {`$$\\sum_{n=1}^{\\infty} \\frac{1}{n^p}: \\quad \\text{сходится при } p > 1, \\quad \\text{расходится при } p \\leq 1$$`}
      </div>

      <h2 className="subsection-title">Необходимое условие сходимости</h2>
      <div className="formula-block">
        {`$$\\text{Если } \\sum_{n=1}^{\\infty} a_n \\text{ сходится, то } \\lim_{n \\to \\infty} a_n = 0$$`}
      </div>
      <InfoBlock type="important" title="Необходимо, но не достаточно">
        <p>
          Из {`$a_n \\to 0$`} сходимость <strong>не следует</strong>: гармонический ряд
          {` `}{`$\\sum \\frac{1}{n}$`} расходится, хотя {`$\\frac{1}{n} \\to 0$`}. Зато
          <strong> контрапозиция</strong> работает: если {`$\\lim a_n \\neq 0$`} (или предела нет),
          ряд гарантированно <strong>расходится</strong> — это самый быстрый тест.
        </p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 1: Сумма геометрического ряда</h2>
      <InfoBlock type="example" title="Найти сумму ряда Σ (n≥0) 1/2ⁿ">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Это геометрический ряд с {`$a = 1$`}, {`$r = \\frac{1}{2}$`}, {`$|r| < 1$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Применяем формулу суммы:</p>
        <div className="formula-block">
          {`$$\\sum_{n=0}^{\\infty} \\left(\\frac{1}{2}\\right)^n = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2$$`}
        </div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Телескопический ряд</h2>
      <InfoBlock type="example" title="Найти сумму ряда Σ (n≥1) 1/(n(n+1))">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Разложим общий член на простейшие дроби:</p>
        <div className="formula-block">
          {`$$\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$$`}
        </div>
        <p className="mb-2"><strong>Шаг 2.</strong> Запишем частичную сумму — соседние члены сокращаются:</p>
        <div className="formula-block">
          {`$$S_n = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\ldots + \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right) = 1 - \\frac{1}{n+1}$$`}
        </div>
        <p className="mb-2"><strong>Шаг 3.</strong> Переходим к пределу:</p>
        <div className="formula-block">
          {`$$S = \\lim_{n \\to \\infty} \\left(1 - \\frac{1}{n+1}\\right) = 1$$`}
        </div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Быстрая проверка расходимости</h2>
      <InfoBlock type="example" title="Сходится ли ряд Σ n/(2n+1)?">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Проверим необходимое условие:</p>
        <div className="formula-block">
          {`$$\\lim_{n \\to \\infty} \\frac{n}{2n+1} = \\frac{1}{2} \\neq 0$$`}
        </div>
        <p><strong>Вывод:</strong> общий член не стремится к нулю, поэтому ряд <strong>расходится</strong>.</p>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>«{`$a_n \\to 0 \\Rightarrow$`} ряд сходится»:</strong> неверно — вспомните гармонический ряд</li>
          <li><strong>Путают ряд и последовательность:</strong> сходимость {`$a_n$`} и сходимость {`$\\sum a_n$`} — разные вещи</li>
          <li><strong>Используют формулу геометрического ряда при {`$|r| \\geq 1$`}:</strong> она верна только при {`$|r| < 1$`}</li>
          <li><strong>Забывают первый индекс:</strong> {`$\\sum_{n=0}$`} и {`$\\sum_{n=1}$`} дают разные суммы</li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Сначала — необходимое условие:</strong> если {`$a_n \\not\\to 0$`}, ряд сразу расходится</li>
          <li><strong>Геометрический ряд:</strong> {`$\\frac{a}{1-r}$`} при {`$|r| < 1$`} — узнавайте его «в лицо»</li>
          <li><strong>Телескопические суммы:</strong> ищите разложение, при котором члены сокращаются</li>
          <li><strong>p-ряд:</strong> граница сходимости — {`$p = 1$`}</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">📝 Практические задачи</h2>
      <p className="text-muted-foreground mb-4">
        Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
      </p>

      <PracticeBlock
        number={1}
        title="Найти сумму ряда Σ (n≥0) 2/3ⁿ"
        answer={`$3$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Геометрический ряд: {`$a = 2$`}, {`$r = \\frac{1}{3}$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> Сумма:</p>
            <div className="formula-block">{`$$\\sum_{n=0}^{\\infty} \\frac{2}{3^n} = \\frac{2}{1 - \\frac{1}{3}} = \\frac{2}{\\frac{2}{3}} = 3$$`}</div>
          </>
        }
      >
        <p>Вынесите коэффициент {`$2$`} и примените формулу геометрического ряда.</p>
      </PracticeBlock>

      <PracticeBlock
        number={2}
        title="Найти сумму ряда Σ (n≥1) 1/((n+1)(n+2))"
        answer={`$\\frac{1}{2}$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Разложим: {`$\\frac{1}{(n+1)(n+2)} = \\frac{1}{n+1} - \\frac{1}{n+2}$`}</p>
            <p className="mb-2"><strong>Шаг 2.</strong> Частичная сумма телескопируется:</p>
            <div className="formula-block">{`$$S_n = \\frac{1}{2} - \\frac{1}{n+2}$$`}</div>
            <p className="mb-2"><strong>Шаг 3.</strong> Предел:</p>
            <div className="formula-block">{`$$S = \\lim_{n \\to \\infty} \\left(\\frac{1}{2} - \\frac{1}{n+2}\\right) = \\frac{1}{2}$$`}</div>
          </>
        }
      >
        <p>Используйте разложение на простейшие дроби и сокращение соседних членов.</p>
      </PracticeBlock>

      <PracticeBlock
        number={3}
        title="Сходится ли ряд Σ (-1)ⁿ · n/(n+1)?"
        answer={`Расходится (общий член не стремится к нулю)`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Проверим необходимое условие. Модуль общего члена:</p>
            <div className="formula-block">{`$$\\left|(-1)^n \\frac{n}{n+1}\\right| = \\frac{n}{n+1} \\to 1 \\neq 0$$`}</div>
            <p className="mb-2"><strong>Шаг 2.</strong> Предел {`$a_n$`} не равен нулю (члены колеблются около {`$\\pm 1$`}), значит ряд <strong>расходится</strong>.</p>
          </>
        }
      >
        <p>Достаточно проверить необходимое условие сходимости.</p>
      </PracticeBlock>
    </TexContent>
  </TopicPageLayout>
);

export default SeriesNumeric;
