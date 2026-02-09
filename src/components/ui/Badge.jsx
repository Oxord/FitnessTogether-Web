import './Badge.css';

/**
 * Badge component для USP тегов и лейблов
 */
export const Badge = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  const baseClass = 'badge';
  const variantClass = `badge--${variant}`;
  const sizeClass = `badge--${size}`;
  const combinedClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

  return (
    <span className={combinedClass} {...props}>
      {children}
    </span>
  );
};
