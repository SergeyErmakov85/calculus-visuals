import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";
import PracticeBlock from "@/components/strang/PracticeBlock";

const IntegralsByParts = () => (
  <TopicPageLayout topicId="integrals-by-parts">
    <TexContent>

      <p className="text-muted-foreground mb-6">
        Интегрирование по частям — это <strong>обратное правило произведения</strong>. Этот метод незаменим, 
        когда подынтегральное выражение — произведение функций разных типов, например, полинома и экспоненты или логарифма.
      </p>

      <h2 className="subsection-title">Связь с правилом произведения</h2>
      <p className="mb-4">
        Правило произведения для производных: {`$(uv)' = u'v + uv'$`}
      </p>
      <p className="mb-4">
        Интегрируя обе части: {`$uv = \\int u'v \\, dx + \\int uv' \\, dx$`}
      </p>
      <p className="mb-4">
        Перегруппируем:
      </p>

      <div className="formula-block">
        {`$$\\int u \\, dv = uv - \\int v \\, du$$`}
      </div>

      <p className="mb-4">
        Или в другой записи (с функциями от {`$x$`}):
      </p>

      <div className="formula-block">
        {`$$\\int u(x) v'(x) \\, dx = u(x) v(x) - \\int u'(x) v(x) \\, dx$$`}
      </div>

      <InfoBlock type="important" title="Важно помнить">
        <ul className="list-disc list-inside space-y-1">
          <li>Выбор {`$u$`} и {`$dv$`} критически важен для упрощения</li>
          <li>Правило LIATE: Логарифмы → Обратные триг. → Алгебраические → Тригонометрические → Экспоненциальные</li>
          <li>Выбирайте {`$u$`} так, чтобы {`$du$`} было проще, а {`$dv$`} легко интегрировалось</li>
          <li>Иногда требуется применить метод дважды</li>
        </ul>
      </InfoBlock>

      <h2 className="subsection-title">Задача 1: Полином × Экспонента</h2>
      <InfoBlock type="example" title="Найти ∫ x·eˣ dx">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Выбираем {`$u$`} и {`$dv$`}:</p>
        <ul className="list-disc list-inside mb-3">
          <li>{`$u = x$`} (алгебраическая, при дифференцировании упрощается)</li>
          <li>{`$dv = e^x \\, dx$`} (экспонента легко интегрируется)</li>
        </ul>
        <p className="mb-2"><strong>Шаг 2.</strong> Находим {`$du$`} и {`$v$`}:</p>
        <ul className="list-disc list-inside mb-3">
          <li>{`$du = dx$`}</li>
          <li>{`$v = e^x$`}</li>
        </ul>
        <p className="mb-2"><strong>Шаг 3.</strong> Применяем формулу:</p>
        <div className="formula-block">
          {`$$\\int x e^x \\, dx = x \\cdot e^x - \\int e^x \\, dx = x e^x - e^x + C$$`}
        </div>
        <p className="mb-2"><strong>Ответ:</strong> {`$e^x(x - 1) + C$`}</p>
      </InfoBlock>

      <h2 className="subsection-title">Задача 2: Логарифм</h2>
      <InfoBlock type="example" title="Найти ∫ ln(x) dx">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Шаг 1.</strong> Хитрость: представим как {`$\\ln(x) \\cdot 1$`}</p>
        <ul className="list-disc list-inside mb-3">
          <li>{`$u = \\ln(x)$`} (логарифм — высший приоритет в LIATE)</li>
          <li>{`$dv = dx$`}</li>
        </ul>
        <p className="mb-2"><strong>Шаг 2.</strong> Находим:</p>
        <ul className="list-disc list-inside mb-3">
          <li>{`$du = \\frac{1}{x} dx$`}</li>
          <li>{`$v = x$`}</li>
        </ul>
        <p className="mb-2"><strong>Шаг 3.</strong> Применяем формулу:</p>
        <div className="formula-block">
          {`$$\\int \\ln(x) \\, dx = x \\ln(x) - \\int x \\cdot \\frac{1}{x} \\, dx = x \\ln(x) - \\int 1 \\, dx$$`}
        </div>
        <div className="formula-block">
          {`$$= x \\ln(x) - x + C = x(\\ln(x) - 1) + C$$`}
        </div>
      </InfoBlock>

      <h2 className="subsection-title">Задача 3: Двойное применение</h2>
      <InfoBlock type="example" title="Найти ∫ x² eˣ dx">
        <p className="mb-3"><strong>Решение:</strong></p>
        <p className="mb-2"><strong>Первое применение:</strong></p>
        <ul className="list-disc list-inside mb-2">
          <li>{`$u = x^2$`}, {`$dv = e^x dx$`}</li>
          <li>{`$du = 2x \\, dx$`}, {`$v = e^x$`}</li>
        </ul>
        <div className="formula-block">
          {`$$\\int x^2 e^x \\, dx = x^2 e^x - \\int 2x e^x \\, dx = x^2 e^x - 2 \\int x e^x \\, dx$$`}
        </div>
        <p className="mb-2"><strong>Второе применение</strong> (к {`$\\int x e^x dx$`}):</p>
        <p className="mb-2">Из задачи 1 знаем: {`$\\int x e^x dx = e^x(x-1)$`}</p>
        <p className="mb-2"><strong>Итоговый ответ:</strong></p>
        <div className="formula-block">
          {`$$= x^2 e^x - 2e^x(x-1) + C = e^x(x^2 - 2x + 2) + C$$`}
        </div>
      </InfoBlock>

      <InfoBlock type="mistake" title="Типичные ошибки студентов">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Неправильный выбор {`$u$`} и {`$dv$`}:</strong> Если выбрать {`$u = e^x$`} в {`$\\int x e^x dx$`}, интеграл усложнится
          </li>
          <li>
            <strong>Забывают знак минус:</strong> В формуле {`$\\int u \\, dv = uv - \\int v \\, du$`} знак минус критичен
          </li>
          <li>
            <strong>Не упрощают перед повторным применением:</strong> Важно раскрыть скобки и упростить перед вторым шагом
          </li>
          <li>
            <strong>Бесконечный цикл:</strong> Некоторые интегралы ({`$\\int e^x \\sin x \\, dx$`}) требуют алгебраического трюка после двух применений
          </li>
        </ul>
      </InfoBlock>

      <InfoBlock type="tip" title="Экзаменационные советы">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Правило LIATE:</strong> Logarithmic → Inverse trig → Algebraic → Trigonometric → Exponential. 
            Выбирайте {`$u$`} выше по списку.
          </li>
          <li>
            <strong>Таблица для {`$\\int P(x) e^{ax} dx$`}:</strong> Применяйте метод столько раз, какова степень полинома
          </li>
          <li>
            <strong>Циклические интегралы:</strong> Для {`$\\int e^x \\sin x \\, dx$`} после двух применений вернётесь к исходному интегралу — решите как уравнение
          </li>
          <li>
            <strong>Проверка:</strong> Всегда можно проверить ответ дифференцированием!
          </li>
        </ul>
      </InfoBlock>

       <h2 className="subsection-title">📝 Практические задачи</h2>
       <p className="text-muted-foreground mb-4">
         Попробуйте решить эти задачи самостоятельно, затем проверьте решение.
       </p>

       <PracticeBlock 
         number={1}
         title="Найти ∫ x·cos(x) dx"
         answer={`$x\\sin x + \\cos x + C$`}
         solution={
           <>
             <p className="mb-2"><strong>Шаг 1.</strong> Выбираем {`$u = x$`} (алгебраическая), {`$dv = \\cos x \\, dx$`}</p>
             <p className="mb-2"><strong>Шаг 2.</strong> Находим: {`$du = dx$`}, {`$v = \\sin x$`}</p>
             <p className="mb-2"><strong>Шаг 3.</strong> Применяем формулу {`$\\int u \\, dv = uv - \\int v \\, du$`}:</p>
             <div className="formula-block">
               {`$$\\int x \\cos x \\, dx = x \\sin x - \\int \\sin x \\, dx = x \\sin x + \\cos x + C$$`}
             </div>
           </>
         }
       >
         <p>По правилу LIATE выберите {`$u = x$`} (алгебраическая функция).</p>
       </PracticeBlock>

       <PracticeBlock 
         number={2}
         title="Найти ∫ x²·e^x dx"
         answer={`$e^x(x^2 - 2x + 2) + C$`}
         solution={
           <>
             <p className="mb-2"><strong>Первое применение:</strong> {`$u = x^2$`}, {`$dv = e^x dx$`}</p>
             <div className="formula-block">
               {`$$\\int x^2 e^x \\, dx = x^2 e^x - \\int 2x e^x \\, dx$$`}
             </div>
             <p className="mb-2"><strong>Второе применение:</strong> {`$u = 2x$`}, {`$dv = e^x dx$`}</p>
             <div className="formula-block">
               {`$$\\int 2x e^x \\, dx = 2x e^x - \\int 2 e^x \\, dx = 2x e^x - 2e^x$$`}
             </div>
             <p className="mb-2"><strong>Собираем:</strong></p>
             <div className="formula-block">
               {`$$= x^2 e^x - (2x e^x - 2e^x) + C = e^x(x^2 - 2x + 2) + C$$`}
             </div>
           </>
         }
       >
         <p>Потребуется применить метод дважды, пока степень полинома не станет нулевой.</p>
       </PracticeBlock>

       <PracticeBlock 
         number={3}
         title="Найти ∫ x·ln(x) dx"
         answer={`$\\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$`}
         solution={
           <>
             <p className="mb-2"><strong>Шаг 1.</strong> По LIATE: {`$u = \\ln x$`} (логарифм приоритетнее), {`$dv = x \\, dx$`}</p>
             <p className="mb-2"><strong>Шаг 2.</strong> Находим: {`$du = \\frac{1}{x} dx$`}, {`$v = \\frac{x^2}{2}$`}</p>
             <p className="mb-2"><strong>Шаг 3.</strong> Применяем формулу:</p>
             <div className="formula-block">
               {`$$\\int x \\ln x \\, dx = \\frac{x^2}{2} \\ln x - \\int \\frac{x^2}{2} \\cdot \\frac{1}{x} \\, dx$$`}
             </div>
             <div className="formula-block">
               {`$$= \\frac{x^2}{2} \\ln x - \\frac{1}{2} \\int x \\, dx = \\frac{x^2}{2} \\ln x - \\frac{x^2}{4} + C$$`}
             </div>
           </>
         }
       >
         <p>Логарифм всегда берём за {`$u$`} — он упрощается при дифференцировании.</p>
       </PracticeBlock>

       <PracticeBlock 
         number={4}
         title="Найти ∫ e^x·sin(x) dx"
         answer={`$\\frac{e^x(\\sin x - \\cos x)}{2} + C$`}
         solution={
           <>
             <p className="mb-2"><strong>Шаг 1.</strong> Пусть {`$I = \\int e^x \\sin x \\, dx$`}. Применяем по частям дважды:</p>
             <p className="mb-2"><strong>Первое:</strong> {`$u = \\sin x$`}, {`$dv = e^x dx$`}:</p>
             <div className="formula-block">
               {`$$I = e^x \\sin x - \\int e^x \\cos x \\, dx$$`}
             </div>
             <p className="mb-2"><strong>Второе:</strong> {`$u = \\cos x$`}, {`$dv = e^x dx$`}:</p>
             <div className="formula-block">
               {`$$\\int e^x \\cos x \\, dx = e^x \\cos x + \\int e^x \\sin x \\, dx = e^x \\cos x + I$$`}
             </div>
             <p className="mb-2"><strong>Шаг 2.</strong> Подставляем обратно:</p>
             <div className="formula-block">
               {`$$I = e^x \\sin x - (e^x \\cos x + I) = e^x \\sin x - e^x \\cos x - I$$`}
             </div>
             <p className="mb-2"><strong>Шаг 3.</strong> Решаем относительно {`$I$`}:</p>
             <div className="formula-block">
               {`$$2I = e^x(\\sin x - \\cos x) \\Rightarrow I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$$`}
             </div>
           </>
         }
       >
         <p>Это «циклический» интеграл — после двух применений вернётесь к исходному и решите уравнение.</p>
       </PracticeBlock>

    </TexContent>
  </TopicPageLayout>
);

export default IntegralsByParts;
