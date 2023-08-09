<script setup lang="ts">

import { fireCallbackOpenEvent, fireContactEvent } from '~/google-tag-manager'
defineProps<{
    iconClass: string
    textClass: string
}>()

const isMobile = () => {
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

</script>
<template>
    <a v-if="isMobile()" href='tel:030-555703440'
        class="rounded-xl border-solid border-2 py-3.5 px-7 border-primary-300 flex items-center gap-2 w-fit"
        @click="fireContactEvent('phone')">
        <BubbleIcon bubble="" bubbleType="" icon="i-lucide:phone-call w-6 h-6 xl:w-6 xl:h-6" :class="iconClass" />
        <div :class="textClass">030-555703440</div>
    </a>
    <a v-else href="
        https://meetap.pipedrive.com/scheduler/xKvA9ztM/melli-ruckruf-termin"
        class="rounded-xl border-solid border-2 py-3.5 px-4 border-primary-300 flex items-center gap-2 w-fit"
        @clik="fireCallbackOpenEvent()">
        <BubbleIcon bubble="" bubbleType="" icon="i-lucide:phone-forwarded  w-6 h-6 xl:w-6 xl:h-6" :class="iconClass" />
        <div :class="textClass">Rückruf
            vereinbaren</div>
    </a>
</template>
