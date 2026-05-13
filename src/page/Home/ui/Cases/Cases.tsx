'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import clsx from 'clsx';
import { Title } from '@/shared/ui';
import Arrow from '@/svg/chevron-right.svg';
import Rating from '@/svg/rating.svg';
import styles from './styles.module.scss';
import './styles.scss';

const items = [
  {
    title: 'Сеть магазинов цветов',
    text: 'Рост заказов на 8 марта',
    img: '/img/case-1.webp',
  },
  {
    title: 'Сеть автосервисов',
    text: 'Бренд-запросы и охваты по регионам',
    img: '/img/case-2.webp',
  },
  {
    title: 'Streetwear‑бренд одежды',
    text: 'Прирост подписчиков + трафик',
    img: '/img/case-3.webp',
  },
  {
    title: 'Сеть магазинов цветов',
    text: 'Рост заказов на 8 марта',
    img: '/img/case-1.webp',
  },
  {
    title: 'Сеть автосервисов',
    text: 'Бренд-запросы и охваты по регионам',
    img: '/img/case-2.webp',
  },
  {
    title: 'Streetwear‑бренд одежды',
    text: 'Прирост подписчиков + трафик',
    img: '/img/case-3.webp',
  },
];

export const Cases = () => {
  return (
    <section id="cases" className={clsx(styles.section, 'section')}>
      <div className="container">
        <div className={styles.top}>
          <Title className={styles.title}>Кейсы</Title>

          <div className={styles.btns}>
            <button className="swiper-button-prev">
              <Arrow className={styles.arrow} width={24} height={24} />
            </button>
            <button className="swiper-button-next">
              <Arrow className={styles.arrow} width={24} height={24} />
            </button>
          </div>
        </div>

        <Swiper
          className={styles.swiper}
          modules={[Navigation]}
          autoHeight
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1080: { slidesPerView: 3, spaceBetween: 16 },
          }}
        >
          {items.map(({ title, text, img }, index) => (
            <SwiperSlide key={index}>
              <div className={styles.item}>
                <Image
                  src={img}
                  width={410}
                  height={220}
                  unoptimized
                  alt={title}
                  className={styles.img}
                />

                <div className={styles.content}>
                  <div className={styles.client}>Клиент:</div>
                  <Title className={styles.itemTitle} type="h4" weight="medium">
                    {title}
                  </Title>
                  <div className={styles.line} />
                  <Rating className={styles.rating} width={50} height={50} />
                  <p className={styles.text}>{text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className={styles.bottom}>
          Мы не раскрываем данные наших клиентов по договору конфиденциальности
        </p>
      </div>
    </section>
  );
};
