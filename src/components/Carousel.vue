<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';
defineProps<{ arrowButtonSize: 'big' | 'small'; }>();

const greaterSm = useBreakpoints(breakpointsTailwind).greater('sm');

let slider = ref();
let sliderframe = ref();
function scrollright() {
    slider.value.scrollBy({
        left: sliderframe.value.clientWidth, behavior: 'smooth'
    });
}

function scrollleft() {
    slider.value.scrollBy({
        left: -sliderframe.value.clientWidth, behavior: 'smooth'
    });
}
</script>

<template>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-2.5">
        <button v-if="greaterSm"
          class="rounded-full border-gray-900 border-2 flex items-center justify-center active:bg-gray-900 active:text-white"
          :class="arrowButtonSize == 'small' ? 'p-1' : 'h-12 px-6'" @click="scrollleft">
            <div class="i-lucide:arrow-left w-6 h-6"></div>
        </button>
        <div ref="sliderframe" class="overflow-hidden relative rounded-2xl order-first sm:order-none">
            <div ref="slider" class="flex content w-full h-full overflow-x-scroll box-content snap-mandatory snap-x">
                <slot />
            </div>
        </div>
        <button v-if="greaterSm"
          class="rounded-full border-gray-900 border-2 flex items-center justify-center active:bg-gray-900 active:text-white"
          :class="arrowButtonSize == 'small' ? 'p-1' : 'h-12 px-6'" @click="scrollright">
            <div class="i-lucide:arrow-right w-6 h-6"></div>
        </button>
        <div v-if="!greaterSm" class="flex gap-3">
            <button
              class="rounded-full border-gray-900 border-2 px-6 h-12 flex items-center justify-center active:bg-gray-900 active:text-white"
              @click="scrollleft">
                <div class="i-lucide:arrow-left w-6 h-6"></div>
            </button>
            <button
              class="rounded-full border-gray-900 border-2 px-6 py-4 h-12 flex items-center justify-center active:bg-gray-900 active:text-white"
              @click="scrollright">
                <div class="i-lucide:arrow-right w-6 h-6"></div>
            </button>
        </div>
    </div>
</template>

<style>
/* Hide the scrollbar for Firefox */
.content::-webkit-scrollbar {
    display: none;
}

/* Hide the scrollbar for other browsers */
.content {
    scrollbar-width: none;
}
</style>