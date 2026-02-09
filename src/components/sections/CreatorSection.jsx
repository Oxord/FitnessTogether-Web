import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { content } from '../../utils/content';
import './CreatorSection.css';

export const CreatorSection = () => {
  const {
    title,
    description,
    yooMoneyWallet,
    donateText,
    donateDescription,
  } = content.creator;

  const handleDonate = () => {
    if (yooMoneyWallet) {
      // Если кошелек указан - открываем форму ЮМoney
      const params = new URLSearchParams({
        receiver: yooMoneyWallet,
        quickpay_form: 'donate',
        targets: 'Поддержка проекта FitnessTogether',
        paymentType: 'AC',
        sum: '100',
        comment: 'Донат от сообщества',
      });
      window.open(
        `https://yoomoney.ru/quickpay/confirm?${params}`,
        '_blank'
      );
    } else {
      // Placeholder behavior
      alert(
        'ЮМoney кошелек еще не настроен. Обновите src/utils/content.js'
      );
    }
  };

  return (
    <section id="creator" className="creator">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <h2 className="creator__title">{title}</h2>
        </AnimatedSection>

        <div className="creator__content">
          <AnimatedSection animation="fade-up" delay={0.2}>
            <Card className="creator__info-card">
              <div className="creator__placeholder-notice">
                <span className="creator__placeholder-icon">📝</span>
                <p className="creator__placeholder-text">
                  Это секция с информацией о владельце проекта. Для
                  заполнения обновите <code>src/utils/content.js</code>
                </p>
              </div>

              <div className="creator__description">
                <p>{description}</p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.4}>
            <Card className="creator__donate-card">
              <h3 className="creator__donate-title">{donateText}</h3>

              <div className="creator__donate-description">
                {donateDescription.map((line, index) => (
                  <p key={index} className="creator__donate-line">
                    {line}
                  </p>
                ))}
              </div>

              <div className="creator__donate-actions">
                <Button variant="filled" onClick={handleDonate}>
                  {yooMoneyWallet
                    ? 'Donate via ЮMoney ❤️'
                    : 'Donate (Coming Soon) ❤️'}
                </Button>

                {!yooMoneyWallet && (
                  <p className="creator__donate-placeholder">
                    <small>
                      Добавьте номер ЮМoney кошелька в{' '}
                      <code>content.creator.yooMoneyWallet</code>
                    </small>
                  </p>
                )}
              </div>

              {/* QR Code Placeholder */}
              {yooMoneyWallet && (
                <div className="creator__qr-placeholder">
                  <p className="creator__qr-text">
                    Или отсканируйте QR-код:
                  </p>
                  <div className="creator__qr-box">
                    <span className="creator__qr-icon">📱</span>
                    <small>
                      QR-код можно сгенерировать на{' '}
                      <a
                        href="https://qrcoder.ru/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        qrcoder.ru
                      </a>
                    </small>
                  </div>
                </div>
              )}
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
