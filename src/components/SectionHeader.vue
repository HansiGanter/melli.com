<script setup lang="ts">
defineProps<{
  heading: string
  text: string
}>()
</script>

<template>
  <header class="sm:text-center lg:text-left">
    <h1 class="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
      {{ heading }}
    </h1>
    <p class="mt-6 text-xl ">
      {{ text }}
    </p>
  </header>
</template>
