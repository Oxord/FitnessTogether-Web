# FitnessTogether - Landing Page

Landing page для проекта FitnessTogether - AI-powered fitness ecosystem.

## Технологии

- React 18
- Vite 5
- Framer Motion (анимации)
- React Router
- CSS Modules

## Локальная Разработка

```bash
# Установить зависимости
npm install

# Запустить dev сервер
npm run dev

# Собрать для production
npm run build

# Просмотр production build
npm run preview
```

## Деплой

Сайт автоматически деплоится на GitHub Pages через GitHub Actions при push в main ветку.

Live URL: `https://[username].github.io/FitnessTogether-Web/`

## Структура Проекта

```
src/
├── assets/          # Изображения, логотип, иконки
├── components/      # React компоненты
│   ├── layout/      # Header, Footer, Navigation
│   ├── sections/    # Секции лендинга
│   └── ui/          # Переиспользуемые UI компоненты
├── styles/          # CSS файлы и design system
└── utils/           # Утилиты и контент
```

## Обновление Контента

Весь текстовый контент находится в `src/utils/content.js`. Для изменения текстов:
1. Отредактируйте `src/utils/content.js`
2. Закоммитьте изменения
3. GitHub Actions автоматически задеплоит

### Placeholder Контент

**Creator Section** требует заполнения:
- Информация о владельце проекта
- ЮМoney кошелек для донатов

Откройте `src/utils/content.js` и обновите секцию `creator`.

## License

MIT
