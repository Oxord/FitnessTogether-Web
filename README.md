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

### Первоначальная Настройка

1. **Создайте GitHub репозиторий** с названием `FitnessTogether-Web`

2. **Добавьте remote и push код**:
   ```bash
   git remote add origin https://github.com/[your-username]/FitnessTogether-Web.git
   git push -u origin main
   ```

3. **Включите GitHub Pages**:
   - Откройте Settings → Pages в вашем репозитории
   - Source: выберите "GitHub Actions"
   - Workflow автоматически запустится после push

4. **Дождитесь деплоя**:
   - Перейдите в Actions tab
   - Дождитесь завершения workflow "Deploy to GitHub Pages"
   - После завершения сайт будет доступен по URL

### Live URL

`https://[your-username].github.io/FitnessTogether-Web/`

### Автоматический Деплой

После первоначальной настройки каждый push в main ветку автоматически триггерит деплой:

```bash
git add .
git commit -m "Update content"
git push
```

Деплой занимает ~2-3 минуты.

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
