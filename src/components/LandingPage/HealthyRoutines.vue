<script setup lang="ts">
const { t } = useI18n()

const benefits = ref([
  t('healthy-routines-1'),
  t('healthy-routines-2'),
  t('healthy-routines-3'),
])
</script>

<template>
  <div class="grid gap-20">
    <div class="grid gap-7">
      <h1 class="font-semibold text-gray-900 text-4xl lg:text-5xl lg:w-1/2">
        {{ t('healthy-routine.header') }}
      </h1>
      <button class="bg-teal-900 text-medium text-base text-white w-fit flex items-center py-2.5 px-4 rounded-full gap-2">
        <span>alle Funktionen entdecken</span>
      </button>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div class="relative overflow-clip rounded-2xl h-fit order-2 lg:order-1">
        <img src="https://assets.melli.com/images/stock/582347195.webp" class="w-full">
        <div class="i-heroicons-outline:play text-amber-200 text-6xl lg:text-8xl cursor-pointer absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
      </div>
      <div class="grid gap-10 lg:gap-20 order-1 lg:order-2">
        <span class="font-normal text-xl text-black">{{ t('healthy-routine.text') }}</span>
        <div class="flex flex-col lg:flex-row flex-wrap items-center gap-8">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="text-gray-900 font-semibold text-base bg-amber-800/10 py-3.5 px-6 rounded-lg"
          >
            {{ benefit }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
