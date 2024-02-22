<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager'

const showVideo = ref(false)
const el = ref<HTMLMediaElement | null>(null)
const activeVideoWebm = ref('')
const activeVideoMp4 = ref('')

const { enter } = useFullscreen(el)

const playVideo = async (video: string) => {
  showVideo.value = true
  activeVideoWebm.value = `${video}.webm`
  activeVideoMp4.value = `${video}.mp4`
  await nextTick()
  if (el.value) {
    enter()
    el.value.play()
    fireVideoEvent(activeVideoWebm.value)
  }
}
// for iOS on iPhone
// @ts-ignore
useEventListener(el, 'webkitendfullscreen', () => showVideo.value = document.webkitIsFullScreen)
// for everything else
useEventListener(el, 'fullscreenchange', () => showVideo.value = !!document.fullscreenElement)
</script>

<template>
  <header class="relative bg-black" style="height: calc(100vh - 80px)">
    <!-- The video -->
    <video id="heroVideo" ref="heroVideo" class="w-full h-full object-cover" autoplay loop muted playsinline
      poster="https://melli-assets.netlify.app/images/stock/red-hair-greeting-1024.webp">
      <source src="https://videos.melli.com/soziale-kontakte.webm" type="video/webm">
      <source src="https://videos.melli.com/soziale-kontakte.mp4" type="video/mp4">
    </video>

    <!-- Heading & link to Video -->
    <div class="absolute top-0 h-full w-full bg-black/20">
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
              @click="playVideo('https://videos.melli.com/soziale-kontakte')">
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

  <video v-if="showVideo" ref="el" controls>
    <source :src="activeVideoWebm" type="video/webm">
    <source :src="activeVideoMp4" type="video/mp4">
  </video>
</template>
