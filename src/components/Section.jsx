/**
 * A titled block. The heading is a small letterspaced cap sitting above a
 * hairline, so sections separate by rhythm rather than by boxes.
 */
const Section = ({ id, title, children, delay = 0 }) => (
  <section id={id} className="rise" style={{ animationDelay: `${delay}ms` }}>
    <h2 className="label">{title}</h2>
    <hr className="rule mb-6 mt-2.5" />
    {children}
  </section>
);

export default Section;
