import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-blue-900': 'rgb(36, 41, 47)',

        'dark-translucent': 'rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}
export default config
