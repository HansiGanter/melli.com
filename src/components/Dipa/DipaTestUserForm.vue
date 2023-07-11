<script setup lang="ts">
const { params = '?some=parameter&other=parameter2' } = defineProps<{
  params: string
}>()

const baseUrl = 'https://ccfae1fd.sibforms.com/serve/MUIEANLH6Q7NGPEZjWAd9iJoNpit9EwKw27zE41SVJD-lvobdvQRhlCVTTGuKV5fRPA_1CNXramrgTD-wdCvCCFYPRXMmqUFpwIZOATEQ2AZT_Kw5OHnXD4W08H66vVKWa83qlfQ9dzDoLH_WdIVAoFgmyYhvVXhL-T-ooXPjbpCFme7ZeozlOaLV-d7jZH8R1E6-sEU6pQxX2vK'
const url = computed(() => baseUrl + params)
</script>

<template>
  <div class="h-80vh">
    <iframe class="w-full h-full" :src="url" frameborder="0" scrolling="auto" allowfullscreen
      style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;" />
  </div>
</template>
