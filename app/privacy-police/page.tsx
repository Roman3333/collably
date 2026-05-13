import { Metadata } from 'next';
import { PrivacyPolice } from '@/page/PrivacyPolice';

const title = 'Политика конфиденциальности | Collably';
const description =
  'Политика конфиденциальности сайта Collably. Правила обработки персональных данных.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://collably.netlify.app/',
  },
};

const PrivacyPolicePage = () => {
  return <PrivacyPolice />;
};

export default PrivacyPolicePage;
