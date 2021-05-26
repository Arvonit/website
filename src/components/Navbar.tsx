import React from 'react';
import { Link } from 'gatsby';

interface Props {
  title: string;
  currentPage?: string;
}

export default function Navbar({ title, currentPage = 'Home' }: Props) {
  function addSelectionCSS(desiredLocation: string, currentLocation: string): string {
    return currentLocation == desiredLocation ? 'font-semibold' : 'hover:text-blue-600';
  }

  return (
    <nav className="flex justify-between mb-12">
      <h3 className="text-3xl font-bold">{title}</h3>
      <ul className="flex space-x-4 justify-end text-lg font-normal">
        <Link to="/">
          <li className={addSelectionCSS('Home', currentPage)}>Home</li>
        </Link>
        <Link to="/blog/">
          <li className={addSelectionCSS('Blog', currentPage)}>Blog</li>
        </Link>
        <Link to="/about/">
          <li className={addSelectionCSS('About', currentPage)}>About</li>
        </Link>
      </ul>
    </nav>
  );
}
