<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';

const emit = defineEmits<{
  (event: 'newsletterButtonClicked', email?: string): void;
}>();

const greaterMd = useBreakpoints(breakpointsTailwind).greater('md');

const showVideo = ref(false);
const el = ref<HTMLMediaElement | null>(null);
const activeVideoWebm = ref('');
const activeVideoMp4 = ref('');

const email = ref('');

// for iOS on iPhone
// @ts-expect-error webkitIsFullScreen is only defined on iOS
useEventListener(el, 'webkitendfullscreen', () => showVideo.value = document.webkitIsFullScreen);
// for everything else
useEventListener(el, 'fullscreenchange', () => showVideo.value = !!document.fullscreenElement);
</script>

<template>
  <header class="relative bg-black" style="height: calc(100vh - 88px)">
    <!-- The video -->
    <video id="heroVideo" ref="heroVideo" class="w-full h-full object-cover" autoplay loop muted playsinline
      poster="https://melli-assets.netlify.app/images/stock/red-hair-greeting-1024.webp">
      <source src="https://melli-assets.netlify.app/videos/soziale-kontakte.webm" type="video/webm">
      <source src="https://melli-assets.netlify.app/videos/soziale-kontakte.mp4" type="video/mp4">
    </video>

    <!-- Heading & link to Video -->
    <div class="absolute top-0 w-full h-full bg-black/20 flex flex-col">
      <slot />
      <div
        class="flex flex-col items-center gap-12 mt-20% sm:my-auto px-5 py-6 max-w-200 mx-auto text-white sm:text-center ">
        <div class="flex flex-col sm:items-center gap-6">
          <h1 class="font-semibold text-4xl md:text-6xl leading-tight">
            Melli.<br> Die digitale Begleiterin für Senioren.
          </h1>
          <p v-if="greaterMd" class="max-w-150 text-xl">
            Seniorentablet, Sprachassistentin und Smartphone in Einem. Melli verbindet dich mit Oma & Opa und sorgt für
            einen bunten und aktiven Alltag.
          </p>
        </div>
        <form class="flex flex-wrap sm:flex-nowrap gap-3 justify-center w-full max-w-150"
          @submit.prevent="() => emit('newsletterButtonClicked', email)">
          <input v-model="email" class="border-2 rounded-lg px-4 py-2.5 w-full text-gray-900" placeholder="name@email.de"
            type="email" name="email" required>
          <InfopaketBestellen></InfopaketBestellen>
        </form>
      </div>
    </div>
  </header>
  <video v-if="showVideo" ref="el" controls>
    <source :src="activeVideoWebm" type="video/webm">
    <source :src="activeVideoMp4" type="video/mp4">
  </video>
</template>
