import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { TexContent } from "@/components/strang/TexContent";
import InfoBlock from "@/components/strang/InfoBlock";

const IntegralsIndefinite = () => (
  <TopicPageLayout topicId="integrals-indefinite">
    <TexContent>
      <p className="text-muted-foreground mb-6">
        Интеграл — это <strong>операция, обратная дифференцированию</strong>. Если производная отвечает на вопрос
        «как быстро?», то интеграл отвечает «сколько всего?». Геометрически интеграл — это <strong>площадь под кривой</strong>.
      </p>

      <h2 className="subsection-title">Неопределённый интеграл</h2>
      <p className="mb-4">
        Неопределённый интеграл (антипроизводная) — это функция {`$F(x)$`}, такая что {`$F'(x) = f(x)$`}:
      </p>

      <div className="formula-block">
        {`$$\\int f(x) \\, dx = F(x) + C$$`}
      </div>

      <p className="mb-4">
        Константа {`$C$`} необходима, потому что производная константы равна нулю — любая константа «теряется» при дифференцировании.
      </p>

      <h2 className="subsection-title">Основные формулы интегрирования</h2>

      <div className="formula-block">
        {`$$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$`}
      </div>

      <div className="formula-block">
        {`$$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$$`}
      </div>

      <div className="formula-block">
        {`$$\\int e^x \\, dx = e^x + C \\qquad \\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$$`}
      </div>

      <div className="formula-block">
        {`$$\\int \\cos x \\, dx = \\sin x + C \\qquad \\int \\sin x \\, dx = -\\cos x + C$$`}
      </div>

      <InfoBlock type="important" title="Важно помнить">
        <ul className="list-disc list-inside space-y-1">
          <li>Всегда добавляйте константу {`$+C$`} в неопределённом интеграле!</li>
          <li>Интеграл линеен: {`$\\int (af + bg) = a\\int f + b\\int g$`}</li>
          <li>Проверка: дифференцирование ответа должно давать подынтегральное выражение</li>
          <li>Степенное правило не работает при {`$n = -1$`} (даёт {`$\\ln|x|$`})</li>
        </ul>
      </InfoBlock>
    </TexContent>
  </TopicPageLayout>
);

export default IntegralsIndefinite;
