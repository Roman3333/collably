'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title, Button } from '@/shared/ui';
import 'swiper/css';
import styles from './styles.module.scss';
import Link from 'next/link';

const items = [
  '/img/test-1.jpg',
  '/img/test-1.jpg',
  '/img/test-1.jpg',
  '/img/test-1.jpg',
  '/img/test-1.jpg',
  '/img/test-1.jpg',
  '/img/test-1.jpg',
  '/img/test-1.jpg',
  '/img/test-1.jpg',
  '/img/test-1.jpg',
  '/img/test-1.jpg',
  '/img/test-1.jpg',
];

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <Swiper
          spaceBetween={12}
          slidesPerView="auto"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className={styles.swiper}
        >
          {items.map((item, index) => {
            const offset = Math.max(0, Math.min(index - activeIndex, 5));

            return (
              <SwiperSlide
                key={index}
                className={styles.slide}
                style={{ '--index': offset } as React.CSSProperties}
              >
                <Image
                  src={item}
                  width={250}
                  height={180}
                  alt="Image"
                  className={styles.img}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Title type="h1" className={styles.title}>
          <div className={styles.top}>
            <span className={styles.blue}>Influence</span> <span>‑маркетинг,</span>
          </div>
          <span className={styles.titleBottom}>
            который <span className={styles.blue}>действительно работает</span>
          </span>
        </Title>

        <div className={styles.bottom}>
          <p className={styles.text}>
            Подбираем блогеров по вашей аудитории, следим за качеством размещений,
            анализируем результаты и помогаем расти
          </p>

          <div className={styles.btns}>
            <Link href="#form" className={styles.link}>
              <Button className={styles.btn} fontSize="m">
                Оставить заявку
              </Button>
            </Link>

            <Link href="#cases" className={styles.link}>
              <Button className={styles.btn} fontSize="m" variant="outline">
                Посмотреть кейсы
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
