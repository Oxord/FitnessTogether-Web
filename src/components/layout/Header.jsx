import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Button } from '../ui/Button';
import './Header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'О платформе', href: '#about' },
    { name: 'Для кого', href: '#for-who' },
    { name: 'Возможности', href: '#features' },
    { name: 'Скачать', href: '#download' },
    { name: 'Автор', href: '#creator' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <a href="#hero" className="header__logo" onClick={(e) => scrollToSection(e, '#hero')}>
            <img src={logo} alt="FitnessTogether" className="header__logo-image" />
            <span className="header__logo-text">FitnessTogether</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="header__nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="header__nav-link"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            <Link to="/feedback" className="header__nav-link">
              Обратная связь
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="header__mobile-toggle-line"></span>
            <span className="header__mobile-toggle-line"></span>
            <span className="header__mobile-toggle-line"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          <nav className="header__mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="header__mobile-nav-link"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            <Link
              to="/feedback"
              className="header__mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Обратная связь
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
