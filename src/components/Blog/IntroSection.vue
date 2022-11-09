<script setup lang="ts">
interface InfoSectionProps {
  header?: string
  text: string
}

defineProps<InfoSectionProps>()
</script>

<template>
  <div class="grid gap-6 content-start text-gray-900">
    <h3 v-if="header" class="font-semibold text-2xl lg:text-3xl m-0">
      {{ header }}
    </h3>
    <p class="font-medium text-xl lg:text-2xl m-0">
      {{ text }}
    </p>
  </div>
</template>
