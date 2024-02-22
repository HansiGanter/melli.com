<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
const heroVideo = ref<HTMLElement | null>(null)

const greaterSm = useBreakpoints(breakpointsTailwind).greater('sm')
</script>

<template>
  <header class="relative bg-black" style="height: calc(100vh - 80px)">
    <!-- The video -->
    <video id="heroVideo" ref="heroVideo" class="w-full h-full object-cover" autoplay loop muted playsinline
      poster="https://melli-assets.netlify.app/images/stock/red-hair-greeting-1024.webp">
      <source src="https://videos.melli.com/soziale-kontakte.webm" type="video/webm">
      <source src="https://videos.melli.com/soziale-kontakte.mp4" type="video/mp4">
    </video>

    <!-- Heading & link to Video -->
    <div class="absolute top-0 w-full h-full bg-black/20 flex flex-col items-center p-4 pb-12 sm:pb-20">
      <slot />
      <div class=" grid gap-4 sm:gap-8 lg:max-w-200 text-center my-auto ">
        <!-- <img src="https://melli-assets.netlify.app/bubble-icons/bubble-icon_gift_1-green.svg" class="w-20 h-20 mx-auto"> -->
        <h1 class="text-white font-semibold text-4xl sm:text-5xl leading-tight">
          Melli Live-Demo
        </h1>
        <h2 class="text-white font-medium font-medium text-2xl sm:text-3xl leading-normal mb-2">
          Wir erklären dir in einer online Live-Demonstration, was Melli alles kann und beantworten deine Fragen.<br>Melde
          dich jetzt an!
        </h2>
        <LiveDemoDialogOpen />
      </div>
      <RouterLink v-if="greaterSm" to="#flipcards"
        class="font-semibold text-lg text-primary-300 grid gap-2 w-fit mt-auto mx-auto">
        <span class="m-auto">Erfahre mehr über Melli</span>
        <img src="https://melli-assets.netlify.app/icons/arrow-down-circle.svg"
          class="mx-auto stroke-primary-300 w-8 h-8 m-auto">
      </RouterLink>
    </div>
  </header>
</template>
