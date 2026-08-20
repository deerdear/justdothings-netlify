import Section from './Section';

const Contact = () => (
  <Section id="contact" title="Contact" delay={380}>
    <dl className="space-y-1.5 text-[1.02rem] text-ink-soft">
      <div className="flex items-baseline gap-3">
        <dt className="w-20 shrink-0 text-[0.95rem] italic text-ink-faint">
          Email
        </dt>
        <dd>figure it out</dd>
      </div>
      <div className="flex items-baseline gap-3">
        <dt className="w-20 shrink-0 text-[0.95rem] italic text-ink-faint">
          LinkedIn
        </dt>
        <dd>
          <a
            href="https://www.linkedin.com/in/jonatan-h-bergquist/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            jonatan-h-bergquist
          </a>
        </dd>
      </div>
    </dl>
  </Section>
);

export default Contact;
