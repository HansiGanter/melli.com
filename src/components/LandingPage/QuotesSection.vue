<script setup lang="ts">
const { t } = useI18n()

const quotes = [
  {
    quote: t('quotes-section.quotes.quote-1'),
    name: 'Walter* (73 Jahre), Nutzer',
    image: 'https://melli-assets.netlify.app/images/stock/walter-portrait.webp',
  },
  {
    quote: t('quotes-section.quotes.quote-2'),
    name: 'Irmgard* (69 Jahre), Nutzerin',
    image: 'https://melli-assets.netlify.app/images/stock/irmgard-portrait.webp',
  },
  {
    quote: t('quotes-section.quotes.quote-3'),
    name: 'Stephanie S., Pflegedienstleiterin',
    image: 'https://melli-assets.netlify.app/images/stock/stephanie-portrait.webp',
  },
]
</script>

<template>
  <div class="grid gap-8 lg:gap-16 mx-auto items-center">
    <div class="grid gap-4 lg:gap-6 text-center max-w-6xl mx-auto justify-items-center">
      <h1 class="text-white font-semibold text-4xl lg:text-5xl">
        {{ t('quotes-section.heading') }}
      </h1>
      <!-- <router-link to="/shop" class="bg-primary-500 py-4 px-7 rounded-lg text-white text-base font-medium w-fit" @click="fireShopEvent">
        {{ t('quotes-section.test-melli') }}
      </router-link> -->
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      <div v-for="quote in quotes" :key="quote.name"
        class="bg-primary-200/10 flex flex-col gap-5 rounded-3xl shadow-lg pb-6 overflow-clip">
        <div class="flex-shrink-0 justify-center flex rounded-t-3xl overflow-hidden h-64">
          <img class="object-cover w-full" :src="quote.image">
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
            <span class="text-base font-normal text-primary-400">{{ quote.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <p class="lg:ml-auto text-white">
      *Aus Datenschutzgründen haben wir den Namen unserer Testnutzer geändert.
    </p>
  </div>
</template>
