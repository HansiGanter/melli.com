<script setup lang="ts">

import { fireCallbackOpenEvent, fireContactEvent } from '~/google-tag-manager';

const isMobile = () => {
  return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

</script>
<template>
  <a v-if="isMobile()" href='tel:030-31198464'
    class="rounded-xl border-solid border-2 py-3.5 px-4 sm:px-8 border-primary-300 flex items-center gap-2 w-fit whitespace-nowrap"
    @click="fireContactEvent('phone')">
    <div class="i-lucide:phone-call w-6 h-6"></div>
    030-31198464
  </a>
  <a v-else href="https://meetap.pipedrive.com/scheduler/xKvA9ztM/melli-ruckruf-termin" target="_blank"
    class="rounded-xl border-solid border-2 py-3.5 px-4 border-primary-300 flex items-center gap-2 w-fit whitespace-nowrap"
    @clik="fireCallbackOpenEvent()">
    <div class="i-lucide:phone-forwarded w-6 h-6"></div>
    Lass dich beraten!
  </a>
</template>
