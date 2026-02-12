import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';
import { content } from '../../utils/content';
import './CTASection.css';

export const CTASection = () => {
  const { title, subtitle, buttons } = content.cta;

  return (
    <section id="download" className="cta">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <div className="cta__content">
            <h2 className="cta__title">{title}</h2>
            <p className="cta__subtitle">{subtitle}</p>

            <div className="cta__actions">
              <Button
                variant="filled"
                href={buttons.primary.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {buttons.primary.text}
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Background Decoration */}
      <div className="cta__background">
        <div className="cta__gradient"></div>
      </div>
    </section>
  );
};
