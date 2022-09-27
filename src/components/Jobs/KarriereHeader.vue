<script setup lang="ts">
interface HeaderProps {
  title: string
  period: string
}
defineProps<HeaderProps>()
</script>

<template>
  <Container class="bg-primary-900 max-h-fit rounded-b-3xl">
    <div class="grid gap-16 py-8 lg:py-16">
      <router-link to="/karriere" class="inline-flex items-center py-2.5 px-4 gap-2 filter-none">
        <div class="i-carbon:arrow-left bg-white h-6 w-6" />
        <span class="text-white font-medium text-base">zurück</span>
      </router-link>
      <div class="grid gap-6 justify-items-center">
        <h1 class="text-white font-semibold text-2xl lg:text-5xl">
          {{ title }}
        </h1>
        <div class="flex items-center gap-4">
          <div class="flex gap-2 items-center">
            <div class="i-carbon:location text-gray-200 w-6 h-6" />
            <span class="text-gray-100 text-xl font-medium">Berlin</span>
          </div>
          <div v-if="period" class="flex gap-2 items-center">
            <div class="i-carbon:time text-gray-200 w-6 h-6" />
            <span class="text-gray-100 text-xl font-medium">{{ period }}</span>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>

</style>
