
<script setup lang="ts">
const partnerList = [
    "https://assets.melli.com/logos/ARD_Morgenmagazin_Logo_Neu-3.png",
    "https://assets.melli.com/logos/Tagesschau_Logo_2015.svg",
    "https://assets.melli.com/logos/BR24_logo.svg",
    "https://assets.melli.com/logos/Logo_klassikradio.svg",
];
</script>
<template>
    <p class="w-full text-center text-gray-500 mb-6">bekannt aus:</p>
    <div class="flex w-full justify-start overflow-hidden">
        <div v-for="n in 4" :key="n" class="slide shrink-0 inline-block">
            <img v-for="partner in partnerList" :src="partner" class="object-contain h-12 sm:h-15 inline-block pr-12">
        </div>
    </div>
</template>
<style>
.slide {
    animation: slide 3s linear infinite;
}

@media (min-width: 640px) {
    .slide {
        animation: slide 30s linear infinite;
    }
}

@keyframes slide {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>