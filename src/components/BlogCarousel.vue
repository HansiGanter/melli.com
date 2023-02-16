<script setup lang="ts">
const isProduction = import.meta.env.PROD
const router = useRouter()
const routes = computed(() => router.getRoutes()
  .filter(
    route =>
      route.path.startsWith('/blog')
      && (route.meta.frontmatter) // todo: why is there a second route without frontmatter?
      && (route.meta as any).frontmatter.date
      && (!isProduction || !route.path.startsWith('/blog/examples')),
  ))
</script>

<template>
  <h2 class="text-4xl sm:text-5xl font-semibold ml-6 sm:ml-24 mt-12 sm:mt-24">
    Mehr über Melli erfahren
  </h2>
  <div class="snap-mandatory snap-x flex gap-6 overflow-x-auto py-12">
    <RouterLink v-for="(r, index) in routes" :key="index" :to="r.path" class="snap-center shrink-0 w-70 h-100 sm:w-100 sm:h-140" :class="index === 0 ? 'ml-6 sm:ml-24' : index === routes.length - 1 ? 'mr-20' : ''">
      <img v-if="r.meta.frontmatter" :src="r.meta.frontmatter.imageUrl" class="h-50 sm:h-70 w-full object-cover rounded-t-3xl">
      <div class="h-50 sm:h-70 flex flex-col gap-4 justify-between items-center bg-gray-50 rounded-b-3xl px-2 sm:px-8 py-4 sm:py-12">
        <h3 class="text-center font-semibold text-xl sm:text-2xl">
          {{ r.meta.frontmatter.title }}
        </h3>
        <div class="flex gap-2 items-center text-base sm:text-lg">
          <span>mehr erfahren</span>
          <div class="i-lucide:arrow-right" />
        </div>
      </div>
    </RouterLink>
  </div>
</template>
