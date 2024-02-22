<script setup lang="ts">

</script>

<template>
  <Container>
    <div class="flex w-full items-center pt-12">
      <a href="https://melli-assets.netlify.app/files/Erste-Schritte.pdf" target="_blank"
        class="mx-auto w-fit bg-primary-500 hover:bg-primary-600 transition-all duration-150 delay-100 ease-in px-6 py-2.5 rounded-lg"
        download>
        <span class="text-white font-medium text-base">zum Vollbild wechseln</span>
      </a>
    </div>
    <div class="grid gap-8 py-8 lg:py-6 h-screen">
      <iframe src="https://melli-assets.netlify.app/files/Erste-Schritte.pdf" class="w-full h-full" frameborder="0" />
    </div>
  </Container>
</template>

<style scoped></style>
