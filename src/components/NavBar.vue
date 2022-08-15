<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components'

const { t } = useI18n()

const showNav = ref(false)

const navigation = {
  about: [{
    name: t('navbar.about-menu.link-1'),
    href: '##',
  },
  {
    name: t('navbar.about-menu.link-2'),
    href: '##',
  },
  {
    name: t('navbar.about-menu.link-3'),
    href: '##',
  },
  {
    name: t('navbar.about-menu.link-4'),
    href: '##',
  }],
  more: [{
    name: t('navbar.more-menu.link-1'),
    href: '##',
  },
  {
    name: t('navbar.more-menu.link-2'),
    href: '##',
  },
  {
    name: t('navbar.more-menu.link-3'),
    href: '##',
  },
  {
    name: t('navbar.more-menu.link-4'),
    href: '##',
  }],
}

const openAbout = ref(false)
const openMore = ref(false)
</script>

<template>
  <nav class="bg-white py-4">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-x-8">
          <Logo />
          <div class="lg:flex hidden items-center gap-x-4">
            <OnClickOutside @trigger="openAbout = false">
              <div class="relative">
                <button
                  :class="openAbout ? '' : 'text-gray-900'"
                  class="focus:outline-none focus:bg-gray-100 py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium flex gap-2 items-center"
                  @click="openAbout = !openAbout"
                >
                  {{ t('navbar.about') }}
                  <div :class="openAbout ? '' : 'transform rotate-180'" class="i-carbon:chevron-up h-6 w-6 text-gray-300 transition duration-150 ease-in-out" aria-hidden="true" />
                </button>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <div
                    v-if="openAbout"
                    class="absolute -left-4 z-10 mt-3 w-screen px-4 lg:max-w-sm"
                  >
                    <div
                      class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                    >
                      <div class="relative grid bg-white py-2 lg:grid-cols-1 divide-y divide-primary-200">
                        <a
                          v-for="item in navigation.about"
                          :key="item.name"
                          :href="item.href"
                          class="px-4 py-4 flex items-center p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <span class="text-sm font-medium text-gray-900">
                            {{ item.name }}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </OnClickOutside>
            <router-link to="/blog" class="py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium">
              {{ t('navbar.blog.heading') }}
            </router-link>
            <OnClickOutside @trigger="openMore = false">
              <div class="relative">
                <button
                  :class="openMore ? '' : 'text-gray-900'"
                  class="focus:outline-none focus:bg-gray-100 py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium flex gap-2 items-center"
                  @click="openMore = !openMore"
                >
                  <span>{{ t('navbar.more') }}</span>
                  <div :class="openMore ? '' : 'transform rotate-180'" class="i-carbon:chevron-up h-6 w-6 text-gray-300 transition duration-150 ease-in-out" aria-hidden="true" />
                </button>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <div
                    v-if="openMore"
                    class="absolute -left-4 z-10 mt-3 w-screen px-4 lg:max-w-sm"
                  >
                    <div
                      class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                    >
                      <div class="relative grid bg-white py-2 lg:grid-cols-1 divide-y divide-primary-200">
                        <a
                          v-for="item in navigation.more"
                          :key="item.name"
                          :href="item.href"
                          class="px-4 py-4 flex items-center p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <span class="text-sm font-medium text-gray-900">
                            {{ item.name }}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </OnClickOutside>
          </div>
        </div>
        <div class="lg:flex hidden items-center gap-4">
          <div class="i-carbon:user stroke-2 w-6 h-6" />
          <div class="i-carbon:shopping-cart stroke-2 w-6 h-6" />
          <router-link to="/shop" class="py-4 px-7 rounded-lg bg-primary-500 text-white text-base font-medium">
            Buy Now
          </router-link>
        </div>
        <button type="button" class="lg:hidden block p-2" @click="showNav = !showNav">
          <div v-if="showNav" class="i-heroicons-outline:x stroke-2 w-6 h-6 bg-gray-700" />
          <div v-else class="i-heroicons-outline:menu stroke-2 w-6 h-6 bg-gray-700" />
        </button>
      </div>
    </div>
    <transition
      enter-active-class="transition-all duration-1000 ease-in-out"
      enter-from-class="transform translate-y-5 opacity-0"
      leave-active-class="transition-all duration-500 ease-[cubic-bezier(1, 0.5, 0.8, 1)]"
      leave-to-class="transform -translate-y-5 opacity-0"
    >
      <div v-if="showNav" class="container mx-auto px-4 lg:px-0 lg:hidden" :class="showNav ? 'grid' : 'hidden'">
        <div class="grid gap-2 py-6">
          <OnClickOutside @trigger="openAbout = false">
            <div class="relative">
              <button
                :class="openAbout ? '' : 'text-gray-900'"
                class="focus:outline-none focus:bg-gray-100 flex items-center justify-between w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-600"
                @click="openAbout = !openAbout"
              >
                <span>{{ t('navbar.about') }}</span>
                <div :class="openAbout ? '' : 'transform rotate-180'" class="i-carbon:chevron-up h-5 w-5 text-gray-300 transition duration-150 ease-in-out" aria-hidden="true" />
              </button>

              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0"
              >
                <div
                  v-if="openAbout"
                  class="z-10 mt-3 w-full md:ml-auto"
                >
                  <div
                    class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                  >
                    <div class="relative grid bg-white py-2 lg:grid-cols-2 divide-y divide-primary-200">
                      <a
                        v-for="item in navigation.about"
                        :key="item.name"
                        :href="item.href"
                        class="px-4 py-4 flex items-center p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span class="text-sm font-medium text-gray-900">
                          {{ item.name }}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </OnClickOutside>
          <a href="#" class="focus:outline-none focus:bg-gray-100 flex items-center justify-between w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-600">{{ t('navbar.blog.heading') }}</a>
          <OnClickOutside @trigger="openMore = false">
            <div class="relative">
              <button
                :class="openMore ? '' : 'text-gray-900'"
                class="focus:outline-none focus:bg-gray-100 flex items-center justify-between w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-600"
                @click="openMore = !openMore"
              >
                <span>{{ t('navbar.more') }}</span>
                <div :class="openMore ? '' : 'transform rotate-180'" class="i-carbon:chevron-up h-5 w-5 text-gray-300 transition duration-150 ease-in-out" aria-hidden="true" />
              </button>

              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0"
              >
                <div
                  v-if="openMore"
                  class="z-10 mt-3 w-full md:mr-auto"
                >
                  <div
                    class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                  >
                    <div class="relative grid bg-white py-2 lg:grid-cols-2 divide-y divide-primary-200">
                      <a
                        v-for="item in navigation.more"
                        :key="item.name"
                        :href="item.href"
                        class="px-4 py-4 flex items-center p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span class="text-sm font-medium text-gray-900">
                          {{ item.name }}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </OnClickOutside>
        </div>
        <div class="grid gap-3 py-6 px-4">
          <a class="flex items-center justify-center gap-2 py-2.5 rounded-lg text-primary-500 text-base font-medium">
            <span>Account</span>
            <div class="i-carbon:user stroke-2 w-5 h-5" />
          </a>
          <a class="flex items-center justify-center gap-2 py-2.5 rounded-lg text-primary-500 text-center text-base font-medium">
            <span>Cart</span>
            <div class="i-carbon:shopping-cart stroke-2 w-5 h-5" />
          </a>
          <a class="py-2.5 rounded-lg bg-primary-500 text-center text-white text-base font-medium">Buy Now</a>
        </div>
      </div>
    </transition>
  </nav>
</template>
