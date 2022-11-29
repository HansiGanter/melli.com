<script setup lang="ts">
defineProps<{
  heading: string
  icon: string
}>()
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:gap-4">
    <div class="bg-primary-400 w-12 h-12 my-auto shrink-0" :class="icon" />
    <p class="text-justify sm:text-start">
      <span class="font-semibold text-xl text-gray-900">{{ heading }}</span>
      <slot />
    </p>
  </div>
</template>
