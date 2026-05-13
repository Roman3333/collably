import Link from 'next/link';
import Logo from '@/svg/logo.svg';
import Tg from '@/svg/tg-footer.svg';
import Mail from '@/svg/mail.svg';
import styles from './styles.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Link href="/privacy-police/" className={styles.police}>
              Политика конфиденциальности
            </Link>
            <span className={styles.year}>{`© Collably, ${currentYear}`}</span>
          </div>

          <div className={styles.center}>
            <ul className={styles.mobileUl}>
              <li className={styles.li}>
                <a href="mailto:test@mail.com" className={styles.socialLink}>
                  <Mail width={20} height={20} className={styles.mail} />
                </a>
              </li>
              <li className={styles.li}>
                <a href="mailto:test@mail.com" className={styles.socialLink}>
                  <Tg width={18} height={15} className={styles.tg} />
                </a>
              </li>
            </ul>

            <Link className={styles.link} href="/">
              <Logo className={styles.logo} width={129} height={44} />
            </Link>
          </div>

          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="mailto:test@mail.com" className={styles.socialLink}>
                <Mail width={20} height={20} />
              </a>
            </li>
            <li className={styles.li}>
              <a href="mailto:test@mail.com" className={styles.socialLink}>
                <Tg width={18} height={15} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
