<template>
  <Hero />

  <Container class="py-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <StatsSection />
  </Container>

  <Container class="py-24">
    <BlogPreview />
  </Container>

  <TestimonialSection />

  <!-- <Container>
    <Reliability />
  </Container> -->

  <FAQSection />

  <NewsletterSection />
  <!-- <NewsletterSectionOld /> -->
</template>

<route lang="yaml">
meta:
  layout: default
</route>
