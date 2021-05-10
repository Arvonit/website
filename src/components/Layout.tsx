import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="container mx-auto my-8 max-w-4xl">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
