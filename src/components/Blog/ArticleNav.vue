<script setup lang="ts">
const isProduction = import.meta.env.PROD
const router = useRouter()

const routes = router.getRoutes().filter(route => route.path.startsWith('/blog/')
&& (!isProduction || !route.path.startsWith('/blog/examples'))
&& (route.meta.frontmatter)).map(route => route.path)

const currentIndex = routes.indexOf(router.currentRoute.value.path)

const prevRoute = currentIndex === 0 ? routes[routes.length - 1] : routes[(currentIndex - 1) % routes.length]
const nexRoute = routes[(currentIndex + 1) % routes.length]
</script>

<template>
  <Container>
    <div class="flex items-center justify-between w-full border-t border-gray-200 py-6">
      <router-link :to="prevRoute" class="inline-flex items-center gap-1 md:gap-2 py-2.5 px-4">
        <div class="i-carbon:arrow-left bg-primary-400 h-6 w-6 shrink-0" />
        <span class="font-medium text-gray-900 text-base lg:text-lg">vorherigen Artikel lesen</span>
      </router-link>
      <router-link :to="nexRoute" class="inline-flex items-center gap-1 md:gap-2 py-2.5 px-4">
        <span class="font-medium text-gray-900 text-base lg:text-lg text-right">nächsten Artikel lesen</span>
        <div class="i-carbon:arrow-right bg-primary-400 h-6 w-6 shrink-0" />
      </router-link>
    </div>
  </Container>
</template>
