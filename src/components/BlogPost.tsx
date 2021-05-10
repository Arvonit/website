import React from 'react';

function BlogPost() {
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </h1>
      <p className="text-gray-600 mb-4">May 9, 2021</p>
      <article className="prose max-w-none">
        <p>
          A deep-dive on everything I've learned in the past year building style guides, design
          systems, component libraries, and their best practices.
        </p>
        I just love <strong>bold text</strong>. Italicized text is the <em>cat's meow</em>. This
        text is{' '}
        <strong>
          <em>really important</em>
        </strong>
        .
        <ol>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ol>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>
            Third item
            <ul>
              <li>Indented item</li>
              <li>Indented item</li>
            </ul>
          </li>
          <li>Fourth item</li>
        </ul>
        <a href="google.com">Hier ist die linke für heute.</a>
        <code>Here we go!</code>
      </article>
    </div>
  );
}

export default BlogPost;
