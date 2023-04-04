<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager'

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
  <div class="flex flex-col gap-24">
    <div class="flex flex-col gap-12">
      <div class="flex flex-col gap-7.5">
        <BubbleIcon :bubble-type="0" icon="i-lucide:heart text-gray-900 w-16 h-16" bubble="text-primary-200 " />
        <h2 class="text-4xl sm:text-5xl font-semibold">
          Lass Oma & Opa wieder mehr an eurem Leben teilhaben
        </h2>
      </div>
      <div class="grid md:grid-cols-[55%_1fr] gap-15 relative">
        <div class="relative" @click="[playVideo(), fireVideoEvent('routinen')]">
          <video
            ref="healthyroutinesvideo"
            class="w-full rounded-2xl"
            height="475"
            poster="https://assets.melli.com/images/own-content/melli_commercial-screenshots_structure-3_lowRes-1024.webp"
            playsinline
          >
            <source
              src="https://videos.melli.com/struktur.webm"
              type="video/webm"
            >
          </video>
          <div v-if="!isPlaying" class="i-carbon:play-outline text-tertiary-200 text-6xl lg:text-8xl cursor-pointer absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
        </div>
        <div class="flex flex-col gap-12">
          <p class="leading-7">
            Melli sorgt dafür, dass sich Oma und Opa einfacher mit der ganzen Familie verbinden und mehr am Alltag ihrer Liebsten teilhaben können. Egal ob sie im Nachbarort wohnen, oder Urlaub am anderen Ende der Welt machen.
          </p>
          <div class="flex flex-col gap-3">
            <RouterLink to="/shop" class="rounded-lg bg-primary-400 text-white font-medium py-2.5 px-4 flex w-full sm:w-fit gap-2 m-auto md:m-0 justify-center">
              <div class="i-lucide:gift w-6 h-6" /><span>30 Tage kostenlos testen</span>
            </RouterLink>
            <a href="tel:030555703440" class="rounded-lg border-gray-900 font-medium border-2 text-gray-900 py-2.5 px-4 flex w-full sm:w-fit gap-2 m-auto md:m-0 justify-center">
              <div class="i-lucide:phone-call w-6 h-6" /><span>Lass dich beraten!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>
      2
    </div>
  </div>
</template>
