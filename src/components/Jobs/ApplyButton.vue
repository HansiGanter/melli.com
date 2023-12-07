<script setup lang="ts">
// import { fireJobApplyEvent } from '~/google-tag-manager'
defineProps<{ apply: string; }>();
</script>

<template>
  <div class="w-full flex items-center justify-end">
    <a :href="apply" target="_blank" class="py-4 px-7 bg-primary-500 rounded-lg decoration-none">
      <span class="text-white font-semibold text-base">Jetzt bewerben</span>
    </a>
  </div>
</template>

<style scoped></style>
