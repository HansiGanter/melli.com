<script setup lang="ts">
const articleHeaderProps = defineProps<{
  heroUrl: string;
  categories?: string[];
  heading: string;
  description?: string;
}>();
</script>

<template>
  <Container lang="de" class="py-10 max-h-fit min-h-96 bg-top bg-cover bg-no-repeat overflow-hidden"
    :style="{ backgroundImage: `url('${articleHeaderProps.heroUrl}')` }">
    <router-link to="/blog" class="inline-flex items-center py-2.5 px-4 gap-2 filter-none">
      <div class="i-carbon:arrow-left bg-primary-400 h-6 w-6" />
      <span class="text-white font-medium text-base">zurück zur Übersicht</span>
    </router-link>
    <div class="py-30 sm:mx-4 grid h-full items-center max-w-screen-2xl">
      <div class="bg-gray-50/80 p-6 lg:p-12 rounded-[32px] w-full md:w-fit grid gap-2.5 content-start shadow-md">
        <div class="flex flex-wrap gap-2">
          <Badge v-for="category in articleHeaderProps.categories" :key="category" class="bg-primary-50">
            <span class="text-primary-700 font-medium text-sm">{{ category }}</span>
          </Badge>
        </div>
        <div class="grid gap-6 md:max-w-lg ">
          <h1 class="text-black font-semibold text-4xl lg:text-5xl md:leading-10 lg:!leading-14" style="hyphens: auto;">
            {{ articleHeaderProps.heading }}
          </h1>
          <p v-if="description" class="font-medium text-lg lg:text-2xl text-black">
            {{ articleHeaderProps.description }}
          </p>
        </div>
      </div>
    </div>
  </Container>
</template>
