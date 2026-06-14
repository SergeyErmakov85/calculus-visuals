import { MathFormula } from "@/components/probability/MathFormula";
import { ProblemCard } from "@/components/probability/ProblemCard";
import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";

const ProbabilityProblems = () => (
  <TopicPageLayout topicId="probability-problems">
    <section className="space-y-6">
      <ProblemCard
        problem="Сколькими способами можно рассадить 5 человек в ряд?"
        solution={
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Решение:</p>
            <p className="text-sm text-muted-foreground">
              Количество перестановок n различных объектов в ряду равно n! (эн факториал)
            </p>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="P_5 = 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120" display />
            </div>
            <p className="text-sm font-semibold text-accent">Ответ: 120</p>
          </div>
        }
      />

      <ProblemCard
        problem="Сколькими способами можно выбрать 3 книги из 10?"
        solution={
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Решение:</p>
            <p className="text-sm text-muted-foreground">Используем формулу сочетаний (порядок не важен):</p>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="C_{10}^3 = \frac{10!}{3!(10-3)!} = \frac{10!}{3! \times 7!}" display />
            </div>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="= \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = \frac{720}{6} = 120" display />
            </div>
            <p className="text-sm font-semibold text-accent">Ответ: 120</p>
          </div>
        }
      />

      <ProblemCard
        problem="Сколькими способами можно назначить на 2 должности 5 кандидатов?"
        solution={
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Решение:</p>
            <p className="text-sm text-muted-foreground">
              Используем формулу размещений (порядок важен — разные должности):
            </p>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="A_5^2 = \frac{5!}{(5-2)!} = \frac{5!}{3!} = 5 \times 4 = 20" display />
            </div>
            <p className="text-sm font-semibold text-accent">Ответ: 20</p>
          </div>
        }
      />

      <ProblemCard
        problem="У Пети 4 рубашки, 3 брюк и 2 пары обуви. Сколько разных нарядов он может составить?"
        solution={
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Решение:</p>
            <p className="text-sm text-muted-foreground">
              По правилу умножения общее количество комбинаций равно произведению вариантов для каждого элемента:
            </p>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="4 \times 3 \times 2 = 24" display />
            </div>
            <p className="text-sm text-muted-foreground italic">4 варианта рубашек × 3 варианта брюк × 2 варианта обуви</p>
            <p className="text-sm font-semibold text-accent">Ответ: 24</p>
          </div>
        }
      />

      <ProblemCard
        problem="Сколько различных трёхзначных чисел можно составить из цифр 1, 2, 3 без повторения?"
        solution={
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Решение:</p>
            <p className="text-sm text-muted-foreground">
              Для первой цифры — 3 варианта, для второй — 2 оставшихся, для третьей — 1:
            </p>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="3 \times 2 \times 1 = 6" display />
            </div>
            <p className="text-sm text-muted-foreground italic">Варианты: 123, 132, 213, 231, 312, 321</p>
            <p className="text-sm font-semibold text-accent">Ответ: 6</p>
          </div>
        }
      />

      <ProblemCard
        problem="Сколько существует пятизначных чисел, начинающихся с 1 и оканчивающихся на 5?"
        solution={
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Решение:</p>
            <p className="text-sm text-muted-foreground">
              Первая цифра фиксирована (1), последняя — 5. Вторая, третья и четвёртая цифры могут быть от 0 до 9:
            </p>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="1 \times 10 \times 10 \times 10 \times 1 = 10^3 = 1000" display />
            </div>
            <p className="text-sm text-muted-foreground italic">
              Формат числа: 1____5, где на месте прочерков могут быть любые цифры 0-9
            </p>
            <p className="text-sm font-semibold text-accent">Ответ: 1000</p>
          </div>
        }
      />

      <ProblemCard
        problem="Сколькими способами можно разложить 5 одинаковых шаров в 3 различные коробки?"
        solution={
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Решение:</p>
            <p className="text-sm text-muted-foreground">
              Используем формулу сочетаний с повторениями, где n = количество шаров, k = количество коробок:
            </p>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="C_{n+k-1}^{k-1} = C_{5+3-1}^{3-1} = C_7^2" display />
            </div>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="C_7^2 = \frac{7!}{2! \times 5!} = \frac{7 \times 6}{2 \times 1} = \frac{42}{2} = 21" display />
            </div>
            <p className="text-sm font-semibold text-accent">Ответ: 21</p>
          </div>
        }
      />

      <ProblemCard
        problem="В группе из 30 студентов нужно выбрать старосту и заместителя. Сколькими способами это можно сделать?"
        solution={
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Решение:</p>
            <p className="text-sm text-muted-foreground">
              Это размещение из 30 по 2 (порядок важен: староста ≠ заместитель)
            </p>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="A_{30}^2 = \frac{30!}{28!} = 30 \times 29 = 870" display />
            </div>
            <p className="text-sm font-semibold text-accent">Ответ: 870 способов</p>
          </div>
        }
      />

      <ProblemCard
        problem="Из колоды в 36 карт вытаскивают 2 карты. Какова вероятность, что обе карты — тузы?"
        solution={
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Решение:</p>
            <p className="text-sm text-muted-foreground">Общее число способов выбрать 2 карты из 36:</p>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="C_{36}^2 = \frac{36!}{2! \cdot 34!} = \frac{36 \times 35}{2} = 630" display />
            </div>
            <p className="text-sm text-muted-foreground">Благоприятных исходов (2 туза из 4):</p>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="C_4^2 = \frac{4!}{2! \cdot 2!} = 6" display />
            </div>
            <p className="text-sm text-muted-foreground">Вероятность:</p>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="P = \frac{6}{630} = \frac{1}{105} \approx 0.0095" display />
            </div>
            <p className="text-sm font-semibold text-accent">Ответ: 1/105 ≈ 0.95%</p>
          </div>
        }
      />

      <ProblemCard
        problem="Вероятность положительного результата теста при наличии заболевания 0.95, при отсутствии — 0.05. Заболеванием страдает 1% населения. Какова вероятность, что человек с положительным результатом действительно болен?"
        solution={
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Решение (формула Байеса):</p>
            <p className="text-sm text-muted-foreground">Обозначим:</p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>B — человек болен, P(B) = 0.01</li>
              <li>P(+|B) = 0.95 — тест положительный при болезни</li>
              <li>P(+|¬B) = 0.05 — тест положительный при здоровье</li>
            </ul>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="P(B|+) = \frac{P(B) \cdot P(+|B)}{P(B) \cdot P(+|B) + P(\neg B) \cdot P(+|\neg B)}" display />
            </div>
            <div className="bg-card p-3 rounded">
              <MathFormula formula="P(B|+) = \frac{0.01 \times 0.95}{0.01 \times 0.95 + 0.99 \times 0.05} = \frac{0.0095}{0.0095 + 0.0495} \approx 0.161" display />
            </div>
            <p className="text-sm font-semibold text-accent">Ответ: ≈16.1% (парадокс ложноположительных результатов!)</p>
          </div>
        }
      />
    </section>
  </TopicPageLayout>
);

export default ProbabilityProblems;
