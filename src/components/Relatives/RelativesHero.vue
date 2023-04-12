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
  // activeVideo.value = video
  // isOpen.value = true
  window.open(video, '_blank')
}
</script>

<template>
  <header class="relative bg-black" style="height: calc(100vh - 80px)">
    <!-- The video -->
    <video id="heroVideo" ref="heroVideo" class="w-full h-full object-cover" autoplay loop muted playsinline
      poster="https://assets.melli.com/images/stock/red-hair-greeting-1024.webp">
      <source src="https://videos.melli.com/soziale-kontakte.webm" type="video/webm">
    </video>

    <!-- Heading & link to Video -->
    <div class="absolute top-0 h-full w-full bg-black/70">
      <slot />
      <div class="h-full px-5 mx-auto max-w-160 flex flex-col">
        <div class="my-auto flex flex-col gap-9 max-w-200 mx-auto">
          <h1 class="font-semibold text-4xl text-white md:text-5xl sm:text-center leading-tight md:leading-tight">
            Melli macht Omas & Opas Alltag glücklicher
          </h1>
          <div class="flex flex-col gap-4 sm:items-center md:justify-center">
            <RouterLink to="/shop"
              class="flex gap-2 bg-primary-400 px-4 py-2.5 items-center text-white rounded-md font-medium w-fit">
              <div class="i-lucide:gift w-6 h-6 shrink-0" /> 30 Tage kostenlos Testen
            </RouterLink>
            <button class="rounded-lg text-white border-1.5 border-white py-2.5 px-4 flex w-fit gap-2 justify-center"
              @click="[openModal('https://videos.melli.com/soziale-kontakte.webm'), fireVideoEvent('hero-video')]">
              <span>ganzes Video ansehen</span>
              <div class="i-lucide:arrow-right w-6 h-6" />
            </button>
          </div>
        </div>
        <RouterLink to="#relatives-quote" class="mx-auto text-white text-xl mb-12">
          <span>mehr erfahren</span>
          <div class="i-ph:arrow-circle-down w-12 h-12 mx-auto" />
        </RouterLink>
      </div>
    </div>
  </header>
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
            <video id="heroVideo" ref="heroVideo" :class="isFullscreen ? 'lg:object-contain' : 'object-cover'"
              class="lg:object-cover w-full h-full" autoplay controls :loop="!isFullscreen">
              <source :src="activeVideo" type="video/mp4">
            </video>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
