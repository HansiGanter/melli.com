<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="relative">
    <div class="absolute inset-0 flex flex-col" aria-hidden="true">
      <div class="flex-1 bg-gray-50" />
      <div class="flex-1" />
    </div>
    <Container class="relative">
      <div class="bg-gradient-to-r from-primary-200 to-secondary-200 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <h2 class="text-3xl text-primary font-extrabold text-primary-600 sm:text-4xl">
            {{ t('newsletter.heading') }}
          </h2>
          <p class="mt-4 text-lg leading-6 text-primary-800">
            {{ t('newsletter.text') }}
          </p>
          <p
            class="mt-2 mx-auto max-w-2xl text-sm text-primary-700"
          >
            {{ t('newsletter.condition') }}
          </p>
          <a href="#" class="mt-8 bg-white rounded-md shadow py-3 px-6 inline-flex items-center font-medium text-primary-700 hover:text-primary-500">
            {{ t('newsletter.subscribe') }}
          </a>
        </div>
        <div class="flex justify-center items-end">
          <img

            class="max-w-392px"
            src="https://mit-emilia.de/wp-content/uploads/2021/10/Emilia_sprechend_Zeichenflaeche-1.svg"
          >
        </div>
      </div>
    </Container>
  </div>
</template>
