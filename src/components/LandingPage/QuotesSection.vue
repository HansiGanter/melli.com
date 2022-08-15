<script setup lang="ts">
const { t } = useI18n()

const quotes = [
  {
    quote: t('quotes-section.quotes.quote-1'),
    name: 'Tochter von BW',
    image: 'https://assets.melli.com/images/stock/357607827.webp',
  },
  {
    quote: t('quotes-section.quotes.quote-2'),
    name: 'GT',
    image: 'https://assets.melli.com/images/stock/418724700.webp',
  },
  {
    quote: t('quotes-section.quotes.quote-3'),
    name: 'MC',
    image: 'https://assets.melli.com/images/stock/387915860.webp',
  },
]
</script>

<template>
  <div class="grid gap-16 mx-auto items-center">
    <div class="grid gap-4 lg:gap-6 text-center max-w-6xl mx-auto justify-items-center">
      <h1 class="text-white font-semibold text-4xl lg:text-5xl">
        {{ t('quotes-section.heading') }}
      </h1>
      <button class="bg-primary-500 py-4 px-7 rounded-lg text-white text-base font-medium w-fit">
        {{ t('quotes-section.test-melli') }}
      </button>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
      <div v-for="quote in quotes" :key="quote.name" class="bg-emerald-200/10 flex flex-col gap-5 rounded-3xl shadow-lg pb-6 overflow-clip">
        <div class="flex-shrink-0 justify-center flex rounded-3xl overflow-hidden">
          <img
            class="object-cover"
            :src="quote.image"
          >
        </div>
        <div class="flex-1 flex flex-col gap-3 justify-between p-7">
          <div class="flex-1">
            <div class="pt-2 grid gap-1">
              <h1 class="text-8xl leading-8 text-primary-300 font-semibold">
                “
              </h1>
              <h4 class="text-white text-lg lg:text-xl font-medium">
                {{ quote.quote }}
              </h4>
            </div>
          </div>
          <div class="flex items-center">
            <router-link to="#" class="flex items-center gap-2 text-primary-400 text-center">
              <span class="text-base font-normal">Nutzer-Geschichte ansehen</span>
              <img
                src="https://assets.melli.com/icons/arrow-circle.svg"
                class="mx-auto -rotate-90 stroke-primary-400 w-6"
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
