<script setup lang="ts">
useHead({
  title: 'Melli-App für Familie & Freunde',
  meta: [
    { name: 'description', content: 'Die Melli-App ist die Brücke zwischen dir und der Melli bei deinen Eltern oder Großeltern. Videoanrufe, Einstellungen an Melli vornehmen, Erinnerungen organisieren - das alles funktioniert mit der Melli-App.' },
  ],
});
</script>
<template>
  <AppHero />

  <Container id="appoverview" class="py-12 lg:py-24 lg:px-24">
    <AppIntroText />
  </Container>

  <Container class="my-12 lg:my-24 lg:px-24">
    <AppOverview />
  </Container>

  <Container class="py-12 lg:py-24 lg:px-24 bg-gray-50">
    <AppCommunicationFeatures />
  </Container>

  <Container id="app-safety-features" class="py-12 lg:py-24 lg:px-24">
    <AppSafetyFeatures />
  </Container>

  <Container class="my-12 lg:my-24 lg:px-24">
    <AppConfigurationFeatures />
  </Container>

  <Container class="py-12 lg:py-24 lg:px-24 bg-gray-50">
    <AppScheduleFeatures />
  </Container>

  <Container class="my-12 lg:my-24 lg:px-24">
    <AppPromoComponent />
  </container>

  <Container class="my-24 lg:px-24">
    <SecureSection />
  </Container>

  <Container class="lg:px-24 my-12 lg:my-24">
    <AppFaqSection />
  </Container>

  <Container class="my-24 lg:px-24">
    <ContactSection />
  </Container>

  <BlogCarousel />
</template>

<style>
#app-safety-features {
  background: linear-gradient(rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)), url('https://melli-assets.netlify.app/images/images/stock/melli-asset-image-stock-473590178-2by3-1536.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (min-width: 768px) {
  #app-safety-features {
    background: linear-gradient(rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)), url('https://melli-assets.netlify.app/images/images/stock/melli-asset-image-stock-473590178-5by3-2048.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
