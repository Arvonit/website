import { Metadata } from 'next';
import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'Arvind Kasiliya',
//   description: 'My homepage on the internet'
// };

export const metadata: Metadata = {
  title: 'Page not found'
};

// Doesn't work
export default function NotFound() {
  return (
    <main className="flex h-screen">
      <title>Page not found - Arvind Kasiliya</title>
      <div className="m-auto text-center">
        <h2 className="text-5xl md:text-6xl font-semibold mb-2">404</h2>
        <h3 className="text-xl md:text-2xl mb-4">Page not found.</h3>
        <Link href="/page">
          <button className="w-40 py-2 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-600">
            Go back home -&gt;
          </button>
        </Link>
      </div>
    </main>
  );
}
