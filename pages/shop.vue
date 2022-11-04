<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:justify-center lg:items-center lg:max-w-screen-xl mx-auto">
    <ProductVideo />
    <ChooseSubscription />
  </div>

  <Container class="py-8 px-5">
    <ShoppingDetails />
  </Container>

  <Container class="bg-gray-50 py-12 lg:py-24">
    <SecureSection />
  </Container>

  <Container class="pb-12 lg:pb-24 bg-gray-50">
    <SocialMedia />
    <!-- <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mx-auto justify-center">
      <h2 class="text-primary-900 text-3xl lg:text-4xl font-semibold">
        Folge uns auf:
      </h2>
      <div class="flex gap-5 items-center">
        <a href="https://www.youtube.com/channel/UC9kINIc7RSUKfMu8LXaWnTQ" target="_blank"><div class="i-carbon:logo-youtube text-4xl text-primary-400" @click="fireSocialEvent('youtube')" /></a>
        <a href="https://www.facebook.com/deine.melli" target="_blank"><div class="i-bxl:facebook text-4xl text-primary-400" @click="fireSocialEvent('facebook')" /></a> -->
    <!-- <div class="i-bxl:instagram-alt text-4xl text-primary-400" /> -->
    <!-- <a href="https://www.linkedin.com/company/mit-melli/" target="_blank"><div class="i-bxl:linkedin text-4xl text-primary-400" @click="fireSocialEvent('linkedin')" /></a>
      </div>
    </div> -->
  </Container>

  <Container class="bg-tertiary-50 py-8 rounded-3xl px-5">
    <FaqSection />
  </Container>

  <Container class="bg-primary-900 py-24 px-5">
    <ContactSection />
  </Container>
</template>

<route lang="yaml">
meta:
  layout: donationbanner
      </route>
