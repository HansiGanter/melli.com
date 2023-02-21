<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: 'Melli',
  meta: [
    { name: 'description', content: 'Melli - deine Freundin für ein glückliches Älterwerden. Melli ist eine sprachgesteuerte Begleiterin, speziell entwickelt für die Bedürfnisse älterer Menschen. Als gute Freundin ist sie den ganzen Tag über für ihre Nutzer da und tut alles dafür, ihnen jeden Tag ein Lächeln ins Gesicht zu zaubern.' },
  ],
})
</script>

<template>
  <Hero />

  <Container>
    <FlipCards class="-mt-8" />
  </Container>

  <Container class="px-5">
    <Quote
      class="my-12"
      :quote="t('citation.matthias.quote')"
      :source="t('citation.matthias.source')"
      :source-description="t('citation.matthias.source-description')"
      portrait="https://assets.melli.com/images/images/team/melli_team_matthias-01-1024.webp"
    />
  </Container>

  <Container class="bg-primary-900 rounded-[30px] px-5 py-16 my-16 lg:my-24 ">
    <PromoKPIs />
  </Container>

  <Container class="py-10 lg:py-20 px-5 ">
    <Reliability />
  </Container>

  <Container class="py-12 lg:py-24 px-5 ">
    <MelliListensSection />
  </Container>

  <Container id="vernetzen" class="py-10 lg:py-20 px-5 ">
    <MoreBenefits />
  </Container>

  <Container class="py-10 lg:py-20 px-5 ">
    <HealthyRoutines />
  </Container>

  <Container id="glücklicher" class="bg-primary-900 rounded-t-[32px] py-12 lg:py-20 px-5 ">
    <QuotesSection />
  </Container>

  <Container class="py-8 bg-gray-50 px-5">
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
  </Container>

  <Container class="bg-gray-50">
    <ShoppingDetails />
  </Container>

  <Container class="bg-gray-50 py-12 lg:py-24">
    <SecureSection />
  </Container>

  <Container class="px-5 py-12 bg-gray-50 dark:from-gray-900 dark:to-gray-800">
    <FaqSection />
  </Container>

  <Container class="bg-primary-900 py-12 px-5 ">
    <ContactSection />
  </Container>
</template>

<!-- <route lang="yaml">
meta:
  layout: donationbanner
</route> -->

