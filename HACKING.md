# Hacking

## Blog

Post under `pages/blog/example` are not build in production.

## Components

Components in this dir will be auto-registered and on-demand, powered by [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components).

### Icons

You can use icons from almost any icon sets by the power of [Iconify](https://iconify.design/).

It will only bundle the icons you use. Check out [`unplugin-icons`](https://github.com/antfu/unplugin-icons) for more details.

## File-based Routing

Routes will be auto-generated for Vue files in this dir with the same file structure.
Check out [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) for more details.

### Path Aliasing

`~/` is aliased to `./src/` folder.

For example, instead of having

```ts
import { isDark } from '../../../../composables'
```

now, you can use

```ts
import { isDark } from '~/composables'
```

## Layouts

Vue components in this dir are used as layouts.

By default, `default.vue` will be used unless an alternative is specified in the route meta.

With [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) and [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts), you can specify the layout in the page's SFCs like this:

```html
<route lang="yaml">
meta:
  layout: home
</route>
```
## i18n

This directory is to serve your locale translation files. YAML under this folder would be loaded automatically and register with their filenames as locale code.

Check out [`vue-i18n`](https://github.com/intlify/vue-i18n-next) for more details.

If you are using VS Code, [`i18n Ally`](https://github.com/lokalise/i18n-ally) is recommended to make the i18n experience better.

## Modules

A custom user module system. Place a `.ts` file with the following template, it will be installed automatically.

```ts
import { type UserModule } from '~/types'

export const install: UserModule = ({ app, router, isClient }) => {
  // do something
}
```
