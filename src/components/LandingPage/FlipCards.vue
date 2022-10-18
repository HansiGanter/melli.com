<script setup lang="ts">
import type { Ref } from 'vue'
const { t } = useI18n()
interface Feature {
  image: string
  title: string
  description: string
}

const features: Ref<Feature[]> = ref([
  {
    image: 'https://assets.melli.com/images/mockups/device-group-call.webp',
    title: t('why-melli.feature-1.title'),
    description: t('why-melli.feature-1.description'),
  },
  {
    image: 'https://assets.melli.com/images/mockups/device-sleeptime.webp',
    title: t('why-melli.feature-2.title'),
    description: t('why-melli.feature-2.description'),
  },
  {
    image: 'https://assets.melli.com/images/mockups/device-satisfaction.webp',
    title: t('why-melli.feature-3.title'),
    description: t('why-melli.feature-3.description'),
  },
])
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center">
    <div
      v-for="feature in features"
      :key="feature.title"
      class="flip-card w-80 h-96 m-auto mb-8"
    >
      <div class="flip-card-inner h-full">
        <!-- Front-Side of Card -->
        <div class="flip-card-front absolute p-6 flex flex-col gap-4 justify-between w-full h-full bg-white drop-shadow-xl rounded-3xl">
          <div class=" overflow-hidden">
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
          <p class="text-gray-900 font-medium text-lg pt-8">
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

.flip-card-front, .flip-card-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
