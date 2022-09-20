<template>
  <main class="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    <Container class="border-b border-gray-200 shadow-sm">
      <NavBar />
    </Container>

    <RouterView />

    <Container>
      <Footer />
    </Container>
  </main>
</template>
