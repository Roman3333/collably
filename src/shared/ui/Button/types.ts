import { ReactNode, MouseEvent, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  /**
   * Контент кнопки.
   */
  children: ReactNode;
  /**
   * Кастомный класс для button.
   */
  className?: string;
  /**
   * Состояние disabled.
   */
  isDisabled?: boolean;
  /**
   * Состояние загрузки в кнопке(показывается spinner).
   */
  isLoading?: boolean;
  /**
   * Колбек на клик по кнопке.
   */
  onClick?: (e: MouseEvent) => void;
  /**
   * Толщина шрифта, по умолчанию semibold(500).
   */
  weight?: 'medium' | 'semibold';
  /**
   * Размер шрифта, по умолчанию s(14px).
   */
  fontSize?: 's' | 'm';
  /**
   * Тема кнопки. По умолчанию primary(синяя)
   */
  variant?: 'primary' | 'secondary' | 'outline';
}
