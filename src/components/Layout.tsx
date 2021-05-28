import React from 'react';
import Navbar from './Navbar';
import useSiteMetadata from '../hooks/useSiteMetadata';
import Metadata from './Metadata';

interface Props {
  currentPage?: string;
  children: any;
}

export default function Layout({ children, currentPage = 'Home' }: Props) {
  const metadata = useSiteMetadata();

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-0 my-8">
      <Metadata
        title={metadata.title}
        author={metadata.author.name}
        description={metadata.description}
        currentPage={currentPage}
      />
      <Navbar title={metadata.title} currentPage={currentPage} />
      {children}
    </div>
  );
}
