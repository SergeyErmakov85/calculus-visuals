import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const DerivativesTangentNormal = () => (
  <TopicPageLayout topicId="derivatives-tangent-normal">
    <TexContent>
      <p className="text-muted-foreground mb-6">
        Производная в точке — это наклон касательной. Зная её, можно написать уравнение касательной
        прямой к графику, а заодно и нормали — перпендикуляра к касательной в той же точке. Это
        классическое применение геометрического смысла производной.
      </p>

      <h2 className="subsection-title">Уравнение касательной</h2>
      <p className="mb-4">
        Касательная к графику {`$y = f(x)$`} в точке {`$(x_0, y_0)$`}, где {`$y_0 = f(x_0)$`}, имеет
        угловой коэффициент {`$k = f'(x_0)$`} и задаётся уравнением:
      </p>
      <div className="formula-block">{`$$y - y_0 = f'(x_0)\\,(x - x_0)$$`}</div>

      <h2 className="subsection-title">Уравнение нормали</h2>
      <p className="mb-4">
        Нормаль перпендикулярна касательной. Из условия перпендикулярности {`$k_1 \\cdot k_2 = -1$`}
        её угловой коэффициент равен {`$-\\dfrac{1}{f'(x_0)}$`}:
      </p>
      <div className="formula-block">{`$$y - y_0 = -\\frac{1}{f'(x_0)}\\,(x - x_0)$$`}</div>
      <p className="mb-4">
        (если {`$f'(x_0) = 0$`}, касательная горизонтальна, а нормаль — вертикальная прямая {`$x = x_0$`}).
      </p>

      <InfoBlock type="important" title="Важно помнить">
        <ul className="list-disc list-inside space-y-1">
          <li>Сначала находим точку касания: {`$y_0 = f(x_0)$`}</li>
          <li>Угловой коэффициент касательной — это {`$f'(x_0)$`}</li>
          <li>Угловой коэффициент нормали — {`$-1/f'(x_0)$`}</li>
          <li>Условие перпендикулярности прямых: {`$k_1 k_2 = -1$`}</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">Задача 1: Касательная к параболе</h2>
      <InfoBlock type="example" title="Написать уравнение касательной к y = x² - 4x + 3 при x₀ = 3">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Точка касания: {`$y_0 = f(3) = 9 - 12 + 3 = 0$`}, то есть {`$(3, 0)$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Производная: {`$f'(x) = 2x - 4$`}.</p>
        <p className="mb-2"><strong>Шаг 3.</strong> Наклон: {`$f'(3) = 6 - 4 = 2$`}.</p>
        <p className="mb-2"><strong>Шаг 4.</strong> Подставляем в формулу:</p>
        <div className="formula-block">{`$$y - 0 = 2(x - 3) \\;\\Rightarrow\\; y = 2x - 6$$`}</div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Нормаль в той же точке</h2>
      <InfoBlock type="example" title="Написать уравнение нормали к y = x² - 4x + 3 при x₀ = 3">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Из предыдущей задачи {`$f'(3) = 2$`}, точка {`$(3, 0)$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Угловой коэффициент нормали: {`$k = -\\frac{1}{2}$`}.</p>
        <p className="mb-2"><strong>Шаг 3.</strong> Уравнение:</p>
        <div className="formula-block">{`$$y - 0 = -\\frac{1}{2}(x - 3) \\;\\Rightarrow\\; y = -\\frac{x}{2} + \\frac{3}{2}$$`}</div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Поиск точки касания по наклону</h2>
      <InfoBlock type="example" title="В какой точке касательная к y = x² параллельна прямой y = 6x?">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Параллельность ⇒ равны наклоны: {`$f'(x_0) = 6$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> {`$f'(x) = 2x = 6 \\Rightarrow x_0 = 3$`}.</p>
        <p className="mb-2"><strong>Шаг 3.</strong> Ордината: {`$y_0 = 3^2 = 9$`}. Точка касания {`$(3, 9)$`}.</p>
        <p className="mb-2"><strong>Шаг 4.</strong> Уравнение касательной: {`$y - 9 = 6(x - 3) \\Rightarrow y = 6x - 9$`}.</p>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Путают {`$x_0$`} и переменную {`$x$`}:</strong> {`$x_0$`} — абсцисса точки касания, число</li>
          <li><strong>Забывают найти {`$y_0$`}:</strong> подставляют {`$x_0$`} в производную, но не в саму функцию</li>
          <li><strong>В нормали теряют знак минус</strong> или неверно берут обратную величину</li>
          <li><strong>Не упрощают</strong> окончательное уравнение прямой</li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Касательная «прилипает»</strong> к графику в точке; её наклон — производная там</li>
          <li><strong>Нормаль ⟂ касательной:</strong> наклон {`$-1/f'(x_0)$`}</li>
          <li><strong>Алгоритм:</strong> 1) {`$y_0 = f(x_0)$`} 2) {`$k = f'(x_0)$`} 3) подставить в формулу</li>
          <li><strong>Параллельность</strong> прямых ⇔ равные наклоны; <strong>перпендикулярность</strong> ⇔ {`$k_1 k_2 = -1$`}</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">📝 Практические задачи</h2>
      <p className="text-muted-foreground mb-4">
        Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
      </p>

      <PracticeBlock
        number={1}
        title="Касательная к y = x³ при x₀ = 1"
        answer={`$y = 3x - 2$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> {`$y_0 = 1^3 = 1$`}, точка {`$(1, 1)$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> {`$f'(x) = 3x^2$`}, {`$f'(1) = 3$`}.</p>
            <div className="formula-block">{`$$y - 1 = 3(x - 1) \\Rightarrow y = 3x - 2$$`}</div>
          </>
        }
      >
        <p>Найдите {`$y_0$`} и наклон {`$f'(1)$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={2}
        title="Нормаль к y = √x при x₀ = 4"
        answer={`$y = -4x + 18$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> {`$y_0 = \\sqrt{4} = 2$`}, точка {`$(4, 2)$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> {`$f'(x) = \\frac{1}{2\\sqrt{x}}$`}, {`$f'(4) = \\frac{1}{4}$`}.</p>
            <p className="mb-2"><strong>Шаг 3.</strong> Наклон нормали: {`$-1/\\frac{1}{4} = -4$`}.</p>
            <div className="formula-block">{`$$y - 2 = -4(x - 4) \\Rightarrow y = -4x + 18$$`}</div>
          </>
        }
      >
        <p>Наклон нормали — это {`$-1/f'(x_0)$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={3}
        title="Где касательная к y = x² - 2x горизонтальна?"
        answer={`В точке $(1, -1)$, касательная $y = -1$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Горизонтальная касательная ⇒ {`$f'(x_0) = 0$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> {`$f'(x) = 2x - 2 = 0 \\Rightarrow x_0 = 1$`}.</p>
            <p className="mb-2"><strong>Шаг 3.</strong> {`$y_0 = 1 - 2 = -1$`}. Касательная — прямая {`$y = -1$`}.</p>
          </>
        }
      >
        <p>Горизонтальная прямая имеет нулевой наклон.</p>
      </PracticeBlock>
    </TexContent>
  </TopicPageLayout>
);

export default DerivativesTangentNormal;
