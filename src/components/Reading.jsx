import React from 'react';
import { Link } from 'react-router-dom';
import allBooks from '../content/books/books.json';

// books.json is in review order, so sort before slicing — otherwise "recent"
// is just whichever five happen to sit at the top of the file.
const books = [...allBooks]
  .filter((book) => !book.removed)
  .sort((a, b) => b.borrowed.localeCompare(a.borrowed));

const Reading = () => {
  const recent = books.slice(0, 5);

  return (
    <section id="reading">
      <h2 className="text-2xl font-bold mb-4 tracking-tight text-gray-800">Reading</h2>
      <ul className="text-base space-y-2 tracking-wide text-gray-700">
        {recent.map((book) => (
          <li key={book.url}>
            <a
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              ► {book.title}
            </a>
            <span className="text-sm text-gray-500"> — {book.author}</span>
          </li>
        ))}
        <li>
          <Link to="/reading" className="hover:text-blue-600 transition-colors">
            ► All {books.length} books
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Reading;
