<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager'
const { t } = useI18n()

const features = [
  {
    iconClass: 'i-lucide:video',
    pilltext: 'Einfaches Videotelefonieren',
    modaltext: 'Nutzer können über Melli Audio- und Videotelefonate mit eingespeicherten Kontakten führen. Dazu müssen sie Melli nur per Sprachbefehl dazu auffordern, die gewünschte Person anzurufen bzw. einen eingehenden Anruf anzunehmen.',
  },
  {
    iconClass: 'i-lucide:image',
    pilltext: 'Bilder & Videos teilen',
    modaltext: 'Mit der Melli-App können Bilder und Videos auf die Melli bei Oma zuhause gesendet werden. So können Oma & Opa live beim Familienurlaub oder den ersten Schritten des Enkels dabei sein.',
  },
  {
    iconClass: 'i-lucide:mail',
    pilltext: 'Sprach- und Textnachrichten versenden',
    modaltext: 'Oma & Opa kommen mit Whatsapp & Co. nicht klar? Mit Melli können sie nun auch ganz einfach Text- & Sprachnachrichten empfangen. Melli liest ihnen die Nachricht einfach vor.',
  },
]

const featureToShowDetails = ref<(typeof features)[number]>()

const videoElement = ref()
const startedVideo = ref(false)

const startVideo = (event: Event) => {
  if (!startedVideo.value) {
    fireVideoEvent('gemeinschaft')
    startedVideo.value = true
    videoElement.value.play()
    event.preventDefault()
  }
}
</script>

<template>
  <Modal :show="!!featureToShowDetails" @close="featureToShowDetails = undefined">
    <Container v-if="featureToShowDetails" class="py-8 max-w-3xl shadow-md">
      <div class="w-8 h-8">
        <svg class="absolute w-8 h-8" width="95" height="79" viewBox="0 0 95 79" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M78.2681 77.7424C63.4915 82.3205 58.1262 73.5713 43.3495 64.822C17.1384 49.3024 -5.99372 48.1372 1.39451 25.7554C6.18247 11.2507 16.9627 11.9193 38.424 8.1551C59.8853 4.39087 61.2046 -3.03585 72.551 1.3388C83.8973 5.71344 78.2681 16.0905 89.6144 35.2168C100.961 54.3432 93.0447 73.1643 78.2681 77.7424Z"
            fill="amber-400" />
        </svg>
        <div :class="featureToShowDetails.iconClass" class="w-8 h-8" />
      </div>
      <p class="font-semibold pt-4 py-2 text-xl">
        {{ featureToShowDetails.pilltext }}
      </p>
      <p class="text-xl">
        {{ featureToShowDetails.modaltext }}
      </p>
    </Container>
  </Modal>

  <div class="grid gap-16 mx-auto items-center my-12">
    <h1 class="text-gray-900 text-center font-semibold text-4xl lg:text-5xl max-w-xl mx-auto">
      {{ t('reliability-section.heading') }}
    </h1>
    <div>
      <div class="bg-primary-100 p-8 md:pb-56 lg:p-16 lg:pb-56">
        <p class="md:max-w-1/2 font-normal text-lg mb-4 md:mb-16 md:text-xl">
          {{ t('reliability-section.text') }}
        </p>
        <div class="flex flex-wrap justify-around md:max-w-8/10 gap-4 lg:gap-8 md:mb-8">
          <div v-for="(feature, index) in features" :key="index"
            class="bg-teal-700 rounded-xl p-4 text-white w-full md:w-1 md:max-w-1/3 grow flex flex-col gap-2 cursor-pointer"
            @click="featureToShowDetails = feature">
            <div class="w-8 h-8">
              <svg class="absolute w-8 h-8" width="95" height="79" viewBox="0 0 95 79" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M78.2681 77.7424C63.4915 82.3205 58.1262 73.5713 43.3495 64.822C17.1384 49.3024 -5.99372 48.1372 1.39451 25.7554C6.18247 11.2507 16.9627 11.9193 38.424 8.1551C59.8853 4.39087 61.2046 -3.03585 72.551 1.3388C83.8973 5.71344 78.2681 16.0905 89.6144 35.2168C100.961 54.3432 93.0447 73.1643 78.2681 77.7424Z"
                  fill="teal-600" />
              </svg>

              <div :class="feature.iconClass" class="text-amber-400 w-8 h-8" />
            </div>
            <span class="grow font-medium">{{ feature.pilltext }}</span>
            <div class="font-inter text-xs flex gap-2 items-center mt-auto">
              <div class="i-lucide:arrow-right w-3 h-3 lg:w-3" />
              mehr erfahren
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 md:mt--50 md:w-7/10 mx-auto rounded-3xl overflow-hidden relative"
        :class="!startedVideo ? 'cursor-pointer' : ''" @click="startVideo">
        <video ref="videoElement" playsinline :controls="startedVideo" @ended="startedVideo = false">
          <source src="https://videos.melli.com/communication.webm" type="video/webm">
          <source src="https://videos.melli.com/communication.mp4" type="video/mp4">
        </video>
        <div v-if="!startedVideo"
          class="i-carbon:play-outline text-tertiary-200 text-6xl lg:text-8xl absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
      </div>
    </div>
  </div>
</template>
