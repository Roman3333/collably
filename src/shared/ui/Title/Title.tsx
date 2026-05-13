import { JSX } from 'react';
import clsx from 'clsx';
import { TitleProps } from './types';
import styles from './Title.module.scss';

export const Title = (props: TitleProps) => {
  const {
    children,
    type = 'h2',
    variant = 'primary',
    weight = 'semibold',
    isItalic,
    className,
    ...rest
  } = props;
  const Tag: keyof JSX.IntrinsicElements = type;

  return (
    <Tag
      className={clsx(
        styles.title,
        styles[variant],
        styles[weight],
        isItalic && styles.italic,
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};

Title.displayName = 'Title';
