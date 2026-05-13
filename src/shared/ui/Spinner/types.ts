export interface SpinnerProps {
  /**
   * Кастомный класс для spinner.
   */
  className?: string;
  /**
   * Тема спиннера. По умолчанию primary(фиолетовая)
   */
  variant?: 'primary' | 'secondary';
  /**
   * Флаг, распологает spinner по центру родительского элемента, не забудь добвить родителю position: relative.
   */
  isCenter?: boolean;
  /**
   * Флаг, распологает spinner по экрана, учитывая высоту header и footer.
   */
  isPage?: boolean;
}
