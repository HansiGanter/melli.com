<script setup lang="ts">
const { t } = useI18n()

const features = ref([t('feature-1'), t('feature-2'), t('feature-3')])

const reliabilityvideo = ref()
const isPlaying = ref(false)
const playVideo = () => {
  if (reliabilityvideo.value.paused) {
    reliabilityvideo.value.play()
    isPlaying.value = true
  }
  else {
    reliabilityvideo.value.pause()
    isPlaying.value = false
  }
}
</script>

<template>
  <div class="grid gap-8 lg:gap-16 mx-auto items-center">
    <div class="grid gap-4 lg:gap-6 text-center max-w-2xl mx-auto justify-items-center">
      <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
        {{ t('reliability-section.heading') }}
      </h1>
    </div>
    <div class="grid gap-16 bg-primary-100 px-6 lg:px-16 pt-10 lg:pt-16 pb-16 lg:pb-96">
      <div class="grid gap-14 w-full lg:w-2/3">
        <p class="w-full lg:w-3/4 font-normal text-xl">
          {{ t('reliability-section.text') }}
        </p>
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="text-gray-900 font-semibold text-base bg-green-900/10 py-3.5 px-6 rounded-lg"
          >
            {{ feature }}
          </div>
        </div>
      </div>
    </div>
    <div class="relative overflow-hidden lg:max-w-6xl rounded-2xl lg:-mt-72 mx-auto" @click="playVideo">
      <video
        ref="reliabilityvideo"
        width="1024"
        poster="https://assets.melli.com/images/stock/584239506-1024.webp"
        playsinline
      >
        <source
          src="https://videos.melli.com/soziale-kontakte.mp4"
          type="video/mp4"
        >
      </video>
      <div v-if="!isPlaying" class="i-carbon:play-outline text-amber-200 text-6xl lg:text-8xl cursor-pointer absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
    </div>
  </div>
</template>
