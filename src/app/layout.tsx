import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Header from '../components/header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: '%s - Arvind Kasiliya',
    default: 'Arvind Kasiliya'
  },
  description: 'My homepage on the internet'
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={inter.className}>
      <body className="dark:bg-neutral-900">{children}</body>
    </html>
  );
}
