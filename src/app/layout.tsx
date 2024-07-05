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
      <body className="dark:bg-neutral-900">
        <main className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 lg:px-8 py-16">
          <Header />
          <hr className="mt-6 mb-6 dark:border-neutral-800"></hr>

          {children}
        </main>
      </body>
    </html>
  );
}
