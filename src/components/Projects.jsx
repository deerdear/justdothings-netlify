import Section from './Section';

const PROJECTS = [
  {
    href: 'https://copper.justdothings.xyz/',
    title: 'Copper',
    note: 'investment analyzer',
    stamp: '',
  },
  {
    href: 'https://deerdear.github.io/data-center-networking/',
    title: 'Scale-Up vs Scale-Out',
    note: 'the XPU networking hierarchy',
    stamp: '',
  },
  {
    href: 'https://jlb-2048.netlify.app/',
    title: '2048',
    note: 'the tile game',
    stamp: '',
  },
];

const Projects = () => (
  <Section id="projects" title="Projects" delay={260}>
    <ul>
      {PROJECTS.map((item) => (
        <li
          key={item.href}
          className="group flex items-baseline justify-between gap-4 py-[0.3rem]"
        >
          <span className="min-w-0">
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <span className="text-[1.1rem] text-ink transition-colors group-hover:text-oxblood">
                {item.title}
              </span>
              <span className="ml-2 text-[0.95rem] italic text-ink-faint">
                {item.note}
              </span>
              <span className="ml-1.5 text-[0.8rem] text-ink-faint">↗</span>
            </a>
          </span>
          <span className="shrink-0 text-[0.85rem] tabular-nums text-ink-faint">
            {item.stamp}
          </span>
        </li>
      ))}
    </ul>
  </Section>
);

export default Projects;
