<script setup lang="ts">
defineProps<{
  source: string
}>()
</script>

<template>
  <div class="px-12">
    <p class="text-7xl font-semibold text-tertiary-500 my-0 -mb-10">
      “
    </p>
    <p class="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
      <slot />
    </p>
    <p class="text-sm sm:text-base text-gray-600 my-0">
      {{ source }}
    </p>
  </div>
</template>
