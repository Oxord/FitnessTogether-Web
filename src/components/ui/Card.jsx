import './Card.css';

/**
 * Card component с стилем из iOS app:
 * - cornerRadius: 15px
 * - shadow: 0 2px 3px rgba(0,0,0,0.5)
 */
export const Card = ({
  children,
  className = '',
  hoverable = false,
  ...props
}) => {
  const baseClass = 'card';
  const hoverClass = hoverable ? 'card--hoverable' : '';
  const combinedClass = `${baseClass} ${hoverClass} ${className}`.trim();

  return (
    <div className={combinedClass} {...props}>
      {children}
    </div>
  );
};
