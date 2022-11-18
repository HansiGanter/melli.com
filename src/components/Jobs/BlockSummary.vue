<script setup lang="ts">
// import { fireJobApplyEvent } from '~/google-tag-manager'
interface Props {
  apply: string
  datePosted: string
  experience: string
  location: string
  pdf: string
  period: string
}
defineProps<Props>()
</script>

<template>
  <div class="relative lg:sticky top-0 p-5 lg:p-10 w-full lg:w-fit h-fit items-center">
    <div class="grid gap-6 bg-primary-100 rounded-3xl w-full p-5">
      <div class="grid gap-2.5">
        <h2 class="text-lg text-gray-900 font-semibold underline underline-white underline-offset-8">
          Arbeitgeber
        </h2>
        <span class="text-base">Melli</span>
      </div>
      <div class="grid gap-2.5">
        <h2 class="text-lg text-gray-900 font-semibold underline underline-white underline-offset-8">
          Arbeitspensum
        </h2>
        <span class="text-base">{{ period }}</span>
      </div>
      <div class="grid gap-2.5">
        <h2 class="text-lg text-gray-900 font-semibold underline underline-white underline-offset-8">
          Arbeitsort
        </h2>
        <span class="text-base">{{ location }}</span>
      </div>
      <div class="grid gap-2.5">
        <h2 class="text-lg text-gray-900 font-semibold underline underline-white underline-offset-8">
          Veröffentlichungsdatum
        </h2>
        <span class="text-base">{{ datePosted }}</span>
      </div>
      <div class="grid gap-2.5">
        <h2 class="text-lg text-gray-900 font-semibold underline underline-white underline-offset-8">
          Berufserfahrung
        </h2>
        <span class="text-base">{{ experience }}</span>
      </div>
      <a :href="apply" target="_blank" class="py-4 px-7 bg-primary-500 rounded-lg decoration-none w-fit">
        <span class="text-white font-semibold text-base">Jetzt bewerben</span>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
