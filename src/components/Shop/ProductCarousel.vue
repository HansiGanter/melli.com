<script setup lang="ts">
const images = [
  'https://assets.melli.com/images/mockups/product-image-01-1024.webp',
  'https://assets.melli.com/images/mockups/product-image-02-1024.webp',
  'https://assets.melli.com/images/mockups/product-image-03-1024.webp',
]
const active = ref(0)

onMounted(() => {
  let i = 0
  setInterval(() => {
    if (i > images.length - 1)
      i = 0

    active.value = i
    i++
  }, 3000)
})
</script>

<template>
  <div class="relative fade bg-transparent h-fit w-full" data-carousel="static">
    <div class="absolute bottom-2 inset-x-0 z-1">
      <div class="flex justify-center items-center gap-4 mx-auto">
        <div
          v-for="(image, index) in images"
          :key="image"
          class="p-1.5 w-fit rounded-full"
          :class="index === active ? 'bg-gray-500' : 'bg-gray-300'"
          @click="active = index"
        />
      </div>
    </div>
    <div class="carousel-inner relative overflow-hidden w-full">
      <div v-for="(img, index) in images" :id="`slide-${index}`" :key="img" :class="`${active === index ? 'active' : 'left-full'}`" class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
        <img class="block w-full h-fit object-contain" :src="img" :alt="`Slide ${index + 1}`">
      </div>
    </div>
  </div>
</template>

<style>
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
</style>
