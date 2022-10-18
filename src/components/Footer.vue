<script setup lang="ts">
import { fireContactEvent } from '~/google-tag-manager'
// todo: add system option

const { t } = useI18n()

const navigation = {
  resources: [
    { name: '030-555703440', href: 'tel:030555703440', icon: 'i-carbon:phone' },
    { name: 'info@melli.com', href: 'mailto:info@melli.com', icon: 'i-carbon:email' },
  ],
  support: [
    { name: t('footer.support.faq'), href: '/faq' },
    { name: t('footer.support.user-login'), href: 'https://app.melli.com/' },
  ],
  solutions: [
    { name: 'AGB', href: '/agb' },
    { name: t('footer.solutions.privacy'), href: '/datenschutz' },
    { name: t('footer.solutions.legal-notice'), href: '/impressum' },
  ],
  company: [
    { name: t('footer.company.jobs'), href: '/karriere' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/deine.melli',
      icon: 'i-carbon:logo-facebook h-5 w-5',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/mit-melli/',
      icon: 'i-carbon:logo-linkedin h-5 w-5',
    },
    {
      name: 'Github',
      href: 'https://github.com/melli-labs',
      icon: 'i-carbon:logo-github h-5 w-5',
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UC9kINIc7RSUKfMu8LXaWnTQ',
      icon: 'i-carbon:logo-youtube h-5 w-5',
    },
  ],
}
</script>

<template>
  <footer aria-labelledby="footer-heading" class="py-12 lg:py-16">
    <h2 id="footer-heading" class="sr-only">
      Footer
    </h2>
    <div class="pb-8 grid grid-cols-1 xl:grid-cols-5 gap-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-4">
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div>
            <h3
              class="text-sm font-semibold text-primary-400 dark:text-white dark:text-white tracking-wider uppercase"
            >
              Sie brauchen Hilfe?
            </h3>
            <ul role="list" class="mt-4 space-y-2 flex-wrap">
              <li class="text-lg font-semibold text-gray-500">
                Lassen Sie sich kostenlos beraten!
              </li>
              <li v-for="item in navigation.resources" :key="item.name">
                <a
                  :href="item.href"
                  class="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 flex gap-2 items-center"
                >
                  <div :class="item.icon" />
                  <span>{{ item.name }}</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3
              class="text-sm font-semibold text-primary-400 dark:text-white tracking-wider uppercase"
            >
              FAQ & Login
            </h3>
            <ul role="list" class="mt-4 space-y-2">
              <li v-for="item in navigation.support" :key="item.name">
                <a
                  :href="item.href"
                  class="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                >{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div>
            <h3
              class="text-sm font-semibold text-primary-400 dark:text-white tracking-wider uppercase"
            >
              Wichtige Links
            </h3>
            <ul role="list" class="mt-4 space-y-2">
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
              class="text-sm font-semibold text-primary-400 dark:text-white tracking-wider uppercase"
            >
              Karriere
            </h3>
            <ul role="list" class="mt-4 space-y-2">
              <li v-for="item in navigation.company" :key="item.name">
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
      <div class=" lg:mt-0">
        <h3
          class="text-sm font-semibold text-primary-400 dark:text-white tracking-wider uppercase"
        >
          Folge uns!
        </h3>
        <ul role="list" class="mt-4 space-y-2">
          <li v-for="item in navigation.social" :key="item.name" @click="fireContactEvent(item.name)">
            <a
              :href="item.href"
              target="_blank"
              class="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 flex gap-2 items-center"
            >
              <div :class="item.icon" />
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
      <Logo />

      <div class="flex gap-8 items-center">
        <p
          class="mt-8 text-gray-400 dark:text-white md:mt-0 md:order-1"
        >
          &copy; {{ new Date().getFullYear() }} meetap, GmbH. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
