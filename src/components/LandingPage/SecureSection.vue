<script setup lang="ts">
const { t } = useI18n();
import { fireInfoPackageOpenEvent } from '~/google-tag-manager';



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
};
</script>

<template>
  <InfoPackageModal :show="showNewsletterModal" :email="newsletterEmail" @close="showNewsletterModal = false" />

  <div class="bg-amber-100 grid md:grid-cols-2 rounded-3xl overflow-hidden">
    <div class="sm:rounded-t-3xl md:rounded-none justify-center min-h-60"
      style="background-image: url('https://assets.melli.com/images/stock/melli_mockup-print_brochure2-1024.webp'); background-size: cover;background-position: center;" />
    <div class="grid gap-10 p-8 lg:px-12 lg:py-24">
      <div class="text-amber-900 grid gap-4 text-center md:text-left">
        <h1 class="font-semibold text-3xl lg:text-4xl">
          {{ t('secure-melli.heading') }}
        </h1>
        <p class="font-normal text-xl">
          {{ t('secure-melli.sub-text') }}
        </p>
      </div>
      <span>
        <form class="flex flex-wrap gap-4" @submit.prevent="onEmailFormSubmit">
          <input class="border-2 rounded-lg w-full min-w-48 max-w-100 px-4 py-2.5" placeholder="name@email.de"
            type="email" name="email" required>
          <div class="flex gap-3">
            <button type="submit"
              class="text-white bg-amber-500 flex gap-2 items-center px-7 py-4 rounded-full w-fit font-medium">
              Infopaket&nbsp;bestellen
              <div class="i-lucide:arrow-right w-6 h-6 shrink-0" />
            </button>
          </div>
        </form>
      </span>
    </div>
  </div>
</template>
