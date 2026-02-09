import './Button.css';

/**
 * Button component с тремя вариантами из iOS app:
 * - filled: Заполненная кнопка с ftOrange фоном
 * - plain: Прозрачная кнопка с ftOrange обводкой
 * - secondary: Текстовая кнопка с подчеркиванием
 */
export const Button = ({
  children,
  variant = 'filled',
  href,
  onClick,
  className = '',
  ...props
}) => {
  const baseClass = 'button';
  const variantClass = `button--${variant}`;
  const combinedClass = `${baseClass} ${variantClass} ${className}`.trim();

  // Если href передан - рендерим ссылку
  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Иначе рендерим кнопку
  return (
    <button
      onClick={onClick}
      className={combinedClass}
      {...props}
    >
      {children}
    </button>
  );
};
