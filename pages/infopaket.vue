<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
const greaterMd = useBreakpoints(breakpointsTailwind).greater('md')
</script>

<template>
  <Container class="px-5">
    <InfopaketHeading class="my-8 sm:my-12" />
  </Container>

  <Container class="px-5 my-12 sm:my-16">
    <InfoPackageDialogOpen />
  </Container>

  <Container class="px-5">
    <div v-if="greaterMd" class="flex gap-4">
      <div class="flex-[60%]" style="max-width: calc(60% - 16px);">
        <img class="rounded-2xl w-full h-full object-cover" src="https://assets.melli.com/images/stock/melli_mockup-print_brochure2-1024.webp" alt="Melli Magazin geöffnet auf Melli Seite">
      </div>
      <div class="rounded-2xl flex-[40%] max-w-[40%] object-cover" style="max-width: calc(40% - 16px);">
        <img class="rounded-2xl w-full h-full object-cover " src="https://assets.melli.com/images/stock/melli_mockup-print_brochure3-1024.webp" alt="Melli Magazin geöffnet auf Founder Seite">
      </div>
    </div>
    <div v-else>
      <img class="rounded-2xl w-full mx-auto my-4" src="https://assets.melli.com/images/stock/melli_mockup-print_brochure2-1024.webp" alt="Melli Magazin geöffnet auf Melli Seite">
      <img class="rounded-2xl mx-auto w-[66%] my-4" src="https://assets.melli.com/images/stock/melli_mockup-print_brochure3-1024.webp" alt="Melli Magazin geöffnet auf Founder Seite">
    </div>
  </Container>

  <Container class="px-5">
    <InfoPackageContains class="my-12 sm:my-16 mx-auto" />
  </Container>

  <Container class="px-5 py-8 bg-tertiary-50 dark:from-gray-900 dark:to-gray-800">
    <FaqSection />
  </Container>

  <Container class="bg-primary-900 py-24 px-5 ">
    <ContactSection />
  </Container>
</template>
