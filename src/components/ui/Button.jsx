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
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClass = 'button';
  const variantClass = `button--${variant}`;
  const fullWidthClass = fullWidth ? 'button--full-width' : '';
  const combinedClass = `${baseClass} ${variantClass} ${fullWidthClass} ${className}`.trim();

  // Обработчик для якорных ссылок
  const handleAnchorClick = (e) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Обновляем URL без перезагрузки страницы
        window.history.pushState(null, '', href);
      }
    }
  };

  // Если href передан - рендерим ссылку
  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        onClick={handleAnchorClick}
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
