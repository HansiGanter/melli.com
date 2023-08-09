<script setup lang="ts">
import { fireInfoPackageOpenEvent } from '~/google-tag-manager'

const { t } = useI18n()
useHead({
  title: 'Melli',
  meta: [
    { name: 'description', content: 'Melli - deine Freundin für ein glückliches Älterwerden. Melli ist eine sprachgesteuerte Begleiterin, speziell entwickelt für die Bedürfnisse älterer Menschen. Als gute Freundin ist sie den ganzen Tag über für ihre Nutzer da und tut alles dafür, ihnen jeden Tag ein Lächeln ins Gesicht zu zaubern.' },
  ],
})

const showNewsletterModal = ref(false)
const newsletterEmail = ref()

const openNewsletterModal = (email?: string) => {
  fireInfoPackageOpenEvent(email)
  newsletterEmail.value = email
  showNewsletterModal.value = true
}

const onEmailFormSubmit = (e: Event) => {
  const formData = new FormData(e.target as HTMLFormElement)
  const email = formData.get('email') as string
  openNewsletterModal(email)
}
</script>

<template>
  <InfoPackageModal :show="showNewsletterModal" :email="newsletterEmail" @close="showNewsletterModal = false" />

  <div class="grid gap-16">
    <div>
      <Hero @newsletter-button-clicked="(email) => openNewsletterModal(email)" />

      <Container>
        <FlipCards class="-mt-16" />
      </Container>
    </div>

    <Container class="px-4 lg:px-4 gap-2.5 lg:mt-16">
      <Quote :quote="t('citation.matthias.quote')" :source="t('citation.matthias.source')"
        :source-description="t('citation.matthias.source-description')"
        portrait="https://assets.melli.com/images/images/team/melli_team_matthias-01-1024.webp" />
    </Container>

    <Container class="bg-primary-900 rounded-3xl py-12 lg:px-12 lg:py-24">
      <PromoKPIs @newsletter-button-clicked="() => openNewsletterModal()" />
    </Container>

    <Container class="">
      <Reliability />
    </Container>

    <Container class="">
      <div class="rounded-3xl overflow-hidden bg-primary-700 mx-2 flex flex-col md:flex-row my-12">
        <img class="md:max-w-100 object-cover"
          src="https://assets.melli.com/images/stock/melli_mockup-print_brochure2-1024.webp">
        <div class="p-6 pb-10 grid gap-4 lg:px-16">
          <h2 class="font-semibold text-3xl lg:text-4xl text-white">
            {{ t('secure-melli.heading') }}
          </h2>
          <p class="font-medium text-xl mb-4 text-white">
            {{ t('secure-melli.sub-text') }}
          </p>
          <form class="flex flex-wrap gap-4 justify-center md:justify-start" @submit.prevent="onEmailFormSubmit">
            <input class="border-2 rounded-full w-full min-w-48 max-w-100 px-4 py-2.5" placeholder="name@email.de"
              type="email" name="email" required>
            <div class="flex gap-3">
              <button type="submit"
                class="text-white bg-primary-400 flex gap-0.5 items-center px-7 py-3 rounded-lg w-fit font-medium">
                Infopaket&nbsp;bestellen
                <div class="i-lucide:arrow-right w-6 h-6 shrink-0" />
              </button>
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

    <Container>
      <Sicherheit />
    </Container>

    <!-- TESTIMONIALS -->
    <Container id="glücklicher" class="bg-primary-800 rounded-3xl py-12">
      <div class="grid gap-8 text-white">
        <div class="flex flex-col items-center justify-center gap-8">
          <h2 class="text-4xl font-semibold">
            Das sagen unsere Nutzer
          </h2>
          <button class="text-white bg-primary-500 flex gap-3 items-center px-7 rounded-lg w-fit font-medium p-4"
            @click="() => openNewsletterModal()">
            Infopaket&nbsp;bestellen
            <div class="i-lucide:arrow-right w-6 h-6 shrink-0" />
          </button>
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
      </div>
    </Container>
    <!-- testimonial or nexte -->
    <Container>
      <div
        class="flex flex-wrap lg:grid lg:grid-cols-2 justify-center items-start flex-grow bg-amber-100 mx-auto rounded-3xl overflow-hidden mx-2 mt-16">
        <img class="object-cover sm:object-none w-full max-h-80 lg:object-cover lg:h-full lg:max-h-unset lg:w-unset"
            src="https://assets.melli.com/images/stock/melli_mockup-print_brochure2-1024.webp">

        <div class="flex flex-col justify-center items-start p-6 lg:p-24 gap-8 flex-grow">
          <h2 class="font-semibold text-3xl lg:text-4xl">
            {{ t('secure-melli.heading') }}
          </h2>
          <p class="font-medium text-xl mb-4">
            {{ t('secure-melli.sub-text') }}
          </p>

          <div class="flex flex-col justify-center items-center gap-6 px-4 sm:px-0 ">
            <form class="flex flex-col gap-4 justify-center w-full sm:w-auto" @submit.prevent="onEmailFormSubmit">
              <input class="items-start lg:flex-grow self-stretch border-2 rounded-full px-4 py-2.5 w-full"
                placeholder="name@email.de" type="email" name="email" required>
              <div class="gap-3 items-center">
                <button type="submit"
                  class="text-white bg-primary-400 flex gap-0.5 items-center px-7 py-3 rounded-lg w-full sm:w-auto font-medium">
                  Infopaket&nbsp;bestellen
                  <div class="i-lucide:arrow-right w-6 h-6 lg:w-6 lg:h-6 shrink-0" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>

    <!-- <Container id="vernetzen" class="py-10 lg:py-20 px-6">
      <MoreBenefits />
    </Container> -->

    <!-- <Container class="py-10 lg:py-20 px-6 lg:px-24 ">
      <HealthyRoutines />
    </Container> -->

    <!-- <Container id="glücklicher" class="bg-primary-900 rounded-t-[32px] py-12 lg:py-20 px-6">
      <QuotesSection />
    </Container> -->

    <!-- <Container class="py-8 bg-gray-50 px-6 lg:px-24">
    <div class="my-4">
      <h1 class="color-gray-900 text-4xl lg:text-5xl font-semibold md:text-center">
        Teste Melli jetzt
      </h1>
      <h1 class="color-primary-400 text-4xl lg:text-5xl font-semibold md:text-center">
        60 Tage kostenlos
      </h1>
    </div>
    <p class="color-gray-900 text-lg py-6">
      Wähle eine Abo-Option um deinen kostenlosen Test zu starten. Dir werden für die ersten 60 Tage keinerlei Kosten berechnet. Nach Ablauf der 60 Tage beginnt dein Abo, zu den von dir ausgewählten Konditionen. Du kannst dein Abo vor Ablauf der 60 Tage kündigen, sodass keinerlei Kosten anfallen, sollte Melli nicht zu dir passen.
    </p>
    <StatsSection />
  </Container> -->

    <!--
    <Container class="bg-gray-50 pt-12 lg:pt-24">
      <ShoppingDetails />
    </Container>

    <Container class="bg-gray-50 py-12 lg:py-24">
      <SecureSection />
    </Container> -->

    <Container class="mt-24">
      <FaqSection />
    </Container>

    <div class="">
      <ImFernsehen />
      <ContactSection />
    </div>
  </div>
</template>

<!-- <route lang="yaml">
meta:
  layout: donationbanner
</route> -->

