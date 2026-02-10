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
                        <span className="creator__contact-icon">{contact.icon}</span>
                        <span className="creator__contact-label">{contact.label}</span>
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
