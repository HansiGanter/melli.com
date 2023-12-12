<script setup lang="ts">
import { fireGoToAppEvent, fireGoToBlogEvent, fireGoToInfoPackageEvent, fireLoginEvent, fireShopEvent } from '~/google-tag-manager';
const { t } = useI18n();

const showNav = ref(false);
const router = useRouter();
</script>

<template>
  <nav class="bg-white py-4">
    <div class="flex items-center justify-between gap-x-8">
      <div class="flex items-center gap-x-8">
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <div class="hidden lg:flex items-center gap-x-4">
          <RouterLink to="/" class="py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium">
            {{ t('navbar.about') }}
          </RouterLink>
          <RouterLink to="/blog" class="py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium"
            @click="fireGoToBlogEvent">
            {{ t('navbar.blog.heading') }}
          </RouterLink>
          <RouterLink to="/app" class="py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium"
            @click="fireGoToAppEvent">
            {{ t('navbar.app') }}
          </RouterLink>
          <RouterLink to="/infopaket" class="py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium"
            @click="fireGoToInfoPackageEvent">
            {{ t('navbar.infopackage') }}
          </RouterLink>
        </div>
      </div>
      <div class="flex items-center sm:gap-4">
        <a href="https://app.melli.com/" target="_blank" title="Login" @click="fireLoginEvent" class="hidden lg:block">
          <div class="i-carbon:user stroke-2 w-6 h-6" />
        </a>
        <RouterLink v-if="router.currentRoute.value.path !== '/shop'" to="/shop"
          class="py-3.5 px-7 rounded-lg bg-primary-500 text-white text-base font-medium hidden md:block border-2 border-primary-500 whitespace-nowrap"
          @click="fireShopEvent">
          Preise ansehen
        </RouterLink>
        <CallOrPipedrive class="visible" />
        <button type="button" class="block lg:hidden pl-4 sm:pr-4" @click="showNav = !showNav">
          <div v-if="showNav" class="i-heroicons-outline:x stroke-2 w-6 h-6 bg-gray-700" />
          <div v-else class="i-heroicons-outline:menu stroke-2 w-6 h-6 bg-gray-700" />
        </button>
      </div>
    </div>
    <transition enter-active-class="transition-all duration-1000 ease-in-out"
      enter-from-class="transform translate-y--5 opacity-0"
      leave-active-class="transition-all duration-500 ease-[cubic-bezier(1, 0.5, 0.8, 1)]"
      leave-to-class="transform -translate-y-5 opacity-0">
      <div v-if="showNav" class="mt-4 container mx-auto px-4 lg:px-0 lg:hidden" :class="showNav ? 'grid' : 'hidden'">
        <div class="grid gap-2 ">
          <RouterLink to="/"
            class="focus:outline-none focus:bg-gray-100 rounded-md font-medium text-gray-600 text-left p-2 my-2">
            {{ t('navbar.about') }}
          </RouterLink>
          <RouterLink to="/blog"
            class="focus:outline-none focus:bg-gray-100 rounded-md font-medium text-gray-600 text-left p-2 my-2"
            @click="fireGoToBlogEvent">
            {{ t('navbar.blog.heading') }}
          </RouterLink>
          <!-- <RouterLink to="/live-demo" class="focus:outline-none focus:bg-gray-100 rounded-md font-medium text-gray-600 text-left p-2 my-2" @click="fireGoToLiveDemoEvent">
            {{ t('navbar.live-demo') }}
          </RouterLink> -->
          <RouterLink to="/app"
            class="focus:outline-none focus:bg-gray-100 rounded-md font-medium text-gray-600 text-left p-2 my-2"
            @click="fireGoToAppEvent">
            {{ t('navbar.app') }}
          </RouterLink>
          <RouterLink to="/infopaket"
            class="focus:outline-none focus:bg-gray-100 rounded-md font-medium text-gray-600 text-left p-2 my-2"
            @click="fireGoToInfoPackageEvent">
            {{ t('navbar.infopackage') }}
          </RouterLink>
        </div>
        <RouterLink to="/shop" class="my-4 py-2.5 rounded-lg bg-primary-500 text-center text-white text-base font-medium"
          @click="fireShopEvent">
          <span>Jetzt kaufen</span>
        </RouterLink>
      </div>
    </transition>
  </nav>
</template>
