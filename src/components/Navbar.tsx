import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      <h1 className="text-xl font-bold">
        <Link href="/">Arvind Kasiliya</Link>
      </h1>
      <ul className="text-md flex space-x-6 justify-end font-semibold">
        {/* <li>
          <Link href="/blog">Blog</Link>
        </li> */}
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}
