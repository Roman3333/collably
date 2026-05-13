import Image from 'next/image';
import { Title } from '@/shared/ui';
import Check from '@/svg/check.svg';
import styles from './styles.module.scss';

const items = [
  'Рабочие креативы и нативность',
  'Мы — часть вашей команды, а не просто подрядчик',
  'Сопровождение на каждом этапе',
  'Рабочие креативы и нативность',
];

export const Why = () => {
  return (
    <section className="section">
      <div className="container">
        <Title className={styles.title}>Почему бренды выбирают Collably</Title>

        <div className={styles.wrapper}>
          <div className={styles.column}>
            {items.slice(0, 2).map((item, index) => (
              <div key={index} className={styles.item}>
                <Check className={styles.icon} width={62} height={62} />
                <p className={styles.text}>{item}</p>
              </div>
            ))}
          </div>

          <Image
            src="/img/why-bg-pc.webp"
            width={1036}
            height={663}
            alt="Bg-image"
            unoptimized
            className={styles.pcImg}
          />

          <Image
            src="/img/why-bg-mobile.webp"
            width={320}
            height={554}
            alt="Bg-image"
            unoptimized
            className={styles.pcMobile}
          />

          <div className={styles.column}>
            {items.slice(2).map((item, index) => (
              <div key={index} className={styles.item}>
                <Check className={styles.icon} width={62} height={62} />
                <p className={styles.text}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
