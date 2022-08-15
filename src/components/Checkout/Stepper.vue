<script setup lang="ts">
import { useCheckoutStore } from '~/stores/checkout'
const checkoutStore = useCheckoutStore()
const route = useRoute()
</script>

<template>
  <nav aria-label="Progress">
    <ol role="list" class="flex items-center">
      <li v-for="(step, stepIdx) in checkoutStore.steps" :key="stepIdx" class="relative" :class="[route.path !== step.path ? 'pr-0' : '', stepIdx < 2 ? 'grow' : '']">
        <template v-if="step.status === 'complete'">
          <div v-if="stepIdx < 2" class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-primary-700" />
          </div>
          <a href="#" class="relative w-8 h-8 flex items-center justify-center bg-primary-50 border-2 border-primary-700 rounded-full">
            <div class="i-heroicons-outline:check w-5 h-5 text-primary-700" aria-hidden="true" />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else-if="step.status === 'current'">
          <div v-if="stepIdx < 2" class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <a href="#" class="relative w-8 h-8 flex items-center justify-center bg-primary-50 border-2 border-primary-700 rounded-full" aria-current="step">
            <span class="h-2.5 w-2.5 bg-primary-700 rounded-full" aria-hidden="true" />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
        <template v-else>
          <div v-if="stepIdx < 2" class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <a href="#" class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
            <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
            <span class="sr-only">{{ step.name }}</span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>
