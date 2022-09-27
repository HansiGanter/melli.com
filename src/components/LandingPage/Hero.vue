<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager'
const { t } = useI18n()

const hero = {
  title:
      {
        highlight: t('hero.heading-1.highlight'),
        text: t('hero.heading-1.text'),
      },
  description: t('hero.heading-3'),
}

const heroVideo = ref<HTMLElement | null>(null)
const { toggle, isFullscreen } = useFullscreen(heroVideo)

const openVideo = () => {
  fireVideoEvent('hero-video')
  toggle()
}
</script>

<template>
  <header class="relative h-screen backdrop-contrast-75 bg-no-repeat bg-cover bg-center lg:bg-top-right bg-black" role="banner">
    <video
      id="heroVideo"
      ref="heroVideo"
      :class=" isFullscreen ? 'object-contain' : 'object-cover'"
      class="lg:object-cover w-full h-full"
      playsInline
      autoplay
      :loop="!isFullscreen"
      :muted="!isFullscreen"
      poster="https://assets.melli.com/images/stock/red-hair-greeting-1024.webp"
    >
      <source src="https://videos.melli.com/soziale-kontakte.mp4" type="video/mp4">
    </video>
    <div class="absolute top-0 w-full h-full bg-gray-900/40">
      <div class="absolute top-0 left-0 right-0 inset-x-0 container max-w-screen-xl h-full mx-auto p-5 sm:px-6 lg:px-8 grid">
        <div class="h-full w-full lg:w-2/3 lg:mx-auto py-40 sm:py-16 lg:py-72 flex flex-col justify-center">
          <div class="filter-none grid gap-5 lg:gap-9 lg:mx-auto md:text-center font-semibold text-white w-full">
            <h1 class="font-semibold text-4xl md:text-5xl leading-tight lg:leading-none text-white">
              <span class="text-primary-400">{{ hero.title.highlight }}</span> {{ hero.title.text }}
            </h1>
            <button
              class="flex md:justify-center gap-2.5 items-center text-primary-300 font-medium text-lg mr-auto md:mx-auto outline-none"
              @click="openVideo"
            >
              <span>Sieh dir das ganze Video an</span>
              <img
                src="https://assets.melli.com/icons/arrow-circle.svg"
                class="mx-auto stroke-primary-300 w-6"
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
