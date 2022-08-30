<template>
  <Hero />

  <Container class="pt-24 pb-12 lg:py-24">
    <WhyMelli />
  </Container>

  <Container class="bg-teal-900 rounded-[30px] py-16">
    <MelliFeatures id="besonderheiten" />
  </Container>

  <Container class="py-10 lg:py-20">
    <Reliability />
  </Container>

  <MelliListensSection />

  <Container id="vernetzen" class="py-10 lg:py-20">
    <MoreBenefits />
  </Container>

  <Container class="py-10 lg:py-20">
    <HealthyRoutines />
  </Container>

  <Container id="glücklicher" class="bg-teal-900 rounded-[30px] py-24">
    <QuotesSection />
  </Container>

  <Container class="py-8 bg-gray-50">
    <StatsSection />
  </Container>

  <SecureSection />

  <Container class="py-12 bg-gray-50">
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mx-auto justify-center">
      <h2 class="text-teal-900 text-3xl lg:text-4xl font-semibold">
        Folge uns auf:
      </h2>
      <div class="flex gap-5 items-center">
        <a href="https://www.youtube.com/channel/UC9kINIc7RSUKfMu8LXaWnTQ" target="_blank"><div class="i-carbon:logo-youtube text-4xl text-primary-400" /></a>
        <a href="https://www.facebook.com/deine.melli" target="_blank"><div class="i-bxl:facebook text-4xl text-primary-400" /></a>
        <!-- <div class="i-bxl:instagram-alt text-4xl text-primary-400" /> -->
        <a href="https://www.linkedin.com/company/mit-melli/" target="_blank"><div class="i-bxl:linkedin text-4xl text-primary-400" /></a>
      </div>
    </div>
  </Container>

  <Container class="py-8 bg-tertiary-50 dark:from-gray-900 dark:to-gray-800">
    <FaqSection />
  </Container>

  <ContactSection />
</template>
