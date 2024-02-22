<script setup lang="ts">
const { t } = useI18n();

const images = [
  'https://melli-assets.netlify.app/images/mockups/product-image-01.webp',
  'https://melli-assets.netlify.app/images/mockups/product-image-02.webp',
  'https://melli-assets.netlify.app/images/mockups/product-image-03.webp',
];
const active = ref(0);

onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % images.length;
  }, 5000);
});
</script>

<template>
  <h1 class="font-semibold text-3xl lg:text-4xl text-gray-900 block lg:hidden">
    {{ t('shop.choose-subscription.header') }}
  </h1>
  <div class="relative grid gap-4">
    <div class="relative overflow-hidden max-w-96 mx-auto lg:max-w-96">
      <div class="flex transition-all transition-duration-500 ease-in-out"
        :style="{ transform: `translate3d(calc(${active} * -100%), 0, 0)` }">
        <img v-for="(img, index) in images" :id="`slide-${index}`" :key="img"
          class="block w-96 object-scale-down md:object-contain" :src="img" :alt="`Slide ${index + 1}`">
      </div>
    </div>
    <div class="inset-x-0 z-1">
      <div class="flex justify-center items-center gap-4 mx-auto">
        <div v-for="(image, index) in images" :key="image" class="p-1.5 w-fit rounded-full"
          :class="index === active ? 'bg-gray-500' : 'bg-gray-300'" @click="active = index" />
      </div>
    </div>
  </div>
</template>
