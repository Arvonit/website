import React from 'react';
import { Link } from 'gatsby';

interface Props {
  title: string;
  currentPage?: string;
}

export default function Navbar({ title, currentPage = 'Home' }: Props) {
  function addSelectionCSS(desiredLocation: string, currentLocation: string): string {
    if (currentLocation === 'Home' || currentLocation === 'Blog' || currentLocation === 'About') {
      return currentLocation === desiredLocation ? 'font-semibold' : 'hover:text-blue-600';
    } else {
      return desiredLocation === 'Blog' ? 'font-semibold' : 'hover:text-blue-600';
    }
  }

  return (
    <nav className="flex justify-between mb-12 items-center">
      <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
      <ul className="flex space-x-4 justify-end text-md md:text-lg">
        <li className={addSelectionCSS('Home', currentPage)}>
          <Link to="/">Home</Link>
        </li>
        <li className={addSelectionCSS('Blog', currentPage)}>
          <Link to="/blog/">Blog</Link>
        </li>
        <li className={addSelectionCSS('About', currentPage)}>
          <Link to="/about/">About</Link>
        </li>
      </ul>
    </nav>
  );
}
