<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

defineProps<{
  question: string
  answer: string
}>()
</script>

<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton
      class="flex gap-4 w-full justify-between font-semibold text-left my-6 items-center text-xl"
    >
      <span>{{ question }}</span>
      <div
        :class="open ? 'rotate-180 transform duration-300 i-lucide:minus' : 'i-lucide:plus rotate-90 transform duration-300'"
        class="h-8 w-8 text-gray-900 shrink-0 "
      />
    </DisclosureButton>
    <DisclosurePanel class="my-6">
      {{ answer }}
    </DisclosurePanel>
  </Disclosure>
</template>
