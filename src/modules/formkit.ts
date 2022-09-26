import { defaultConfig, plugin } from '@formkit/vue'
import { de, en } from '@formkit/i18n'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(plugin, defaultConfig({
    // Define additional locales
    locales: { de, en },
    // Define the active locale
    locale: 'de',
  }))
}
