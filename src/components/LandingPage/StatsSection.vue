<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="max-w-4xl mx-auto sm:text-center">
    <h2 class="text-3xl font-extrabold sm:text-4xl">
      <heroicons-solid:check-circle class="inline mb-1.5 mr-1 text-primary-600" />
      {{ t('stats-section.heading') }}
    </h2>
    <p
      class="mt-3 text-lg opacity-65 sm:mt-4"
    >
      {{ t('stats-section.text') }}
    </p>
  </div>
  <div class="mt-10 pb-12 sm:pb-16">
    <div class="relative max-w-7xl mx-auto">
      <div class="max-w-4xl mx-auto">
        <dl class="rounded-lg bg-white dark:bg-gray-800 shadow-lg sm:grid sm:grid-cols-3">
          <div
            class="flex flex-col border-b border-gray-100 dark:border-gray-900 p-6 text-center sm:border-0 sm:border-r"
          >
            <dt
              class="tracking-tight order-2 mt-2 text-lg leading-6 font-medium opacity-65"
            >
              {{ t('stats-section.accessibility') }}
            </dt>
            <dd class="order-1 text-5xl font-extrabold text-primary-300">
              100%
            </dd>
          </div>
          <div
            class="flex flex-col border-t border-b border-gray-100 dark:border-gray-900 p-6 text-center sm:border-0 sm:border-l sm:border-r"
          >
            <dt
              class="tracking-tight order-2 mt-2 text-lg leading-6 font-medium opacity-65"
            >
              {{ t('stats-section.safety') }}
            </dt>
            <dd class="order-1 text-5xl font-extrabold text-secondary-300">
              24/7
            </dd>
          </div>
          <div
            class="flex flex-col border-t border-gray-100 dark:border-gray-900 p-6 text-center sm:border-0 sm:border-l"
          >
            <dt
              class="tracking-tight order-2 mt-2 text-lg leading-6 font-medium opacity-65"
            >
              {{ t('stats-section.social-integration') }}
            </dt>
            <dd class="tracking-tight order-1 text-5xl font-extrabold text-tertiary-300">
              {{ t('stats-section.more') }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
