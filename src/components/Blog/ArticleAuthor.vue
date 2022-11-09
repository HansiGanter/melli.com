<script setup lang="ts">
defineProps<{
  author: string
  date: string
}>()
</script>

<template>
  <Container>
    <div class="flex items-center gap-6 py-6">
      <span class="text-gray-500 text-base font-normal">{{ author }}</span>
      <span class="text-gray-400 text-base font-semibold">{{ date }}</span>
    </div>
  </Container>
</template>
