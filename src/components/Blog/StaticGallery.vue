<script setup lang="ts">
defineProps<{
  images: string[]
}>()
</script>

<template>
  <div v-if="images.length === 2" class="flex flex-col sm:flex-row gap-6 lg:gap-14 justify-center">
    <div v-for="image in images" :key="image" class="max-w-64 sm:max-w-80 lg:max-w-92 aspect-[8/11] w-fit ml-auto mr-auto" :class="images.indexOf(image) === 0 ? 'sm:ml-auto sm:mr-0' : 'sm:mr-auto sm:ml-0'">
      <img :src="image" class="object-cover rounded-3xl w-full h-full">
    </div>
  </div>
  <div v-if="images.length === 3" class="grid gap-6 lg:gap-14 grid-cols-1 sm:grid-cols-3">
    <div v-for="image in images" :key="image" class="max-w-64 sm:max-w-80 lg:max-w-92 aspect-[8/11] mx-auto">
      <img :src="image" class="object-cover rounded-3xl w-full h-full">
    </div>
  </div>
  <div v-if="images.length === 4" class="grid gap-2 md:gap-6 grid-cols-2 md:grid-cols-4">
    <div v-for="image in images" :key="image" class="max-w-64 sm:max-w-80 lg:max-w-92 aspect-[8/11] mx-auto">
      <img :src="image" class="object-cover rounded-3xl w-full h-full">
    </div>
  </div>
</template>
