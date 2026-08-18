// Shared by the public Reading page and the dev-only review tool, so the two
// can't drift apart on labels or ordering.
export const THEMES = [
  ['spy', 'Spy & Espionage'],
  ['thriller', 'Thrillers & Crime'],
  ['scifi', 'Science Fiction'],
  ['fantasy', 'Fantasy'],
  ['literary', 'Literary Fiction'],
  ['history', 'History'],
  ['geopolitics', 'Politics & Geopolitics'],
  ['business', 'Business & Tech'],
  ['ideas', 'Philosophy & Ideas'],
  ['science', 'Science & Nature'],
  ['memoir', 'Memoir & Biography'],
  ['craft', 'Self & Craft'],
];

export const themeLabel = (key) => THEMES.find(([k]) => k === key)?.[1] || key;
