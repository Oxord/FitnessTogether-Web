import { useState } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { DonateModal } from '../ui/DonateModal';
import { content } from '../../utils/content';
import './CreatorSection.css';

export const CreatorSection = () => {
  const {
    title,
    name,
    photo,
    description,
    mission,
    contacts,
    yooMoneyWallet,
    donateText,
    donateDescription,
  } = content.creator;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDonateClick = () => {
    if (yooMoneyWallet) {
      setIsModalOpen(true);
    } else {
      alert(
        'ЮМoney кошелек еще не настроен. Обновите src/utils/content.js'
      );
    }
  };

  const handleDonateSubmit = (amount) => {
    // Открываем форму ЮМoney с указанной суммой
    const params = new URLSearchParams({
      receiver: yooMoneyWallet,
      'quickpay-form': 'donate',
      targets: 'Поддержка проекта FitnessTogether',
      paymentType: 'AC',
      sum: amount.toString(),
      label: 'FitnessTogether',
    });
    window.open(
      `https://yoomoney.ru/quickpay/confirm.xml?${params}`,
      '_blank'
    );
  };

  return (
    <section id="creator" className="creator">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <h2 className="creator__title">{title}</h2>
        </AnimatedSection>

        <div className="creator__content">
          <AnimatedSection animation="fade-up" delay={0.2}>
            <Card className="creator__unified-card">
              {/* Author Photo and Info */}
              <div className="creator__profile">
                {photo && (
                  <img
                    src={photo}
                    alt={name || 'Автор проекта'}
                    className="creator__photo"
                  />
                )}
                <div className="creator__bio">
                  {name && <h3 className="creator__name">{name}</h3>}
                  <div className="creator__description">
                    <p>{description}</p>
                    {mission && <p className="creator__mission">{mission}</p>}
                  </div>
                </div>
              </div>

              {/* Contact Links */}
              {contacts && contacts.length > 0 && (
                <div className="creator__contacts">
                  <h4 className="creator__contacts-title">Связаться со мной:</h4>
                  <div className="creator__contacts-list">
                    {contacts.map((contact) => (
                      <a
                        key={contact.type}
                        href={contact.href}
                        className="creator__contact-link"
                        target={contact.type === 'email' ? '_self' : '_blank'}
                        rel={contact.type === 'email' ? undefined : 'noopener noreferrer'}
                      >
                        <span className="creator__contact-icon">
                          {contact.type === 'telegram' ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                          ) : (
                            contact.icon
                          )}
                        </span>
                        <span className="creator__contact-value">{contact.value}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Donate Section */}
              <div className="creator__donate-section">
                <h3 className="creator__donate-title">{donateText}</h3>

                <div className="creator__donate-description">
                  {donateDescription.map((line, index) => (
                    <p key={index} className="creator__donate-line">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="creator__donate-actions">
                  <Button variant="filled" onClick={handleDonateClick}>
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
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>

      {/* Donate Modal */}
      <DonateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleDonateSubmit}
      />
    </section>
  );
};
