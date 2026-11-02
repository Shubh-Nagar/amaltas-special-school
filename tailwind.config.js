/** @type {import('tailwindcss').Config} */
// Palette is inspired by the Amaltas (golden shower) tree that gives the school its name:
// brand leaf green (#10803C), warm blossom golds, and soft cream neutrals.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        leaf: {
          // Brand green #10803C (leaf-700) — used for buttons, links and green panels.
          50: '#effbf3',
          100: '#d8f5e1',
          200: '#b2eac5',
          300: '#7dd8a0',
          400: '#45be75',
          500: '#20a155',
          600: '#148d45',
          700: '#10803c',
          800: '#0e6631',
          900: '#0c5129',
          950: '#052e16',
        },
        blossom: {
          50: '#fffaeb',
          100: '#fef1c7',
          200: '#fde28a',
          300: '#fbcd4d',
          400: '#f9b924',
          500: '#e99a0b',
          600: '#c97406',
          700: '#a15209',
          800: '#83400e',
          900: '#6c350f',
        },
        cream: {
          50: '#fffdf8',
          100: '#fdf8ec',
          200: '#f8efd9',
          300: '#f1e3c0',
        },
        ink: {
          DEFAULT: '#1d2a1e',
          soft: '#4a5a4b',
          muted: '#6f7d70',
        },
        coral: '#e8775a',
        sky: '#6aa9c9',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', '"Nunito Sans"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(12, 81, 41, 0.18)',
        lift: '0 24px 48px -18px rgba(12, 81, 41, 0.28)',
        glow: '0 12px 32px -8px rgba(233, 154, 11, 0.45)',
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.05'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        sway: 'sway 6s ease-in-out infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
