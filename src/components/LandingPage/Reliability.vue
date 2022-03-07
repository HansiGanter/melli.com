<script setup lang="ts">
const { t } = useI18n()

const incentives = [
  {
    name: 'Immer erreichbar.',
    description: 'Emilia geht von alleine dran, wenn es wirklich wichtig ist',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
  },
  {
    name: 'Immer im Einsatz.',
    description: 'Emilia ist auch dann noch da, wenn andere schon längst Feierabend haben.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
  },
  {
    name: 'Immer zur Hilfe.',
    description: 'Emilia benachrichtigt in Notfallsituationen nahestehende Kontakte.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
  },
]
</script>

<template>
  <div class="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
    <div class="grid gap-4">
      <h1 class="font-medium text-lg sm:text-2xl">{{ t('reliability.heading') }}</h1>
      <h2>{{ t('reliability.text') }}</h2>
    </div>
    <div
      class="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3"
    >
      <div
        v-for="incentive in incentives"
        :key="incentive.name"
        class="text-center sm:flex sm:text-left lg:block lg:text-center"
      >
        <div class="sm:flex-shrink-0">
          <div class="flow-root">
            <img class="w-28 h-24 mx-auto" :src="incentive.imageSrc" alt />
          </div>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
          <h3 class="text-sm font-medium">{{ incentive.name }}</h3>
          <p class="mt-2 text-sm text-gray-500">{{ incentive.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
