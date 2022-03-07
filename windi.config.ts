import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import forms from 'windicss/plugin/forms'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  extract: {
    include: [
      'index.html',
      'pages/**/*.{md,vue}',
      'src/**/*.{vue,ts,css}',
    ],
  },
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [
    forms,
    typography(),
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.emerald,
        secondary: colors.lime,
        tertiary: colors.yellow,
        danger: colors.red,
        gray: colors.stone,
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.emerald[400],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
})
