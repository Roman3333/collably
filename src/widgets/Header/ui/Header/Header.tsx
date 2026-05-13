import Link from 'next/link';
import { Button } from '@/shared/ui';
import { getTelegramLink } from '@/shared/constants';
import { MoblleMenu } from '../MoblleMenu/MoblleMenu';
import Logo from '@/svg/logo.svg';
import Arrow from '@/svg/arrow-right.svg';
import Tg from '@/svg/tg.svg';
import styles from './styles.module.scss';

export const links = [
  { label: 'Услуги', href: '#services' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Как работаем', href: '#workflow' },
  { label: 'FAQ', href: '#faq' },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/" className={styles.link}>
            <Logo className={styles.logo} width={72} height={24} />
            <div className={styles.column}>
              <span>Influence</span>
              <span>Marketing</span>
            </div>
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.ul}>
              {links.map(({ label, href }) => (
                <li key={href} className={styles.li}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.btns}>
            <Link href="#form" className={styles.formLink}>
              <Button className={styles.btn}>
                <span>Оставить заявку</span>
                <Arrow wifth={20} height={20} />
              </Button>
            </Link>

            <a
              className={styles.linkTg}
              href={getTelegramLink()}
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
            >
              <Tg className={styles.tg} width={44} height={44} />
            </a>
          </div>

          <MoblleMenu />
        </div>
      </div>
    </header>
  );
};
