<script setup lang="ts">
defineProps<{
  images: string[]
}>()
</script>

<template>
  <ul class="flex flex-wrap gap-1 md:gap-2">
    <li v-for="image in images" :key="image" class="h-20vh md:h-30vh flex-grow-1 list-none last:flex-grow-10">
      <img :src="image" class="max-h-full min-w-full object-cover align-bottom rounded-lg">
    </li>
  </ul>
</template>
