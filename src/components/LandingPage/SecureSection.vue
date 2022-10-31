<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="bg-tertiary-100 grid gap-16 pb-[7%] sm:p-[7%] rounded-[32px] overflow-hidden mx-auto md:max-w-3/4 lg:max-w-2/3">
    <img src="https://assets.melli.com/images/stock/melli_mockup-print_brochure2-1024.webp" class="sm:rounded-[32px]">
    <div class="grid gap-4 lg:gap-8 text-center mx-6">
      <h1 class="text-gray-900 font-semibold text-3xl lg:text-5xl">
        {{ t('secure-melli.heading') }}
      </h1>
      <p class="text-gray-900 font-normal text-xl lg:text-2xl">
        {{ t('secure-melli.sub-text') }}
      </p>
    </div>
    <div class="grid gap-2 md:w-3/4 lg:w-2/3 mb-8 mx-6 lg:mb-8 md:mx-auto">
      <NewsletterOpen />
    </div>
  </div>
</template>
