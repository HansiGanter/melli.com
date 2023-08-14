<script setup lang="ts">
import { fireSocialEvent } from '~/google-tag-manager'
</script>

<template>
  <div class="flex flex-col gap-2 sm:items-center">
    <h2 class="text-gray-900 text-xl font-semibold hidden sm:block">
      Folge uns auf:
    </h2>
    <div class="flex gap-5 items-center">
      <a href="https://www.youtube.com/channel/UC9kINIc7RSUKfMu8LXaWnTQ" target="_blank">
        <div class="i-carbon:logo-youtube text-4xl text-gray-900" @click="fireSocialEvent('youtube')" />
      </a>
      <a href="https://www.facebook.com/meine.melli" target="_blank">
        <div class="i-carbon:logo-facebook text-4xl text-gray-900" @click="fireSocialEvent('facebook')" />
      </a>
      <a href="https://www.linkedin.com/company/mit-melli/" target="_blank">
        <div class="i-carbon:logo-linkedin text-4xl text-gray-900" @click="fireSocialEvent('linkedin')" />
      </a>
      <a href="https://www.instagram.com/meine.melli/" target="_blank">
        <div class="i-carbon:logo-instagram text-4xl text-gray-900" @click="fireSocialEvent('linkedin')" />
      </a>
    </div>
  </div>
</template>
