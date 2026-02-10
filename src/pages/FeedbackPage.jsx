import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../utils/content';
import { FeedbackForm } from '../components/ui/FeedbackForm';
import logo from '../assets/images/logo.png';
import './FeedbackPage.css';

const { feedback } = content;

export const FeedbackPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="feedback-page">
      {/* Header */}
      <header className="feedback-page__header">
        <div className="container">
          <div className="feedback-page__header-content">
            <Link to="/" className="feedback-page__logo">
              <img src={logo} alt="FitnessTogether" className="feedback-page__logo-image" />
              <span className="feedback-page__logo-text">FitnessTogether</span>
            </Link>
            <Link to="/" className="feedback-page__back-link">
              &larr; {feedback.backLink}
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="feedback-page__main">
        <div className="container">
          <div className="feedback-page__content">
            <div className="feedback-page__heading">
              <h1 className="feedback-page__title">{feedback.title}</h1>
              <p className="feedback-page__subtitle">{feedback.subtitle}</p>
            </div>
            <div className="feedback-page__form-wrapper">
              <FeedbackForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="feedback-page__footer">
        <div className="container">
          <p className="feedback-page__copyright">
            &copy; {new Date().getFullYear()} FitnessTogether
          </p>
        </div>
      </footer>
    </div>
  );
};
