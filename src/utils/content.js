/**
 * Централизованное хранилище всего текстового контента лендинга.
 * Для обновления текстов редактируйте этот файл.
 */

export const content = {
  // Hero Section
  hero: {
    title: 'FitnessTogether: AI-Powered Fitness Ecosystem',
    subtitle: 'Комплексная экосистема для фитнес-тренеров и клиентов с локальным AI-анализом. Выпускной проект команды разработчиков из 4 человек.',
    badges: ['Native iOS', '.NET 8 API', 'Local AI', 'Microservices'],
    cta: {
      primary: {
        text: 'View on GitHub',
        href: 'https://github.com/Oxord',
      },
      secondary: {
        text: 'Donate ❤️',
        href: '#creator',
      },
    },
  },

  // About Section
  about: {
    title: 'О Проекте',
    description: [
      'FitnessTogether - выпускной проект команды из 4 разработчиков лицея Инфотех, представляющий собой комплексную платформу для взаимодействия фитнес-тренеров и их клиентов.',
      'Проект демонстрирует профессиональный уровень архитектуры: микросервисы, Clean Architecture, локальный AI через Ollama llama3.',
    ],
    highlights: [
      {
        icon: '🎯',
        title: 'Цель',
        text: 'Создать полноценную экосистему для управления тренировками с AI-анализом прогресса',
      },
      {
        icon: '⚡',
        title: 'Технологии',
        text: 'Swift 6, C# .NET 8, Python, RabbitMQ, MySQL - enterprise-grade стек',
      },
      {
        icon: '🔒',
        title: 'Приватность',
        text: 'Локальный AI (Ollama llama3) - ваши данные остаются на вашем сервере',
      },
      {
        icon: '📱',
        title: 'Native',
        text: 'Полностью нативное iOS приложение на UIKit с Coordinator Pattern',
      },
    ],
  },

  // Features Section
  features: {
    title: 'Ключевые Возможности',
    subtitle: 'Профессиональная платформа с современной архитектурой и production-ready кодом',
    items: [
      {
        id: 'ios',
        icon: '📱',
        title: 'Native iOS App',
        description: 'Полностью нативное приложение на UIKit с Coordinator Pattern для плавной навигации. 128+ Swift файлов, покрытых тестами.',
        color: 'var(--system-blue)',
      },
      {
        id: 'backend',
        icon: '⚙️',
        title: '.NET 8 Backend',
        description: 'ASP.NET Core Web API с Clean Architecture. JWT аутентификация, Entity Framework Core 9, MySQL database.',
        color: 'var(--system-green)',
      },
      {
        id: 'ai',
        icon: '🤖',
        title: 'AI Workout Analysis',
        description: 'Локальный AI-анализ тренировок через Ollama llama3. Детальная обратная связь без отправки данных в облако.',
        color: 'var(--ft-orange)',
      },
      {
        id: 'coach-client',
        icon: '👥',
        title: 'Coach-Client System',
        description: 'B2B2C модель: тренеры управляют клиентами, клиенты отслеживают прогресс. Many-to-many отношения через ClientCoach.',
        color: 'var(--system-cyan)',
      },
      {
        id: 'microservices',
        icon: '🔗',
        title: 'Microservices Ready',
        description: 'RabbitMQ для асинхронной коммуникации между Backend и PersonalAiCoach. Легко масштабируется.',
        color: 'var(--system-red)',
      },
      {
        id: 'devex',
        icon: '🛠️',
        title: 'Developer Experience',
        description: 'Git automation, test automation, EditorConfig, Conventional Commits. Все для продуктивной командной работы.',
        color: 'var(--system-yellow)',
      },
    ],
  },

  // CTA Section
  cta: {
    title: 'Ready to Explore?',
    subtitle: 'Посмотрите код на GitHub или поддержите развитие проекта',
    buttons: {
      primary: {
        text: 'View on GitHub',
        href: 'https://github.com/Oxord',
      },
      secondary: {
        text: 'Watch Demo',
        href: '#hero', // TODO: добавить ссылку на demo video
      },
    },
  },

  // Tech Stack Section
  techStack: {
    title: 'Технологический Стек',
    subtitle: 'Профессиональный набор технологий для enterprise-решений',
    layers: [
      {
        name: 'iOS Layer',
        technologies: [
          { name: 'Swift 6', icon: '🔶' },
          { name: 'UIKit', icon: '📱' },
          { name: 'FTApi', icon: '🔌' },
          { name: 'FTDomainData', icon: '📦' },
        ],
      },
      {
        name: 'Backend Layer',
        technologies: [
          { name: 'C# .NET 8', icon: '💠' },
          { name: 'ASP.NET Core', icon: '🌐' },
          { name: 'EF Core 9', icon: '🗄️' },
          { name: 'JWT Auth', icon: '🔐' },
        ],
      },
      {
        name: 'AI Layer',
        technologies: [
          { name: 'Python', icon: '🐍' },
          { name: 'RabbitMQ', icon: '🐰' },
          { name: 'Ollama llama3', icon: '🤖' },
        ],
      },
      {
        name: 'Data Layer',
        technologies: [
          { name: 'MySQL', icon: '🐬' },
          { name: 'ELK Stack', icon: '📊' },
          { name: 'Docker', icon: '🐋' },
        ],
      },
    ],
  },

  // Architecture Section
  architecture: {
    title: 'Архитектура Системы',
    subtitle: 'Микросервисная архитектура с четким разделением ответственности',
    description: [
      'iOS App общается с Backend через REST API (JWT аутентификация, access token TTL 3 минуты)',
      'Backend отправляет запросы на анализ тренировок в RabbitMQ очередь',
      'PersonalAiCoach (Python) обрабатывает сообщения и выполняет AI-анализ через Ollama llama3',
      'Все логи собираются в Elasticsearch для мониторинга и аналитики через Kibana',
    ],
    components: [
      { name: 'iOS App', connections: ['Backend API'] },
      { name: 'Backend API', connections: ['MySQL', 'RabbitMQ', 'ELK'] },
      { name: 'PersonalAiCoach', connections: ['RabbitMQ', 'Ollama'] },
      { name: 'MySQL', connections: [] },
      { name: 'RabbitMQ', connections: [] },
      { name: 'ELK Stack', connections: [] },
    ],
  },

  // Creator Section (Placeholder)
  creator: {
    title: 'О Владельце Проекта',
    description: '[ЗАПОЛНИТЕ: Информация о владельце проекта будет добавлена позже]',
    yooMoneyWallet: null, // TODO: Добавить номер ЮМoney кошелька
    donateText: 'Поддержите развитие проекта',
    donateDescription: [
      'Ваша поддержка поможет:',
      '• Добавить новые фичи',
      '• Улучшить AI-анализ',
      '• Развивать open-source экосистему',
      '• Поддерживать серверы для демо',
    ],
  },

  // Footer
  footer: {
    description: 'AI-powered fitness ecosystem для тренеров и клиентов',
    copyright: 'FitnessTogether. Выпускной проект лицея Инфотех.',
    madeWith: 'Made with ♥ by Claude Sonnet 4.5',
  },
};
