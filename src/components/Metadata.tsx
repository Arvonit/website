import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
  author: string;
  description: string;
  currentPage: string;
}

export default function Metadata({ title, author, description, currentPage }: Props) {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={currentPage !== 'Home' ? currentPage : null}
      titleTemplate={`%s | ${title}`}
      defaultTitle={title}
      meta={[
        {
          name: 'author',
          content: author
        },
        {
          name: 'description',
          content: description
        }
      ]}
    />
  );
}
