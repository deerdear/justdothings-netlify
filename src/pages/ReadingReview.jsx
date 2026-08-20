import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { THEMES, themeLabel } from '../content/books/themes';

// Pull the "#3" out of "Slough House #3" so a series reads in order.
const seriesIndex = (series) => {
  const match = /#(\d+)/.exec(series || '');
  return match ? Number(match[1]) : 0;
};

/**
 * Order the queue theme -> author -> series order. Authors with more books in a
 * theme come first, so runs like the eleven Mick Herrons stay together and get
 * reviewed while they're fresh in mind.
 */
const buildQueue = (books) => {
  const themeOrder = new Map(THEMES.map(([key], i) => [key, i]));
  const authorCount = new Map();
  for (const book of books) {
    const key = `${book.theme}|${book.author}`;
    authorCount.set(key, (authorCount.get(key) || 0) + 1);
  }

  return [...books].sort((a, b) => {
    const ta = themeOrder.get(a.theme) ?? 99;
    const tb = themeOrder.get(b.theme) ?? 99;
    if (ta !== tb) return ta - tb;

    const ca = authorCount.get(`${a.theme}|${a.author}`);
    const cb = authorCount.get(`${b.theme}|${b.author}`);
    if (ca !== cb) return cb - ca;
    if (a.author !== b.author) return a.author.localeCompare(b.author);

    const sa = (a.series || '').replace(/#\d+/, '');
    const sb = (b.series || '').replace(/#\d+/, '');
    if (sa !== sb) return sa.localeCompare(sb);

    const ia = seriesIndex(a.series);
    const ib = seriesIndex(b.series);
    if (ia !== ib) return ia - ib;

    return a.borrowed.localeCompare(b.borrowed);
  });
};

const ReadingReview = () => {
  const [books, setBooks] = useState(null);
  const [index, setIndex] = useState(0);
  const [note, setNote] = useState('');
  const [saveState, setSaveState] = useState('idle');
  const [error, setError] = useState(null);
  const textarea = useRef(null);

  useEffect(() => {
    fetch('/__books')
      .then((r) => r.json())
      .then((data) => {
        const queue = buildQueue(data);
        setBooks(queue);
        // Resume where we left off.
        const next = queue.findIndex((b) => !b.reviewed);
        setIndex(next === -1 ? 0 : next);
      })
      .catch((e) => setError(`Could not load books: ${e.message}`));
  }, []);

  const current = books?.[index];

  useEffect(() => {
    setNote(current?.note || '');
    textarea.current?.focus();
  }, [current?.url]);

  const persist = useCallback((next) => {
    setSaveState('saving');
    return fetch('/__books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(next.map(({ ...book }) => book)),
    })
      .then((r) => r.json())
      .then((res) => {
        if (!res.ok) throw new Error(res.error);
        setSaveState('saved');
      })
      .catch((e) => {
        setSaveState('error');
        setError(`Save failed: ${e.message}`);
      });
  }, []);

  const apply = useCallback(
    (patch, { advance = true } = {}) => {
      const next = books.map((book, i) =>
        i === index ? { ...book, ...patch, reviewed: true } : book
      );
      setBooks(next);
      persist(next);
      if (advance) setIndex((i) => Math.min(i + 1, books.length - 1));
    },
    [books, index, persist]
  );

  const done = useMemo(
    () => (books || []).filter((b) => b.reviewed).length,
    [books]
  );

  const onKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      apply({ note: note.trim() });
    }
  };

  if (error && !books) {
    return (
      <div className="min-h-screen px-6 py-16 sm:px-10 sm:py-24">
        <p className="text-red-700">{error}</p>
        <p className="text-gray-600 mt-2">
          This tool only runs under <code>npm run dev</code>.
        </p>
      </div>
    );
  }

  if (!books) {
    return <div className="min-h-screen px-6 py-16 sm:px-10 sm:py-24">Loading…</div>;
  }

  const groupStart =
    index === 0 ||
    books[index - 1].theme !== current.theme ||
    books[index - 1].author !== current.author;

  return (
    <div className="min-h-screen px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <Link to="/reading" className="text-blue-600 hover:text-blue-800">
            ← Reading
          </Link>
          <span className="text-sm text-gray-500">
            {done} / {books.length} reviewed
            {saveState === 'saving' && ' · saving…'}
            {saveState === 'saved' && ' · saved'}
            {saveState === 'error' && ' · SAVE FAILED'}
          </span>
        </div>

        <div className="h-1 bg-gray-200 rounded mb-8">
          <div
            className="h-1 bg-blue-600 rounded transition-all"
            style={{ width: `${(done / books.length) * 100}%` }}
          />
        </div>

        {error && (
          <p className="text-red-700 text-sm mb-4">{error}</p>
        )}

        <div className="text-xs uppercase tracking-widest text-gray-400 mb-4">
          {themeLabel(current.theme)}
          {groupStart && ' · new author'}
        </div>

        <h1 className="text-2xl font-bold mb-1">{current.title}</h1>
        <div className="text-gray-600 mb-1">{current.author}</div>
        {current.series && (
          <div className="text-sm text-blue-700 mb-1">{current.series}</div>
        )}
        <div className="text-sm text-gray-500 mb-4">
          {current.format} · borrowed {current.borrowed} ·{' '}
          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Libby
          </a>
        </div>

        {current.blurb && (
          <blockquote
            className={`border-l-4 pl-4 mb-6 text-sm ${
              current.uncertain
                ? 'border-amber-400 text-amber-800 bg-amber-50/60 py-2'
                : 'border-gray-300 text-gray-600'
            }`}
          >
            {current.uncertain && (
              <strong className="block mb-1">
                ⚠ I'm not confident about this one — don't trust it:
              </strong>
            )}
            {current.blurb}
          </blockquote>
        )}

        {current.removed && (
          <p className="text-sm text-red-700 mb-3">
            Marked as not read — will be dropped from the site.
          </p>
        )}
        {current.unfinished && (
          <p className="text-sm text-amber-700 mb-3">Marked unfinished.</p>
        )}

        <textarea
          ref={textarea}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onKeyDown={onKeyDown}
          rows={5}
          placeholder="What do you want to say about it? (⌘↵ to save and move on)"
          className="w-full border border-gray-300 rounded p-3 text-sm mb-4 font-mono"
        />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => apply({ note: note.trim() })}
            className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
          >
            Save & next →
          </button>
          <button
            onClick={() =>
              apply({ note: note.trim(), unfinished: !current.unfinished })
            }
            className="px-4 py-2 border border-amber-500 text-amber-700 rounded text-sm hover:bg-amber-50"
          >
            {current.unfinished ? 'Not unfinished' : 'Unfinished'}
          </button>
          <button
            onClick={() => apply({ removed: true })}
            className="px-4 py-2 border border-red-400 text-red-700 rounded text-sm hover:bg-red-50"
          >
            Didn't read — remove
          </button>
          <button
            onClick={() => setIndex((i) => Math.min(i + 1, books.length - 1))}
            className="px-4 py-2 border border-gray-300 text-gray-600 rounded text-sm hover:bg-gray-50"
          >
            Skip
          </button>
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            className="px-4 py-2 border border-gray-300 text-gray-600 rounded text-sm hover:bg-gray-50"
          >
            ← Back
          </button>
        </div>

        <details className="mt-8">
          <summary className="text-sm text-gray-500 cursor-pointer">
            Jump to a book
          </summary>
          <ol className="mt-3 text-sm space-y-1 max-h-96 overflow-y-auto">
            {books.map((book, i) => (
              <li key={book.url}>
                <button
                  onClick={() => setIndex(i)}
                  className={`text-left hover:text-blue-600 ${
                    i === index ? 'font-bold' : ''
                  } ${book.removed ? 'line-through text-gray-400' : ''} ${
                    book.reviewed && !book.removed ? 'text-gray-400' : ''
                  }`}
                >
                  {book.reviewed ? '✓' : '·'} {book.title}
                  <span className="text-gray-400"> — {book.author}</span>
                </button>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </div>
  );
};

export default ReadingReview;
