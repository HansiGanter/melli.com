<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager'
const { t } = useI18n()

const features = ref([t('feature-1'), t('feature-2'), t('feature-3')])
const showInformation = ref(-1)
const textToShow = [t('reliability-section.card1'), t('reliability-section.card2'), t('reliability-section.card3')]
const iconsSources = ['https://assets.melli.com/bubble-icons/bubble-icon_users-thick.svg', 'https://assets.melli.com/bubble-icons/bubble-icon_activity-thick.svg', 'https://assets.melli.com/bubble-icons/bubble-icon_phone-call-thick.svg']

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

const openVideo = () => {
  fireVideoEvent('gemeinschaft')
  playVideo()
}
</script>

<template>
  <!-- Add green color here if necessary -->
  <div class="grid gap-8 lg:gap-16 mx-auto items-center">
    <div class="grid gap-4 lg:gap-6 sm:text-center max-w-2xl mx-auto justify-items-center">
      <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
        {{ t('reliability-section.heading') }}
      </h1>
    </div>
    <div class="grid gap-8 order-2 lg:order-1  bg-primary-100 px-6 lg:px-16 pt-10 lg:pt-16 pb-16 lg:pb-96">
      <div class="grid gap-14 w-full lg:w-2/3">
        <p class="w-full lg:w-3/4 font-normal text-xl">
          {{ t('reliability-section.text') }}
        </p>
      </div>
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-3">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="text-gray-900 font-semibold text-base bg-primary-900/10 w-full sm:w-fit py-3.5 px-4 rounded-lg lg:h-full flex items-center"
        >
          <ul class="p-0" @click="showInformation = index">
            <li class="flex gap-2 mx-auto items-center">
              <img :src="iconsSources[index]" class="flex justify-center w-9 h-9 pr-1 shrink-0 object-fit object-center">
              <div class="text-base">
                {{ feature }}
              </div>
            </li>
          </ul>

          <Modal :show="showInformation === index" @close="showInformation = -1">
            <Container class="p-6 max-w-3xl">
              <img :src="iconsSources[index]" class="color-primary-900 w-14 h-14 w-full md:w-auto">
              <div class="font-bold pt-4 py-2 text-xl">
                {{ feature }}
              </div>
              <div class="text-xl">
                {{ textToShow[index] }}
              </div>
            </Container>
          </Modal>
        </div>
      </div>
    </div>
    <div
      class="relative order-1 lg:order-2 overflow-hidden lg:max-w-6xl rounded-2xl lg:-mt-88 mx-auto"
      @click="openVideo"
    >
      <video
        ref="reliabilityvideo"
        width="1024"
        poster="https://assets.melli.com/images/stock/red-hair-greeting-1024.webp"
        playsinline
      >
        <source
          src="https://videos.melli.com/soziale-kontakte.mp4"
          type="video/mp4"
        >
      </video>
      <div v-if="!isPlaying" class="i-carbon:play-outline text-tertiary-200 text-6xl lg:text-8xl cursor-pointer absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
    </div>
  </div>
</template>
