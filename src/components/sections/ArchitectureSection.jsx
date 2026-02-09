import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { content } from '../../utils/content';
import './ArchitectureSection.css';

export const ArchitectureSection = () => {
  const { title, subtitle, description } = content.architecture;

  return (
    <section id="architecture" className="architecture">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <h2 className="architecture__title">{title}</h2>
          <p className="architecture__subtitle">{subtitle}</p>
        </AnimatedSection>

        <div className="architecture__content">
          <AnimatedSection animation="fade-up" delay={0.2}>
            <Card className="architecture__diagram">
              <div className="architecture__flow">
                <div className="architecture__component architecture__component--ios">
                  <span className="architecture__component-icon">📱</span>
                  <span className="architecture__component-name">iOS App</span>
                </div>

                <div className="architecture__arrow">→</div>

                <div className="architecture__component architecture__component--backend">
                  <span className="architecture__component-icon">⚙️</span>
                  <span className="architecture__component-name">
                    Backend API
                  </span>
                </div>

                <div className="architecture__arrow">→</div>

                <div className="architecture__component architecture__component--rabbitmq">
                  <span className="architecture__component-icon">🐰</span>
                  <span className="architecture__component-name">
                    RabbitMQ
                  </span>
                </div>

                <div className="architecture__arrow">→</div>

                <div className="architecture__component architecture__component--ai">
                  <span className="architecture__component-icon">🤖</span>
                  <span className="architecture__component-name">
                    AI Coach
                  </span>
                </div>
              </div>

              {/* Supporting Components */}
              <div className="architecture__supporting">
                <div className="architecture__support-item">
                  <span className="architecture__support-icon">🗄️</span>
                  <span className="architecture__support-name">MySQL</span>
                </div>
                <div className="architecture__support-item">
                  <span className="architecture__support-icon">📊</span>
                  <span className="architecture__support-name">ELK Stack</span>
                </div>
                <div className="architecture__support-item">
                  <span className="architecture__support-icon">🐋</span>
                  <span className="architecture__support-name">Docker</span>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.4}>
            <div className="architecture__description">
              {description.map((paragraph, index) => (
                <p key={index} className="architecture__paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
