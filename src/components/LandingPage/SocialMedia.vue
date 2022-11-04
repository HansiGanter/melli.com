<script setup lang="ts">
import { fireSocialEvent } from '~/google-tag-manager'
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mx-auto justify-center">
    <h2 class="text-primary-900 text-3xl lg:text-4xl font-semibold">
      Folge uns auf:
    </h2>
    <div class="flex gap-5 items-center">
      <a href="https://www.youtube.com/channel/UC9kINIc7RSUKfMu8LXaWnTQ" target="_blank">
        <div class="i-carbon:logo-youtube text-4xl text-primary-400" @click="fireSocialEvent('youtube')" />
      </a>
      <a href="https://www.facebook.com/deine.melli" target="_blank"><div class="i-bxl:facebook text-4xl text-primary-400" @click="fireSocialEvent('facebook')" /></a>
      <!-- <div class="i-bxl:instagram-alt text-4xl text-primary-400" /> -->
      <a href="https://www.linkedin.com/company/mit-melli/" target="_blank"><div class="i-bxl:linkedin text-4xl text-primary-400" @click="fireSocialEvent('linkedin')" /></a>
      <a href="https://www.instagram.com/deine.melli/" target="_blank"><div class="i-bxl:instagram text-4xl text-primary-400" @click="fireSocialEvent('linkedin')" /></a>
    </div>
  </div>
</template>
