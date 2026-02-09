import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'О проекте', href: '#about' },
    { name: 'Возможности', href: '#features' },
    { name: 'Технологии', href: '#tech-stack' },
    { name: 'Автор', href: '#creator' },
  ];

  const socialLinks = [
    {
      name: 'GitHub Organization',
      href: 'https://github.com/Oxord',
      icon: '⚡',
    },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Footer Logo & Description */}
          <div className="footer__brand">
            <h3 className="footer__brand-title">FitnessTogether</h3>
            <p className="footer__brand-description">
              AI-powered fitness ecosystem для тренеров и клиентов
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__section-title">Навигация</h4>
            <nav className="footer__nav">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="footer__nav-link"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="footer__section">
            <h4 className="footer__section-title">Ссылки</h4>
            <nav className="footer__social">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="footer__social-icon">{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} FitnessTogether. Выпускной проект лицея Инфотех.
          </p>
          <p className="footer__credits">
            Made with <span className="footer__heart">♥</span> by Claude Sonnet 4.5
          </p>
        </div>
      </div>
    </footer>
  );
};
