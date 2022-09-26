<script setup lang="ts">
import { fireOpenPositionEvent } from '~/google-tag-manager'
const router = useRouter()
const routes = router.getRoutes()
  .filter(
    route => route.path.startsWith('/karriere')
      && (route.meta.frontmatter) // todo: why is there a second route without frontmatter?
      && (route.meta as any).frontmatter.date,
  )
  .sort((a, b) => +new Date((b.meta as any).frontmatter.date) - +new Date((a.meta as any).frontmatter.date))

const job = computed(() => {
  return routes.find(route => route.meta.frontmatter.category.name.toLowerCase() === 'software')
})
</script>

<template>
  <Container class="py-12 lg:py-24">
    <div class="grid gap-8">
      <h1 class="font-semibold text-gray-900 text-2xl lg:text-3xl text-center lg:text-left">
        Most wanted - Job der Woche
      </h1>
      <JobCard job-type="software" :title="job.meta.frontmatter.title" :text="job.meta.frontmatter.description" :period="job.meta.frontmatter.period" :path="job.path" @click="fireOpenPositionEvent(job.meta.frontmatter.title)" />
      <router-link to="#jobangebote" class="bg-primary-900 text-medium text-base text-white w-fit flex items-center py-2.5 px-4 rounded-full gap-2 ml-auto" @click="fireOpenPositionEvent()">
        <span>mehr Jobangebote</span>
        <div class="i-carbon:arrow-right w-5 h-5" />
      </router-link>
    </div>
  </Container>
</template>
