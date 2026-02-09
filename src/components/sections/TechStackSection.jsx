import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { content } from '../../utils/content';
import './TechStackSection.css';

export const TechStackSection = () => {
  const { title, subtitle, layers } = content.techStack;

  return (
    <section id="tech-stack" className="tech-stack">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <h2 className="tech-stack__title">{title}</h2>
          <p className="tech-stack__subtitle">{subtitle}</p>
        </AnimatedSection>

        <div className="tech-stack__layers">
          {layers.map((layer, index) => (
            <AnimatedSection
              key={layer.name}
              animation="fade-up"
              delay={index * 0.15}
            >
              <Card className="tech-stack__layer-card">
                <h3 className="tech-stack__layer-name">{layer.name}</h3>
                <div className="tech-stack__technologies">
                  {layer.technologies.map((tech) => (
                    <div key={tech.name} className="tech-stack__tech">
                      <span className="tech-stack__tech-icon">
                        {tech.icon}
                      </span>
                      <span className="tech-stack__tech-name">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
