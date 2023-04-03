<template>
  <AppHero />

  <Container id="appoverview" class="py-12 lg:py-24 px-6">
    <AppIntroText />
  </Container>

  <Container class="my-12 lg:my-24 px-6">
    <AppOverview />
  </Container>

  <Container class="py-12 lg:py-24 px-6 bg-gray-50">
    <AppCommunicationFeatures />
  </Container>

  <Container id="app-safety-features" class="py-12 lg:py-24 px-6">
    <AppSafetyFeatures />
  </Container>

  <Container class="my-12 lg:my-24 px-6">
    <AppConfigurationFeatures />
  </Container>

  <Container class="py-12 lg:py-24 px-6 bg-gray-50">
    <AppScheduleFeatures />
  </Container>

  <Container class="my-12 lg:my-24 px-6">
    <AppPromoComponent />
  </container>

  <Container class="my-24">
    <SecureSection />
  </Container>

  <Container class="px-6 my-12 lg:my-24">
    <AppFaqSection />
  </Container>

  <Container class="bg-primary-900 py-24 px-6 lg:my-24">
    <ContactSection />
  </Container>

  <BlogCarousel />
</template>

<style>
#app-safety-features {
  background:linear-gradient(
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ), url('https://assets.melli.com/images/images/stock/melli-asset-image-stock-473590178-2by3-1536.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (min-width: 768px) {
  #app-safety-features {
    background:linear-gradient(
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ), url('https://assets.melli.com/images/images/stock/melli-asset-image-stock-473590178-5by3-2048.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
