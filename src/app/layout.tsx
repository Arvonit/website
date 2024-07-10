import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.arvind.me'),
  title: {
    template: '%s | Arvind Kasiliya',
    default: 'Arvind Kasiliya'
  },
  description: 'My homepage on the internet',
  authors: {
    name: 'Arvind Kasiliya'
  },
  alternates: {
    canonical: '/'
  }
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
