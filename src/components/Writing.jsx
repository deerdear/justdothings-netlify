import { Link } from 'react-router-dom';
import Section from './Section';

// Dates are the bylines on the essay pages themselves. Keep them in step if a
// piece is ever redated.
const ESSAYS = [
  { to: '/essays/observations-from-earth', title: 'Observations from Earth', date: '2026-03-19' },
  { to: '/essays/when-leo-fails', title: 'When LEO Fails', date: '2026-02-19' },
  { to: '/essays/two', title: 'European Fellowship', date: '2025-02-08' },
  { to: '/essays/radical-aero', title: 'Radical Aero', date: '2024-04-24' },
  { to: '/essays/one', title: 'Address to Machine Offensive 2.0', date: '2024-02-15' },
  // Still being added to, so it has no single date and sits above the archive.
  { href: 'https://svrgn.substack.com', title: 'SVRGN', note: 'Digests', date: null },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const stamp = (date) => {
  if (!date) return 'ongoing';
  const [year, month] = date.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
};

// Undated, still-running things first; everything else newest to oldest.
const ordered = [...ESSAYS].sort((a, b) => {
  if (!a.date || !b.date) return a.date ? 1 : -1;
  return b.date.localeCompare(a.date);
});

// Set as a table of contents: titles ranged left, dates in a column at the right.
const Entry = ({ item }) => {
  const label = (
    <>
      <span className="text-[1.1rem] text-ink transition-colors group-hover:text-oxblood">
        {item.title}
      </span>
      {item.note && (
        <span className="ml-2 text-[0.95rem] italic text-ink-faint">
          {item.note}
        </span>
      )}
      {item.href && (
        <span className="ml-1.5 text-[0.8rem] text-ink-faint">↗</span>
      )}
    </>
  );

  return (
    <li className="group flex items-baseline justify-between gap-4 py-[0.3rem]">
      <span className="min-w-0">
        {item.href ? (
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ) : (
          <Link to={item.to}>{label}</Link>
        )}
      </span>
      <span className="shrink-0 text-[0.85rem] tabular-nums text-ink-faint">
        {stamp(item.date)}
      </span>
    </li>
  );
};

const Writing = () => (
  <Section id="writing" title="Writing" delay={200}>
    <ul>
      {ordered.map((item) => (
        <Entry key={item.to || item.href} item={item} />
      ))}
    </ul>
  </Section>
);

export default Writing;
