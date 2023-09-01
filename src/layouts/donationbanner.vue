<template>
  <main class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    <!-- <DonationBanner heading="group-session-banner.heading" text="group-session-banner.text" /> -->
    <Container class="border-b border-gray-200 shadow-sm">
      <NavBar />
    </Container>

    <RouterView />

    <Container class="px-5">
      <Footer />
    </Container>
  </main>
</template>

