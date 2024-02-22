<script setup lang="ts">
import type { Ref } from 'vue'
import { fireFlipCardEvent } from '~/google-tag-manager'
const { t } = useI18n()
interface Feature {
  image: string
  title: string
  description: string
}

const features: Ref<Feature[]> = ref([
  {
    image: 'https://melli-assets.netlify.app/images/mockups/device-group-call.webp',
    title: 'Für ein kommunikativeres & geselligeres Leben',
    description: t('why-melli.feature-1.description'),
  },
  {
    image: 'https://melli-assets.netlify.app/images/mockups/device-sleeptime.webp',
    title: 'Für einen gesünderen & aktiveren Alltag',
    description: t('why-melli.feature-2.description'),
  },
  {
    image: 'https://melli-assets.netlify.app/images/mockups/device-satisfaction.webp',
    title: 'Für mehr Lebenszufriedenheit & glückliche Momente',
    description: t('why-melli.feature-3.description'),
  },
])
</script>

<template>
  <div id="flipcards" class="flex flex-wrap gap-24 sm:gap-8 items-center">
    <div v-for="(feature, index) in features" :key="feature.title" class="flip-card w-74 h-80 m-auto"
      :class="index >= 2 ? 'sm:hidden lg:block' : ''">
      <div class="flip-card-inner h-full">
        <!-- Front-Side of Card -->
        <div
          class="flip-card-front absolute p-6 flex flex-col gap-4 justify-between w-full h-full bg-white drop-shadow-xl rounded-3xl"
          @click="fireFlipCardEvent(feature.title)">
          <div class="overflow-hidden h-48 -mt-16">
            <img class="object-contain w-full h-full" :src="feature.image">
          </div>
          <div class="flex flex-col gap-3 text-center">
            <h1 class="text-gray-900 text-xl lg:text-2xl font-semibold lg:font-medium">
              {{ feature.title }}
            </h1>
          </div>
          <div class="flex justify-center">
            <button type="button" class="flex justify-center gap-2 text-gray-900 ">
              Mehr erfahren
              <div class="i-carbon:next-outline stroke-gray-900 w-6 h-6" />
            </button>
          </div>
        </div>
        <!-- Back-Side of Card -->
        <div class="flip-card-back absolute p-6 grid gap-4 w-full h-full  bg-white drop-shadow-xl rounded-3xl">
          <p class="text-gray-900 text-md my-auto">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* CSS for Flip-Animation */
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
