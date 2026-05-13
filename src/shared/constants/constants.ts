export const TELEGRAM_DEFAULT_MESSAGE =
  'Здравствуйте! Я хочу получить информацию по маркетингу';
export const getTelegramLink = () => {
  return `https://t.me/afoninalexey?text=${encodeURIComponent(TELEGRAM_DEFAULT_MESSAGE)}`;
};
