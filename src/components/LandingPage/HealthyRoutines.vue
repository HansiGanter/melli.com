<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager'
const { t } = useI18n()

interface HealthyRoutines {
  pilltext: string
  modaltext: string
  icon: string
}

const routines: HealthyRoutines[] = [
  {
    pilltext: t('healthy-routines-1'),
    modaltext: t('healthy-routine.card1'),
    icon: 'https://assets.melli.com/bubble-icons/bubble-icon_bell-thick-yellow.svg',
  },
  {
    pilltext: t('healthy-routines-2'),
    modaltext: t('healthy-routine.card2'),
    icon: 'https://assets.melli.com/bubble-icons/bubble-icon_pill-thick-yellow.svg',
  },
  {
    pilltext: t('healthy-routines-3'),
    modaltext: t('healthy-routine.card3'),
    icon: 'https://assets.melli.com/bubble-icons/bubble-icon_heart-thick-yellow.svg',
  },
]

const showroutinesCards = ref<HealthyRoutines>()

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
            v-for="(routine, index) in routines"
            :key="index"
            class="text-gray-900 font-semibold text-base bg-tertiary-800/10 py-3.5 px-4 rounded-lg w-full sm:w-fit whitespace-pre-line flex gap-2.5 items-center cursor-pointer"
            @click="showroutinesCards = routine"
          >
            <img :src="routine.icon" class="w-9 h-9">
            <span>{{ routine.pilltext }}</span>

            <Modal :show="!!showroutinesCards" @close="showroutinesCards = undefined">
              <Container v-if="showroutinesCards" class="p-6 max-w-3xl">
                <img :src="showroutinesCards.icon" class="color-primary-900 w-14 h-14 w-full md:w-auto">
                <p class="font-bold pt-4 py-2 text-xl">
                  {{ showroutinesCards.pilltext }}
                </p>
                <p class="text-xl">
                  {{ showroutinesCards.modaltext }}
                </p>
              </Container>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
