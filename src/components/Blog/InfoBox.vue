<script setup lang="ts">
defineProps<{
  icon: string
  heading: string
}>()
</script>

<template>
  <div class="bg-primary-100 rounded-3xl p-8">
    <div class="color-primary-400 w-8 h-8" :class="icon" />
    <h3 class="text-primary-900 my-4">
      {{ heading }}
    </h3>
    <slot />
  </div>
</template>
