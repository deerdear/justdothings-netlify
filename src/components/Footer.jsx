const Footer = () => (
  <footer className="rise mt-20" style={{ animationDelay: '440ms' }}>
    <hr className="rule" />
    <div className="flex items-baseline justify-between pt-4">
      <p className="label">Jlb · MMXXVI</p>
      {/* A fleuron to close the page, the way a printed chapter ends. */}
      <span className="text-[1.1rem] leading-none text-oxblood/40">❧</span>
    </div>
  </footer>
);

export default Footer;
