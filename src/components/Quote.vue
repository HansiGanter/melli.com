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
  <div class="md:flex items-center gap-4 relative">
    <img :src="portrait" class="m-4 mb--12 md:m-8 md:mb-16 rounded-full w-48 lg:w-64 aspect-square object-cover m-auto">
    <div class="w-full flex flex-col pt-16 relative">
      <div class="color-amber-400 puffin-display-soft text-9xl leading-0">
        “
      </div>
      <p class="my-4 font-medium text-primary-700 text-xl md:text-2xl lg:text-3xl text-center md:text-left">
        {{ quote }}<br v-if="quote">
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
    <div class="md:hidden absolute spot-one z--1 w-200 h-200 left--50 top--30" />
    <div
      class="absolute spot-one z--1 invisible md:visible md:w-2/1 md:h-2/1 md:scale-60 md:left--1/10 lg:left-0 xl:left-1/4 md:translate-y--12 lg:scale-90" />
  </div>
</template>

<style scoped>
.spot-one {
  background-image: url("data:image/svg+xml,%3Csvg width='437' height='296' viewBox='0 0 437 296' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M225.859 5.88919C76.8591 -18.1108 49.3592 39.3892 10.8592 98.8892C-18.6408 163.889 16.8592 202.889 61.3592 260.889C105.859 318.889 200.359 294.889 271.859 260.889C343.359 226.889 448.859 185.889 435.859 94.3892C422.859 2.88916 374.859 29.8892 225.859 5.88919Z' fill='%23FEF3C7'/%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg width='541' height='389' viewBox='0 0 541 389' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M444.927 382.08C360.927 404.58 330.427 361.58 246.427 318.58C97.4261 242.306 -34.0723 236.58 7.92725 126.58C35.1452 55.2937 96.4272 58.5798 218.427 40.0798C340.427 21.5798 347.927 -14.9202 412.427 6.57976C476.927 28.0798 444.927 79.0798 509.427 173.08C573.927 267.08 528.927 359.58 444.927 382.08Z' fill='%23D1FAE5' /%3E%3C/svg%3E");
  background-size: auto;
  background-repeat: no-repeat, no-repeat;
  /* background-position: 8rem; */
  background-position: 22rem, 8rem;
}
</style>
