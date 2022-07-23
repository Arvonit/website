import Head from 'next/head';
import Link from 'next/link';

// TODO: Fix
export default function PageNotFound() {
  return (
    <div className="flex h-screen">
      <Head>
        <title>Page not found - Arvind Kasiliya</title>
        <meta name="description" content="My homepage on the internet" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="m-auto text-center">
        <h2 className="text-5xl md:text-6xl font-semibold mb-2">404</h2>
        <h3 className="text-xl md:text-2xl mb-4">Page not found.</h3>
        <Link href="/">
          <button className="w-40 py-2 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-600">
            Go back home -&gt;
          </button>
        </Link>
      </div>
    </div>
  );
}
