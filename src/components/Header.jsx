const Header = () => (
  <header className="rise mb-14">
    <h1 className="text-[2.75rem] font-medium leading-[1.08] tracking-[-0.015em] text-ink sm:text-[3.4rem]">
      Jonatan
      <br />
      Luther-Bergquist
    </h1>

    <p className="mt-5 font-serif text-[1.35rem] italic leading-snug text-ink-soft">
      You can just do things.
    </p>

    <hr className="rule mt-10 w-16" />

    <p className="mt-6 text-[1.02rem] leading-relaxed text-ink-soft">
      Investing at{' '}
      <a
        href="https://inflection.xyz"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Inflection
      </a>
      . Engineering physics. Building the{' '}
      <a
        href="https://eurodefense.tech"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        European Defense Tech Hub
      </a>
      .
    </p>
  </header>
);

export default Header;
