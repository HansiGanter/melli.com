<script setup lang="ts">
const props = defineProps<{
  articles: Array<string>;
}>();

const router = useRouter();
const routes: any = props.articles
  .map(articlePath => router.getRoutes().find(r => r.path === articlePath))
  .filter(x => x !== undefined);

console.log(routes);
</script>

<template>
  <Container class="bg-primary-100 py-10 md:py-24 mx-auto">
    <div class="grid gap-12">
      <div class="flex items-center justify-between">
        <h2 class="text-gray-900 font-semibold sm:text-2xl md:text-4xl my-0">
          Auch interessant
        </h2>
        <router-link to="/blog" class="inline-flex gap-3 items-center">
          <span class="font-medium sm:text-base md:text-lg text-black">mehr Artikel</span>
          <div class="i-carbon:arrow-right bg-gray-700 h-6 w-6" />
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="route in routes" :key="route" class="grid content-start cursor-pointer rounded-3xl hover:shadow-md">
          <router-link :to="route.path">
            <img :src="route.meta.frontmatter.previewUrl ?? route.meta.frontmatter.imageUrl"
              class="w-full h-64 rounded-3xl object-center object-cover">
            <div class="flex flex-wrap py-4 gap-2">
              <Badge v-for="category in route.meta.frontmatter.categories" :key="category" class="bg-primary-50">
                <span class="text-primary-700 font-medium text-sm">{{ category }}</span>
              </Badge>
              <div class="text-black">
                <h4 class="font-semibold text-xl">
                  {{ route.meta.frontmatter.title }}
                </h4>
                <div class="font-normal text-base">
                  {{ route.meta.frontmatter.description }}
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped></style>
