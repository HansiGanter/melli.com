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
    <Quote class="my-12" :quote="t('citation.matthias.quote')" :source="t('citation.matthias.source')"
      :source-description="t('citation.matthias.source-description')"
      portrait="https://melli-assets.netlify.app/images/team/matthias-weber-3.webp" />
  </Container>
  <Container class="my-16 lg:my-24 px-5">
    <div class="grid gap-2 lg:w-5/12 lg:mx-auto">
      <span class="block text-lg lg:text-xl font-medium text-primary-800 text-center">{{ t('hero.test-user') }}</span>
      <NewsletterOpen />
    </div>
  </Container>

  <Container class="bg-primary-900 rounded-[30px] px-5 py-16 my-12">
    <MelliFeatures id="besonderheiten" />
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

  <!-- Commented Out Until Shop Ready -->
  <!-- <Container class="py-8 bg-gray-50">
    <StatsSection />
  </Container> -->

  <Container class="bg-gray-50 py-12 lg:py-24">
    <SecureSection />
  </Container>

  <Container class="pb-12 lg:pb-24 bg-gray-50">
    <SocialMedia />
  </Container>

  <Container class="px-5 py-8 bg-tertiary-50 dark:from-gray-900 dark:to-gray-800">
    <FaqSection />
  </Container>

  <Container class="bg-primary-900 py-24 px-5 ">
    <ContactSection />
  </Container>
</template>

<route lang="yaml">
meta:
  layout: donationbanner
        </route>

