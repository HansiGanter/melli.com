<template>
  <main class="bg-transparent text-gray-900 overflow-x-hidden">
    <div class="border-b border-gray-200 shadow-sm">
      <NavBar />
    </div>

    <RouterView />

    <Container class="px-5">
      <Footer />
    </Container>
  </main>
</template>
