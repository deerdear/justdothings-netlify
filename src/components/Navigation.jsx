const LINKS = [
  ['#about', 'About'],
  ['#writing', 'Writing'],
  ['#projects', 'Projects'],
  ['#reading', 'Reading'],
  ['#contact', 'Contact'],
];

const Navigation = () => (
  <nav className="rise mb-16" style={{ animationDelay: '80ms' }}>
    <hr className="rule" />
    <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 py-3.5">
      {LINKS.map(([href, label]) => (
        <li key={href}>
          <a href={href} className="label transition-colors hover:text-oxblood">
            {label}
          </a>
        </li>
      ))}
    </ul>
    <hr className="rule" />
  </nav>
);

export default Navigation;
