<script setup lang="ts">
const { t } = useI18n()

const hero = {
  title:
      {
        highlight: t('hero.heading-1.highlight'),
        text: t('hero.heading-1.text'),
      },
  description: t('hero.heading-3'),
}
</script>

<template>
  <Container class="backdrop-contrast-75 py-40 sm:py-16 lg:py-80 bg-no-repeat bg-cover bg-center lg:bg-top-right" style="background-image: url('https://assets.melli.com/images/stock/584239506.webp')">
    <div class="filter-none grid gap-5 lg:gap-9 lg:w-1/2 lg:mx-auto md:text-center">
      <h1 class="font-semibold text-4xl md:text-5xl text-white">
        <span class="text-primary-400">{{ hero.title.highlight }}</span> {{ hero.title.text }}
      </h1>
      <a href="#" class="flex justify-start gap-2.5 items-center text-primary-300 font-medium text-base mr-auto lg:mx-auto">
        <span>Sieh dir das ganze Video an</span>
        <img
          src="https://assets.melli.com/icons/arrow-circle.svg"
          class="mx-auto stroke-primary-300 w-6"
        >
      </a>
    </div>
  </Container>
</template>
