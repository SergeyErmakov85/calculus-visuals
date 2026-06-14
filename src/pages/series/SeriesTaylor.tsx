import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const SeriesTaylor = () => (
  <TopicPageLayout topicId="series-taylor">
    <TexContent>
      <p className="text-muted-foreground mb-6">
        Ряд Тейлора превращает гладкую функцию в степенной ряд — «бесконечный многочлен». Это
        позволяет вычислять значения функций, брать «неберущиеся» интегралы и находить пределы.
        Ряд Тейлора — кульминация всего раздела о рядах.
      </p>

      <h2 className="subsection-title">Идея аппроксимации функций</h2>
      <p className="mb-4">
        Любую «хорошую» функцию можно приблизить многочленом; чем больше членов, тем точнее:
      </p>
      <div className="formula-block">
        {`$$f(x) \\approx P_n(x) = a_0 + a_1 x + a_2 x^2 + \\ldots + a_n x^n$$`}
      </div>
      <p className="mb-4">
        <strong>Вопрос:</strong> как выбрать коэффициенты {`$a_k$`}? Ответ даёт ряд Тейлора.
      </p>

      <h2 className="subsection-title">Формула ряда Тейлора</h2>
      <div className="formula-block">
        {`$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\ldots$$`}
      </div>
      <p className="mb-4">При {`$a = 0$`} это <strong>ряд Маклорена</strong>:</p>
      <div className="formula-block">
        {`$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n$$`}
      </div>

      <h2 className="subsection-title">Важнейшие разложения</h2>
      <div className="formula-block">
        {`$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\ldots = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}, \\quad x \\in \\mathbb{R}$$`}
      </div>
      <div className="formula-block">
        {`$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\ldots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$$`}
      </div>
      <div className="formula-block">
        {`$$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\ldots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$$`}
      </div>
      <div className="formula-block">
        {`$$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\ldots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1} x^n}{n}, \\quad -1 < x \\leq 1$$`}
      </div>
      <div className="formula-block">
        {`$$\\frac{1}{1-x} = 1 + x + x^2 + x^3 + \\ldots = \\sum_{n=0}^{\\infty} x^n, \\quad |x| < 1$$`}
      </div>

      <InfoBlock type="important" title="Важно помнить">
        <ul className="list-disc list-inside space-y-1">
          <li>Ряд Тейлора сходится в некоторой окрестности точки {`$a$`} (радиус сходимости)</li>
          <li>{`$e^x$`}, {`$\\sin x$`}, {`$\\cos x$`} сходятся для всех {`$x$`}</li>
          <li>{`$\\ln(1+x)$`} сходится только при {`$-1 < x \\leq 1$`}</li>
          <li>Геометрический ряд: радиус сходимости {`$R = 1$`}</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">Задача 1: Разложение функции</h2>
      <InfoBlock type="example" title="Найти ряд Маклорена для f(x) = eˣ до членов x³">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Производные в нуле:</p>
        <ul className="list-disc list-inside mb-3">
          <li>{`$f(x) = e^x \\Rightarrow f(0) = 1$`}</li>
          <li>{`$f'(x) = e^x \\Rightarrow f'(0) = 1$`}</li>
          <li>{`$f''(x) = e^x \\Rightarrow f''(0) = 1$`}</li>
          <li>{`$f'''(x) = e^x \\Rightarrow f'''(0) = 1$`}</li>
        </ul>
        <p className="mb-2"><strong>Шаг 2.</strong> Подставляем в формулу:</p>
        <div className="formula-block">{`$$e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + O(x^4)$$`}</div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Приближённое вычисление</h2>
      <InfoBlock type="example" title="Вычислить e⁰·¹ с точностью до 10⁻⁴">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Используем разложение {`$e^x$`} при {`$x = 0.1$`}:</p>
        <div className="formula-block">{`$$e^{0.1} = 1 + 0.1 + \\frac{(0.1)^2}{2} + \\frac{(0.1)^3}{6} + \\ldots$$`}</div>
        <p className="mb-2"><strong>Шаг 2.</strong> Вычисляем члены:</p>
        <ul className="list-disc list-inside mb-3">
          <li>{`$1$`}; {`$\\;0.1$`}; {`$\\;\\frac{0.01}{2} = 0.005$`}; {`$\\;\\frac{0.001}{6} \\approx 0.000167$`}</li>
          <li>{`$\\frac{0.0001}{24} \\approx 4 \\cdot 10^{-6}$`} (меньше {`$10^{-4}$`} — можно остановиться)</li>
        </ul>
        <p className="mb-2"><strong>Шаг 3.</strong> Суммируем:</p>
        <div className="formula-block">{`$$e^{0.1} \\approx 1 + 0.1 + 0.005 + 0.000167 = 1.1052$$`}</div>
        <p><strong>Точное значение:</strong> {`$e^{0.1} = 1.10517\\ldots$`} ✓</p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Нестандартное разложение</h2>
      <InfoBlock type="example" title="Найти разложение sin(x²) до x⁶">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Используем {`$\\sin u = u - \\frac{u^3}{6} + \\frac{u^5}{120} - \\ldots$`}</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Подставляем {`$u = x^2$`}:</p>
        <div className="formula-block">{`$$\\sin(x^2) = x^2 - \\frac{x^6}{6} + \\frac{x^{10}}{120} - \\ldots$$`}</div>
        <p><strong>До {`$x^6$`}:</strong> {`$\\sin(x^2) = x^2 - \\frac{x^6}{6} + O(x^{10})$`}</p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 4: Вычисление предела через ряд</h2>
      <InfoBlock type="example" title="Найти lim(x→0) (sin x - x)/x³">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Разложим числитель: {`$\\sin x = x - \\frac{x^3}{6} + O(x^5)$`}, поэтому {`$\\sin x - x = -\\frac{x^3}{6} + O(x^5)$`}.</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Делим на {`$x^3$`} и переходим к пределу:</p>
        <div className="formula-block">{`$$\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3} = \\lim_{x \\to 0} \\left(-\\frac{1}{6} + O(x^2)\\right) = -\\frac{1}{6}$$`}</div>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Забывают {`$n!$`} в знаменателе:</strong> факториал критически важен</li>
          <li><strong>Путают знаки:</strong> в {`$\\sin x$`} и {`$\\cos x$`} знаки чередуются</li>
          <li><strong>Выходят за радиус сходимости:</strong> нельзя использовать {`$\\ln(1+x)$`} при {`$x = 2$`}</li>
          <li><strong>Неверно подставляют {`$u = g(x)$`}:</strong> заменять нужно {`$u$`} везде, включая степени</li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>{`$e^x$`}:</strong> все производные равны 1, делим на факториалы</li>
          <li><strong>{`$\\sin x$`}:</strong> нечётные степени, знаки чередуются, начинается с {`$+x$`}</li>
          <li><strong>{`$\\cos x$`}:</strong> чётные степени, знаки чередуются, начинается с {`$+1$`}</li>
          <li><strong>Применение:</strong> пределы вида {`$\\frac{0}{0}$`}, приближённые вычисления, «неберущиеся» интегралы</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">📝 Практические задачи</h2>
      <p className="text-muted-foreground mb-4">
        Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
      </p>

      <PracticeBlock
        number={1}
        title="Найти ряд Маклорена для e^(-x) до x³"
        answer={`$1 - x + \\frac{x^2}{2} - \\frac{x^3}{6} + O(x^4)$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Используем {`$e^u = 1 + u + \\frac{u^2}{2!} + \\frac{u^3}{3!} + \\ldots$`}</p>
            <p className="mb-2"><strong>Шаг 2.</strong> Подставляем {`$u = -x$`}:</p>
            <div className="formula-block">{`$$e^{-x} = 1 - x + \\frac{x^2}{2} - \\frac{x^3}{6} + O(x^4)$$`}</div>
          </>
        }
      >
        <p>Подставьте {`$-x$`} вместо {`$x$`} в известное разложение {`$e^x$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={2}
        title="Вычислить cos(0.1) с точностью 10⁻⁴ через ряд Тейлора"
        answer={`$0.9950$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> {`$\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\ldots$`}</p>
            <p className="mb-2"><strong>Шаг 2.</strong> При {`$x = 0.1$`}:</p>
            <div className="formula-block">{`$$\\cos(0.1) \\approx 1 - 0.005 + 0.0000042 \\approx 0.9950$$`}</div>
            <p className="mb-2">Член {`$x^4/24 \\approx 4 \\cdot 10^{-6}$`} меньше требуемой точности.</p>
          </>
        }
      >
        <p>Берите столько членов, чтобы первый отброшенный был меньше точности.</p>
      </PracticeBlock>

      <PracticeBlock
        number={3}
        title="Найти разложение 1/(1+x²) до x⁶"
        answer={`$1 - x^2 + x^4 - x^6 + O(x^8)$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> Используем {`$\\frac{1}{1-u} = 1 + u + u^2 + \\ldots$`}</p>
            <p className="mb-2"><strong>Шаг 2.</strong> Подставляем {`$u = -x^2$`}:</p>
            <div className="formula-block">{`$$\\frac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + O(x^8)$$`}</div>
          </>
        }
      >
        <p>Приведите к виду {`$\\frac{1}{1-u}$`} и примените геометрический ряд.</p>
      </PracticeBlock>

      <PracticeBlock
        number={4}
        title="Найти lim(x→0) (1 - cos x)/x²"
        answer={`$\\frac{1}{2}$`}
        solution={
          <>
            <p className="mb-2"><strong>Шаг 1.</strong> {`$\\cos x = 1 - \\frac{x^2}{2} + O(x^4)$`}, поэтому {`$1 - \\cos x = \\frac{x^2}{2} + O(x^4)$`}.</p>
            <p className="mb-2"><strong>Шаг 2.</strong> Делим на {`$x^2$`}:</p>
            <div className="formula-block">{`$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\lim_{x \\to 0} \\left(\\frac{1}{2} + O(x^2)\\right) = \\frac{1}{2}$$`}</div>
          </>
        }
      >
        <p>Разложите {`$\\cos x$`} до {`$x^2$`} и подставьте.</p>
      </PracticeBlock>
    </TexContent>
  </TopicPageLayout>
);

export default SeriesTaylor;
