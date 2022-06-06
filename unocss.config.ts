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
      primary: theme.colors.emerald,
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
