import React from 'react';
import { Link } from 'gatsby';

function Navbar() {
  return (
    <nav className="flex justify-between mb-12">
      <h3 className="text-3xl font-bold">Arvind</h3>
      <ul className="flex space-x-4 justify-end text-lg font-normal">
        <Link to="/">
          <li className="hover:text-blue-600">Home</li>
        </Link>
        <Link to="/blog/">
          <li className="hover:text-blue-600">Blog</li>
        </Link>
        <Link to="/about/">
          <li className="hover:text-blue-600">About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
