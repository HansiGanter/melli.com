import { DateTimeFormatOptions } from '.pnpm/@intlify+core-base@9.1.9/node_modules/@intlify/core-base'
import { createI18n } from 'vue-i18n'
import type { UserModule } from '~/types'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('../../locales/*.y(a)?ml'))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)

const longFormat: DateTimeFormatOptions = {
  weekday: "long",
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'de',
    messages,
    datetimeFormats: {
      'en': { long: longFormat },
      'de': { long: longFormat },
    }
  })

  app.use(i18n)
}
