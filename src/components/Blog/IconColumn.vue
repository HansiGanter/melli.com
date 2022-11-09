<script setup lang="ts">
defineProps<{
  items: Array<{
    icon: string
    heading: string
    text: string }>
}>()
</script>

<template>
  <div class="grid gap-8 grid-cols-1" :class="`md:grid-cols-${items.length}`">
    <div v-for="item in items" :key="item.text" class="grid gap-4">
      <div class="color-primary-400 w-8 h-8 shrink-0" :class="item.icon" />
      <h5 class="text-gray-900">
        {{ item.heading }}
      </h5>
      <p class="m-0 text-gray-600">
        {{ item.text }}
      </p>
    </div>
  </div>
</template>
