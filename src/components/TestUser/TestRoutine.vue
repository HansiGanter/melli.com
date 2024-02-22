<script setup lang="ts">
const { t } = useI18n()

const routines = [
  {
    text: t('test-routine.first'),
  },
  {
    text: t('test-routine.second'),
  },
  {
    text: t('test-routine.third'),
  },
  {
    text: t('test-routine.fourth'),
  },
  {
    text: t('test-routine.fifth'),
  },
]
</script>

<template>
  <section class="py-12 lg:py-24 h-full">
    <div class="container max-w-screen-xl h-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid gap-20 overflow-hidden">
        <div class="lg:w-7/12">
          <span class="font-semibold text-4xl lg:text-5xl text-black">{{ t('test-routine.text') }}</span>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 content-center">
          <div class="lg:pr-16">
            <img src="https://melli-assets.netlify.app/images/mockups/device-listening.webp" class="">
          </div>
          <div class="grid gap-3 order-1 lg:order-2">
            <div class="flex flex-col lg:flex-row flex-wrap lg:items-center gap-3">
              <div v-for="routine in routines" :key="routine.text"
                class="flex gap-2 items-center text-gray-900 font-medium text-xl lg:text-2xl bg-tertiary-100 py-3.5 px-6 rounded-lg">
                <div class="i-carbon:checkmark-outline w-5 h-5" /> <span class="flex-1">{{ routine.text }}</span>
              </div>
            </div>
            <span class="font-normal text-base italic">*obligatorisch</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
