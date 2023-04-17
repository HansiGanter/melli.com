<script setup lang="ts">
import { fireDipaFormOpenEvent } from '~/google-tag-manager';


const heroVideo = ref<HTMLElement | null>(null)
const showForm = ref(false)

function openForm() {
  showForm.value = true;
  fireDipaFormOpenEvent()
}

</script>

<template>
  <header class="relative bg-black h-screen">
    <!-- The video -->
    <video id="heroVideo" ref="heroVideo" class="w-full h-full object-cover" autoplay loop muted playsinline
      poster="https://assets.melli.com/images/stock/red-hair-greeting-1024.webp">
      <source src="https://videos.melli.com/header-app.webm" type="video/webm">
      <source src="https://videos.melli.com/header-app.mp4" type="video/mp4">
    </video>

    <!-- Heading & link to Video -->
    <div class="absolute top-0 w-full h-full bg-black/50 flex flex-col">
      <slot />
      <div class="my-auto flex flex-col gap-5 sm:gap-9 py-12 px-5 max-w-160 mx-auto">
        <h1 class="font-semibold text-4xl sm:text-5xl sm:text-center">
          <span class="text-white leading-tight">
            Melli macht den Alltag für Oma & Opa glücklicher
          </span>
        </h1>
        <div class="flex flex-col gap-5 sm:gap-4 sm:items-center">
          <button class="rounded-lg bg-primary-400 text-white py-2.5 px-4 flex items-center w-fit gap-2 justify-center"
            @click="openForm()">
            <div class="i-carbon:user-favorite-alt-filled w-6 h-6" /><span>Melli-Tester werden</span>
          </button>
        </div>
      </div>
      <RouterLink to="#dipa-quote"
        class="absolute bottom-6 font-normal text-lg text-white flex flex-col gap-2 w-full mx-auto items-center">
        mehr erfahren
        <img src="https://assets.melli.com/icons/arrow-down-circle-white.svg" class="mx-auto w-12 h-12">
      </RouterLink>
    </div>
  </header>

  <Modal :show="showForm" @close="showForm = false">
    <DipaTestUserForm />
  </Modal>
</template>
