<script setup lang="ts">
import { fireBlogEvent } from '~/google-tag-manager'
const props = withDefaults(
  defineProps<{ currentFilter: string; prefix: string; nPosts?: number }>(),
  { nPosts: 16 },
)

const isProduction = import.meta.env.PROD
const router = useRouter()
const routes = computed(() => router.getRoutes()
  .filter(
    route =>
      route.path.startsWith(props.prefix)
      && (route.meta.frontmatter) // todo: why is there a second route without frontmatter?
      && (route.meta as any).frontmatter.categories
      && (route.meta as any).frontmatter.date
      && (!isProduction || !route.path.startsWith('/blog/examples'))
      && ((route.meta as any).frontmatter.categories.includes(props.currentFilter) || (props.currentFilter === 'Alle')),
  )
  .sort((a, b) => +new Date((b.meta as any).frontmatter.date) - +new Date((a.meta as any).frontmatter.date))
  .slice(0, props.nPosts))
</script>

<template>
  <div class="max-w-lg mx-auto grid gap-8 lg:gap-x-8 lg:gap-y-10 md:grid-cols-2 md:max-w-none xl:grid-cols-3">
    <PostPreviewItem v-for="n in routes" :key="n.path" :route="n" @click="fireBlogEvent((n.meta as any).frontmatter.title)" />
  </div>
</template>
