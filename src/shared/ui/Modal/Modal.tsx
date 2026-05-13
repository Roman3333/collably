'use client';

import ReactModal from 'react-modal';
import clsx from 'clsx';
import { Title } from '../Title/Title';
import { ModalProps } from './types';
import Close from '@/svg/cross.svg';
import styles from './Modal.module.scss';
import './Modal.scss';

export const Modal = (props: ModalProps) => {
  const {
    children,
    isModalOpen,
    handlelCloseModal,
    title,
    titleClassName,
    contentClassname,
    wrapperClassname,
  } = props;

  return (
    <ReactModal
      isOpen={isModalOpen}
      shouldCloseOnEsc
      contentLabel={title}
      shouldCloseOnOverlayClick={true}
      onRequestClose={handlelCloseModal}
      ariaHideApp={false}
      className={clsx(styles.wrapper, wrapperClassname)}
    >
      <button className={styles.btn} onClick={handlelCloseModal}>
        <Close width={34} height={34} color="var(--white)" />
      </button>

      <div className={clsx(styles.content, contentClassname)}>
        {title && (
          <Title className={clsx(styles.title, titleClassName)} type="h3">
            {title}
          </Title>
        )}

        {children}
      </div>
    </ReactModal>
  );
};

Modal.displayName = 'Modal';
