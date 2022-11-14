<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { fireShopEvent } from '~/google-tag-manager'
const heroVideo = ref<HTMLElement | null>(null)

const greaterSm = useBreakpoints(breakpointsTailwind).greater('sm')
</script>

<template>
  <header class="relative bg-black" style="height: calc(100vh - 80px)">
    <!-- The video -->
    <video
      id="heroVideo"
      ref="heroVideo"
      class="w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
      poster="https://assets.melli.com/images/stock/red-hair-greeting-1024.webp"
    >
      <source src="https://videos.melli.com/soziale-kontakte.mp4" type="video/mp4">
    </video>

    <!-- Heading & link to Video -->
    <div class="absolute top-0 w-full h-full bg-black/50 flex flex-col items-center p-4 pb-12 sm:pb-20">
      <slot />
      <div class=" grid gap-4 sm:gap-8 lg:max-w-200 text-center my-auto ">
        <img src="https://assets.melli.com/bubble-icons/bubble-icon_gift_1-green.svg" class="w-20 h-20 mx-auto">
        <h1 class="text-white font-semibold text-4xl sm:text-5xl leading-tight">
          Mellis Tipp für Weihnachten:
        </h1>
        <h2 class="text-white font-semibold text-2xl sm:text-3xl leading-normal mb-2">
          Schenke Oma nicht nur ein Gesellschaftsspiel, sondern die Spielfreunde gleich mit.
        </h2>
        <RouterLink to="/shop" class="bg-primary-500 text-white py-3 px-2 sm:py-4 sm:px-8 w-full sm:w-fit rounded-lg mx-auto" @click="fireShopEvent">
          Jetzt 60 Tage kostenlos ausprobieren!
        </RouterLink>
      </div>
      <RouterLink v-if="greaterSm" to="#flipcards" class="font-semibold text-lg text-primary-300 grid gap-2 w-fit mt-auto mx-auto">
        <span class="m-auto">Erfahre mehr über Melli</span>
        <img
          src="https://assets.melli.com/icons/arrow-down-circle.svg"
          class="mx-auto stroke-primary-300 w-8 h-8 m-auto"
        >
      </RouterLink>
    </div>
  </header>
</template>
