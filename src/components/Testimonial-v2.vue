<script setup lang="ts">
defineProps<{
  text: string
  author: string
  imageSrc: string
  interviewVideoSrc?: string
}>()

const videoToOpen = ref<string>()
</script>

<template>
  <Modal :show="!!videoToOpen" container-class="w-fit mx-auto sm:min-w-unset" @close="videoToOpen = undefined">
    <video v-if="videoToOpen" class="max-h-screen" controls playsinline autoplay>
      <source :src="videoToOpen" type="video/webm">
    </video>
  </Modal>

  <div class="w-1 grow min-w-80 rounded-3xl overflow-hidden bg-primary-50 bg-opacity-5 shadow-2xl">
    <img class="rounded-3xl overflow-hidden h-66 w-full self-stretch object-cover object-top" :src="imageSrc">
    <div class="p-6 grid gap-3">
      <div class="color-amber-400 font-semibold text-8xl mb--12">
        “
      </div>
      <p class="text-lg font-medium">
        {{ text }}
      </p>
      <div class="text-primary-400">
        {{ author }}
      </div>
      <button class="flex items-center gap-2 p-2 pr-4 rounded-xl border border-primary-100 w-fit"
        @click="videoToOpen = interviewVideoSrc">
        <div class="w-10 h-10 i-ph:play" />
        Interview ansehen
      </button>
    </div>
  </div>
</template>
