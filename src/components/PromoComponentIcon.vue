<script setup lang="ts">
import { fireShopEvent } from '~/google-tag-manager'
</script>

<template>
  <div class="grid gap-4 lg:w-200 text-center mx-auto">
    <img src="https://assets.melli.com/bubble-icons/bubble-icon_gift_1-green.svg" class="w-20 h-20 mx-auto">
    <h1 class="text-white font-semibold text-4xl md:text-5xl leading-tight md:text-center">
      Mellis Tipp für Weihnachten:
    </h1>
    <h2 class="text-white text-xl md:text-3xl leading-normal md:text-center mb-2">
      Schenke Oma nicht nur ein Gesellschaftsspiel, sondern die Spielfreunde gleich mit.
    </h2>
    <RouterLink to="/shop" class="bg-primary-500 text-white text-lg py-4 px-8 rounded-lg w-fit mx-auto" @click="fireShopEvent">
      Jetzt 60 Tage kostenlos ausprobieren!
    </RouterLink>
  </div>
</template>
