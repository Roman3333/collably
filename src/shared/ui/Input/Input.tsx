'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';
import { InputProps } from './types';
import styles from './Input.module.scss';

type TInput = HTMLInputElement;

export const Input = forwardRef<TInput, InputProps>((props, ref) => {
  const { className, wrapperClassName, name, value, type, readOnly, message, ...rest } =
    props;

  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      <input
        ref={ref}
        className={clsx(styles.input, className)}
        name={name}
        value={value}
        type={type}
        inputMode={type === 'number' ? 'numeric' : undefined}
        readOnly={readOnly}
        {...rest}
      />

      {message && <p className={styles.error}>{message}</p>}
    </div>
  );
});

Input.displayName = 'Input';
