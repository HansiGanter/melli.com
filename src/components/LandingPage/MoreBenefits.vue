<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager'
const { t } = useI18n()

const benefits = ref([t('more-benefit-1'), t('more-benefit-2'), t('more-benefit-3'), t('more-benefit-4')])

const morebenefitsvideo = ref()
const isPlaying = ref(false)
const playVideo = () => {
  if (morebenefitsvideo.value.paused) {
    morebenefitsvideo.value.play()
    isPlaying.value = true
  }
  else {
    morebenefitsvideo.value.pause()
    isPlaying.value = false
  }
}
</script>

<template>
  <div class="grid gap-8 lg:gap-16 mx-auto items-center">
    <div class="grid gap-16 bg-amber-100 px-6 lg:px-16 pt-10 lg:pt-16 pb-16 lg:pb-96">
      <div class="grid gap-4 lg:gap-6">
        <div class="grid gap-6 lg:gap-10 text-center max-w-2xl mx-auto justify-items-center">
          <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
            {{ t('more-benefits.heading') }}
          </h1>
        </div>
        <div class="grid gap-14">
          <div class="w-full lg:w-2/3">
            <p class="w-full lg:w-3/4 font-normal text-xl">
              {{ t('more-benefits.text') }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-3">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="text-gray-900 font-semibold text-base bg-tertiary-800/10 w-full sm:w-fit py-3.5 px-6 lg:h-full rounded-lg items-center flex"
        >
          <span>{{ benefit }}</span>
        </div>
      </div>
    </div>
    <div class="relative overflow-hidden lg:max-w-6xl rounded-2xl lg:-mt-88 mx-auto" @click="[playVideo(), fireVideoEvent('beschäftigung')]">
      <video
        ref="morebenefitsvideo"
        width="1024"
        poster="https://assets.melli.com/images/own-content/melli_commercial-screenshots_entertainment-3-1024.webp"
        playsinline
      >
        <source
          src="https://videos.melli.com/entertainment.mp4"
          type="video/mp4"
        >
      </video>
      <div v-if="!isPlaying" class="i-carbon:play-outline text-tertiary-200 text-6xl lg:text-8xl cursor-pointer absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
    </div>
  </div>
</template>
