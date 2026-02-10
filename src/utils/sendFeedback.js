const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '';
const FALLBACK_EMAIL = 'ilyakarakulov345@gmail.com';

const TYPE_LABELS = {
  question: 'Вопрос',
  problem: 'Проблема',
  suggestion: 'Предложение',
  other: 'Другое',
};

const formatTelegramMessage = (data) => {
  return [
    '<b>Новое сообщение с сайта FitnessTogether</b>',
    '',
    `<b>Тип:</b> ${TYPE_LABELS[data.type] || data.type}`,
    `<b>Имя:</b> ${data.name}`,
    `<b>Контакт:</b> ${data.contact}`,
    '',
    `<b>Сообщение:</b>`,
    data.message,
  ].join('\n');
};

const buildMailtoLink = (data) => {
  const subject = encodeURIComponent(
    `[FitnessTogether] ${TYPE_LABELS[data.type] || data.type}`
  );
  const body = encodeURIComponent(
    `Имя: ${data.name}\nКонтакт: ${data.contact}\nТип: ${TYPE_LABELS[data.type] || data.type}\n\n${data.message}`
  );
  return `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
};

export const sendFeedback = async (formData) => {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return {
      success: false,
      mailtoLink: buildMailtoLink(formData),
    };
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: formatTelegramMessage(formData),
          parse_mode: 'HTML',
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to send feedback via Telegram:', error);
    return {
      success: false,
      mailtoLink: buildMailtoLink(formData),
    };
  }
};
