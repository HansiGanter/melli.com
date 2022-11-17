<script setup lang="ts">
import { fireShopEvent } from '~/google-tag-manager'
</script>

<template>
  <div class="bg-primary-900 rounded-3xl p-8 grid gap-4 lg:w-200 text-center mx-auto">
    <img src="https://assets.melli.com/bubble-icons/bubble-icon_gift_1-green.svg" class="w-24 h-24 mx-auto">
    <h1 class="text-white font-semibold text-4xl md:text-5xl leading-tight md:text-center my-0">
      Mellis Tipp für Weihnachten:
    </h1>
    <p class="text-white text-xl md:text-3xl leading-normal md:text-center my-0">
      Schenke Oma nicht nur ein Gesellschaftsspiel, sondern die Spielfreunde gleich mit.
    </p>
    <RouterLink to="/shop" class="bg-primary-500 text-white text-base sm:text-lg py-4 px-8 rounded-lg w-fit mx-auto my-4" @click="fireShopEvent()">
      Jetzt 60 Tage kostenlos ausprobieren!
    </RouterLink>
  </div>
</template>
