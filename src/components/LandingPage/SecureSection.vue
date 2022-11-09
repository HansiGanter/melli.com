<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="bg-tertiary-100 grid md:grid-cols-2 rounded-[32px] overflow-hidden">
    <div class="sm:rounded-[32px] md:rounded-none justify-center">
      <img src="https://assets.melli.com/images/stock/melli_mockup-print_brochure2-1024.webp" class="object-cover h-full">
    </div>
    <div class="grid gap-10 px-4 sm:px-16 py-8 md:px-4 lg:px-12 lg:py-24">
      <div class="grid gap-4 text-center mx-6">
        <h1 class="text-gray-900 font-semibold text-3xl lg:text-4xl">
          {{ t('secure-melli.heading') }}
        </h1>
        <p class="text-gray-900 font-normal text-xl">
          {{ t('secure-melli.sub-text') }}
        </p>
      </div>
      <span>
        <NewsletterOpen />
      </span>
    </div>
  </div>
</template>
