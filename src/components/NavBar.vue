<script setup lang="ts">
import DeviceTabletIcon from '~icons/heroicons-outline/device-tablet'
import CubeTransparent from '~icons/heroicons-outline/cube-transparent'
import ShieldCheckIcon from '~icons/heroicons-outline/shield-check'
import UserGroupIcon from '~icons/heroicons-outline/user-group'
import ChatIcon from '~icons/heroicons-outline/chat'
import ColorSwatchIcion from '~icons/heroicons-outline/color-swatch'

const { t } = useI18n()

const features = [
  {
    name: t('navbar.social-integration.heading'),
    description: t('navbar.social-integration.text'),
    href: '/',
    icon: UserGroupIcon,
  },
  {
    name: t('navbar.safety.heading'),
    description: t('navbar.social-integration.text'),
    href: '/',
    icon: ShieldCheckIcon,
  },
  {
    name: t('navbar.accessibility.heading'),
    description: t('navbar.accessibility.text'),
    href: '/',
    icon: ChatIcon,
  },
  {
    name: t('navbar.all-features.heading'),
    description: t('navbar.all-features.text'),
    href: '/',
    icon: ColorSwatchIcion,
  },
  {
    name: t('navbar.emilia-device.heading'),
    description: t('navbar.emilia-device.text'),
    href: '/device',
    icon: DeviceTabletIcon,
  },
  {
    name: t('navbar.emilia-app.heading'),
    description: t('navbar.emilia-app.text'),
    href: '/app',
    icon: CubeTransparent,
  },
]

const others = [
  {
    href: '/blog',
    name: t('navbar.blog.heading'),
  },
  {
    name: t('navbar.jobs.heading'),
    href: '/jobs',
  },
]

const resources = [
  {
    name: t('navbar.support.heading'),
    description: t('navbar.support.text'),
    href: '/support',
  },
  {
    name: t('navbar.guides.heading'),
    description: t('navbar.guides.text'),
    href: '/guides',
  },
  {
    name: t('navbar.team.heading'),
    description: t('navbar.team.text'),
    href: '/team',
  },
  {
    name: t('navbar.security.heading'),
    description: t('navbar.security.text'),
    href: '/security',
  },
]
</script>

<template>
  <Popover>
    <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <router-link to="/">
          <span class="sr-only">Emilia</span>
          <Logo />
        </router-link>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <PopoverButton
          class="rounded-md p-2 inline-flex items-center justify-center opacity-55 dark:text-white hover:opacity-65 hover:bg-gray-100 focus:outline-none"
        >
          <span class="sr-only">Open menu</span>
          <!-- <MenuIcon class="h-6 w-6" aria-hidden="true" /> -->
          <heroicons-outline:menu class="h-6 w-6" />
        </PopoverButton>
      </div>
      <PopoverGroup as="nav" class="hidden md:flex space-x-10">
        <Popover v-slot="{ open }" class="relative">
          <PopoverButton
            :class="[open ? '' : 'opacity-65', 'group rounded-md inline-flex items-center  font-medium hover: focus:outline-none']"
          >
            <span>{{ t('navbar.features.heading') }}</span>
            <heroicons-outline:chevron-down
              :class="[open ? 'opacity-75' : 'opacity-55', 'ml-2 h-5 w-5 group-hover:opacity-65']"
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
            >
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                  <a
                    v-for="(feature, index) in features"
                    :key="index"
                    :href="feature.href"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md  sm:h-12 sm:w-12"
                      :class="['bg-primary-100 text-primary-800', 'bg-secondary-100 text-secondary-800', 'bg-tertiary-100 text-tertiary-800'][index % 3]"
                    >
                      <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div class="ml-4">
                      <p class="font-medium">{{ feature.name }}</p>
                      <p class="mt-1 text-sm opacity-65">{{ feature.description }}</p>
                    </div>
                  </a>
                </div>
                <div class="p-5 bg-gray-50 sm:p-8">
                  <a href="#" class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                    <div class="flex items-center">
                      <div class="font-medium">{{ t('navbar.pre-order.heading') }}</div>
                      <span
                        class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-primary-100 text-primary-800"
                      >{{ t('navbar.pre-order.badge') }}</span>
                    </div>
                    <p class="mt-1 text-sm opacity-65">{{ t('navbar.pre-order.text') }}</p>
                  </a>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <router-link
          v-for="other in others"
          :key="other.name"
          :to="other.href"
          class="font-medium opacity-65 hover:"
        >
          {{ other.name }}
        </router-link>

        <Popover v-slot="{ open }" class="relative">
          <PopoverButton
            :class="[open ? '' : 'opacity-65', 'group rounded inline-flex items-center  font-medium hover: focus:outline-none']"
          >
            <span>{{ t('navbar.more') }}</span>
            <heroicons-outline:chevron-down
              :class="[open ? 'opacity-75' : 'opacity-55', 'ml-2 h-5 w-5 group-hover:opacity-65']"
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
            >
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <router-link
                    v-for="resource in resources"
                    :key="resource.name"
                    :to="resource.href"
                    class="-m-3 p-3 block rounded-md hover:bg-gray-50"
                  >
                    <p class="font-medium">
                      {{ resource.name }}
                    </p>
                    <p class="mt-1 text-sm opacity-65">
                      {{ resource.description }}
                    </p>
                  </router-link>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>
      <div class="hidden md:flex items-center gap-8 justify-end md:flex-1 lg:w-0">
        <router-link
          to="/login"
          class="whitespace-nowrap font-medium opacity-65 hover:"
        >
          {{ t('navbar.sign-in') }}
        </router-link>
        <router-link
          to="/signup"
          class="whitespace-nowrap px-4 py-2 rounded-md font-medium text-primary-700 bg-primary-50 hover:text-primary-900"
        >
          {{ t('navbar.sign-up') }}
        </router-link>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <Logo />
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center opacity-55 hover:opacity-65 hover:bg-gray-100 focus:outline"
                >
                  <span class="sr-only">Close menu</span>
                  <heroicons-solid:x class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid grid-cols-1 gap-7">
                <a
                  v-for="feature in features"
                  :key="feature.name"
                  :href="feature.href"
                  class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div
                    class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white"
                  >
                    <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div class="ml-4 font-medium">{{ feature.name }}</div>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <router-link
                v-for="other in others"
                :key="other.name"
                :to="other.href"
                class="font-medium hover:"
              >
                {{ other.name }}
              </router-link>
              <a
                v-for="resource in resources"
                :key="resource.name"
                :href="resource.href"
                class="font-medium hover:opacity-85"
              >{{ resource.name }}</a>
            </div>
            <div class="mt-6">
              <router-link
                to="/signup"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-primary-500 hover:bg-primary-600"
              >
                {{ t('navbar.sign-up') }}
              </router-link>
              <p class="mt-6 text-center font-medium opacity-65">
                {{ t('navbar.already-signed-up') }}
                {{ ' ' }}
                <router-link
                  to="/login"
                  class="text-primary-600 hover:text-primary-500"
                >
                  {{ t('navbar.sign-in') }}
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
