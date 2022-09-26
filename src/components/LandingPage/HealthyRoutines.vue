<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager'
const { t } = useI18n()

const benefits = ref([
  t('healthy-routines-1'),
  t('healthy-routines-2'),
  t('healthy-routines-3'),
])

const healthyroutinesvideo = ref()
const isPlaying = ref(false)
const playVideo = () => {
  if (healthyroutinesvideo.value.paused) {
    healthyroutinesvideo.value.play()
    isPlaying.value = true
  }
  else {
    healthyroutinesvideo.value.pause()
    isPlaying.value = false
  }
}
</script>

<template>
  <div class="grid gap-20">
    <div class="grid gap-7">
      <h1 class="font-semibold text-gray-900 text-4xl lg:text-5xl lg:w-1/2">
        {{ t('healthy-routine.header') }}
      </h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div class="relative overflow-hidden rounded-2xl h-fit order-2 lg:order-1" @click="[playVideo(), fireVideoEvent('routinen')]">
        <video
          ref="healthyroutinesvideo"
          width="845"
          height="475"
          poster="https://assets.melli.com/images/stock/410923648-1024.webp"
          playsinline
        >
          <source
            src="https://videos.melli.com/commercial-struktur.mp4"
            type="video/mp4"
          >
        </video>
        <div v-if="!isPlaying" class="i-carbon:play-outline text-tertiary-200 text-6xl lg:text-8xl cursor-pointer absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
      </div>
      <div class="grid gap-10 lg:gap-20 order-1 lg:order-2">
        <span class="font-normal text-xl text-black">{{ t('healthy-routine.text') }}</span>
        <div class="flex flex-col lg:flex-row flex-wrap items-center gap-8">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="text-gray-900 font-semibold text-base bg-tertiary-800/10 py-3.5 px-6 rounded-lg w-fit whitespace-pre-line"
          >
            <span>{{ benefit }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
