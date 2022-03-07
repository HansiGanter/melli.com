<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <Container class="pt-16 pb-4 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-16 overflow-hidden">
    <BlurryHeader class="-top-20 -left-28 opacity-60" />
    <div class="grid gap-8 lg:grid-cols-2 items-center">
      <div class="sm:text-center lg:text-left md:max-w-2xl md:mx-auto">
        <div class="mix-blend-multiply dark:mix-blend-lighten">
          <div
            class="mb-1 text-sm font-semibold uppercase tracking-wide text-primary-800 dark:text-primary-200 sm:text-base lg:text-sm xl:text-base"
          >
            {{ t('hero.coming-soon') }}
          </div>
          <h1
            class="mb-2 tracking-tighter inline-block font-bold text-transparent text-5xl sm:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-l from-primary-300 to-secondary-300"
          >
            {{ t('hero.heading-1') }}
          </h1>
          <h2
            class="mb-8 tracking-tight text-2xl sm:text-3xl xl:text-4xl text-primary-800 dark:text-primary-200"
          >
            {{ t('hero.heading-2') }}
          </h2>
          <p class="sm:mt-5 sm:text-xl lg:text-lg xl:text-xl ">
            {{ t('hero.heading-3') }}
          </p>
        </div>
        <div class="mt-10 grid sm:inline-grid sm:grid-cols-2 gap-3">
          <router-link
            to="/subscription"
            class="grid place-items-center px-6 py-3 font-medium rounded-md text-primary-800 bg-gradient-to-tl from-primary-50 to-secondary-50 hover:text-primary-600"
          >
            {{ t('hero.pre-order') }}
          </router-link>
          <router-link
            to="/how-it-works"
            class="grid place-items-center px-6 py-3 font-medium rounded-md opacity-65 hover:opacity-50"
          >
            {{ t('hero.learn-more') }}
          </router-link>
        </div>
      </div>
      <div
        class="rounded-2xl px-16 pt-4 bg-gradient-to-l from-primary-100 to-secondary-100 border-12 border-gray-900 shadow-lg"
      >
        <img
          class="h-full max-w-xs ml-auto "
          src="https://mit-emilia.de/wp-content/uploads/2021/10/Emilia_sprechend_Zeichenflaeche-1.svg"
        >
      </div>
    </div>
  </Container>
</template>
