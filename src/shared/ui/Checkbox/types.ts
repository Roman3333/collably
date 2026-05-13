import { ChangeEvent } from 'react';

type Input = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'checked' | 'disabled' | 'className'
>;

export interface ICheckboxProps extends Input {
  /**
   * Состояние checkbox.
   */
  checked: boolean;
  /**
   * Колбек на изменение.
   */
  onCheckedChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Сообщение ошибки.
   */
  message?: string;
  /**
   * Текст чекбокса.
   */
  text: string;
  /**
   * Кастомный класс для checkbox.
   */
  className?: string;
}
