import React from 'react';
import { Link } from 'gatsby';

export default function NotFound() {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        <h2 className="text-5xl md:text-6xl font-semibold mb-2">404</h2>
        <h3 className="text-xl md:text-2xl mb-4">Page not found.</h3>
        <Link to="/">
          <button className="w-40 py-2 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-600">
            Go back home -&gt;
          </button>
        </Link>
      </div>
    </div>
  );
}
