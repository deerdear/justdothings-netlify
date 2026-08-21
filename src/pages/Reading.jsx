import { useState } from 'react';
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

// Anything read before 2019 — including books whose read date is lost, filed
// under a 1900 sentinel — lands in a single "Earlier" bucket rather than a
// long tail of thin year sections.
const groupByYear = (entries) => {
  const years = new Map();
  for (const book of entries) {
    const year = book.borrowed.slice(0, 4);
    const key = year < '2019' ? 'Earlier' : year;
    if (!years.has(key)) years.set(key, []);
    years.get(key).push(book);
  }
  return [...years.entries()].sort(([a], [b]) => {
    if (a === 'Earlier') return 1;
    if (b === 'Earlier') return -1;
    return b.localeCompare(a);
  });
};

// The twelve fine-grained themes stay on each book's detail line; the filter
// row works in broader strokes, plus the starred books as their own view.
const FILTERS = [
  { key: 'highlights', label: 'Highlights', test: (b) => b.highlight },
  { key: 'scifi', label: 'Sci-Fi', themes: ['scifi'] },
  { key: 'fantasy', label: 'Fantasy', themes: ['fantasy'] },
  { key: 'fiction', label: 'Fiction', themes: ['literary', 'spy', 'thriller'] },
  { key: 'biographies', label: 'Biographies', themes: ['memoir'] },
  {
    key: 'nonfiction',
    label: 'Non-Fiction',
    themes: ['history', 'geopolitics', 'business', 'ideas', 'science', 'craft'],
  },
];

const FilterRow = ({ active, onPick }) => (
  <nav className="flex flex-wrap gap-x-5 gap-y-2">
    {[{ key: null, label: 'All' }, ...FILTERS].map((f) => (
      <button
        key={f.key ?? 'all'}
        type="button"
        onClick={() => onPick(f.key)}
        className={`label transition-colors hover:text-oxblood ${
          active === f.key ? 'text-oxblood' : ''
        }`}
      >
        {f.label}
      </button>
    ))}
  </nav>
);

const Reading = () => {
  const [filterKey, setFilterKey] = useState(null);
  const filter = FILTERS.find((f) => f.key === filterKey);
  const shown = filter
    ? books.filter(filter.test || ((b) => filter.themes.includes(b.theme)))
    : books;
  const years = groupByYear(shown);

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
        <div className="mt-8">
          <FilterRow active={filterKey} onPick={setFilterKey} />
        </div>
        {filter && (
          <p className="mt-4 text-[0.95rem] italic text-ink-faint">
            {shown.length} in {filter.label}
          </p>
        )}
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
