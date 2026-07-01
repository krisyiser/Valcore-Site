const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        valcore: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          border: '#E2E8F0',
          blue: '#2563EB',
          success: '#059669',
          warning: '#D97706',
          textHeading: '#0F172A',
          textBody: '#334155',
          textMono: '#64748B',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        display: ['var(--font-montserrat)', ...fontFamily.sans],
        mono: ['var(--font-ibm-plex-mono)', ...fontFamily.mono],
      },
      borderRadius: {
        'none': '0px',
        'sm': '2px',
        'md': '4px',
      },
      boxShadow: {
        'none': 'none',
      }
    },
  },
  plugins: [],
}
