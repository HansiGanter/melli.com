import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'

import type { RouterScrollBehavior } from 'vue-router'
import { isNavigationFailure } from 'vue-router'
import App from './App.vue'

import type { UserModule } from './types'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
    }
  }
  if (to.path === from.path)
    return {}
  return savedPosition || { top: 0 }
}

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior, base: import.meta.env.BASE_URL },
  (ctx) => {
    ctx.router.afterEach((to, from, failure) => {
      if (isNavigationFailure(failure))
        console.log('failed navigation', failure)

      // keep search query params for tracking of UTM parameters
      if (Object.entries(from.query).length > 0) {
        to.query = from.query
        const mergedParams = { ...to.query, ...from.query }
        window.history.replaceState(to.path, '', `?${(new URLSearchParams(mergedParams)).toString()}`)
      }
    })
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)
