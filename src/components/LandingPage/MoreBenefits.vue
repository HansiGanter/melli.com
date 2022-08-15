<script setup lang="ts">
const { t } = useI18n()

const benefits = ref([t('more-benefit-1'), t('more-benefit-2'), t('more-benefit-3'), t('more-benefit-4')])
</script>

<template>
  <div class="grid gap-8 lg:gap-16 mx-auto items-center">
    <div class="grid gap-16 bg-amber-100 px-6 lg:px-16 pt-10 lg:pt-16 pb-16 lg:pb-96">
      <div class="grid gap-4 lg:gap-6 text-center max-w-2xl mx-auto justify-items-center">
        <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
          {{ t('more-benefits.heading') }}
        </h1>
        <button class="bg-teal-900 text-medium text-base text-white w-fit flex items-center py-2.5 px-4 rounded-full gap-2">
          <span>alle Funktionen entdecken</span>
        </button>
      </div>
      <div class="grid gap-14">
        <div class="w-full lg:w-2/3">
          <p class="w-full lg:w-3/4 font-normal text-xl">
            {{ t('more-benefits.text') }}
          </p>
        </div>
        <div class="flex flex-col lg:flex-row items-center gap-8 w-full lg:w-9/12">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="text-gray-900 font-semibold text-base text-center bg-amber-900/10 py-3.5 px-6 rounded-lg mr-auto"
          >
            {{ benefit }}
          </div>
        </div>
      </div>
    </div>
    <div class="relative overflow-clip lg:max-w-6xl rounded-2xl lg:-mt-72 lg:ml-auto lg:-mr-20">
      <img src="https://assets.melli.com/images/stock/582347195.webp" class="w-full">
      <div class="i-heroicons-outline:play text-amber-200 text-8xl cursor-pointer absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
    </div>
  </div>
</template>
