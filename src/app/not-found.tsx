import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found'
};

export default function NotFound() {
  return (
    <main className="flex h-screen">
      <div className="m-auto text-center">
        <h1 className="text-5xl md:text-6xl font-semibold mb-2 dark:text-white">404</h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-700 dark:text-gray-300">Page not found.</p>
        <Link href="/">
          <button className="px-4 py-2 rounded-full font-semibold text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
            Go back home -&gt;
          </button>
        </Link>
      </div>
    </main>
  );
}
