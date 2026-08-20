import { Link } from 'react-router-dom';

/**
 * The sheet every page is printed on. Content sits directly on the paper —
 * no card, no shadow, no rounded corners — with the measure held narrow.
 */
const Page = ({ children, back = true, width = 'prose' }) => {
  const measure = width === 'wide' ? 'max-w-3xl' : 'max-w-[40rem]';

  return (
    <div className="min-h-screen px-6 py-16 sm:px-10 sm:py-24">
      <div className={`mx-auto ${measure}`}>
        {back && (
          <Link
            to="/"
            className="label mb-12 inline-block transition-colors hover:text-oxblood"
          >
            ← Back
          </Link>
        )}
        {children}
      </div>
    </div>
  );
};

export default Page;
