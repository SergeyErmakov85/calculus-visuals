import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const LimitsEpsilonDelta = () => (
  <TopicPageLayout topicId="limits-epsilon-delta">
    <TexContent>
      <p className="text-muted-foreground mb-6">
        Интуитивно «{`$f(x)$`} стремится к {`$L$`}, когда {`$x$`} стремится к {`$a$`}» понятно, но
        для строгих доказательств нужно точное определение. Его дал Огюстен Коши на языке «ε–δ»:
        он переводит расплывчатое «приближается» в проверяемое неравенство.
      </p>

      <h2 className="subsection-title">Определение предела по Коши</h2>
      <div className="formula-block">
        {`$$\\lim_{x \\to a} f(x) = L \\;\\Leftrightarrow\\; \\forall \\varepsilon > 0 \\;\\; \\exists \\delta > 0 : \\;\\; 0 < |x - a| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon$$`}
      </div>
      <p className="mb-4">
        <strong>Словами:</strong> какую бы малую точность {`$\\varepsilon$`} мы ни потребовали для
        близости {`$f(x)$`} к {`$L$`}, всегда найдётся такая близость {`$\\delta$`} аргумента к
        {` `}{`$a$`}, что условие {`$0 < |x-a| < \\delta$`} гарантирует {`$|f(x) - L| < \\varepsilon$`}.
      </p>

      <h2 className="subsection-title">Геометрический смысл</h2>
      <p className="mb-4">
        Зафиксируем горизонтальную полосу {`$(L - \\varepsilon, \\, L + \\varepsilon)$`} вокруг
        предела. Определение требует найти вертикальную полосу {`$(a - \\delta, \\, a + \\delta)$`}
        вокруг точки {`$a$`} такую, что весь график над ней (кроме, возможно, самой точки {`$a$`})
        попадает в горизонтальную полосу. Чем меньше {`$\\varepsilon$`}, тем уже придётся брать
        {` `}{`$\\delta$`}.
      </p>

      <InfoBlock type="important" title="Важно помнить">
        <ul className="list-disc list-inside space-y-1">
          <li>Условие {`$0 < |x - a|$`} исключает саму точку {`$a$`} — значение {`$f(a)$`} неважно</li>
          <li>{`$\\delta$`} обычно зависит от {`$\\varepsilon$`}: пишут {`$\\delta(\\varepsilon)$`}</li>
          <li>Достаточно найти <strong>хотя бы одно</strong> подходящее {`$\\delta$`}; меньшее тоже годится</li>
          <li>Порядок кванторов важен: сначала дано {`$\\varepsilon$`}, потом ищется {`$\\delta$`}</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">Как доказать предел: схема</h2>
      <p className="mb-4">
        Чтобы доказать {`$\\lim_{x\\to a} f(x) = L$`}, выражают {`$|f(x) - L|$`} через {`$|x - a|$`}
        и подбирают {`$\\delta$`} так, чтобы из {`$|x-a| < \\delta$`} следовало {`$|f(x)-L| < \\varepsilon$`}.
      </p>

      <h2 className="subsection-title">Задача 1: Линейная функция</h2>
      <InfoBlock type="example" title="Доказать, что lim(x→2) (3x - 1) = 5">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Оцениваем отклонение значения:</p>
        <div className="formula-block">{`$$|f(x) - L| = |(3x - 1) - 5| = |3x - 6| = 3|x - 2|$$`}</div>
        <p className="mb-2"><strong>Шаг 2.</strong> Требуем {`$3|x - 2| < \\varepsilon$`}, то есть {`$|x - 2| < \\frac{\\varepsilon}{3}$`}.</p>
        <p className="mb-2"><strong>Шаг 3.</strong> Берём {`$\\delta = \\frac{\\varepsilon}{3}$`}. Тогда из {`$0 < |x - 2| < \\delta$`} следует:</p>
        <div className="formula-block">{`$$|f(x) - 5| = 3|x - 2| < 3 \\cdot \\frac{\\varepsilon}{3} = \\varepsilon$$`}</div>
        <p><strong>Вывод:</strong> для любого {`$\\varepsilon$`} нашлось {`$\\delta = \\varepsilon/3$`}, значит предел равен {`$5$`}.</p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Квадратичная функция</h2>
      <InfoBlock type="example" title="Доказать, что lim(x→3) x² = 9">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> {`$|x^2 - 9| = |x - 3|\\,|x + 3|$`}. Нужно ограничить множитель {`$|x+3|$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Заранее считаем {`$\\delta \\leq 1$`}, тогда {`$|x - 3| < 1 \\Rightarrow 2 < x < 4 \\Rightarrow |x + 3| < 7$`}.</p>
        <p className="mb-2"><strong>Шаг 3.</strong> Тогда {`$|x^2 - 9| < 7|x - 3|$`}. Требуем {`$7|x - 3| < \\varepsilon$`}.</p>
        <p className="mb-2"><strong>Шаг 4.</strong> Берём {`$\\delta = \\min\\left(1, \\dfrac{\\varepsilon}{7}\\right)$`}. Тогда {`$|x^2 - 9| < \\varepsilon$`}.</p>
      </InfoBlock>

      <h2 className="subsection-title">Односторонние и бесконечные пределы</h2>
      <p className="mb-4">
        В определении легко варьировать условия. Для <strong>правого</strong> предела меняют
        {` `}{`$0 < |x - a| < \\delta$`} на {`$a < x < a + \\delta$`}. Для предела, равного
        бесконечности, неравенство {`$|f(x) - L| < \\varepsilon$`} заменяют на {`$f(x) > M$`} для любого {`$M$`}.
      </p>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Путают порядок кванторов:</strong> {`$\\delta$`} выбирают <em>после</em> {`$\\varepsilon$`}, а не наоборот</li>
          <li><strong>Забывают условие {`$0 < |x-a|$`}:</strong> точка {`$a$`} исключается</li>
          <li><strong>Не ограничивают «лишний» множитель:</strong> в нелинейном случае нужен предварительный {`$\\delta \\leq 1$`}</li>
          <li><strong>Берут {`$\\delta$`}, зависящее от {`$x$`}:</strong> оно должно зависеть только от {`$\\varepsilon$`}</li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>«Вызов–ответ»:</strong> оппонент даёт {`$\\varepsilon$`}, вы обязаны предъявить {`$\\delta$`}</li>
          <li><strong>Линейные функции:</strong> {`$\\delta = \\varepsilon / |k|$`}, где {`$k$`} — наклон</li>
          <li><strong>Нелинейные:</strong> сначала ограничьте {`$\\delta \\leq 1$`}, оцените лишний множитель, затем берите {`$\\min$`}</li>
          <li><strong>Назначение:</strong> через ε–δ доказывают свойства пределов, непрерывность, теоремы анализа</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">📝 Практические задачи</h2>
      <p className="text-muted-foreground mb-4">
        Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
      </p>

      <PracticeBlock
        number={1}
        title="Доказать по определению, что lim(x→1) (2x + 3) = 5"
        answer={`$\\delta = \\varepsilon / 2$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> {`$|(2x+3) - 5| = |2x - 2| = 2|x - 1|$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> Требуем {`$2|x-1| < \\varepsilon \\Rightarrow |x-1| < \\frac{\\varepsilon}{2}$`}.</p>
            <p className="mb-2"><strong>Шаг 3.</strong> Берём {`$\\delta = \\frac{\\varepsilon}{2}$`} — тогда {`$|f(x)-5| < \\varepsilon$`}.</p>
          </>
        }
      >
        <p>Выразите {`$|f(x) - L|$`} через {`$|x - 1|$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={2}
        title="Найти δ для ε = 0.01 в пределе lim(x→0) 5x = 0"
        answer={`$\\delta = 0.002$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> {`$|5x - 0| = 5|x|$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> Требуем {`$5|x| < 0.01 \\Rightarrow |x| < 0.002$`}.</p>
            <p className="mb-2"><strong>Шаг 3.</strong> Подходит {`$\\delta = 0.002$`} (или любое меньшее).</p>
          </>
        }
      >
        <p>Подставьте конкретное {`$\\varepsilon = 0.01$`} в общую формулу {`$\\delta = \\varepsilon/5$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={3}
        title="Доказать, что lim(x→2) x² = 4"
        answer={`$\\delta = \\min(1,\\ \\varepsilon/5)$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> {`$|x^2 - 4| = |x - 2|\\,|x + 2|$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> Пусть {`$\\delta \\leq 1$`}: тогда {`$1 < x < 3 \\Rightarrow |x + 2| < 5$`}.</p>
            <p className="mb-2"><strong>Шаг 3.</strong> {`$|x^2 - 4| < 5|x - 2|$`}; требуем {`$5|x-2| < \\varepsilon$`}.</p>
            <p className="mb-2"><strong>Шаг 4.</strong> Берём {`$\\delta = \\min\\left(1, \\frac{\\varepsilon}{5}\\right)$`}.</p>
          </>
        }
      >
        <p>Ограничьте множитель {`$|x+2|$`}, заранее потребовав {`$\\delta \\leq 1$`}.</p>
      </PracticeBlock>
    </TexContent>
  </TopicPageLayout>
);

export default LimitsEpsilonDelta;
