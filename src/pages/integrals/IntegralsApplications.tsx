import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const IntegralsApplications = () => (
  <TopicPageLayout topicId="integrals-applications">
    <TexContent>

      <p className="text-muted-foreground mb-6">
        Интегралы позволяют вычислять геометрические характеристики: площади криволинейных фигур, 
        длины кривых и объёмы тел вращения. Это одно из важнейших практических применений интегрального исчисления.
      </p>

      <h2 className="subsection-title">Площадь между кривыми</h2>
      
      <p className="mb-4">
        Площадь между кривыми {`$y = f(x)$`} (верхняя) и {`$y = g(x)$`} (нижняя) на {`$[a, b]$`}:
      </p>
      <div className="formula-block">
        {`$$S = \\int_a^b [f(x) - g(x)] \\, dx$$`}
      </div>

      <p className="mb-4">
        <strong>Геометрический смысл:</strong> Мы суммируем бесконечно тонкие вертикальные полоски высотой {`$f(x) - g(x)$`} 
        и шириной {`$dx$`}.
      </p>

      <h2 className="subsection-title">Длина кривой</h2>
      
      <p className="mb-4">
        Длина кривой {`$y = f(x)$`} на {`$[a, b]$`}:
      </p>
      <div className="formula-block">
        {`$$L = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2} \\, dx$$`}
      </div>

      <p className="mb-4">
        <strong>Вывод:</strong> По теореме Пифагора, элемент дуги {`$ds = \\sqrt{dx^2 + dy^2} = \\sqrt{1 + (y')^2} \\, dx$`}.
      </p>

      <h2 className="subsection-title">Объёмы тел вращения</h2>
      
      <p className="mb-4"><strong>Метод дисков</strong> (вращение вокруг оси {`$x$`}):</p>
      <div className="formula-block">
        {`$$V = \\pi \\int_a^b [f(x)]^2 \\, dx$$`}
      </div>

      <p className="mb-4"><strong>Метод колец</strong> (область между двумя кривыми):</p>
      <div className="formula-block">
        {`$$V = \\pi \\int_a^b \\left([R(x)]^2 - [r(x)]^2\\right) \\, dx$$`}
      </div>
      <p className="mb-4">
        где {`$R(x)$`} — внешний радиус, {`$r(x)$`} — внутренний радиус.
      </p>

      <p className="mb-4"><strong>Метод цилиндрических оболочек</strong> (вращение вокруг оси {`$y$`}):</p>
      <div className="formula-block">
        {`$$V = 2\\pi \\int_a^b x \\cdot f(x) \\, dx$$`}
      </div>

      <InfoBlock type="important" title="Важно помнить">
        <ul className="list-disc list-inside space-y-1">
          <li>Для площади: определите, какая кривая выше на данном интервале</li>
          <li>Для длины дуги: не забудьте про {`$\\sqrt{1 + (y')^2}$`}, а не просто {`$y'$`}</li>
          <li>Для объёма: {`$\\pi r^2$`} — площадь диска, интегрируем по оси вращения</li>
          <li>Метод оболочек: {`$2\\pi r \\cdot h$`} — боковая поверхность цилиндра</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">Задача 1: Площадь между параболами</h2>
      <InfoBlock type="example" title="Найти площадь между y = x² и y = 2x - x²">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Найдём точки пересечения:</p>
        <div className="formula-block">
          {`$$x^2 = 2x - x^2 \\Rightarrow 2x^2 - 2x = 0 \\Rightarrow 2x(x-1) = 0$$`}
        </div>
        <p className="mb-2">Точки: {`$x = 0$`} и {`$x = 1$`}</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Определим, какая выше. При {`$x = 0.5$`}: {`$y_1 = 0.25$`}, {`$y_2 = 0.75$`}. Верхняя: {`$2x - x^2$`}</p>
        <p className="mb-2"><strong>Шаг 3.</strong> Вычисляем:</p>
        <div className="formula-block">
          {`$$S = \\int_0^1 [(2x - x^2) - x^2] \\, dx = \\int_0^1 (2x - 2x^2) \\, dx$$`}
        </div>
        <div className="formula-block">
          {`$$= \\left[x^2 - \\frac{2x^3}{3}\\right]_0^1 = 1 - \\frac{2}{3} = \\frac{1}{3}$$`}
        </div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Длина дуги параболы</h2>
      <InfoBlock type="example" title="Найти длину дуги y = x² от x = 0 до x = 1">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Найдём производную: {`$y' = 2x$`}</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Формула длины:</p>
        <div className="formula-block">
          {`$$L = \\int_0^1 \\sqrt{1 + 4x^2} \\, dx$$`}
        </div>
        <p className="mb-2"><strong>Шаг 3.</strong> Подстановка {`$x = \\frac{1}{2}\\tan\\theta$`}:</p>
        <div className="formula-block">
          {`$$L = \\frac{1}{2} \\int_0^{\\arctan 2} \\sec^3\\theta \\, d\\theta$$`}
        </div>
        <p className="mb-2">После вычислений (или по таблице):</p>
        <div className="formula-block">
          {`$$L = \\frac{\\sqrt{5}}{2} + \\frac{\\ln(2 + \\sqrt{5})}{4} \\approx 1.48$$`}
        </div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Объём конуса</h2>
      <InfoBlock type="example" title="Найти объём конуса с радиусом R и высотой H методом дисков">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Уравнение образующей: {`$y = \\frac{R}{H}x$`} (вращаем вокруг {`$x$`})</p>
        <p className="mb-2"><strong>Шаг 2.</strong> Применяем метод дисков:</p>
        <div className="formula-block">
          {`$$V = \\pi \\int_0^H \\left(\\frac{R}{H}x\\right)^2 dx = \\pi \\frac{R^2}{H^2} \\int_0^H x^2 \\, dx$$`}
        </div>
        <p className="mb-2"><strong>Шаг 3.</strong> Вычисляем:</p>
        <div className="formula-block">
          {`$$= \\pi \\frac{R^2}{H^2} \\cdot \\frac{x^3}{3} \\Big|_0^H = \\pi \\frac{R^2}{H^2} \\cdot \\frac{H^3}{3} = \\frac{\\pi R^2 H}{3}$$`}
        </div>
        <p><strong>Ответ:</strong> {`$V = \\frac{1}{3}\\pi R^2 H$`} — классическая формула объёма конуса!</p>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Неверный порядок вычитания:</strong> Всегда {`$f_{верхняя} - f_{нижняя}$`}, иначе площадь отрицательная
          </li>
          <li>
            <strong>Забывают {`$\\pi$`}:</strong> В формулах объёма множитель {`$\\pi$`} обязателен
          </li>
          <li>
            <strong>Путают методы:</strong> Диски — сечение ⊥ оси, оболочки — || оси
          </li>
          <li>
            <strong>Длина дуги ≠ длина хорды:</strong> Кривая всегда длиннее прямой между теми же точками
          </li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Как запомнить и когда применять">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Площадь:</strong> «Верхняя минус нижняя» — рисуйте график!
          </li>
          <li>
            <strong>Длина:</strong> Теорема Пифагора для бесконечно малого треугольника
          </li>
          <li>
            <strong>Выбор метода объёма:</strong> Диски проще, если легко выразить {`$y = f(x)$`}; оболочки — если легче интегрировать по {`$x$`}
          </li>
          <li>
            <strong>Проверка:</strong> Размерность должна быть [длина]² для площади, [длина]³ для объёма
          </li>
        </ul>
      </InfoBlock>

       <h2 className="subsection-title">📝 Практические задачи</h2>
       <p className="text-muted-foreground mb-4">
         Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
       </p>

       <PracticeBlock 
         number={1}
         title="Найти площадь между y = x и y = x² на [0, 1]"
         answer={`$\\frac{1}{6}$`}
         solution={
           <>
             <p className="mb-2"><strong>Шаг 1.</strong> На {`$[0, 1]$`} прямая {`$y = x$`} выше параболы {`$y = x^2$`}.</p>
             <p className="mb-2"><strong>Шаг 2.</strong> Вычисляем площадь:</p>
             <div className="formula-block">
               {`$$S = \\int_0^1 (x - x^2) \\, dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1$$`}
             </div>
             <div className="formula-block">
               {`$$= \\frac{1}{2} - \\frac{1}{3} = \\frac{3-2}{6} = \\frac{1}{6}$$`}
             </div>
           </>
         }
       >
         <p>Определите, какая функция выше, и вычислите интеграл разности.</p>
       </PracticeBlock>

       <PracticeBlock 
         number={2}
         title="Найти объём тела вращения y = √x вокруг оси x на [0, 4]"
         answer={`$8\\pi$`}
         solution={
           <>
             <p className="mb-2"><strong>Шаг 1.</strong> Применяем метод дисков:</p>
             <div className="formula-block">
               {`$$V = \\pi \\int_0^4 (\\sqrt{x})^2 \\, dx = \\pi \\int_0^4 x \\, dx$$`}
             </div>
             <p className="mb-2"><strong>Шаг 2.</strong> Вычисляем:</p>
             <div className="formula-block">
               {`$$= \\pi \\left[\\frac{x^2}{2}\\right]_0^4 = \\pi \\cdot \\frac{16}{2} = 8\\pi$$`}
             </div>
           </>
         }
       >
         <p>Используйте формулу метода дисков: {`$V = \\pi \\int [f(x)]^2 dx$`}.</p>
       </PracticeBlock>

       <PracticeBlock 
         number={3}
         title="Найти длину дуги y = x^(3/2) от x = 0 до x = 4"
         answer={`$\\frac{8}{27}(10\\sqrt{10} - 1)$`}
         solution={
           <>
             <p className="mb-2"><strong>Шаг 1.</strong> Находим производную: {`$y' = \\frac{3}{2}x^{1/2} = \\frac{3}{2}\\sqrt{x}$`}</p>
             <p className="mb-2"><strong>Шаг 2.</strong> Вычисляем {`$1 + (y')^2$`}:</p>
             <div className="formula-block">
               {`$$1 + (y')^2 = 1 + \\frac{9x}{4} = \\frac{4 + 9x}{4}$$`}
             </div>
             <p className="mb-2"><strong>Шаг 3.</strong> Интегрируем:</p>
             <div className="formula-block">
               {`$$L = \\int_0^4 \\sqrt{\\frac{4+9x}{4}} dx = \\frac{1}{2} \\int_0^4 \\sqrt{4+9x} \\, dx$$`}
             </div>
             <p className="mb-2"><strong>Шаг 4.</strong> Подстановка {`$u = 4+9x$`}, {`$du = 9dx$`}:</p>
             <div className="formula-block">
               {`$$= \\frac{1}{18} \\cdot \\frac{2}{3}u^{3/2} \\Big|_4^{40} = \\frac{1}{27}(40^{3/2} - 4^{3/2}) = \\frac{8}{27}(10\\sqrt{10} - 1)$$`}
             </div>
           </>
         }
       >
         <p>Используйте формулу длины дуги с {`$\\sqrt{1 + (y')^2}$`}.</p>
       </PracticeBlock>

    </TexContent>
  </TopicPageLayout>
);

export default IntegralsApplications;
