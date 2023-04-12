<script setup lang="ts">
defineProps({
  quote: String,
  quoteMessage: String,
  source: String,
  sourceDescription: String,
  portrait: String,
})
</script>

<template>
  <div class="md:flex items-center">
    <img
      :src="portrait"
      class="p-4 lg:p-8 rounded-full w-52 lg:w-64 aspect-square m-auto object-cover"
    >
    <div>
      <p class="my-4 font-medium text-primary-900 text-xl md:text-2xl lg:text-3xl text-center md:text-left">
        {{ quote }}<br>
        <span class="my-4 font-semibold text-primary-900 text-xl md:text-2xl lg:text-3xl text-center md:text-left">
          {{ quoteMessage }}
        </span>
      </p>

      <p class="text-gray-500 font-semibold lg:text-xl text-center md:text-left">
        {{ source }}
      </p>
      <p class="text-gray-500 text-center md:text-left">
        {{ sourceDescription }}
        <br>
      </p>
    </div>
  </div>
</template>
