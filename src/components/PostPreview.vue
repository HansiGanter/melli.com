<script setup lang="ts">
const props = withDefaults(
  defineProps<{ prefix: string; nPosts?: number }>(),
  { nPosts: 16 },
)

const isProduction = import.meta.env.PROD
const router = useRouter()
const routes = router.getRoutes()
  .filter(
    route =>
      route.path.startsWith(props.prefix)
      && (route.meta.frontmatter) // todo: why is there a second route without frontmatter?
      && (route.meta as any).frontmatter.date
      && (!isProduction || !route.path.startsWith('/blog/examples')),
  )
  .sort((a, b) => +new Date((b.meta as any).frontmatter.date) - +new Date((a.meta as any).frontmatter.date))
  .slice(0, props.nPosts)
</script>

<template>
  <div class="max-w-lg mx-auto grid gap-8 lg:gap-x-8 lg:gap-y-10 md:grid-cols-2 md:max-w-none xl:grid-cols-3">
    <PostPreviewItem v-for="route in routes" :key="route.path" :route="route" />
  </div>
</template>
