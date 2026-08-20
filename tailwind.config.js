/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ["'EB Garamond'", "Georgia", "Times New Roman", "serif"],
      },
      colors: {
        // Semantic palette for the letterpress design. Prefer these in new code.
        paper: {
          DEFAULT: "#fbf8f1",
          deep: "#f4efe3",
          edge: "#eae2d0",
        },
        ink: {
          DEFAULT: "#211e19",
          soft: "#4a443a",
          faint: "#7a7263",
          rule: "#d9d0be",
        },
        oxblood: {
          DEFAULT: "#7b2d26",
          deep: "#5e211c",
        },

        // Legacy aliases. The essays carry ~180 hand-written `text-gray-*` and
        // ~30 `text-blue-*` classes; rather than rewrite all of that markup,
        // the two scales are remapped onto the palette above so the old
        // utilities land on warm ink and oxblood instead of cool grey and blue.
        gray: {
          50: "#faf7f0",
          100: "#f2ece0",
          200: "#d9d0be",
          300: "#c4b9a2",
          400: "#9c9280",
          500: "#7a7263",
          600: "#5f584c",
          700: "#4a443a",
          800: "#312d26",
          900: "#211e19",
          950: "#141210",
        },
        blue: {
          50: "#faf1ef",
          100: "#f2ddd9",
          200: "#e3bdb6",
          300: "#cf9086",
          400: "#b05f53",
          500: "#933f35",
          600: "#7b2d26",
          700: "#5e211c",
          800: "#4a1a16",
          900: "#3a1512",
          950: "#230c0a",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
