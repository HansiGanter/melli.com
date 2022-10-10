<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="bg-primary-100 rounded-[32px] lg:rounded-[64px] px-6 py-16 lg:p-16 overflow-hidden">
    <div class="grid gap-16 justify-items-center">
      <div class="grid gap-8 text-center">
        <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
          {{ t('secure-melli.heading-1') }} <span class="text-primary-400">{{ t('secure-melli.heading-3') }}</span> {{ t('secure-melli.heading-2') }}
        </h1>
        <p class="text-gray-900 font-normal text-xl lg:text-2xl">
          {{ t('secure-melli.sub-text') }}
        </p>
      </div>
      <div class="grid gap-2 lg:w-6/12 lg:mx-auto">
        <NewsletterOpen />
      </div>
    </div>
  </div>
</template>
