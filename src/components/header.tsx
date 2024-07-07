import Link from 'next/link';

export default function Header() {
  return (
    <nav>
      <h1 className="text-3xl font-semibold mb-4 dark:text-white">Arvind Kasiliya</h1>

      <div className="mb-4 flex space-x-4 font-semibold text-sky-700 dark:text-sky-300">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
      </div>
    </nav>
  );
}
