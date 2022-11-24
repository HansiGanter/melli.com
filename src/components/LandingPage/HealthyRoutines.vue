<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager'
const { t } = useI18n()

const benefits = ref([
  t('healthy-routines-1'),
  t('healthy-routines-2'),
  t('healthy-routines-3'),
])
const showInformation = ref(-1)
const textToShow = [t('healthy-routine.card1'), t('healthy-routine.card2'), t('healthy-routine.card3')]
const iconsSources = ['https://assets.melli.com/bubble-icons/bubble-icon_bell-thick-yellow.svg', 'https://assets.melli.com/bubble-icons/bubble-icon_pill-thick-yellow.svg', 'https://assets.melli.com/bubble-icons/bubble-icon_heart-thick-yellow.svg']

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
  <div class="grid gap-10 lg:gap-20">
    <div class="grid gap-7">
      <h1 class="font-semibold text-gray-900 text-4xl lg:text-5xl lg:w-1/2">
        {{ t('healthy-routine.header') }}
      </h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div class="relative overflow-hidden rounded-2xl h-fit order-1 lg:order-1" @click="[playVideo(), fireVideoEvent('routinen')]">
        <video
          ref="healthyroutinesvideo"
          class="lg:w-[845px] w-full"
          height="475"
          poster="https://assets.melli.com/images/own-content/melli_commercial-screenshots_structure-3_lowRes-1024.webp"
          playsinline
        >
          <source
            src="https://videos.melli.com/struktur.mp4"
            type="video/mp4"
          >
        </video>
        <div v-if="!isPlaying" class="i-carbon:play-outline text-tertiary-200 text-6xl lg:text-8xl cursor-pointer absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
      </div>
      <div class="grid gap-10 order-2 lg:order-2">
        <span class="font-normal text-xl text-black">{{ t('healthy-routine.text') }}</span>
        <div class="flex lg:flex-nowrap lg:flex-col flex-wrap justify-center gap-3">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="text-gray-900 font-semibold text-base bg-tertiary-800/10 py-3.5 px-4 rounded-lg w-full sm:w-fit whitespace-pre-line"
          >
            <ul class="p-0" @click="showInformation = index">
              <li class="flex gap-2 mx-auto items-center">
                <img :src="iconsSources[index]" class="flex justify-center w-10 h-10 pr-1 shrink-0 object-fit object-center">
                <div class="text-base">
                  {{ benefit }}
                </div>
              </li>
            </ul>

            <Modal :show="showInformation === index" @close="showInformation = -1">
              <Container class="p-6 max-w-3xl">
                <img :src="iconsSources[index]" class="color-primary-900 w-14 h-14">
                <div class="font-bold pt-4 py-2 text-xl">
                  {{ benefit }}
                </div>
                <div class="text-xl">
                  {{ textToShow[index] }}
                </div>
              </Container>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
