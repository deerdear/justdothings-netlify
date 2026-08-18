import React from 'react';
import { Link } from 'react-router-dom';
import allBooks from '../content/books/books.json';
import { themeLabel } from '../content/books/themes';

// Titles marked "didn't actually read" during review stay in the file but
// never reach the page.
const books = [...allBooks]
  .filter((book) => !book.removed)
  // books.json is in review order, not date order, so sort here rather than
  // trusting the file to already be newest-first.
  .sort((a, b) => b.borrowed.localeCompare(a.borrowed));

const Book = ({ book }) => (
  <article className="border-b border-gray-200 pb-4 mb-4 last:border-0">
    <h3 className="text-base font-bold">
      <a
        href={book.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 hover:underline"
      >
        {book.title} →
      </a>
    </h3>
    <div className="text-sm text-gray-500">
      {book.author} · {book.format}
      {book.series && <span> · {book.series}</span>}
      <span> · {themeLabel(book.theme)}</span>
      {book.unfinished && (
        <span className="text-gray-400 italic"> · unfinished</span>
      )}
    </div>

    {book.blurb && (
      <p className="text-sm text-gray-600 mt-2 max-w-prose">{book.blurb}</p>
    )}

    {book.note && (
      <p className="text-sm text-gray-800 mt-2 max-w-prose border-l-2 border-gray-300 pl-3">
        {book.note}
      </p>
    )}
  </article>
);

const groupByYear = (entries) => {
  const years = new Map();
  for (const book of entries) {
    const year = book.borrowed.slice(0, 4);
    if (!years.has(year)) years.set(year, []);
    years.get(year).push(book);
  }
  return [...years.entries()].sort(([a], [b]) => b.localeCompare(a));
};

const Reading = () => {
  const years = groupByYear(books);

  return (
    <div className="min-h-screen font-mono relative p-8">
      <div className="max-w-3xl mx-auto bg-white/60 border border-gray-200 rounded-lg shadow-md p-8 backdrop-blur-md">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 block">
          ← Back to Home
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Reading</h1>
          <p className="text-gray-600">
            {books.length} books, newest first. Each gets a line on what it is;
            the indented note is what I thought.
          </p>
        </header>

        {years.map(([year, yearBooks]) => (
          <section key={year} className="mb-10 last:mb-0">
            <h2 className="text-2xl font-bold mb-4 tracking-tight text-gray-800">
              {year}{' '}
              <span className="text-base font-normal text-gray-500">
                ({yearBooks.length})
              </span>
            </h2>
            {yearBooks.map((book) => (
              <Book key={book.url} book={book} />
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Reading;
