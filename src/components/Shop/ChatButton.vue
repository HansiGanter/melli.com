<script setup lang="ts">
defineProps<{
  value: string
  isActive: boolean
  label1: string
  label2?: string
  onClick: (value: any) => void
}>()
</script>

<template>
  <button
    :class="{
      'bg-primary-200 border-none': isActive,
      'border-1.5 border-gray-900': !isActive,
    }"
    class="group rounded-lg w-fit ml-auto py-2.5 px-3 text-right hover:border-2"
    @click="onClick(value)"
  >
    <span class="text-xl font-medium group-hover:font-semibold">{{ label1 }}</span><br>
    <span v-if="label2" class="text-base font-normal group-hover:font-medium">{{ label2 }}</span>
  </button>
</template>
