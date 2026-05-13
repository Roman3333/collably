'use client';

import { forwardRef, ChangeEvent } from 'react';
import clsx from 'clsx';
import { ICheckboxProps } from './types';
import styles from './Checkbox.module.scss';

type L = HTMLLabelElement;

export const Checkbox = forwardRef<L, ICheckboxProps>((props, ref) => {
  const {
    onCheckedChange = () => undefined,
    className,
    checked,
    message,
    text,
    ...rest
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onCheckedChange) onCheckedChange(e);
  };

  return (
    <label className={clsx(styles.label, className)} ref={ref}>
      <input
        className={clsx(styles.input, {
          [styles.error]: message,
        })}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        aria-label={text || 'Checkbox'}
        {...rest}
      />

      <p className={styles.text}>{text}</p>
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
