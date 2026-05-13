import { ReactNode } from 'react';

export interface ModalProps {
  /**
   * Контент модалки.
   */
  children: ReactNode;
  /**
   * Флаг открытия модалки.
   */
  isModalOpen: boolean;
  /**
   * Колбек на закрытие модалки.
   */
  handlelCloseModal?: () => void;
  /**
   * Текст title.
   */
  title?: string;
  /**
   * Кастомный класс для wrapper modal.
   */
  wrapperClassname?: string;
  /**
   * Кастомный класс для content modal.
   */
  contentClassname?: string;
  /**
   * Кастомный класс для title.
   */
  titleClassName?: string;
}
