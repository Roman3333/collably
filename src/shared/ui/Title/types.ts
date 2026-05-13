type THeading = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export interface TitleProps extends THeading {
  /**
   * Контент title.
   */
  children: React.ReactNode;
  /**
   * Тип title, по умолчанию h2.
   */
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Цвет title, по умолчанию primary(черный).
   */
  variant?: 'primary' | 'secondary';
  /**
   * Font-weight title, по умолчанию semibold(600).
   */
  weight?: 'medium' | 'semibold';
  /**
   * Флаг, включает италик.
   */
  isItalic?: boolean;
  /**
   * Кастомный класс для title.
   */
  className?: string;
}
