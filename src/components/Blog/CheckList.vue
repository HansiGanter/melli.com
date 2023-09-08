<script setup lang="ts">
withDefaults(defineProps<{
  icon: string
  itemClass: string
}>(), { itemClass: 'text-gray-500' })
</script>

<template>
  <ul class="p-0 sm:px-12">
    <li class="flex gap-3" :class="itemClass">
      <div class="text-primary-600 text-2xl shrink-0" :class="icon ? icon : 'i-heroicons-solid:check'" />
      <div class="text-lg font-normal">
        <slot />
      </div>
    </li>
  </ul>
</template>
