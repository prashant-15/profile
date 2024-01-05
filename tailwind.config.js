/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'bg-primary': 'var(--bg-primary)',
      'bg-inverse': 'var(--bg-inverse)',
      
      'text-primary': 'var(--text-primary)',
      'text-secondary': 'var(--text-secondary)',
      'text-inverse-primary': 'var(--text-inverse-primary)',
      'text-inverse-secondary': 'var(--text-inverse-secondary)'
    }
  },
  plugins: [],
}

