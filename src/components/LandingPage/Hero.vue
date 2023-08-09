<script setup lang="ts">
const emit = defineEmits<{
  (event: 'newsletterButtonClicked', email?: string): void
}>()

const showVideo = ref(false)
const el = ref<HTMLMediaElement | null>(null)
const activeVideoWebm = ref('')
const activeVideoMp4 = ref('')

const email = ref('')

// for iOS on iPhone
// @ts-expect-error webkitIsFullScreen is only defined on iOS
useEventListener(el, 'webkitendfullscreen', () => showVideo.value = document.webkitIsFullScreen)
// for everything else
useEventListener(el, 'fullscreenchange', () => showVideo.value = !!document.fullscreenElement)
</script>

<template>
  <header class="relative bg-black" style="height: calc(100vh - 80px)">
    <!-- The video -->
    <video id="heroVideo" ref="heroVideo" class="w-full h-full object-cover" autoplay loop muted playsinline
      poster="https://assets.melli.com/images/stock/red-hair-greeting-1024.webp">
      <source src="https://videos.melli.com/soziale-kontakte.webm" type="video/webm">
      <source src="https://videos.melli.com/soziale-kontakte.mp4" type="video/mp4">
    </video>

    <!-- Heading & link to Video -->
    <div class="absolute top-0 w-full h-full bg-black/20 flex flex-col">
      <slot />
      <div class="flex flex-col gap-5 sm:gap-9 py-12 my-auto px-5 max-w-200 mx-auto">
        <h1 class="font-semibold text-4xl sm:text-5xl text-center">
          <span class="text-primary-300 leading-tight">
            Melli -
          </span>
          <span class="text-white leading-tight">
            deine Freundin für ein glückliches Älterwerden
          </span>
        </h1>
        <form class="flex flex-wrap gap-4 justify-center" @submit.prevent="() => emit('newsletterButtonClicked', email)">
          <input v-model="email" class="border-2 rounded-full w-full min-w-48 max-w-100 px-4 py-2.5"
            placeholder="name@email.de" type="email" name="email" required>
          <div class="flex gap-3">
            <button type="submit"
              class="text-white bg-primary-400 flex gap-0.5 items-center px-7 py-3 rounded-lg w-fit font-medium">
              Infopaket&nbsp;bestellen
              <div class="i-lucide:arrow-right w-6 h-6 shrink-0" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </header>
  <video v-if="showVideo" ref="el" controls>
    <source :src="activeVideoWebm" type="video/webm">
    <source :src="activeVideoMp4" type="video/mp4">
  </video>
</template>
