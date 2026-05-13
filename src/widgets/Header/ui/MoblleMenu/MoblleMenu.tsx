'use client';

import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { getTelegramLink } from '@/shared/constants/constants';
import { links } from '../Header/Header';
import Burger from '@/svg/burger.svg';
import Cross from '@/svg/cross.svg';
import Arrow from '@/svg/arrow-right.svg';
import Tg from '@/svg/tg.svg';
import styles from './styles.module.scss';
import { Button } from '@/shared/ui';

export const MoblleMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <button
        className={styles.btn}
        onClick={() => setIsOpenMenu(true)}
        aria-label="Открыть мобильное меню"
      >
        <Burger className={styles.burger} width={27} height={18} aria-hidden="true" />
      </button>

      <div
        className={clsx(styles.wrapper, {
          [styles.active]: isOpenMenu,
        })}
      >
        <nav>
          <ul className={styles.links}>
            {links.map(({ href, label }) => {
              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={styles.link}
                    onClick={() => setIsOpenMenu(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.btns}>
          <Link
            href="#form"
            className={styles.formLink}
            onClick={() => setIsOpenMenu(false)}
          >
            <Button className={styles.btnForm}>
              <span>Оставить заявку</span>
              <Arrow wifth={20} height={20} />
            </Button>
          </Link>

          <a
            className={styles.linkTg}
            href={getTelegramLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tg className={styles.tg} width={40} height={40} />
          </a>
        </div>

        <button
          className={styles.cross}
          onClick={() => setIsOpenMenu(false)}
          aria-label="Закрыть поиск"
        >
          <Cross width={24} height={24} color="var(--text-gray)" aria-hidden="true" />
        </button>
      </div>
    </>
  );
};
