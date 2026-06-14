import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const IntegralsTechniques = () => (
  <TopicPageLayout topicId="integrals-techniques">
    <TexContent>

      <p className="text-muted-foreground mb-6">
        Не все интегралы берутся напрямую по таблице. <strong>Техника интегрирования</strong> — это набор методов 
        и приёмов, которые позволяют свести сложный интеграл к простому. Это как алгебраические «трюки» для интегралов.
      </p>

      <h2 className="subsection-title">Обзор методов</h2>
      <p className="mb-4">Основные техники интегрирования:</p>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li><strong>Подстановка</strong> (раздел 8) — обратное цепное правило</li>
        <li><strong>Интегрирование по частям</strong> (раздел 9) — обратное правило произведения</li>
        <li><strong>Тригонометрические подстановки</strong> — для корней из квадратичных форм</li>
        <li><strong>Разложение на простейшие дроби</strong> — для рациональных функций</li>
      </ul>

      <h2 className="subsection-title">Линейность интеграла</h2>
      <p className="mb-4">
        Фундаментальное свойство, упрощающее вычисления:
      </p>

      <div className="formula-block">
        {`$$\\int [af(x) + bg(x)] \\, dx = a\\int f(x) \\, dx + b\\int g(x) \\, dx$$`}
      </div>

      <InfoBlock type="important" title="Важно помнить">
        <ul className="list-disc list-inside space-y-1">
          <li>Константу можно выносить за знак интеграла</li>
          <li>Интеграл суммы равен сумме интегралов</li>
          <li>Интеграл произведения ≠ произведению интегралов!</li>
          <li>Нет универсального правила для интеграла произведения — используйте специальные методы</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">Тригонометрические тождества</h2>
      <p className="mb-4">
        Часто помогают упростить интеграл перед вычислением:
      </p>

      <div className="formula-block">
        {`$$\\sin^2 x = \\frac{1 - \\cos 2x}{2} \\qquad \\cos^2 x = \\frac{1 + \\cos 2x}{2}$$`}
      </div>

      <div className="formula-block">
        {`$$\\sin x \\cos x = \\frac{\\sin 2x}{2} \\qquad 1 + \\tan^2 x = \\sec^2 x$$`}
      </div>

      <h2 className="subsection-title">Задача 1: Использование тождеств</h2>
      <InfoBlock type="example" title="Найти ∫ sin²(x) dx">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Применяем тождество понижения степени:</p>
        <div className="formula-block">
          {`$$\\sin^2 x = \\frac{1 - \\cos 2x}{2}$$`}
        </div>
        <p className="mb-2"><strong>Шаг 2.</strong> Подставляем:</p>
        <div className="formula-block">
          {`$$\\int \\sin^2 x \\, dx = \\int \\frac{1 - \\cos 2x}{2} \\, dx = \\frac{1}{2} \\int (1 - \\cos 2x) \\, dx$$`}
        </div>
        <p className="mb-2"><strong>Шаг 3.</strong> Интегрируем:</p>
        <div className="formula-block">
          {`$$= \\frac{1}{2} \\left( x - \\frac{\\sin 2x}{2} \\right) + C = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C$$`}
        </div>
      </InfoBlock>

      <h2 className="subsection-title">Разложение на простейшие дроби</h2>
      <p className="mb-4">
        Метод для рациональных функций {`$\\frac{P(x)}{Q(x)}$`}:
      </p>

      <div className="formula-block">
        {`$$\\frac{1}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}$$`}
      </div>

      <h2 className="subsection-title">Задача 2: Простейшие дроби</h2>
      <InfoBlock type="example" title="Найти ∫ 1/((x-1)(x+1)) dx">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Раскладываем на простейшие дроби:</p>
        <div className="formula-block">
          {`$$\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$$`}
        </div>
        <p className="mb-2"><strong>Шаг 2.</strong> Находим коэффициенты. Умножаем на {`$(x-1)(x+1)$`}:</p>
        <div className="formula-block">
          {`$$1 = A(x+1) + B(x-1)$$`}
        </div>
        <p className="mb-2">При {`$x = 1$`}: {`$1 = 2A \\Rightarrow A = \\frac{1}{2}$`}</p>
        <p className="mb-2">При {`$x = -1$`}: {`$1 = -2B \\Rightarrow B = -\\frac{1}{2}$`}</p>
        <p className="mb-2"><strong>Шаг 3.</strong> Интегрируем:</p>
        <div className="formula-block">
          {`$$\\int \\frac{1}{(x-1)(x+1)} dx = \\frac{1}{2}\\int \\frac{dx}{x-1} - \\frac{1}{2}\\int \\frac{dx}{x+1}$$`}
        </div>
        <div className="formula-block">
          {`$$= \\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C = \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$$`}
        </div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Алгебраическое упрощение</h2>
      <InfoBlock type="example" title="Найти ∫ (x³ + 1)/x² dx">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Делим почленно:</p>
        <div className="formula-block">
          {`$$\\frac{x^3 + 1}{x^2} = \\frac{x^3}{x^2} + \\frac{1}{x^2} = x + x^{-2}$$`}
        </div>
        <p className="mb-2"><strong>Шаг 2.</strong> Интегрируем:</p>
        <div className="formula-block">
          {`$$\\int \\left(x + x^{-2}\\right) dx = \\frac{x^2}{2} + \\frac{x^{-1}}{-1} + C = \\frac{x^2}{2} - \\frac{1}{x} + C$$`}
        </div>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Пытаются интегрировать произведение «по частям» без метода:</strong> {`$\\int fg \\neq \\int f \\cdot \\int g$`}
          </li>
          <li>
            <strong>Забывают упростить перед интегрированием:</strong> Часто деление или тождество делает интеграл тривиальным
          </li>
          <li>
            <strong>Неверные тригонометрические тождества:</strong> {`$\\sin^2 x + \\cos^2 x = 1$`}, не 2!
          </li>
          <li>
            <strong>Ошибки в простейших дробях:</strong> Не проверяют коэффициенты обратной подстановкой
          </li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Алгоритм выбора метода:</strong>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Сначала пробуйте упростить алгебраически</li>
              <li>Ищите «функцию и её производную» → подстановка</li>
              <li>Произведение разных типов функций → по частям</li>
              <li>Рациональная дробь → разложение</li>
            </ul>
          </li>
          <li>
            <strong>Тригонометрия:</strong> Чётные степени → тождества понижения степени
          </li>
          <li>
            <strong>Проверка:</strong> Дифференцируйте ответ — это лучший способ найти ошибку
          </li>
        </ul>
      </InfoBlock>

       <h2 className="subsection-title">📝 Практические задачи</h2>
       <p className="text-muted-foreground mb-4">
         Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
       </p>

       <PracticeBlock 
         number={1}
         title="Найти ∫ cos²(x) dx"
         answer={`$\\frac{x}{2} + \\frac{\\sin 2x}{4} + C$`}
         solution={
           <>
             <p className="mb-2"><strong>Шаг 1.</strong> Применяем тождество понижения степени:</p>
             <div className="formula-block">
               {`$$\\cos^2 x = \\frac{1 + \\cos 2x}{2}$$`}
             </div>
             <p className="mb-2"><strong>Шаг 2.</strong> Интегрируем:</p>
             <div className="formula-block">
               {`$$\\int \\cos^2 x \\, dx = \\frac{1}{2} \\int (1 + \\cos 2x) \\, dx = \\frac{1}{2}\\left(x + \\frac{\\sin 2x}{2}\\right) + C$$`}
             </div>
             <div className="formula-block">
               {`$$= \\frac{x}{2} + \\frac{\\sin 2x}{4} + C$$`}
             </div>
           </>
         }
       >
         <p>Используйте тождество {`$\\cos^2 x = \\frac{1 + \\cos 2x}{2}$`}.</p>
       </PracticeBlock>

       <PracticeBlock 
         number={2}
         title="Найти ∫ 1/((x+2)(x-3)) dx"
         answer={`$\\frac{1}{5}\\ln\\left|\\frac{x-3}{x+2}\\right| + C$`}
         solution={
           <>
             <p className="mb-2"><strong>Шаг 1.</strong> Раскладываем на простейшие дроби:</p>
             <div className="formula-block">
               {`$$\\frac{1}{(x+2)(x-3)} = \\frac{A}{x+2} + \\frac{B}{x-3}$$`}
             </div>
             <p className="mb-2"><strong>Шаг 2.</strong> Умножаем на {`$(x+2)(x-3)$`}: {`$1 = A(x-3) + B(x+2)$`}</p>
             <ul className="list-disc list-inside mb-3">
               <li>При {`$x = 3$`}: {`$1 = 5B \\Rightarrow B = \\frac{1}{5}$`}</li>
               <li>При {`$x = -2$`}: {`$1 = -5A \\Rightarrow A = -\\frac{1}{5}$`}</li>
             </ul>
             <p className="mb-2"><strong>Шаг 3.</strong> Интегрируем:</p>
             <div className="formula-block">
               {`$$-\\frac{1}{5}\\ln|x+2| + \\frac{1}{5}\\ln|x-3| + C = \\frac{1}{5}\\ln\\left|\\frac{x-3}{x+2}\\right| + C$$`}
             </div>
           </>
         }
       >
         <p>Разложите на простейшие дроби методом неопределённых коэффициентов.</p>
       </PracticeBlock>

       <PracticeBlock 
         number={3}
         title="Найти ∫ (x² - 3x + 2)/x dx"
         answer={`$\\frac{x^2}{2} - 3x + 2\\ln|x| + C$`}
         solution={
           <>
             <p className="mb-2"><strong>Шаг 1.</strong> Делим почленно:</p>
             <div className="formula-block">
               {`$$\\frac{x^2 - 3x + 2}{x} = x - 3 + \\frac{2}{x}$$`}
             </div>
             <p className="mb-2"><strong>Шаг 2.</strong> Интегрируем:</p>
             <div className="formula-block">
               {`$$\\int \\left(x - 3 + \\frac{2}{x}\\right) dx = \\frac{x^2}{2} - 3x + 2\\ln|x| + C$$`}
             </div>
           </>
         }
       >
         <p>Сначала упростите дробь, разделив числитель на знаменатель.</p>
       </PracticeBlock>

    </TexContent>
  </TopicPageLayout>
);

export default IntegralsTechniques;
