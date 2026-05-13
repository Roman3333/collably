import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  style: 'normal',
});

export const interItalic = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-italic',
  weight: ['400', '500', '600'],
  style: 'italic',
});
