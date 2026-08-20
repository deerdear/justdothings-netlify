import allEntries from '../content/digest/entries.json';
import Page from '../components/Page';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Digest entries can land days apart, so unlike the Writing index the day is
// part of the stamp.
const stamp = (date) => {
  const [year, month, day] = date.split('-');
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
};

const entries = [...allEntries].sort((a, b) => b.date.localeCompare(a.date));

const Entry = ({ entry }) => (
  <article className="py-5">
    <div className="flex items-baseline justify-between gap-4">
      <a
        href={entry.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group min-w-0"
      >
        <span className="text-[1.08rem] text-ink transition-colors group-hover:text-oxblood">
          {entry.title}
        </span>
        {entry.source && (
          <span className="ml-2 text-[0.95rem] italic text-ink-faint">
            {entry.source}
          </span>
        )}
        <span className="ml-1.5 text-[0.8rem] text-ink-faint">↗</span>
      </a>
      <span className="shrink-0 text-[0.85rem] tabular-nums text-ink-faint">
        {stamp(entry.date)}
      </span>
    </div>

    {entry.excerpt && (
      <blockquote className="mt-3 border-l-2 border-oxblood/25 pl-4 text-[1.02rem] italic leading-[1.6] text-ink-soft">
        {entry.excerpt}
      </blockquote>
    )}

    {entry.commentary && (
      <p className="mt-3 text-[1.02rem] leading-[1.65] text-ink-soft">
        {entry.commentary}
      </p>
    )}
  </article>
);

const Digest = () => (
  <Page>
    <header className="rise mb-14">
      <h1 className="text-[2.6rem] font-medium leading-tight tracking-[-0.015em] text-ink">
        Digest
      </h1>
      <hr className="rule mt-8 w-16" />
      <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">
        Things read around the web and worth passing on, with the occasional
        note.
      </p>
    </header>

    {entries.length === 0 ? (
      <p className="rise text-[1.02rem] italic text-ink-faint">
        Nothing logged yet.
      </p>
    ) : (
      <div className="rise divide-y divide-ink-rule/60">
        {entries.map((entry) => (
          <Entry key={entry.slug || entry.sourceUrl} entry={entry} />
        ))}
      </div>
    )}
  </Page>
);

export default Digest;
