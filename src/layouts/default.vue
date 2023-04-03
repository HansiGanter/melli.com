<template>
  <main class="bg-transparent text-gray-900">
    <Container class="border-b border-gray-200 shadow-sm">
      <NavBar />
    </Container>

    <RouterView />

    <Container class="px-5">
      <Footer />
    </Container>
  </main>
</template>
