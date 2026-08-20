import allBooks from '../content/books/books.json';
import { themeLabel } from '../content/books/themes';
import Page from '../components/Page';

// Titles marked "didn't actually read" during review stay in the file but
// never reach the page.
const books = [...allBooks]
  .filter((book) => !book.removed)
  // books.json is in review order, not date order, so sort here rather than
  // trusting the file to already be newest-first.
  .sort((a, b) => b.borrowed.localeCompare(a.borrowed));

// Not every book has a Libby URL, so identity is title + author.
const bookKey = (book) => `${book.title}|${book.author}`;

/**
 * Collapsed, the list reads as an index of titles. Opening one reveals the
 * detail. Native <details> rather than React state, so keyboard and find-in-
 * page behaviour come for free — and the title is the toggle, which means the
 * Libby link moves into the body so each control does one thing.
 */
const Book = ({ book }) => (
  <details className="group">
    <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 py-[0.45rem] text-[1.08rem] leading-snug text-ink transition-colors hover:text-oxblood [&::-webkit-details-marker]:hidden">
      <span className="min-w-0">
        {book.title}
        {book.highlight && (
          <span className="ml-1 select-none text-oxblood" title="Especially good">
            *
          </span>
        )}
        <span className="ml-2 text-[0.95rem] italic text-ink-faint">
          {book.author}
        </span>
      </span>
      <span className="shrink-0 select-none text-[0.85rem] text-oxblood/45">
        <span className="group-open:hidden">+</span>
        <span className="hidden group-open:inline">−</span>
      </span>
    </summary>

    <div className="pb-6 pt-1.5">
      {/* Author is already on the collapsed row, so it isn't repeated here.
          Books read outside Libby have no format or link, so the line is
          assembled from whatever is actually present. */}
      <p className="text-[0.96rem] text-ink-faint">
        {[book.format, book.series, themeLabel(book.theme)]
          .filter(Boolean)
          .join(' · ')}
        {book.unfinished && <span className="italic"> · unfinished</span>}
      </p>

      {book.blurb && (
        <p className="mt-3 text-[1.02rem] leading-[1.65] text-ink-soft">
          {book.blurb}
        </p>
      )}

      {/* My own take, set off by a red rule the way a marginal note would be. */}
      {book.note && (
        <p className="mt-3 border-l-2 border-oxblood/25 pl-4 text-[1.02rem] italic leading-[1.6] text-ink-soft">
          {book.note}
        </p>
      )}

      {book.url && (
        <a
          href={book.url}
          target="_blank"
          rel="noopener noreferrer"
          className="label mt-4 inline-block transition-colors hover:text-oxblood"
        >
          Libby ↗
        </a>
      )}
    </div>
  </details>
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
    <Page>
      <header className="rise mb-14">
        <h1 className="text-[2.6rem] font-medium leading-tight tracking-[-0.015em] text-ink">
          Reading
        </h1>
        <hr className="rule mt-8 w-16" />
        <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">
          {books.length} books, newest first. Open one for what it is and what
          I thought. A red <span className="text-oxblood">*</span> marks the
          especially good ones.
        </p>
      </header>

      {years.map(([year, yearBooks], i) => (
        <section
          key={year}
          className="rise mb-14 last:mb-0"
          style={{ animationDelay: `${Math.min(i * 70 + 120, 400)}ms` }}
        >
          <div className="flex items-baseline justify-between">
            <h2 className="label">{year}</h2>
            <span className="text-[0.9rem] tabular-nums text-ink-faint">
              {yearBooks.length}
            </span>
          </div>
          <hr className="rule mt-2.5" />

          <div className="divide-y divide-ink-rule/60">
            {yearBooks.map((book) => (
              <Book key={bookKey(book)} book={book} />
            ))}
          </div>
        </section>
      ))}
    </Page>
  );
};

export default Reading;
