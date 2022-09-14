import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { theme } from '@unocss/preset-wind'

export default defineConfig({
  theme: {
    colors: {
      primary: {
        50: theme.colors.emerald[50],
        100: theme.colors.emerald[100],
        200: theme.colors.emerald[200],
        300: theme.colors.emerald[300],
        400: theme.colors.emerald[400],
        500: theme.colors.emerald[500],
        600: theme.colors.teal[600],
        700: theme.colors.teal[700],
        800: theme.colors.teal[800],
        900: theme.colors.teal[900],
      },
      secondary: theme.colors.lime,
      tertiary: theme.colors.yellow,
      danger: theme.colors.red,
      gray: theme.colors.gray,
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.0,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: {
          name: 'Inter',
          weights: ['400', '500', '600', '700'],
          italic: true,
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
