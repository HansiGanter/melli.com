<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <!-- Hero -->
  <Hero>
    <TestNavBar class="w-full lg:w-2/3 justify-right" />
  </Hero>

  <!-- Why Melli -->
  <Container class="pt-24 pb-24 md:py-32 lg:py-40 px-5">
    <Quote
      id="test-why-melli"
      :quote="t('citation.matthias.quote')"
      :source="t('citation.matthias.source')"
      :source-description="t('citation.matthias.source-description')"
      portrait="https://assets.melli.com/images/team/matthias-weber-3.webp"
    />
  </Container>

  <!-- Melli Mission -->
  <Container class="pt-24 pb-12 lg:py-24 bg-gray-50 rounded-t-3xl">
    <TestMission />
  </Container>

  <!-- Testuser Subscription -->
  <Container id="testuser-subsription" class="bg-primary-900 rounded-[30px] py-24 px-5">
    <TestUserSubscription />
  </Container>

  <Container id="why-become-testuser" class="py-10 lg:py-20 px-5">
    <TestWhyBecomeTestuser />
  </Container>

  <TestRoutine />

  <Container id="test-user-timeline" class="py-12 lg:py-24 px-5">
    <TestTimeline />
  </Container>

  <Container class="bg-tertiary-100 rounded-[48px] py-10 lg:py-20 px-5">
    <TestJourney />
  </Container>

  <Container class="py-10 lg:py-20 px-5">
    <TestQuotes />
  </Container>

  <Container class="bg-primary-900 rounded-[30px] py-16 px-5">
    <TestFeatures id="besonderheiten" />
  </Container>

  <Container class="py-8 bg-gray-50 dark:from-gray-900 dark:to-gray-800 px-5">
    <TestFAQ />
  </Container>

  <Container id="test-contact" class="bg-primary-900 py-24 px-5">
    <ContactSection />
  </Container>
</template>

    <style>
    @keyframes float {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-10px);
      }
      100% {
        transform: translatey(0px);
      }
    }
    .down {
      transform: translatey(0px);
      animation: float 2s ease-in-out infinite;
    }
    </style>

    <route lang="yaml">
meta:
  layout: testuser
    </route>

