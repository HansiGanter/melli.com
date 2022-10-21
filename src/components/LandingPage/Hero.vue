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
  <header class="relative bg-black h-screen">
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
    <div class="absolute top-0 w-full h-full bg-black/50 flex flex-col md:items-center p-8">
      <slot />
      <div class="my-auto grid gap-4 lg:w-200">
        <h1 class="font-semibold text-4xl md:text-5xl leading-tight md:text-center">
          <span class="text-primary-300">Melli - </span><span class="text-white">deine Freundin für ein glückliches Älterwerden</span>
        </h1>
        <button class="font-semibold text-lg text-primary-300 flex gap-3 w-fit md:m-auto" @click="[openModal('https://videos.melli.com/soziale-kontakte.mp4'), fireVideoEvent('hero-video')]">
          <span class="m-auto">Sieh dir das ganze Video an</span><img
            src="https://assets.melli.com/icons/arrow-circle.svg"
            class="mx-auto stroke-primary-300 w-6 h-6 m-auto"
          >
        </button>
      </div>
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
