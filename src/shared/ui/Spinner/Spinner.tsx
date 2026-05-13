import clsx from 'clsx';
import { SpinnerProps } from './types';
import styles from './Spinner.module.scss';

export const Spinner = (props: SpinnerProps) => {
  const { className, variant = 'primary', isCenter, isPage } = props;

  return (
    <div
      className={clsx(styles.wrapper, className, {
        [styles.center]: isCenter,
        [styles.page]: isPage,
      })}
    >
      <span className={clsx(styles.spinner, styles[variant])} />
    </div>
  );
};
