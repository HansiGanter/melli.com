<script setup lang="ts">
import { fireShopEvent } from '~/google-tag-manager';
import { breakpointsTailwind } from '@vueuse/core';
const greaterLg = useBreakpoints(breakpointsTailwind).greater('lg');
</script>

<template>
  <RouterLink v-if="greaterLg" to="/shop" @click="fireShopEvent">
    <Container class="bg-primary-900 cursor-pointer">
      <div class="h-12 flex items-center justify-between text-white">
        <div class="flex items-center justify-start gap-3">
          <BubbleIcon bubble-type="1" bubble="text-primary-600" icon="i-lucide:gift w-8 h-8 text-amber400" />
          <p class="text-lg sm:text-xl font-semibold"><span v-if="greaterLg">Verschenke </span>Melli zu
            Weihnachten!</p>
          <a href="https://melli.com/shop" class="underline flex justify-center items-center gap-1.5">
            jetzt bestellen
            <div class="i-lucide:arrow-right w-6 h-6 shrink-0"></div>
          </a>
        </div>
        <div class="flex items-center justify-center">
          <p class="text-lg">Noch</p>
          <div class="w-fit bg-amber-400 rounded-full px-4.5 mx-2 py-1.5">{{ new Date("12/19/2023").getDate() - new
            Date().getDate() }} Tage</div>
          <p>für Lieferung vor
            Weihnachten
          </p>
        </div>
      </div>
    </Container>
  </RouterLink>
  <RouterLink v-if="!greaterLg" to="/shop" @click="fireShopEvent">
    <Container class="bg-primary-900 cursor-pointer">
      <div class="h-24 gap-3 sm:h-12 flex items-center justify-between text-white">
        <div class="flex gap-3 items-center">
          <BubbleIcon bubble-type="1" bubble="text-primary-600" icon="i-lucide:gift w-8 h-8 text-amber400" />
          <p class="text-2xl font-semibold"><span v-if="greaterLg">Verschenke </span>Melli zu Weihnachten!</p>
        </div>
        <a href="https://melli.com/shop" class="underline flex justify-center items-center gap-1.5 whitespace-nowrap">
          jetzt bestellen
          <div class="i-lucide:arrow-right w-6 h-6 shrink-0"></div>
        </a>
      </div>
    </Container>
  </RouterLink>
</template>
