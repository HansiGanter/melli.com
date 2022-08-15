<script setup lang="ts">
const { t } = useI18n()

const router = useRouter()
const routes = router.getRoutes()
  .filter(
    route => route.path.startsWith('/jobs')
      && (route.meta.frontmatter) // todo: why is there a second route without frontmatter?
      && (route.meta as any).frontmatter.date,
  )
  .sort((a, b) => +new Date((b.meta as any).frontmatter.date) - +new Date((a.meta as any).frontmatter.date))
</script>

<template>
  <h3>{{ t('jobs.open-positions.heading') }}</h3>
  <ul>
    <li v-for="route in routes" :key="route.path">
      <router-link :to="route.path">
        {{ route.meta.frontmatter.title }}
      </router-link>
    </li>
  </ul>
</template>
