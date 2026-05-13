import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  /**
   * Кастомный класс для input.
   */
  className?: string;
  /**
   * Кастомный класс для wrapper.
   */
  wrapperClassName?: string;
  /**
   * Сообщение ошибки.
   */
  message?: any;
}
