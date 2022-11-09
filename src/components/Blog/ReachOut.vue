<script setup lang="ts">
const callbackModalOpen = ref(false)
</script>

<template>
  <div class="grid gap-5">
    <h1 class="text-4xl text-gray-900 font-semibold m-0">
      Noch Fragen?
    </h1>
    <p class="text-lg text-gray-700 m-0">
      Egal ob Fragen zum Produkt oder unserer Testnutzer-Aktion – wir beraten euch gerne telefonisch und räumen alle Unklarheiten aus dem Weg. Einfach einen Rückruf vereinbaren und wir melden uns umgehend bei euch.
    </p>
    <button class="py-4 px-8 bg-amber-200 rounded-lg decoration-none w-fit" @click="callbackModalOpen = true">
      <span class="font-semibold text-lg text-primary-800">Rückruf vereinbaren</span>
    </button>
  </div>
  <Modal :show="callbackModalOpen" @close="callbackModalOpen = false">
    <CallbackDialog />
  </Modal>
</template>

<style scoped>

</style>
