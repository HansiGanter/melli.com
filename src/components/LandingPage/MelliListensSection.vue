<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 content-center">
      <div class="grid gap-4 lg:gap-7 w-fit content-start">
        <div class="h-fit">
          <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
            {{ t('melli-listens.heading') }}
          </h1>
        </div>
        <p class="text-black font-normal text-xl">
          {{ t('melli-listens.text') }}
        </p>
      </div>
      <div>
        <div class="relative z-0">
          <svg class="absolute inset-0 translate-y-4" viewBox="0 0 142 100" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 88 96 C 64 98 66 92 42 74 C 21.6962 62.4081 -7.5877 60.9332 1.7654 32.6017 C 7.8266 14.2414 21.4738 15.0878 48.6425 10.3229 C 75.8112 5.5581 77.4814 -3.8428 91.8452 1.6947 C 106.209 7.2322 99.0828 20.3677 113.447 44.5783 C 127.81 68.7888 109 91 88 96 Z"
              class="fill-primary-100" />
            <path
              d="M 90.5401 12.6031 C 54.6343 5.7729 48.0074 22.1369 38.7298 39.0701 C 31.6209 57.5686 40.1756 68.6677 61 79 C 81 88 84.3951 94.8501 101.625 85.174 C 118.855 75.4979 144.278 63.8296 141.145 37.7895 C 138.013 11.7493 126.446 19.4333 90.5401 12.6031 Z"
              class="fill-primary-900 translate-y--1" />
          </svg>
          <img class="relative translate-x-2"
            src="https://assets.melli.com/images/images/mockups/01_free/mockup-device-intro-left.webp" srcset="https://assets.melli.com/images/images/mockups/01_free/mockup-device-intro-left.webp 512w,
                  https://assets.melli.com/images/images/mockups/01_free/mockup-device-intro-left-768.webp 768w,
                  https://assets.melli.com/images/images/mockups/01_free/mockup-device-intro-left-1024.webp 1024w"
            alt="Melli-Gerät Mockup">
        </div>
      </div>
    </div>
  </div>
</template>
