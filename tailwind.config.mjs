import { defineConfig } from 'tailwindcss';

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#161617',
        surface: '#262628',
        accent: '#BA995B',
        accentMuted: '#A86E4F',
        text: '#F5F5F5',
        textMuted: '#A3A3A3',
        border: '#3F3F41',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 12px 30px rgba(22, 22, 23, 0.45)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
});
