/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'bg-primary': 'var(--bg-primary)',
      
      'text-primary': 'var(--text-primary)',
      'text-secondary': 'var(--text-secondary)',
    }
  },
  plugins: [],
}

