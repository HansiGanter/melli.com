<script setup lang="ts">
import { fireInfoPackageOpenEvent, fireMelliDemoEvent } from '~/google-tag-manager';

const { t } = useI18n();
useHead({
  title: 'Melli - die digitale Begleiterin für Senioren',
  meta: [
    { name: 'description', content: 'Seniorentablet, Sprachassistentin und Smartphone in Einem. Melli verbindet dich mit Oma & Opa und sorgt für einen bunten und aktiven Alltag.' },
  ],
});

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

const sliderImages = [
  "https://assets.melli.com/images/mockups/04_levnovo_tabm10_3rdGen/mockup-device-free-front-with-stand_christmas-1536.webp",
  "https://assets.melli.com/images/mockups/04_levnovo_tabm10_3rdGen/mockup-device-free-front-with-stand-intro-1536.webp",
  "https://assets.melli.com/images/mockups/04_levnovo_tabm10_3rdGen/mockup-device-free_front_with-stand_video-call_and_mobile_callscreen-1536.webp",
  "https://assets.melli.com/images/mockups/04_levnovo_tabm10_3rdGen/mockup-device-free_front_with-stand_movement-exercise-1536.webp",
  "https://assets.melli.com/images/mockups/04_levnovo_tabm10_3rdGen/mockup-device-free_front_with-stand_med-reminder_and_mobile_medscreen-1536.webp",
  "https://assets.melli.com/images/mockups/04_levnovo_tabm10_3rdGen/mockup-device-free_front_with-stand_scheduler-1536.webp",
  "https://assets.melli.com/images/mockups/03_smartphone/mockup-mobile_interessts_and_chat_screen-1536.webp",
];
</script>

<template>
  <InfoPackageModal :show="showNewsletterModal" :email="newsletterEmail" @close="showNewsletterModal = false" />

  <div class="grid gap-16">
    <div>
      <Hero @newsletter-button-clicked="(email) => openNewsletterModal(email)" />

      <Container>
        <!-- <FlipCards class="-mt-16" /> -->
        <HeroCards class="-mt-16 relative" />
      </Container>
    </div>

    <Container class="mx-auto mt-12 sm:mt-24">
      <Carousel arrow-button-size="big">
        <img v-for="sliderImage in sliderImages" :src="sliderImage" class="snap-center">
      </Carousel>
      <p class="text-center text-xl max-w-150 mx-auto mt-12 sm:mt-6 mb-6">
        Du möchtest Melli ausprobieren? Klick dich durch unsere Online-Demo um einen besseren Eindruck zu bekommen.
      </p>
      <a href="https://m.melli.com/melli-demo"
        class="flex gap-3 p-3 w-fit rounded-xl border-primary-400 border-2 font-medium items-center justify-center mx-auto"
        @click="fireMelliDemoEvent()">
        <div class="i-lucide:mouse-pointer w-8 h-8 text-primary-400"></div>Zur Melli-Demo
      </a>
    </Container>

    <div class="my-12 md:my-16 lg:my-24">
      <Partner />
    </div>

    <Container class="bg-primary-900 rounded-3xl py-12  lg:py-24">
      <PromoKPIs @newsletter-button-clicked="() => openNewsletterModal()" />
    </Container>

    <Container class="">
      <Reliability @open-newsletter-modal="openNewsletterModal" />
    </Container>

    <Container class="">
      <div class="rounded-3xl overflow-hidden bg-primary-700 flex flex-col md:flex-row my-12 sm:my-24">
        <img class="md:max-w-100 object-cover"
          src="https://assets.melli.com/images/stock/melli_mockup-print_brochure2-1024.webp">
        <div class="grid gap-4 px-6 sm:px-12 py-12 sm:py-24">
          <h2 class="font-semibold text-3xl lg:text-4xl text-white">
            {{ t('secure-melli.heading') }}
          </h2>
          <p class="font-medium text-xl mb-4 text-white">
            {{ t('secure-melli.sub-text') }}
          </p>
          <form class="flex flex-wrap gap-4 justify-center md:justify-start" @submit.prevent="onEmailFormSubmit">
            <input class="border-2 rounded-lg w-full min-w-48 max-w-100 px-4 py-2.5" placeholder="name@email.de"
              type="email" name="email" required>
            <div class="flex gap-3">
              <InfopaketBestellen></InfopaketBestellen>
            </div>
          </form>
        </div>
      </div>
    </Container>

    <Container>
      <Gemeinschaft />
    </Container>

    <Container id="vernetzen" class="">
      <Vernetzen />
    </Container>

    <Container class="lg:my-16">
      <Sicherheit />
    </Container>

    <!-- TESTIMONIALS -->
    <Container id="glücklicher" class="bg-primary-800 rounded-3xl py-24 lg:py-32">
      <div class="grid gap-8 text-white">
        <div class="flex flex-col items-center justify-center gap-8">
          <h2 class="text-3xl sm:text-5xl font-semibold">
            Das sagen unsere Nutzer
          </h2>
          <InfopaketBestellen @click="() => openNewsletterModal()"></InfopaketBestellen>
        </div>

        <div class="flex flex-wrap gap-8">
          <TestimonialV2 author="Peter (62 Jahre), Angehöriger"
            text="Das schöne an Melli ist, dass sie selber Vorschläge über den Tag ins Leben von Oma gibt. Das heitert sie natürlich auf und bringt sie immer wieder aus dem Alltag raus."
            image-src="https://assets.melli.com/images/testimonials/relative-peter-2.webp"
            interview-video-src="https://videos.melli.com/testimonial-wohlbefinden.webm" />
          <TestimonialV2 author="Gertud (91 Jahre), Nutzerin"
            text="Wir haben das letzte mal in der Melli-Gruppenstunde ein Stadt-Land-Fluss Rätsel gespielt. Ich war zu ersten Mal dabei und habe noch nicht so viel gewusst. Aber wir sind trotzdem gut zurecht gekommen."
            image-src="https://assets.melli.com/images/testimonials/gertrud-portrait-cut.webp"
            interview-video-src="https://videos.melli.com/testimonial-gertrud-group.webm" />
          <TestimonialV2 author="Stephanie S., Pflegedienstleiterin"
            text="Vielen Kindern und Enkeln der Nutzer ist aufgefallen, dass Oma & Opa deutlich mehr von ihrem Alltag erzählt haben und auch viel positiver gesprochen haben. Das hat den Unterhaltungen wohl eine ganz neue Qualität gegeben."
            image-src="https://assets.melli.com/images/experts/portrait-schuldt.webp"
            interview-video-src="https://videos.melli.com/expert-interview.webm" />
        </div>
        <span class="text-right text-xs">*Aus Datenschutzgründen haben wir den Namen unserer Testnutzer geändert.</span>
      </div>
    </Container>
    <Container class="my-24">
      <FaqSection />
    </Container>
  </div>
</template>

<!-- <route lang="yaml">
meta:
  layout: christmasbanner
</route> -->

