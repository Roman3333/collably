/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { setLocalStore, getLocalStore } from '@/shared/utils';
import { Button } from '@/shared/ui';
import styles from './styles.module.scss';

export const CookieBanner = () => {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const consent = getLocalStore('cookie_consent');

    if (!consent) {
      setShowCookie(true);
    }
  }, []);

  const acceptCookies = () => {
    setLocalStore('cookie_consent', 'true');
    setShowCookie(false);
  };

  if (!showCookie) return null;

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Мы используем файлы cookie и сервис Яндекс.Метрика для анализа посещаемости сайта
        и улучшения его работы
      </p>

      <div className={styles.btns}>
        <Button className={styles.btn} onClick={acceptCookies}>
          Принять
        </Button>
        <Link href="/privacy-police/" className={styles.link}>
          Политика обработки персональных данных
        </Link>
      </div>
    </div>
  );
};
