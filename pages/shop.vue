<script lang="ts" setup>
import { breakpointsTailwind } from '@vueuse/core'
import { fireBuyEvent } from '~/google-tag-manager';
const greaterLg = useBreakpoints(breakpointsTailwind).greater('lg')

interface StripePrice { price: number; wlan: boolean; onetime: boolean; stripeId: string }

const price = ref<StripePrice>(
  { price: 24.90, wlan: true, onetime: true, stripeId: 'https://placeholder.stripe1' },
)

const setPrice = (p: StripePrice) => price.value = p

const show = ref(false)
</script>

<template>
  <Container v-if="!greaterLg" class="sticky z-1 top-6 mx-6">
    <div class="max-w-160 bg-gray-50 grid grid-cols-2 gap-3 shadow-lg rounded-lg p-4 -mx-3 sm:mx-auto left-0 right-0">
      <div>
        <p class="text-xl font-semibold">
          Dein Melli-Abo
        </p>
        <p class="text-xl font-semibold">
          €{{ price.price.toFixed(2) }}
          <span class="text-xs font-medium">/ Monat</span>
        </p>
        <p v-if="price.onetime" class=" text-xs font-medium">
          + €149,00 Tablet (einmalig)
        </p>
      </div>
      <transition enter-from-class="opacity-0 scale-50" enter-active-class="transition duration-500">
        <a v-if="show" target="_blank" :href="price.stripeId"
          class="transition text-center text-white bg-primary-400 w-full h-full rounded-lg px-2.5 py-4 flex items-center justify-center"
          @click="fireBuyEvent()">
          30 Tage kostenlos testen
        </a>
      </transition>
    </div>
  </Container>
  <Container class="py-12 lg:py-24 px-6 lg:px-24 relative overflow-hidden">
    <ShopIntro />
  </Container>

  <Container class="py-12 lg:py-24 px-6 lg:px-24 relative">
    <ShopChat :set-price="setPrice" :show-buy-botton="(s) => show = s" />
  </Container>

  <Container class="py-12 lg:py-24 px-6">
    <ShoppingDetails />
  </Container>

  <Container class="py-12 lg:py-24">
    <SecureSection />
  </Container>

  <Container class="py-12 lg:py-24 px-6">
    <FaqSection />
  </Container>

  <!-- </div> -->
</template>
