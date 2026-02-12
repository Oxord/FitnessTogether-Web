# Инструкция по автоматическому деплою на Timeweb.Cloud

## Выбор метода деплоя

Есть 2 варианта автоматического деплоя:

1. **FTP (простой)** - используется по умолчанию в [deploy.yml](.github/workflows/deploy.yml)
2. **SSH (быстрый)** - более продвинутый вариант в [deploy-ssh.yml.example](.github/workflows/deploy-ssh.yml.example)

## Вариант 1: Деплой через FTP (рекомендуется для начала)

### Шаг 1: Получить FTP данные в Timeweb.Cloud

1. Войдите в панель управления [Timeweb.Cloud](https://timeweb.cloud/)
2. Перейдите в раздел **Хостинг** → выберите ваш сайт
3. Откройте вкладку **FTP и SSH**
4. Найдите и запишите:
   - **FTP сервер** (например: `ftp.example.ru`)
   - **Имя пользователя** (например: `u1234567`)
   - **Пароль** (если забыли, можно сбросить)

### Шаг 2: Добавить секреты в GitHub

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **New repository secret** и добавьте следующие секреты:

| Имя секрета | Описание | Пример значения |
|-------------|----------|-----------------|
| `FTP_SERVER` | FTP сервер из панели Timeweb | `ftp.example.ru` |
| `FTP_USERNAME` | Имя пользователя FTP | `u1234567` |
| `FTP_PASSWORD` | Пароль FTP | `ваш_пароль` |
| `VITE_TELEGRAM_BOT_TOKEN` | Токен Telegram бота (если используете) | `1234567890:ABCdefGHI...` |
| `VITE_TELEGRAM_CHAT_ID` | Chat ID для Telegram (если используете) | `123456789` |

### Шаг 3: Проверить путь к папке сайта

В файле [deploy.yml](.github/workflows/deploy.yml) проверьте параметр `server-dir`:

```yaml
server-dir: ./public_html/
```

Обычно на Timeweb.Cloud это `./public_html/`, но может быть:
- `./www/`
- `./httpdocs/`
- или другая папка (смотрите в панели управления)

### Шаг 4: Запустить деплой

Теперь при каждом push в ветку `main` или `master` автоматически запустится деплой!

Или запустите вручную:
1. Перейдите во вкладку **Actions** в GitHub
2. Выберите workflow **Deploy to Timeweb.Cloud**
3. Нажмите **Run workflow**

---

## Вариант 2: Деплой через SSH (быстрее, но сложнее)

### Преимущества SSH:
- Быстрее загрузка файлов
- Более безопасный протокол
- Можно выполнять команды на сервере

### Шаг 1: Получить SSH данные

1. В панели Timeweb.Cloud откройте **FTP и SSH**
2. Включите SSH доступ (если выключен)
3. Запишите:
   - **SSH хост** (например: `ssh.example.ru`)
   - **SSH порт** (обычно `22`)
   - **Имя пользователя** (например: `u1234567`)

### Шаг 2: Создать SSH ключ

На вашем компьютере выполните:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/timeweb_deploy
```

Это создаст два файла:
- `~/.ssh/timeweb_deploy` - приватный ключ (НЕ делитесь им!)
- `~/.ssh/timeweb_deploy.pub` - публичный ключ

### Шаг 3: Добавить публичный ключ на сервер

1. Скопируйте содержимое `~/.ssh/timeweb_deploy.pub`
2. В панели Timeweb.Cloud перейдите в **FTP и SSH** → **SSH ключи**
3. Добавьте новый SSH ключ, вставив скопированный публичный ключ

Или через командную строку:

```bash
ssh-copy-id -i ~/.ssh/timeweb_deploy.pub u1234567@ssh.example.ru
```

### Шаг 4: Добавить секреты в GitHub

Добавьте следующие секреты в **Settings** → **Secrets and variables** → **Actions**:

| Имя секрета | Описание | Как получить |
|-------------|----------|--------------|
| `SSH_PRIVATE_KEY` | Приватный SSH ключ | Содержимое файла `~/.ssh/timeweb_deploy` |
| `SSH_HOST` | SSH хост | `ssh.example.ru` (из панели Timeweb) |
| `SSH_USERNAME` | SSH пользователь | `u1234567` (из панели Timeweb) |
| `VITE_TELEGRAM_BOT_TOKEN` | Токен Telegram бота | Из @BotFather |
| `VITE_TELEGRAM_CHAT_ID` | Chat ID для Telegram | Из @userinfobot |

### Шаг 5: Активировать SSH деплой

Переименуйте файлы:

```bash
cd /Users/ilyakarakulov/Dev/FT_ALL/FitnessTogether-Web
mv .github/workflows/deploy.yml .github/workflows/deploy-ftp.yml.disabled
mv .github/workflows/deploy-ssh.yml.example .github/workflows/deploy-ssh.yml
```

---

## Проверка деплоя

После успешного деплоя:

1. Откройте ваш сайт в браузере
2. Проверьте что все роуты работают (навигация по SPA)
3. Откройте консоль браузера (F12) и проверьте на наличие ошибок

### Частые проблемы:

**404 ошибка при переходе по роутам:**
- Проверьте что файл `.htaccess` загружен на сервер
- Убедитесь что mod_rewrite включен в панели Timeweb.Cloud

**Белый экран:**
- Проверьте консоль браузера на ошибки
- Убедитесь что `base: '/'` в `vite.config.js` (не `/FitnessTogether-Web/`)

**Переменные окружения не работают:**
- Убедитесь что добавили секреты `VITE_TELEGRAM_BOT_TOKEN` и `VITE_TELEGRAM_CHAT_ID` в GitHub

---

## Локальное тестирование перед деплоем

Перед пушем в репозиторий протестируйте билд локально:

```bash
# Собрать проект
npm run build

# Запустить локальный сервер для проверки
npm run preview
```

Откройте http://localhost:4173 и проверьте что всё работает.

---

## Откат к предыдущей версии

Если что-то пошло не так:

1. Откройте **Actions** в GitHub
2. Найдите последний успешный деплой
3. Нажмите **Re-run jobs**

---

## Мониторинг деплоя

После каждого push в GitHub:

1. Перейдите во вкладку **Actions**
2. Следите за прогрессом деплоя в реальном времени
3. Если есть ошибки, они будут показаны в логах

---

## Полезные ссылки

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action)
- [SSH-Deploy-Action](https://github.com/easingthemes/ssh-deploy)
- [Timeweb.Cloud Документация](https://timeweb.cloud/help)
