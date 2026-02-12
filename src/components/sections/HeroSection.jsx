import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { content } from '../../utils/content';
import './HeroSection.css';

export const HeroSection = () => {
  const { title, subtitle, badges, cta } = content.hero;

  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Title */}
          <h1 className="hero__title">{title}</h1>

          {/* Subtitle */}
          <p className="hero__subtitle">{subtitle}</p>

          {/* USP Badges */}
          <motion.div
            className="hero__badges"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {badges.map((badge, index) => (
              <Badge key={badge} variant="secondary" size="large">
                {badge}
              </Badge>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              variant="filled"
              href={cta.primary.href}
            >
              {cta.primary.text}
            </Button>
            <Button variant="plain" href={cta.secondary.href}>
              {cta.secondary.text}
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="hero__scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="hero__scroll-text">Scroll to explore</span>
            <motion.div
              className="hero__scroll-arrow"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="hero__background">
        <div className="hero__background-gradient"></div>
        <div className="hero__background-circles">
          <div className="hero__circle hero__circle--1"></div>
          <div className="hero__circle hero__circle--2"></div>
          <div className="hero__circle hero__circle--3"></div>
        </div>
      </div>
    </section>
  );
};
