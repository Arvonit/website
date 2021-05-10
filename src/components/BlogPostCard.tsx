import { Link } from 'gatsby';
import React from 'react';

function BlogPostCard() {
  return (
    <div>
      <Link to="/post/">
        <h3 className="text-2xl no-underline font-semibold mb-1 hover:text-blue-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h3>
      </Link>
      <p className="text-gray-500 mb-2">May 9, 2021</p>
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit sit laborum eum
        suscipit sapiente, magni cupiditate rem repellat, praesentium voluptatem sunt dolore ab unde
        aperiam. Quibusdam nobis minima recusandae?
      </p>
      {/* <Link to="/about">
        <button className="w-32 py-2 rounded-xl font-semibold text-white bg-blue-600">
          Read More
        </button>
      </Link> */}
    </div>
  );
}

export default BlogPostCard;
