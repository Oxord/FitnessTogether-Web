import { useState } from 'react';
import { content } from '../../utils/content';
import { sendFeedback } from '../../utils/sendFeedback';
import { Button } from './Button';
import './FeedbackForm.css';

const { form, validation, success, error: errorContent } = content.feedback;

export const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    type: 'question',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [mailtoLink, setMailtoLink] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = validation.nameRequired;
    }
    if (!formData.contact.trim()) {
      newErrors.contact = validation.contactRequired;
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = validation.messageRequired;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    const result = await sendFeedback(formData);

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setMailtoLink(result.mailtoLink);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', contact: '', type: 'question', message: '' });
    setErrors({});
    setStatus('idle');
    setMailtoLink('');
  };

  if (status === 'success') {
    return (
      <div className="feedback-form__result">
        <div className="feedback-form__result-icon">✓</div>
        <h3 className="feedback-form__result-title">{success.title}</h3>
        <p className="feedback-form__result-text">{success.description}</p>
        <Button variant="plain" onClick={handleReset}>
          {success.sendAnother}
        </Button>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="feedback-form__result">
        <div className="feedback-form__result-icon feedback-form__result-icon--error">!</div>
        <h3 className="feedback-form__result-title">{errorContent.title}</h3>
        <p className="feedback-form__result-text">{errorContent.description}</p>
        <div className="feedback-form__result-actions">
          <Button variant="filled" href={mailtoLink}>
            {errorContent.emailButton}
          </Button>
          <Button variant="plain" onClick={handleReset}>
            {errorContent.retry}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit} noValidate>
      {/* Name */}
      <div className="feedback-form__field">
        <label htmlFor="feedback-name" className="feedback-form__label">
          {form.nameLabel}
        </label>
        <input
          type="text"
          id="feedback-name"
          name="name"
          className={`feedback-form__input ${errors.name ? 'feedback-form__input--error' : ''}`}
          placeholder={form.namePlaceholder}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="feedback-form__error">{errors.name}</p>}
      </div>

      {/* Contact */}
      <div className="feedback-form__field">
        <label htmlFor="feedback-contact" className="feedback-form__label">
          {form.contactLabel}
        </label>
        <input
          type="text"
          id="feedback-contact"
          name="contact"
          className={`feedback-form__input ${errors.contact ? 'feedback-form__input--error' : ''}`}
          placeholder={form.contactPlaceholder}
          value={formData.contact}
          onChange={handleChange}
        />
        {errors.contact && <p className="feedback-form__error">{errors.contact}</p>}
      </div>

      {/* Message Type */}
      <div className="feedback-form__field">
        <span className="feedback-form__label">{form.typeLabel}</span>
        <div className="feedback-form__radio-group">
          {form.types.map((type) => (
            <label key={type.value} className="feedback-form__radio">
              <input
                type="radio"
                name="type"
                value={type.value}
                checked={formData.type === type.value}
                onChange={handleChange}
                className="feedback-form__radio-input"
              />
              <span className="feedback-form__radio-label">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="feedback-form__field">
        <label htmlFor="feedback-message" className="feedback-form__label">
          {form.messageLabel}
        </label>
        <textarea
          id="feedback-message"
          name="message"
          className={`feedback-form__textarea ${errors.message ? 'feedback-form__textarea--error' : ''}`}
          placeholder={form.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          rows={6}
        />
        {errors.message && <p className="feedback-form__error">{errors.message}</p>}
      </div>

      {/* Submit */}
      <Button type="submit" variant="filled" fullWidth disabled={status === 'sending'}>
        {status === 'sending' ? form.sendingButton : form.submitButton}
      </Button>
    </form>
  );
};
