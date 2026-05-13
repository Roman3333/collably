'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { Title } from '@/shared/ui';
import Chevron from '@/svg/chevron-right.svg';
import styles from './styles.module.scss';

const items = [
  {
    id: 1,
    title: 'Сколько это стоит?',
    text: 'Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит?Сколько это стоит? Сколько это стоит?Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит?',
  },
  {
    id: 2,
    title: 'Какие платформы вы используете?',
    text: 'Да. Все действия выполняются постепенно и с естественными интервалами. Мы не используем массовые резкие накрутки, которые легко определяются алгоритмами площадок.',
  },
  {
    id: 3,
    title: 'Можно ли без договора?',
    text: 'Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит?Сколько это стоит? Сколько это стоит?Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит?',
  },
  {
    id: 4,
    title: 'Как быстро начинается кампания?',
    text: 'Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит?Сколько это стоит? Сколько это стоит?Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит?',
  },
  {
    id: 5,
    title: 'Вы помогаете с юридическим оформлением?',
    text: 'Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит?Сколько это стоит? Сколько это стоит?Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит? Сколько это стоит?',
  },
];

export const Faq = () => {
  const [activeAccardeon, setActiveAccardeon] = useState<number | null>(null);

  const handleChangeAccardeon = (id: number) => {
    setActiveAccardeon((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        <Title className={styles.title}>FAQ</Title>

        <div className={styles.accardeons}>
          {items.map(({ id, title, text }) => (
            <div
              key={id}
              className={clsx(styles.accardeon, {
                [styles.active]: id === activeAccardeon,
              })}
              onClick={() => handleChangeAccardeon(id)}
            >
              <div className={styles.left}>
                <Title className={styles.suptitle} type="h4" weight="medium">
                  {title}
                </Title>
                <p className={styles.text}>{text}</p>
              </div>

              <button className={styles.btn}>
                <Chevron
                  className={styles.arrow}
                  width={24}
                  height={24}
                  color="var(--black)"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
