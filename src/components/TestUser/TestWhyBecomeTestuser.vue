<script setup lang="ts">
const { t } = useI18n()
const features = ref([
  {
    title: t('test-why-become-testuser.feature-1.title'),
    text: t('test-why-become-testuser.feature-1.text'),
    src: 'https://melli-assets.netlify.app/pictograms/award.svg',
  },
  {
    title: t('test-why-become-testuser.feature-2.title'),
    text: t('test-why-become-testuser.feature-2.text'),
    src: 'https://melli-assets.netlify.app/pictograms/heart.svg',
  },
  {
    title: t('test-why-become-testuser.feature-3.title'),
    text: t('test-why-become-testuser.feature-3.text'),
    src: 'https://melli-assets.netlify.app/pictograms/next.svg',
  },
])
</script>

<template>
  <div class="grid gap-8 lg:gap-16 mx-auto items-center">
    <div class="grid gap-4 lg:gap-6 text-center max-w-2xl mx-auto justify-items-center">
      <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
        {{ t('test-why-become-testuser.heading') }}
      </h1>
    </div>
    <div class="grid gap-16 bg-primary-100 px-6 lg:px-16 pt-10 lg:pt-16 pb-16 lg:pb-60">
      <div class="grid gap-14 w-full">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div v-for="feature in features" :key="feature.title" class="flex lg:flex-row flex-col gap-6 items-start">
            <img :src="feature.src" class="w-12 lg:w-24 h-12 lg:h-24">
            <div class="grid gap-1 text-black text-xl">
              <h5 class="font-semibold">
                {{ feature.title }}
              </h5>
              <span class="font-normal">{{ feature.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative overflow-hidden lg:max-w-5xl mx-auto rounded-2xl lg:-mt-60">
      <img src="https://melli-assets.netlify.app/images/stock/granny-with-dog-1024.webp" class="w-full">
    </div>
  </div>
</template>
