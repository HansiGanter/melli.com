<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';
import { fireInfoPackageOpenEvent } from '~/google-tag-manager';

const greaterMd = useBreakpoints(breakpointsTailwind).greater('md');

const showNewsletterModal = ref(false);
const newsletterEmail = ref();

const openNewsletterModal = (email?: string) => {
  fireInfoPackageOpenEvent(email);
  newsletterEmail.value = email;
  showNewsletterModal.value = true;
};

const onEmailFormSubmit = (e: Event) => {
  const formData = new FormData(e.target as HTMLFormElement);
  const email = formData.get('email') as string;
  openNewsletterModal(email);
}

</script>

<template>
  <InfoPackageModal :show="showNewsletterModal" :email="newsletterEmail" @close="showNewsletterModal = false" centered />

  <Container class="lg:px-24 ">
    <InfopaketHeading class="my-8 sm:my-12" />
  </Container>

  <Container class="lg:px-24  my-12 sm:my-16">
    <form class="flex flex-wrap gap-4 justify-center" @submit.prevent="onEmailFormSubmit">
      <input class="border-2 rounded-lg w-full min-w-48 max-w-100 px-4 py-2.5" placeholder="name@email.de" type="email"
        name="email" required>
      <div class="flex gap-3">
        <InfopaketBestellen></InfopaketBestellen>
      </div>
    </form>

  </Container>

  <Container class="lg:px-24 ">
    <div v-if="greaterMd" class="flex gap-4">
      <div class="flex-[60%]" style="max-width: calc(60% - 16px);">
        <img class="rounded-2xl w-full h-full object-cover"
          src="https://melli-assets.netlify.app/images/stock/melli_mockup-print_brochure2-1024.webp"
          alt="Melli Magazin geöffnet auf Melli Seite">
      </div>
      <div class="rounded-2xl flex-[40%] max-w-[40%] object-cover" style="max-width: calc(40% - 16px);">
        <img class="rounded-2xl w-full h-full object-cover "
          src="https://melli-assets.netlify.app/images/stock/melli_mockup-print_brochure3-1024.webp"
          alt="Melli Magazin geöffnet auf Founder Seite">
      </div>
    </div>
    <div v-else>
      <img class="rounded-2xl w-full mx-auto my-4"
        src="https://melli-assets.netlify.app/images/stock/melli_mockup-print_brochure2-1024.webp"
        alt="Melli Magazin geöffnet auf Melli Seite">
      <img class="rounded-2xl mx-auto w-[66%] my-4"
        src="https://melli-assets.netlify.app/images/stock/melli_mockup-print_brochure3-1024.webp"
        alt="Melli Magazin geöffnet auf Founder Seite">
    </div>
  </Container>

  <Container class="lg:px-24 ">
    <InfoPackageContains class="my-12 sm:my-16 mx-auto" />
  </Container>

  <Container class="lg:px-24  py-8 bg-tertiary-50 dark:from-gray-900 dark:to-gray-800">
    <FaqSection />
  </Container>

  <Container class="lg:px-24 bg-primary-900 py-24 mb-48">
    <ContactSection />
  </Container>
</template>
