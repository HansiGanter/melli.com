<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="py-12 lg:py-24 h-full">
    <div class="lg:container h-full mx-auto lg:px-0">
      <div class="lg:px-8 px-6 overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 content-center">
          <div class="grid gap-7 lg:gap-14 w-fit lg:pl-16">
            <div class="grid gap-4 lg:gap-6">
              <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
                {{ t('melli-listens.heading') }}
              </h1>
              <button class="bg-teal-900 text-medium text-base text-white w-fit flex items-center py-2.5 px-4 rounded-full gap-2">
                <span>alle Funktionen entdecken</span>
              </button>
            </div>
            <p class="text-black font-normal text-xl">
              {{ t('melli-listens.text') }}
            </p>
          </div>
          <div class="lg:pr-16">
            <img src="https://assets.melli.com/images/mockups/device-listening.webp" class="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
