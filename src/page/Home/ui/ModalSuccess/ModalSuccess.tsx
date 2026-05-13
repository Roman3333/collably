import Image from 'next/image';
import { Modal } from '@/shared/ui';
import { ModalSuccessProps } from './types';
import Download from '@/svg/download.svg';
import styles from './styles.module.scss';

export const ModalSuccess = (props: ModalSuccessProps) => {
  const { isModalOpen, setIsModalOpen } = props;

  return (
    <Modal
      wrapperClassname={styles.modal}
      title="Данные успешно отправлены!"
      isModalOpen={isModalOpen}
      handlelCloseModal={() => setIsModalOpen(false)}
    >
      <p className={styles.text}>
        Мы внимательно ознакомимся с предоставленной информацией и свяжемся с вами в
        ближайшее время, чтобы уточнить все детали
      </p>

      <Image
        src={'/img/modal-pc.webp'}
        width={590}
        height={282}
        alt="Success"
        className={styles.imgPc}
      />

      <Image
        src={'/img/modal-mobile.webp'}
        width={268}
        height={208}
        alt="Success"
        className={styles.imgMobile}
      />
    </Modal>
  );
};
