import { useState, useEffect } from 'react';
import { Button } from './Button';
import './DonateModal.css';

export const DonateModal = ({ isOpen, onClose, onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const presetAmounts = [100, 300, 500, 1000];

  useEffect(() => {
    if (isOpen) {
      setAmount('');
      setError('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);

    if (!amount || isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Введите корректную сумму');
      return;
    }

    onSubmit(parsedAmount);
    onClose();
  };

  const handlePresetClick = (preset) => {
    setAmount(preset.toString());
    setError('');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Разрешаем только цифры и точку
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
      setError('');
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="donate-modal-overlay" onClick={handleBackdropClick}>
      <div className="donate-modal">
        <button className="donate-modal__close" onClick={onClose} aria-label="Закрыть">
          ✕
        </button>

        <div className="donate-modal__header">
          <h3 className="donate-modal__title">Поддержите проект ❤️</h3>
          <p className="donate-modal__subtitle">
            Выберите сумму или введите свою
          </p>
        </div>

        <form onSubmit={handleSubmit} className="donate-modal__form">
          <div className="donate-modal__presets">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                type="button"
                className={`donate-modal__preset ${
                  amount === preset.toString() ? 'active' : ''
                }`}
                onClick={() => handlePresetClick(preset)}
              >
                {preset} ₽
              </button>
            ))}
          </div>

          <div className="donate-modal__input-group">
            <label htmlFor="amount" className="donate-modal__label">
              Или введите свою сумму
            </label>
            <div className="donate-modal__input-wrapper">
              <input
                type="text"
                id="amount"
                className={`donate-modal__input ${error ? 'error' : ''}`}
                placeholder="Введите сумму"
                value={amount}
                onChange={handleInputChange}
                autoFocus
              />
              <span className="donate-modal__currency">₽</span>
            </div>
            {error && <p className="donate-modal__error">{error}</p>}
          </div>

          <div className="donate-modal__actions">
            <Button type="submit" variant="filled" fullWidth>
              Поддержать проект
            </Button>
            <Button type="button" variant="plain" fullWidth onClick={onClose}>
              Отмена
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
