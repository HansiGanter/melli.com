<script setup lang="ts">
// todo: add system option
import { isDark } from '~/composables'

import LogoFacebook from '~icons/carbon/logo-facebook'
import LogoInstagram from '~icons/carbon/logo-instagram'
import LogoTwitter from '~icons/carbon/logo-twitter'
import LogoGithub from '~icons/carbon/logo-github'

const { t, locale } = useI18n()

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: t('footer.company.blog'), href: '/blog' },
    { name: t('footer.company.jobs'), href: '/jobs' },
    { name: t('footer.company.team'), href: '/team' },
    { name: t('footer.company.about'), href: '/about' },
  ],
  resources: [
    { name: t('footer.resources.contact'), href: '/contact' },
    { name: t('footer.resources.terms'), href: '/terms' },
    { name: t('footer.resources.privacy'), href: '/privacy' },
    { name: t('footer.resources.claim'), href: '/claim' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/deine.emilia',
      icon: LogoFacebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.facebook.com/deine.emilia',
      icon: LogoInstagram,
    },
    {
      name: 'Twitter',
      href: 'https://www.facebook.com/deine.emilia',
      icon: LogoTwitter,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/mit-emilia',
      icon: LogoGithub,
    },
  ],
}
</script>

<template>
  <footer aria-labelledby="footer-heading" class="py-12 lg:py-16">
    <h2 id="footer-heading" class="sr-only">
      Footer
    </h2>
    <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
      <div class="grid grid-cols-2 gap-8 xl:col-span-4">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3
              class="text-sm font-semibold text-gray-400 dark:text-white dark:text-white tracking-wider uppercase"
            >
              Solutions
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="item in navigation.solutions" :key="item.name">
                <a
                  :href="item.href"
                  class="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                >{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3
              class="text-sm font-semibold text-gray-400 dark:text-white tracking-wider uppercase"
            >
              Support
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="item in navigation.support" :key="item.name">
                <a
                  :href="item.href"
                  class="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                >{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3
              class="text-sm font-semibold text-gray-400 dark:text-white tracking-wider uppercase"
            >
              {{ t('footer.company.heading') }}
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="item in navigation.company" :key="item.name">
                <a
                  :href="item.href"
                  class="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                >{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3
              class="text-sm font-semibold text-gray-400 dark:text-white tracking-wider uppercase"
            >
              {{ t('footer.resources.heading') }}
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li v-for="item in navigation.resources" :key="item.name">
                <router-link
                  :to="item.href"
                  class="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-12 xl:mt-0">
        <h3
          class="text-sm font-semibold text-gray-400 dark:text-white tracking-wider uppercase"
        >
          {{ t('footer.settings.heading') }}
        </h3>
        <form class="mt-4 sm:max-w-xs">
          <fieldset class="w-full">
            <label for="language" class="sr-only">Language</label>
            <div class="relative">
              <select
                id="language"
                v-model="locale"
                name="language"
                class="appearance-none block w-full bg-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-800 dark:bg-gradient-to-r dark:gradient- dark:shadow-sm rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 sm:text-sm"
              >
                <option value="de">
                  Deutsch
                </option>
                <option value="en">
                  English
                </option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                <heroicons-outline:chevron-down
                  class="h-4 w-4 text-gray-400 dark:text-white"
                  aria-hidden="true"
                />
              </div>
            </div>
          </fieldset>
          <fieldset class="mt-4 w-full">
            <label for="theme" class="sr-only">Theme</label>
            <div class="relative">
              <select
                id="theme"
                v-model="isDark"
                name="theme"
                class="appearance-none block w-full bg-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-800 dark:bg-gradient-to-r dark:gradient- dark:shadow-sm rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 sm:text-sm"
              >
                <option :value="false">
                  Light
                </option>
                <option :value="true">
                  Dark
                </option>
                <!-- todo: implement system option -->
                <!-- <option>System</option> -->
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                <heroicons-outline:chevron-down
                  class="h-4 w-4 text-gray-400 dark:text-white"
                  aria-hidden="true"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    <div
      class="border-t border-gray-200 pt-8 lg:flex lg:gap-4 lg:items-center lg:justify-between xl:mt-0"
    >
      <div>
        <h3
          class="text-sm font-semibold text-gray-400 dark:text-white tracking-wider uppercase"
        >
          {{ t('newsletter.heading') }}
        </h3>
        <p class="mt-2 text-gray-500 dark:text-white">
          {{ t('newsletter.text') }}
        </p>
        <p class="mt-2 text-sm text-gray-400 dark:text-white">
          {{ t('newsletter.condition') }}
        </p>
      </div>
      <form class="mt-4 sm:flex sm:max-w-md lg:mt-0">
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          type="email"
          name="email-address"
          autocomplete="email"
          required
          class="appearance-none min-w-0 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 py-2 px-4 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:placeholder-gray-400 sm:max-w-xs"
          :placeholder="t('newsletter.placeholder')"
        >
        <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            class="w-full bg-primary-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            {{ t('newsletter.subscribe') }}
          </button>
        </div>
      </form>
    </div>
    <div class="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
      <div class="flex space-x-6 md:order-2">
        <a
          v-for="item in navigation.social"
          :key="item.name"
          :href="item.href"
          class="text-gray-400 dark:text-white hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="flex gap-8 items-center">
        <p
          class="mt-8 text-gray-400 dark:text-white md:mt-0 md:order-1"
        >
          &copy; 2022 meetap, GmbH. All rights reserved.
        </p>
        <Logo />
      </div>
    </div>
  </footer>
</template>
