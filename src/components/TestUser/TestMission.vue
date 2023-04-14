<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager'

const { t } = useI18n()

const missionVideo = ref<HTMLElement | null>(null)

const { isFullscreen } = useFullscreen(missionVideo)

const missions = [
  {
    image: 'https://assets.melli.com/images/stock/red-hair-greeting.webp',
    device: 'https://assets.melli.com/images/mockups/device-group-call.webp',
    title: t('test-mission.feature-1.title'),
    description: t('test-mission.feature-1.description'),
    video: 'https://videos.melli.com/communication.webm',
  },
  {
    image: 'https://assets.melli.com/images/mockups/image-meeting-bubble.webp',
    title: t('test-mission.feature-2.title'),
    description: t('test-mission.feature-2.description'),
    video: 'https://videos.melli.com/struktur.webm',
  },
  {
    image: 'https://assets.melli.com/images/stock/man-portrait.webp',
    device: 'https://assets.melli.com/images/mockups/sentiment-analysis-left.webp',
    title: t('test-mission.feature-3.title'),
    description: t('test-mission.feature-3.description'),
  },
]

const isOpen = ref(false)
const activeVideo = ref('')

function closeModal() {
  isOpen.value = false
  activeVideo.value = ''
}
function openModal(video: string) {
  // activeVideo.value = video
  // isOpen.value = true
  window.open(video, '_blank')
}

const mellivideo = ref()
const isPlaying = ref(false)
const playVideo = () => {
  if (mellivideo.value.paused) {
    mellivideo.value.play()
    isPlaying.value = true
  }
  else {
    mellivideo.value.pause()
    isPlaying.value = false
  }
}
</script>

<template>
  <div class="grid gap-24 lg:gap-48">
    <div class="grid gap-16 justify-items-center">
      <div class="grid gap-6 text-center lg:w-4/5">
        <h1 class="font-semibold text-4xl lg:text-5xl">
          <span class="text-primary-400">{{ t('test-mission.heading-1') }}</span> <span class="text-gray-900">{{
            t('test-mission.heading-2') }}</span>
        </h1>
      </div>
      <div class="relative overflow-hidden w-fit mx-auto rounded-2xl" @click="[playVideo(), fireVideoEvent('mission')]">
        <video ref="mellivideo" width="875" height="375"
          poster="https://assets.melli.com/images/stock/daughter-mother-in-call-1024.webp" playsinline>
          <source src="https://videos.melli.com/fuersorge.webm" type="video/webm">
          <source src="https://videos.melli.com/fuersorge.mp4" type="video/mp4">
        </video>
        <div v-if="!isPlaying"
          class="i-carbon:play-outline text-tertiary-200 text-6xl lg:text-8xl cursor-pointer absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
      </div>
    </div>
    <div class=" px-5 grid gap-20 justify-items-center lg:max-w-6xl mx-auto overflow-hidden">
      <div v-for="(mission, index) in missions" :key="mission.title" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="relative w-fit h-fit" :class="{ 'lg:order-2': (index) % 2 }">
          <div
            :class="[mission.device ? 'rounded-full overflow-hidden' : '', !mission.device ? 'h-fit lg:-ml-24 w-72 lg:w-96' : 'h-72 lg:h-80 w-72 lg:w-80']">
            <img :src="mission.image" class="h-full" :class="mission.device ? 'object-cover' : 'object-contain'">
          </div>
          <img :src="mission.device" class="absolute right-0 bottom-0 w-auto h-36 lg:h-40 -mr-12">
        </div>
        <div class="col-span-2" :class="{ 'lg:order-1': (index) % 2 }">
          <div class="grid gap-6 lg:gap-12 lg:w-2/3" :class="(index) % 2 ? 'lg:mr-auto' : 'lg:ml-auto'">
            <h3 class="text-3xl lg:text-4xl text-gray-900 font-semibold">
              {{ mission.title }}
            </h3>
            <div class="grid gap-6">
              <p class="text-lg text-gray-900 font-medium">
                {{ mission.description }}
              </p>
              <button v-if="mission.video"
                class="inline-flex items-center rounded-full w-fit font-medium text-lg gap-2.5 px-4 py-1.5 bg-primary-900 text-white"
                @click="[openModal(mission.video), fireVideoEvent(mission.title)]">
                <span>Video ansehen</span>
                <div class="i-carbon:play text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center py-4 text-center" @click="closeModal">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <video id="missionVideo" ref="missionVideo" :class="isFullscreen ? 'lg:object-contain' : 'object-cover'"
              class="lg:object-cover w-full h-full" autoplay controls :loop="!isFullscreen">
              <source :src="activeVideo" type="video/mp4">
            </video>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
