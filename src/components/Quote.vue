<script setup lang="ts">
const props = defineProps({
  quote: String,
  source: String,
  sourceDescription: String,
  portrait: String,
})
</script>

<template>
  <div class="md:flex items-center">
    <img
      :src="portrait"
      class="p-4 lg:p-8 rounded-full w-52 lg:w-64 aspect-sqaure m-auto"
    >
    <div>
      <p class="my-4 font-medium text-primary-900 text-xl md:text-2xl lg:text-3xl">
        {{ props.quote }}
      </p>
      <p class="text-gray-500 font-semibold lg:text-xl">
        {{ source }}
      </p>
      <p class="text-gray-500 ">
        {{ sourceDescription }}
        <br>
      </p>
    </div>
  </div>
</template>
