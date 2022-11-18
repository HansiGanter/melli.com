<script setup lang="ts">
/* TODO: Fire Shop-Events when Shop is ready */
import { fireCartEvent, fireGoToBlogEvent, fireGoToInfoPackageEvent, fireGoToLiveDemoEvent, fireLoginEvent, fireShopEvent } from '~/google-tag-manager'
import { useCheckoutStore } from '~/stores/checkout'
const checkout = useCheckoutStore()
const { t } = useI18n()

const showNav = ref(false)
</script>

<template>
  <nav class="bg-white py-4">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-x-8">
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <div class="lg:flex hidden items-center gap-x-4">
            <RouterLink to="/" class="py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium">
              {{ t('navbar.about') }}
            </RouterLink>
            <RouterLink to="/blog" class="py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium" @click="fireGoToBlogEvent">
              {{ t('navbar.blog.heading') }}
            </RouterLink>
            <RouterLink to="/live-demo" class="py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium" @click="fireGoToLiveDemoEvent">
              {{ t('navbar.live-demo') }}
            </RouterLink>
            <RouterLink to="/infopaket" class="py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium" @click="fireGoToInfoPackageEvent">
              {{ t('navbar.infopackage') }}
            </RouterLink>
            <!-- <RouterLink to="/karriere" class="py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium" @click="fireKarriereEvent">
              {{ t('navbar.karriere') }}
            </RouterLink> -->
          </div>
        </div>
        <div class="lg:flex hidden items-center gap-4">
          <a href="https://app.melli.com/" target="_blank" title="Login" @click="fireLoginEvent">
            <div class="i-carbon:user stroke-2 w-6 h-6" />
          </a>
          <RouterLink
            v-if="checkout.selectedSubscription"
            to="/shop"
            class="relative inline-flex"
            @click="[fireCartEvent(), fireShopEvent()]"
          >
            <div class="i-carbon:shopping-cart stroke-2 w-6 h-6" />
            <span class="flex absolute h-2.5 w-2.5 top-0 right-0 -mr-0.5">
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
            </span>
          </RouterLink>
          <RouterLink
            to="/shop"
            class="py-4 px-7 rounded-lg bg-primary-500 text-white text-base font-medium"
            @click="fireShopEvent"
          >
            Jetzt kaufen
          </RouterLink>
        </div>
        <button type="button" class="lg:hidden block p-2" @click="showNav = !showNav">
          <div v-if="showNav" class="i-heroicons-outline:x stroke-2 w-6 h-6 bg-gray-700" />
          <div v-else class="i-heroicons-outline:menu stroke-2 w-6 h-6 bg-gray-700" />
        </button>
      </div>
    </div>
    <transition
      enter-active-class="transition-all duration-1000 ease-in-out"
      enter-from-class="transform translate-y--5 opacity-0"
      leave-active-class="transition-all duration-500 ease-[cubic-bezier(1, 0.5, 0.8, 1)]"
      leave-to-class="transform -translate-y-5 opacity-0"
    >
      <div v-if="showNav" class="container mx-auto px-4 lg:px-0 lg:hidden" :class="showNav ? 'grid' : 'hidden'">
        <div class="grid gap-2 ">
          <RouterLink to="/" class="focus:outline-none focus:bg-gray-100 rounded-md font-medium text-gray-600 text-left p-2 my-2">
            {{ t('navbar.about') }}
          </RouterLink>
          <RouterLink to="/blog" class="focus:outline-none focus:bg-gray-100 rounded-md font-medium text-gray-600 text-left p-2 my-2" @click="fireGoToBlogEvent">
            {{ t('navbar.blog.heading') }}
          </RouterLink>
          <RouterLink to="/live-demo" class="focus:outline-none focus:bg-gray-100 rounded-md font-medium text-gray-600 text-left p-2 my-2" @click="fireGoToLiveDemoEvent">
            {{ t('navbar.live-demo') }}
          </RouterLink>
          <RouterLink to="/infopaket" class="focus:outline-none focus:bg-gray-100 rounded-md font-medium text-gray-600 text-left p-2 my-2" @click="fireGoToInfoPackageEvent">
            {{ t('navbar.infopackage') }}
          </RouterLink>
          <!-- <RouterLink to="/karriere" class="focus:outline-none focus:bg-gray-100 rounded-md font-medium text-gray-600 text-left p-2 my-2" @click="fireKarriereEvent">
            {{ t('navbar.karriere') }}
          </RouterLink> -->
          <a href="https://app.melli.com/" class="flex items-center justify-center gap-2 py-2.5 rounded-lg text-primary-500 text-base font-medium">
            <div class="i-carbon:user stroke-2 w-5 h-5" />
            <span>Account</span>
          </a>
        </div>
        <RouterLink
          to="/shop"
          class="py-2.5 rounded-lg bg-primary-500 text-center text-white text-base font-medium"
          @click="fireShopEvent"
        >
          <span>Jetzt kaufen</span>
        </RouterLink>
      </div>
    </transition>
  </nav>
</template>
