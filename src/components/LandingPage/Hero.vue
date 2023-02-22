<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager'

const heroVideo = ref<HTMLElement | null>(null)

const { isFullscreen } = useFullscreen(heroVideo)

const isOpen = ref(false)
const activeVideo = ref('')

function closeModal() {
  isOpen.value = false
  activeVideo.value = ''
}
function openModal(video: string) {
  activeVideo.value = video
  isOpen.value = true
}
</script>

<template>
  <header class="relative bg-black" style="height: calc(100vh - 80px)">
    <!-- The video -->
    <video
      id="heroVideo"
      ref="heroVideo"
      class="w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
      poster="https://assets.melli.com/images/stock/red-hair-greeting-1024.webp"
    >
      <source src="https://videos.melli.com/soziale-kontakte.mp4" type="video/mp4">
    </video>

    <!-- Heading & link to Video -->
    <div class="absolute top-0 w-full h-full bg-black/50 flex flex-col">
      <slot />
      <div class="flex flex-col gap-5 sm:gap-9 py-12 my-auto px-5 max-w-200 mx-auto">
        <h1 class="font-semibold text-4xl sm:text-5xl sm:text-center">
          <span class="text-primary-300 leading-tight">
            Melli -
          </span>
          <span class="text-white leading-tight">
            deine Freundin für ein glückliches Älterwerden
          </span>
        </h1>
        <div class="flex flex-col gap-5 sm:gap-4 sm:items-center">
          <RouterLink to="/shop" class="rounded-lg bg-primary-400 text-white py-2.5 px-4 flex w-fit gap-2 justify-center">
            <div class="i-lucide:gift w-6 h-6" /><span>Melli 30 Tage kostenlos testen</span>
          </RouterLink>
          <button class="rounded-lg text-white border-1.5 border-white py-2.5 px-4 flex w-fit gap-2 justify-center" @click="[openModal('https://videos.melli.com/soziale-kontakte.mp4'), fireVideoEvent('hero-video')]">
            <span>ganzes Video ansehen</span><div class="i-lucide:arrow-right w-6 h-6" />
          </button>
        </div>
      </div>
      <!-- <RouterLink to="#appoverview" class="absolute bottom-6 font-normal text-lg text-white flex flex-col gap-2 w-full mx-auto items-center">
        mehr erfahren
        <img
          src="https://assets.melli.com/icons/arrow-down-circle-white.svg"
          class="mx-auto w-12 h-12"
        >
      </RouterLink> -->
    </div>
  </header>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center py-4 text-center" @click="closeModal">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <video
              id="heroVideo"
              ref="heroVideo"
              :class=" isFullscreen ? 'lg:object-contain' : 'object-cover'"
              class="lg:object-cover w-full h-full"
              autoplay
              controls
              :loop="!isFullscreen"
            >
              <source :src="activeVideo" type="video/mp4">
            </video>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
