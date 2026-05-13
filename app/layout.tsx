import type { Metadata } from 'next';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { CookieBanner } from '@/widgets/CookieBanner';
import { inter, interItalic } from '@/shared/assets/fonts/fonts';
import '@/app/styles/globals.scss';

const title = 'Collably';
const description = 'Influence‑маркетинг, который действительно работает';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Influence‑маркетинг', 'маркетинг'],
  openGraph: {
    title,
    description,
    url: 'https://collably.netlify.app/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${interItalic.variable}`}>
        <div id="__next">
          <Header />

          <main>{children}</main>

          <Footer />
        </div>

        <CookieBanner />
      </body>
    </html>
  );
}
