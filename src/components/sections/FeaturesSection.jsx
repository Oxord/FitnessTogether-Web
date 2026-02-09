import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { content } from '../../utils/content';
import './FeaturesSection.css';

export const FeaturesSection = () => {
  const { title, subtitle, items } = content.features;

  return (
    <section id="features" className="features">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <h2 className="features__title">{title}</h2>
          <p className="features__subtitle">{subtitle}</p>
        </AnimatedSection>

        <div className="features__grid">
          {items.map((feature, index) => (
            <AnimatedSection
              key={feature.id}
              animation="fade-up"
              delay={index * 0.1}
            >
              <Card hoverable className="features__card">
                <div
                  className="features__icon"
                  style={{ color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="features__card-title">{feature.title}</h3>
                <p className="features__card-description">
                  {feature.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
