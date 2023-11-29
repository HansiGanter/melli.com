<script setup lang="ts">
defineProps<{
  author: string;
  date: string;
}>();
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:items-center sm:gap-6 sm:gap-6 py-6 mx-4 sm:mx-6">
    <span class="text-gray-500 text-base font-normal">{{ author }}</span>
    <span class="text-gray-400 text-base font-semibold">{{ date }}</span>
  </div>
</template>
