import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { content } from '../../utils/content';
import './ForWhoSection.css';

export const ForWhoSection = () => {
  const { title, subtitle, audiences } = content.forWho;

  return (
    <section id="for-who" className="for-who">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <h2 className="for-who__title">{title}</h2>
          <p className="for-who__subtitle">{subtitle}</p>
        </AnimatedSection>

        <div className="for-who__grid">
          {audiences.map((audience, index) => (
            <AnimatedSection
              key={audience.id}
              animation="fade-up"
              delay={index * 0.15}
            >
              <Card hoverable className="for-who__card">
                <div className="for-who__icon">{audience.icon}</div>
                <h3 className="for-who__card-title">{audience.title}</h3>
                <p className="for-who__card-description">
                  {audience.description}
                </p>

                <ul className="for-who__benefits">
                  {audience.benefits.map((benefit, idx) => (
                    <li key={idx} className="for-who__benefit">
                      <span className="for-who__benefit-icon">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="for-who__cta">
                  <Button variant="outlined" fullWidth>
                    {audience.cta}
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};