import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './AnimatedSection.css';

/**
 * AnimatedSection component - wrapper для анимации при скролле
 * Использует Intersection Observer для определения видимости
 */
export const AnimatedSection = ({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  once = true,
  className = '',
  ...props
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Определяем варианты анимации
  const animations = {
    'fade-up': {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    'fade-down': {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 },
    },
    'fade-left': {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    'fade-right': {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    'fade': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'scale': {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    'slide-up': {
      hidden: { y: 100, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
  };

  const selectedAnimation = animations[animation] || animations['fade-up'];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={selectedAnimation}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`animated-section ${className}`.trim()}
      {...props}
    >
      {children}
    </motion.div>
  );
};
