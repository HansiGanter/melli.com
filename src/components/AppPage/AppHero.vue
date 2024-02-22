<script setup lang="ts">
import { fireShopEvent } from '~/google-tag-manager';
</script>

<template>
  <header class="relative bg-black" style="height: calc(100vh - 80px)">
    <!-- The video -->
    <video id="heroVideo" ref="heroVideo" class="w-full h-full object-cover" autoplay loop muted playsinline
      poster="https://melli-assets.netlify.app/images/stock/red-hair-greeting-1024.webp">
      <source src="https://melli-assets.netlify.app/videos/header-app.webm" type="video/webm">
      <source src="https://melli-assets.netlify.app/videos/header-app.mp4" type="video/mp4">
    </video>

    <!-- Heading & link to Video -->
    <div class="absolute top-0 w-full h-full bg-black/20 flex flex-col">
      <slot />
      <div class="my-auto flex flex-col gap-5 sm:gap-9 py-12 px-5">
        <h1 class="font-semibold text-4xl sm:text-5xl sm:text-center">
          <span class="text-white leading-tight">
            Auf Knopfdruck verbunden:
          </span><br>
          <span class="text-primary-300 leading-tight">
            die Melli App für Familie & Freunde
          </span>
        </h1>
        <div class="flex flex-col gap-5 sm:gap-4 sm:items-center">
          <RouterLink to="/shop"
            class="rounded-lg text-lg font-medium bg-primary-500 text-white py-2.5 px-4 flex w-fit gap-2 justify-center"
            @click="fireShopEvent()">
            <div class="i-lucide:gift w-6 h-6" /><span>Melli 30 Tage kostenlos testen</span>
          </RouterLink>
        </div>
      </div>
      <RouterLink to="#appoverview"
        class="absolute bottom-6 font-normal text-lg text-white flex flex-col gap-2 w-full mx-auto items-center">
        mehr erfahren
        <img src="https://melli-assets.netlify.app/icons/arrow-down-circle-white.svg" class="mx-auto w-12 h-12">
      </RouterLink>
    </div>
  </header>
</template>
