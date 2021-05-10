import { Link } from 'gatsby';
import React from 'react';

function NotFound() {
  return (
    <div className="container mx-auto my-8 max-w-4xl">
      <div className="text-center">
        <h2 className="text-6xl text-semibold mb-2">404</h2>
        <h3 className="text-4xl mb-4">Page not found.</h3>
        <Link to="/">
          <button className="mt-4 w-40 py-2 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-600">
            Go back home -&gt;
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
