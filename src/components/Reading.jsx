import { Link } from 'react-router-dom';
import allBooks from '../content/books/books.json';
import Section from './Section';

// books.json is in review order, so sort before slicing — otherwise "recent"
// is just whichever five happen to sit at the top of the file.
const books = [...allBooks]
  .filter((book) => !book.removed)
  .sort((a, b) => b.borrowed.localeCompare(a.borrowed));

const Entry = ({ book }) => {
  const label = (
    <>
      <span className="text-[1.1rem] text-ink transition-colors group-hover:text-oxblood">
        {book.title}
      </span>
      <span className="ml-2 text-[0.95rem] italic text-ink-faint">
        {book.author}
      </span>
    </>
  );

  if (!book.url) return label;

  return (
    <a href={book.url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
};

const Reading = () => {
  const recent = books.slice(0, 5);

  return (
    <Section id="reading" title="Reading" delay={320}>
      <ul className="space-y-[0.3rem]">
        {recent.map((book) => (
          <li key={`${book.title}|${book.author}`} className="group">
            {/* Books read outside Libby have no link, so they render as text. */}
            <Entry book={book} />
          </li>
        ))}
      </ul>

      <Link
        to="/reading"
        className="label mt-5 inline-block transition-colors hover:text-oxblood"
      >
        All {books.length} books →
      </Link>
    </Section>
  );
};

export default Reading;
