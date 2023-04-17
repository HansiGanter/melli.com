<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <DipaHero />
  <Container id="dipa-quote" class="py-12 lg:py-24 px-6 lg:px-24">
    <Quote :quote="t('citation.dipa.matthias.quote')" :quote-message="t('citation.dipa.matthias.quote-message')"
      :source="t('citation.matthias.source')" :source-description="t('citation.matthias.source-description')"
      portrait="https://assets.melli.com/images/images/team/melli_team_matthias-01-1024.webp" />
  </Container>

  <Container class="my-12 lg:my-24 px-6 lg:px-24">
    <DipaPromoComponent />
  </Container>

  <Container class="pt-36 pb-12 lg:pt-36 lg:pb-12 px-6 lg:px-24 bg-gray-50">
    <DipaMission />
  </Container>

  <div class="bg-gradient-to-b from-gray-50 to-primary-900">
    <DipaChat />
  </div>

  <Container id="becomeTestUser" class="py-24 px-6 lg:px-24 bg-primary-900">
    <DipaBecomeTestUser />
  </Container>

  <Container class="py-12 lg:py-24 px-6 lg:px-24 bg-primary-900 relative overflow-hidden">
    <DipaTestUserFit />
  </Container>

  <div class="bg-gradient-to-b from-primary-900 to-white">
    <Container class="py-24 px-6 bg-primary-100 rounded-[48px]">
      <DipaJourney />
    </Container>
  </div>

  <Container class="px-6 my-24">
    <SecureSection />
  </Container>

  <Container class="px-6 lg:px-24 my-12 lg:my-24">
    <DipaFaqSection />
  </Container>

  <Container class="bg-primary-900 py-24 px-5 lg:my-24">
    <ContactSection />
  </Container>
</template>

<route lang="yaml">
meta:
  layout: testuser
</route>

