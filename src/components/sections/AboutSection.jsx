import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { content } from '../../utils/content';
import './AboutSection.css';

export const AboutSection = () => {
  const { title, description, highlights } = content.about;

  return (
    <section id="about" className="about">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <h2 className="about__title">{title}</h2>

          <div className="about__description">
            {description.map((paragraph, index) => (
              <p key={index} className="about__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>

        <div className="about__highlights">
          {highlights.map((highlight, index) => (
            <AnimatedSection
              key={highlight.title}
              animation="fade-up"
              delay={index * 0.1}
            >
              <Card hoverable className="about__highlight-card">
                <div className="about__highlight-icon">{highlight.icon}</div>
                <h3 className="about__highlight-title">{highlight.title}</h3>
                <p className="about__highlight-text">{highlight.text}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
