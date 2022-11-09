<script setup lang="ts">
interface Recommendations {
  articles: Array<any>
}
defineProps<Recommendations>()
</script>

<template>
  <Container class="bg-primary-100 py-24">
    <div class="grid gap-8">
      <div class="flex items-center justify-between">
        <h2 class="text-gray-900 font-semibold text-5xl my-0">
          Auch interessant
        </h2>
        <router-link to="/blog" class="inline-flex gap-3 items-center">
          <span class="font-medium text-lg text-black">mehr Artikel</span>
          <div class="i-carbon:arrow-right bg-gray-700 h-6 w-6" />
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="article in articles" :key="article" class="grid content-start">
          <img :src="article.meta.frontmatter.imageUrl" class="w-full h-64 rounded-3xl object-center object-cover">
          <div class="grid py-4 gap-4">
            <Badge class="bg-primary-50">
              <span class="text-primary-700 font-medium text-sm">{{ article.meta.frontmatter.category.name }}</span>
            </Badge>
            <div class="grid gap-3 text-black">
              <h4 class="font-semibold text-xl">
                {{ article.meta.frontmatter.title }}
              </h4>
              <p class="font-normal text-base">
                {{ article.meta.frontmatter.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>

</style>
