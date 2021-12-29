# Emilia WebApp

Install dependencies:

```
pnpm install
```

Run development server:

```
pnpm dev
```

Run tests:

```
pnpm test
```

Build bundled app:

```
pnpm build
```
## Used Technologies

Based on [Vitesse template](https://github.com/antfu/vitesse)

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

### Plugins

- [🧭 Vue Router](https://github.com/vuejs/vue-router)
  - [🗂 `vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [📑 `vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- 🍍 [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [🎨 Windi CSS](https://github.com/windicss/windicss) (On-demand [TailwindCSS](https://tailwindcss.com/)) - lighter and faster, with a bunch of additional features!
  - [`vite-plugin-windicss`](https://github.com/antfu/vite-plugin-windicss) - Windi CSS Integration
  - [Windi CSS Typography](https://windicss.org/plugins/official/typography.html)
- [🧩 VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
  - [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively
- [🌍 Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n) - Vite plugin for Vue I18n
- [📥 `unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [📦 `unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [😃 `unplugin-icons`](https://github.com/antfu/unplugin-icons) - use icons from any icon sets from [🔍 Icônes](https://icones.netlify.app/) as Vue components
- [📱 `vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [🗒 `vite-plugin-md`](https://github.com/antfu/vite-plugin-md) - Markdown as components / components in Markdown
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) for syntax highlighting
  - [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) - customizable Prism.js theme using CSS variables

### Coding Style

- 🔥 Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [📋 ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

### Dev tools

- 🦾 [TypeScript](https://www.typescriptlang.org/)
- [⚙️ Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite
- [Cypress](https://cypress.io/) - E2E testing
- [📦 pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [🖨 `vite-ssg`](https://github.com/antfu/vite-ssg) - Server-side generation
  - [🦔 critters](https://github.com/GoogleChromeLabs/critters) - Critical CSS
- [☁️ Netlify](https://www.netlify.com/) - zero-config deployment

### VS Code Extensions

  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
  - [Windi CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - IDE support for Windi CSS
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
