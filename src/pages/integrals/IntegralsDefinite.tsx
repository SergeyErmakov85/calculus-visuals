import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const IntegralsDefinite = () => (
  <TopicPageLayout topicId="integrals-definite">
    <TexContent>
      <p className="mb-4">
        Определённый интеграл вычисляет площадь под графиком функции от {`$a$`} до {`$b$`}:
      </p>

      <div className="formula-block">
        {`$$\\int_a^b f(x) \\, dx = F(b) - F(a) = [F(x)]_a^b$$`}
      </div>

      <p className="mb-4">
        Это <strong>основная теорема анализа</strong> (Fundamental Theorem of Calculus) — связь между производной и интегралом.
      </p>

      <h2 className="subsection-title">Задача 1: Базовые интегралы</h2>
      <InfoBlock type="example" title="Найти ∫(3x² + 2x - 5) dx">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Интегрируем каждое слагаемое:</p>
        <ul className="list-disc list-inside mb-3">
          <li>{`$\\int 3x^2 \\, dx = 3 \\cdot \\frac{x^3}{3} = x^3$`}</li>
          <li>{`$\\int 2x \\, dx = 2 \\cdot \\frac{x^2}{2} = x^2$`}</li>
          <li>{`$\\int 5 \\, dx = 5x$`}</li>
        </ul>
        <p className="mb-2"><strong>Шаг 2.</strong> Собираем:</p>
        <div className="formula-block">
          {`$$\\int (3x^2 + 2x - 5) \\, dx = x^3 + x^2 - 5x + C$$`}
        </div>
        <p className="mb-2"><strong>Проверка:</strong> {`$(x^3 + x^2 - 5x + C)' = 3x^2 + 2x - 5$`} ✓</p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Определённый интеграл</h2>
      <InfoBlock type="example" title="Вычислить ∫₀² x² dx">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Находим антипроизводную:</p>
        <div className="formula-block">
          {`$$\\int x^2 \\, dx = \\frac{x^3}{3}$$`}
        </div>
        <p className="mb-2"><strong>Шаг 2.</strong> Применяем формулу Ньютона-Лейбница:</p>
        <div className="formula-block">
          {`$$\\int_0^2 x^2 \\, dx = \\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{2^3}{3} - \\frac{0^3}{3} = \\frac{8}{3} - 0 = \\frac{8}{3}$$`}
        </div>
        <p className="mb-2"><strong>Геометрический смысл:</strong> Площадь под параболой {`$y = x^2$`} от 0 до 2 равна {`$\\frac{8}{3}$`}</p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Тригонометрический интеграл</h2>
      <InfoBlock type="example" title="Вычислить ∫₀^(π/2) sin(x) dx">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Антипроизводная: {`$\\int \\sin x \\, dx = -\\cos x$`}</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Подставляем пределы:</p>
        <div className="formula-block">
          {`$$\\int_0^{\\pi/2} \\sin x \\, dx = [-\\cos x]_0^{\\pi/2} = -\\cos\\frac{\\pi}{2} - (-\\cos 0)$$`}
        </div>
        <div className="formula-block">
          {`$$= -0 + 1 = 1$$`}
        </div>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Забывают {`$+C$`}:</strong> В неопределённом интеграле константа обязательна!</li>
          <li><strong>Ошибка в степени:</strong> {`$\\int x^2 dx = \\frac{x^2}{2}$`} — НЕВЕРНО! Правильно: {`$\\frac{x^3}{3}$`}</li>
          <li><strong>Путают знаки:</strong> {`$\\int \\sin x \\, dx = \\cos x$`} — НЕВЕРНО! Правильно: {`$-\\cos x$`}</li>
          <li><strong>Неправильный порядок вычитания:</strong> {`$F(a) - F(b)$`} вместо {`$F(b) - F(a)$`}</li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Интеграл = «обратная» производная:</strong> Спросите себя: «производная чего даёт это?»</li>
          <li><strong>Степенное правило:</strong> Степень увеличивается на 1, делим на новую степень</li>
          <li><strong>Проверка:</strong> Всегда дифференцируйте ответ — должно получиться подынтегральное выражение</li>
          <li><strong>Площадь:</strong> Определённый интеграл {`$> 0$`} над осью, {`$< 0$`} под осью</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">📝 Практические задачи</h2>
      <p className="text-muted-foreground mb-4">
        Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
      </p>

      <PracticeBlock
        number={1}
        title="Найти ∫(5x⁴ - 2x³ + 3x - 7) dx"
        answer={`$x^5 - \\frac{x^4}{2} + \\frac{3x^2}{2} - 7x + C$`}
        solution={
          <>
            <p className="mb-2">Интегрируем каждое слагаемое по степенному правилу:</p>
            <ul className="list-disc list-inside mb-3">
              <li>{`$\\int 5x^4 \\, dx = 5 \\cdot \\frac{x^5}{5} = x^5$`}</li>
              <li>{`$\\int 2x^3 \\, dx = 2 \\cdot \\frac{x^4}{4} = \\frac{x^4}{2}$`}</li>
              <li>{`$\\int 3x \\, dx = 3 \\cdot \\frac{x^2}{2} = \\frac{3x^2}{2}$`}</li>
              <li>{`$\\int 7 \\, dx = 7x$`}</li>
            </ul>
            <div className="formula-block">
              {`$$\\int (5x^4 - 2x^3 + 3x - 7) \\, dx = x^5 - \\frac{x^4}{2} + \\frac{3x^2}{2} - 7x + C$$`}
            </div>
          </>
        }
      >
        <p>Примените степенное правило {`$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$`} к каждому слагаемому.</p>
      </PracticeBlock>

      <PracticeBlock
        number={2}
        title="Вычислить ∫₁³ (2x + 1) dx"
        answer={`$10$`}
        solution={
          <>
            <p className="mb-2">Находим антипроизводную:</p>
            <div className="formula-block">
              {`$$\\int (2x + 1) \\, dx = x^2 + x$$`}
            </div>
            <p className="mb-2">Применяем формулу Ньютона-Лейбница:</p>
            <div className="formula-block">
              {`$$[x^2 + x]_1^3 = (9 + 3) - (1 + 1) = 12 - 2 = 10$$`}
            </div>
          </>
        }
      >
        <p>Найдите антипроизводную, затем вычислите разность значений на концах отрезка.</p>
      </PracticeBlock>

      <PracticeBlock
        number={3}
        title="Найти ∫(4/x³ + 2/x) dx"
        answer={`$-\\frac{2}{x^2} + 2\\ln|x| + C$`}
        solution={
          <>
            <p className="mb-2">Перепишем: {`$\\frac{4}{x^3} = 4x^{-3}$`} и {`$\\frac{2}{x} = 2x^{-1}$`}</p>
            <ul className="list-disc list-inside mb-3">
              <li>{`$\\int 4x^{-3} \\, dx = 4 \\cdot \\frac{x^{-2}}{-2} = -\\frac{2}{x^2}$`}</li>
              <li>{`$\\int \\frac{2}{x} \\, dx = 2\\ln|x|$`}</li>
            </ul>
            <div className="formula-block">
              {`$$\\int \\left(\\frac{4}{x^3} + \\frac{2}{x}\\right) dx = -\\frac{2}{x^2} + 2\\ln|x| + C$$`}
            </div>
          </>
        }
      >
        <p>Перепишите дроби как степени с отрицательными показателями. Помните, что {`$\\int \\frac{1}{x} dx = \\ln|x|$`}.</p>
      </PracticeBlock>

      <PracticeBlock
        number={4}
        title="Вычислить ∫₀^π cos(x) dx"
        answer={`$0$`}
        solution={
          <>
            <p className="mb-2">Антипроизводная: {`$\\int \\cos x \\, dx = \\sin x$`}</p>
            <div className="formula-block">
              {`$$[\\sin x]_0^{\\pi} = \\sin(\\pi) - \\sin(0) = 0 - 0 = 0$$`}
            </div>
            <p className="mb-2">Геометрический смысл: площадь над осью (от 0 до π/2) равна площади под осью (от π/2 до π).</p>
          </>
        }
      >
        <p>Найдите антипроизводную косинуса и подставьте пределы интегрирования.</p>
      </PracticeBlock>
    </TexContent>
  </TopicPageLayout>
);

export default IntegralsDefinite;
