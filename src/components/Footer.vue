<script setup lang="ts">
import { fireContactEvent, fireInfoPackageOpenEvent } from '~/google-tag-manager';

const email = ref('');
const showNewsletterModal = ref(false);
const newsletterEmail = ref();

const openNewsletterModal = (email?: string) => {
  fireInfoPackageOpenEvent(email);
  newsletterEmail.value = email;
  showNewsletterModal.value = true;
};
</script>
<template>
  <InfoPackageModal :show="showNewsletterModal" :email="newsletterEmail" @close="showNewsletterModal = false" />

  <footer>
    <Container id="footer-img" class="w-full h-full py-24 rounded-tr-48px sm:rounded-tr-96px">
      <div class="flex flex-col gap-12 max-w-180">
        <h1 class="text-white text-3xl sm:text-5xl font-semibold">Hol dir das Melli-Infopaket nach Hause!</h1>
        <form class="flex flex-wrap gap-3" @submit.prevent="openNewsletterModal(email)">
          <input v-model="email" class="border-2 rounded-lg w-full px-4 py-2.5 max-w-100" placeholder="name@email.de"
            type="email" name="email" required>
          <InfopaketBestellen></InfopaketBestellen>
          <p class="text-white text-xl">Lass dir das Infopaket kostenlos per Post oder Email zusenden.</p>
        </form>
      </div>
    </Container>
    <Container class="bg-primary-900 pt-24 pb-12">
      <div class="grid gap-16">
        <div class="grid md:grid-cols-2 gap-24">
          <div class="grid gap-12">
            <h2 class="text-3xl text-primary-400 font-semibold">Offene Fragen?</h2>
            <p class="text-white">Egal, ob Fragen zum Produkt oder zum Bestellprozess - wir beraten dich per E-Mail,
              WhatsApp und natürlich
              telefonisch und räumen alle Unklarheiten aus dem Weg.
            </p>
            <div class="flex flex-col lg:flex-row gap-8 text-white">
              <CallOrPipedrive></CallOrPipedrive>
              <a href="mailto:support@melli.com" class="flex gap-3 items-center justify-start px-4"
                @click="fireContactEvent('email')">
                <div class="i-lucide:mail w-8 h-8 text-primary-300"></div>
                <span>info@melli.com</span>
              </a>
            </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-8 text-white">
            <div class="flex flex-col gap-3 justify-start">
              <h4 class="text-primary-400 text-lg font-semibold">FAQ & Login</h4>
              <a href="https://melli.com/faq">Häufige Fragen</a>
              <a href="https://app.melli.com/">Benutzer-Login</a>
              <h4 class="text-primary-400 text-lg font-semibold mt-6">Wichtige Links</h4>
              <a href="https://melli.com/agb">AGB & Widerrufsbelehrung</a>
              <a href="https://melli.com/datenschutz">Datenschutz Website</a>
              <a href="https://melli.com/datenschutz-melli">Datenschutz Melli</a>
              <a href="https://melli.com/impressum">Impressum</a>
            </div>
            <div class="flex flex-col gap-3 justify-start">
              <h4 class="text-primary-400 text-lg font-semibold">Folge uns!</h4>
              <a href="https://www.facebook.com/meine.melli" class="flex gap-2 justify-start items-center">
                <div class="i-lucide:facebook text-primary-400 w-6 h-6"></div>Facebook
              </a>
              <a href="https://www.instagram.com/meine.melli/" class="flex gap-2 justify-start items-center">
                <div class="i-lucide:instagram text-primary-400 w-6 h-6"></div>Instagram
              </a>
              <a href="https://www.linkedin.com/company/mit-melli/" class="flex gap-2 justify-start items-center">
                <div class="i-lucide:linkedin text-primary-400 w-6 h-6"></div>LinkedIn
              </a>
              <a href="https://github.com/melli-labs" class="flex gap-2 justify-start items-center">
                <div class="i-lucide:github text-primary-400 w-6 h-6"></div>GitHub
              </a>
              <a href="https://www.youtube.com/channel/UC9kINIc7RSUKfMu8LXaWnTQ"
                class="flex gap-2 justify-start items-center">
                <div class="i-lucide:youtube text-primary-400 w-6 h-6"></div>YouTube
              </a>
            </div>
          </div>
        </div>
        <div class="flex items-baseline justify-between pt-8 border-white border-t-1">
          <img src="https://melli-assets.netlify.app/logo.svg" alt="Melli Logo">
          <p class="text-white">© {{ new Date().getFullYear() }} Melli. All rights reserved.</p>
        </div>
      </div>
    </Container>
  </footer>
</template>
<style>
#footer-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://melli-assets.netlify.app/images/own-content/melli-infopaket-content-1024.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>