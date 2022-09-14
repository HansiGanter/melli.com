<script setup lang="ts">
defineProps<{
  modelValue: boolean
  disabled?: boolean
}>()
const emit = defineEmits<{ (name: 'update:modelValue', v: boolean): void }>()
</script>

<template>
  <Switch
    class="relative h-6 w-11 border rounded-full cursor-pointer transition-colors ease-in-out duration-200"
    :class="
      !disabled
        ? modelValue
          ? 'bg-primary-500 border-primary-600'
          : 'bg-gray-50 border-gray-200'
        : 'bg-gray-100 border-gray-200'"
    :model-value="modelValue"
    @update:model-value="disabled || emit('update:modelValue', !modelValue)"
  >
    <span
      class="absolute left-0 top-0 bottom-0 inline-block w-5.5 h-5.5 rounded-full shadow pointer-events-none transform ring-0 transition ease-in-out duration-200"
      :class="[modelValue ? 'translate-x-5' : '', !disabled ? 'bg-white' : 'bg-gray-50']"
    />
  </Switch>
</template>
