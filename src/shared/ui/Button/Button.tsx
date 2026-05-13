'use client';

import { forwardRef, MouseEvent } from 'react';
import clsx from 'clsx';
import { Spinner } from '../Spinner/Spinner';
import { ButtonProps } from './types';
import styles from './Button.module.scss';

type TButton = HTMLButtonElement;

export const Button = forwardRef<TButton, ButtonProps>((props, ref) => {
  const {
    children,
    isLoading,
    isDisabled,
    onClick = () => undefined,
    className = '',
    variant = 'primary',
    weight = 'medium',
    fontSize = 's',
    type = 'button',
    ...rest
  } = props;

  const onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isDisabled || isLoading) return;

    onClick(e);
  };

  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[fontSize],
        styles[weight],
        className,
        {
          [styles.loading]: isLoading,
        },
      )}
      type={type}
      disabled={isDisabled}
      onClick={onButtonClick}
      ref={ref}
      {...rest}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
});

Button.displayName = 'Button';
