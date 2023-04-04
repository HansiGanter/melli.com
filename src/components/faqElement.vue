<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { fireFAQEvent } from '~/google-tag-manager';

defineProps<{
  question: string
  answer: string
}>()
</script>

<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton class="w-full"
    >
    <div class="flex justify-between w-full gap-4 font-semibold text-left my-6 items-center text-xl" @click="fireFAQEvent(question)">
      <span>{{ question }}</span>
      <div
        :class="open ? 'rotate-180 transform duration-300 i-lucide:minus' : 'i-lucide:plus rotate-90 transform duration-300'"
        class="h-8 w-8 text-gray-900 shrink-0 "
      />
    </div>
    </DisclosureButton>
    <DisclosurePanel class="my-6">
      {{ answer }}
    </DisclosurePanel>
  </Disclosure>
</template>
