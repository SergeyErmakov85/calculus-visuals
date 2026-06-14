import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const IntegralsSubstitution = () => (
  <TopicPageLayout topicId="integrals-substitution">
    <TexContent>

      <p className="text-muted-foreground mb-6">
        Подстановка — это один из самых мощных методов интегрирования. По сути, это <strong>обратное применение цепного правила</strong> 
        дифференцирования. Если вы умеете брать производную сложной функции, то подстановка поможет вам интегрировать.
      </p>

      <h2 className="subsection-title">Идея замены переменной</h2>
      <p className="mb-4">
        Когда мы видим интеграл, содержащий «вложенную» функцию и её производную, мы можем заменить эту вложенную функцию 
        на новую переменную, упростив вычисления.
      </p>

      <div className="formula-block">
        {`$$\\int f(g(x)) \\cdot g'(x) \\, dx = \\int f(u) \\, du, \\quad \\text{где } u = g(x)$$`}
      </div>

      <p className="mb-4">
        <strong>Связь с цепным правилом:</strong> При дифференцировании {`$F(g(x))$`} получаем {`$F'(g(x)) \\cdot g'(x)$`}. 
        Интегрирование — обратный процесс: если видим {`$f(g(x)) \\cdot g'(x)$`}, результат — {`$F(g(x)) + C$`}.
      </p>

      <h2 className="subsection-title">Формулы подстановки</h2>
      
      <div className="formula-block">
        {`$$\\text{Неопределённый интеграл: } \\int f(g(x)) g'(x) \\, dx = F(g(x)) + C$$`}
      </div>

      <div className="formula-block">
        {`$$\\text{Определённый интеграл: } \\int_a^b f(g(x)) g'(x) \\, dx = \\int_{g(a)}^{g(b)} f(u) \\, du$$`}
      </div>

      <InfoBlock type="important" title="Важно помнить">
        <ul className="list-disc list-inside space-y-1">
          <li>При замене {`$u = g(x)$`} обязательно найдите {`$du = g'(x) \\, dx$`}</li>
          <li>Выразите {`$dx$`} через {`$du$`}: {`$dx = \\frac{du}{g'(x)}$`}</li>
          <li>После интегрирования верните исходную переменную {`$x$`}</li>
          <li>Для определённого интеграла не забудьте изменить пределы интегрирования!</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">Задача 1: Базовая подстановка</h2>
      <InfoBlock type="example" title="Найти ∫(2x + 1)⁵ dx">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Выбираем подстановку: {`$u = 2x + 1$`}</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Находим дифференциал: {`$du = 2 \\, dx$`}, значит {`$dx = \\frac{du}{2}$`}</p>
        <p className="mb-2"><strong>Шаг 3.</strong> Подставляем:</p>
        <div className="formula-block">
          {`$$\\int (2x+1)^5 \\, dx = \\int u^5 \\cdot \\frac{du}{2} = \\frac{1}{2} \\int u^5 \\, du$$`}
        </div>
        <p className="mb-2"><strong>Шаг 4.</strong> Интегрируем:</p>
        <div className="formula-block">
          {`$$= \\frac{1}{2} \\cdot \\frac{u^6}{6} + C = \\frac{u^6}{12} + C$$`}
        </div>
        <p className="mb-2"><strong>Шаг 5.</strong> Возвращаем {`$x$`}:</p>
        <div className="formula-block">
          {`$$= \\frac{(2x+1)^6}{12} + C$$`}
        </div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Тригонометрическая подстановка</h2>
      <InfoBlock type="example" title="Найти ∫ sin(3x) cos(3x) dx">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Замечаем, что {`$\\cos(3x)$`} — производная от {`$\\sin(3x)$`} (с точностью до множителя)</p>
        <p className="mb-2">Пусть {`$u = \\sin(3x)$`}, тогда {`$du = 3\\cos(3x) \\, dx$`}</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Выражаем: {`$\\cos(3x) \\, dx = \\frac{du}{3}$`}</p>
        <p className="mb-2"><strong>Шаг 3.</strong> Подставляем:</p>
        <div className="formula-block">
          {`$$\\int \\sin(3x) \\cos(3x) \\, dx = \\int u \\cdot \\frac{du}{3} = \\frac{1}{3} \\int u \\, du$$`}
        </div>
        <p className="mb-2"><strong>Шаг 4.</strong> Интегрируем и возвращаем:</p>
        <div className="formula-block">
          {`$$= \\frac{1}{3} \\cdot \\frac{u^2}{2} + C = \\frac{\\sin^2(3x)}{6} + C$$`}
        </div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Определённый интеграл</h2>
      <InfoBlock type="example" title="Вычислить ∫₀¹ x·e^(x²) dx">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Пусть {`$u = x^2$`}, тогда {`$du = 2x \\, dx$`}, откуда {`$x \\, dx = \\frac{du}{2}$`}</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Меняем пределы: при {`$x=0 \\Rightarrow u=0$`}, при {`$x=1 \\Rightarrow u=1$`}</p>
        <p className="mb-2"><strong>Шаг 3.</strong> Подставляем:</p>
        <div className="formula-block">
          {`$$\\int_0^1 x e^{x^2} \\, dx = \\int_0^1 e^u \\cdot \\frac{du}{2} = \\frac{1}{2} \\int_0^1 e^u \\, du$$`}
        </div>
        <p className="mb-2"><strong>Шаг 4.</strong> Вычисляем:</p>
        <div className="formula-block">
          {`$$= \\frac{1}{2} \\left[ e^u \\right]_0^1 = \\frac{1}{2}(e^1 - e^0) = \\frac{e - 1}{2}$$`}
        </div>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Забытый дифференциал:</strong> При замене {`$u = 2x$`} пишут {`$dx = du$`} вместо {`$dx = \\frac{du}{2}$`}
          </li>
          <li>
            <strong>Неверный выбор подстановки:</strong> Выбирают {`$u$`}, которое не упрощает интеграл. Ключ: {`$g'(x)$`} должна присутствовать в интеграле
          </li>
          <li>
            <strong>Забывают вернуть переменную:</strong> Оставляют ответ через {`$u$`} вместо {`$x$`}
          </li>
          <li>
            <strong>Не меняют пределы:</strong> В определённых интегралах забывают пересчитать пределы после замены
          </li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <p className="mb-3">
          <strong>Когда применять подстановку:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Видите «функцию в функции» и рядом — производную внутренней</li>
          <li>Есть степень или корень из линейного выражения: {`$(ax + b)^n$`}</li>
          <li>Экспонента или тригонометрическая функция от выражения: {`$e^{f(x)}$`}, {`$\\sin(f(x))$`}</li>
        </ul>
        <p>
          <strong>Мнемоника:</strong> «Подстановка = обратное цепное правило». Если умеете брать производную по цепному правилу, 
          просто «разматывайте» обратно.
        </p>
      </InfoBlock>

       <h2 className="subsection-title">📝 Практические задачи</h2>
       <p className="text-muted-foreground mb-4">
         Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
       </p>

       <PracticeBlock 
         number={1}
         title="Найти ∫ (4x + 3)⁷ dx"
         answer={`$\\frac{(4x+3)^8}{32} + C$`}
         solution={
           <>
             <p className="mb-2"><strong>Шаг 1.</strong> Выбираем подстановку: {`$u = 4x + 3$`}</p>
             <p className="mb-2"><strong>Шаг 2.</strong> Находим: {`$du = 4 \\, dx$`}, значит {`$dx = \\frac{du}{4}$`}</p>
             <p className="mb-2"><strong>Шаг 3.</strong> Подставляем:</p>
             <div className="formula-block">
               {`$$\\int (4x+3)^7 \\, dx = \\int u^7 \\cdot \\frac{du}{4} = \\frac{1}{4} \\cdot \\frac{u^8}{8} + C = \\frac{u^8}{32} + C$$`}
             </div>
             <p className="mb-2"><strong>Шаг 4.</strong> Возвращаем {`$x$`}:</p>
             <div className="formula-block">
               {`$$= \\frac{(4x+3)^8}{32} + C$$`}
             </div>
           </>
         }
       >
         <p>Выберите подстановку {`$u = 4x + 3$`} и найдите {`$du$`}.</p>
       </PracticeBlock>

       <PracticeBlock 
         number={2}
         title="Найти ∫ x·√(x² + 1) dx"
         answer={`$\\frac{1}{3}(x^2+1)^{3/2} + C$`}
         solution={
           <>
             <p className="mb-2"><strong>Шаг 1.</strong> Замечаем: {`$x$`} — это (с точностью до множителя) производная от {`$x^2 + 1$`}</p>
             <p className="mb-2">Пусть {`$u = x^2 + 1$`}, тогда {`$du = 2x \\, dx$`}, откуда {`$x \\, dx = \\frac{du}{2}$`}</p>
             <p className="mb-2"><strong>Шаг 2.</strong> Подставляем:</p>
             <div className="formula-block">
               {`$$\\int x\\sqrt{x^2+1} \\, dx = \\int \\sqrt{u} \\cdot \\frac{du}{2} = \\frac{1}{2} \\int u^{1/2} \\, du$$`}
             </div>
             <p className="mb-2"><strong>Шаг 3.</strong> Интегрируем:</p>
             <div className="formula-block">
               {`$$= \\frac{1}{2} \\cdot \\frac{u^{3/2}}{3/2} + C = \\frac{1}{3}u^{3/2} + C = \\frac{1}{3}(x^2+1)^{3/2} + C$$`}
             </div>
           </>
         }
       >
         <p>Заметьте, что {`$x$`} — производная внутренней функции {`$x^2 + 1$`}.</p>
       </PracticeBlock>

       <PracticeBlock 
         number={3}
         title="Найти ∫ cos(5x) dx"
         answer={`$\\frac{1}{5}\\sin(5x) + C$`}
         solution={
           <>
             <p className="mb-2"><strong>Шаг 1.</strong> Пусть {`$u = 5x$`}, тогда {`$du = 5 \\, dx$`}, {`$dx = \\frac{du}{5}$`}</p>
             <p className="mb-2"><strong>Шаг 2.</strong> Подставляем:</p>
             <div className="formula-block">
               {`$$\\int \\cos(5x) \\, dx = \\int \\cos u \\cdot \\frac{du}{5} = \\frac{1}{5} \\sin u + C = \\frac{1}{5}\\sin(5x) + C$$`}
             </div>
           </>
         }
       >
         <p>Используйте подстановку {`$u = 5x$`} и не забудьте про коэффициент.</p>
       </PracticeBlock>

       <PracticeBlock 
         number={4}
         title="Вычислить ∫₀² x(x² + 1)³ dx"
         answer={`$\\frac{624}{8} = 78$`}
         solution={
           <>
             <p className="mb-2"><strong>Шаг 1.</strong> Пусть {`$u = x^2 + 1$`}, тогда {`$du = 2x \\, dx$`}, {`$x \\, dx = \\frac{du}{2}$`}</p>
             <p className="mb-2"><strong>Шаг 2.</strong> Меняем пределы: при {`$x = 0$`}: {`$u = 1$`}; при {`$x = 2$`}: {`$u = 5$`}</p>
             <p className="mb-2"><strong>Шаг 3.</strong> Подставляем:</p>
             <div className="formula-block">
               {`$$\\int_0^2 x(x^2+1)^3 \\, dx = \\int_1^5 u^3 \\cdot \\frac{du}{2} = \\frac{1}{2} \\left[\\frac{u^4}{4}\\right]_1^5$$`}
             </div>
             <p className="mb-2"><strong>Шаг 4.</strong> Вычисляем:</p>
             <div className="formula-block">
               {`$$= \\frac{1}{8}(5^4 - 1^4) = \\frac{1}{8}(625 - 1) = \\frac{624}{8} = 78$$`}
             </div>
           </>
         }
       >
         <p>Не забудьте изменить пределы интегрирования после подстановки.</p>
       </PracticeBlock>

    </TexContent>
  </TopicPageLayout>
);

export default IntegralsSubstitution;
