<script setup lang="ts">
import { fireBlogEvent, fireCartEvent, fireKarriereEvent, fireLoginEvent, fireShopEvent } from '~/google-tag-manager'
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
          <Logo />
          <div class="lg:flex hidden items-center gap-x-4">
            <RouterLink to="/" class="py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium">
              {{ t('navbar.about') }}
            </RouterLink>
            <RouterLink to="/blog" class="py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium" @click="fireBlogEvent">
              {{ t('navbar.blog.heading') }}
            </RouterLink>
            <RouterLink to="/karriere" class="py-2.5 px-4 rounded-lg text-gray-600 text-base font-medium" @click="fireKarriereEvent">
              {{ t('navbar.karriere') }}
            </RouterLink>
          </div>
        </div>
        <div class="lg:flex hidden items-center gap-4">
          <a href="https://app.melli.com/" target="_blank" @click="fireLoginEvent">
            <div class="i-carbon:user stroke-2 w-6 h-6" />
          </a>
          <RouterLink
            v-if="checkout.selectedSubscription"
            to="/shop"
            class="relative inline-flex"
            @click="fireCartEvent"
          >
            <div class="i-carbon:shopping-cart stroke-2 w-6 h-6" />
            <span class="flex absolute h-2.5 w-2.5 top-0 right-0 -mr-0.5">
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
            </span>
          </RouterLink>
          <!-- <RouterLink
            to="/shop"
            class="py-4 px-7 rounded-lg bg-primary-500 text-white text-base font-medium"
            @click="fireShopEvent"
          >
            Jetzt kaufen
          </RouterLink> -->
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
        <div class="grid gap-2 my-6">
          <RouterLink to="/" class="focus:outline-none focus:bg-gray-100 flex items-center justify-between w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-600">
            {{ t('navbar.about') }}
          </RouterLink>
          <RouterLink to="/blog" class="focus:outline-none focus:bg-gray-100 flex items-center justify-between w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-600" @click="fireBlogEvent">
            {{ t('navbar.blog.heading') }}
          </RouterLink>
          <RouterLink to="/karriere" class="focus:outline-none focus:bg-gray-100 flex items-center justify-between w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-600">
            {{ t('navbar.karriere') }}
          </RouterLink>
          <!-- <RouterLink to="/login" class="flex items-center justify-center gap-2 py-2.5 rounded-lg text-primary-500 text-base font-medium">
            <div class="i-carbon:user stroke-2 w-5 h-5" />
            <span>Account</span>
          </RouterLink> -->
        </div>
        <!-- <RouterLink
          to="/shop"
          class="py-2.5 rounded-lg bg-primary-500 text-center text-white text-base font-medium"
          @click="fireShopEvent"
        >
          <span>Jetzt kaufen</span>
        </RouterLink> -->
      </div>
    </transition>
  </nav>
</template>
