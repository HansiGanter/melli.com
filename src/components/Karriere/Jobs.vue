<script setup lang="ts">
const router = useRouter()
const routes = router.getRoutes()
  .filter(
    route => route.path.startsWith('/karriere')
      && (route.meta.frontmatter) // todo: why is there a second route without frontmatter?
      && (route.meta as any).frontmatter.date,
  )
  .sort((a, b) => +new Date((b.meta as any).frontmatter.date) - +new Date((a.meta as any).frontmatter.date))

const softwareJobs = computed(() => {
  return routes.filter(route => route.meta.frontmatter.category.name.toLowerCase() === 'software')
})

const designJobs = computed(() => {
  return routes.filter(route => route.meta.frontmatter.category.name.toLowerCase() === 'design')
})

const productJobs = computed(() => {
  return routes.filter(route => route.meta.frontmatter.category.name.toLowerCase() === 'product')
})

const otherJobs = computed(() => {
  return routes.filter(route => route.meta.frontmatter.category.name.toLowerCase() === 'other')
})

const items = ref([softwareJobs.value.length > 0 ? 'Software Development' : '', designJobs.value.length > 0 ? 'Design' : '', productJobs.value.length > 0 ? 'Product' : '', otherJobs.value.length > 0 ? 'Other' : ''])
const filters = computed(() => {
  return items.value.filter(item => (item !== ''))
})
const currentFilter = ref('All')
</script>

<template>
  <Container id="jobangebote" class="py-12 lg:py-24">
    <div class="grid gap-10 lg:gap-16 justify-items-center">
      <h1 class="font-semibold text-4xl lg:text-5xl text-black">
        Aktuelle Jobangebote
      </h1>
      <div class="flex flex-wrap items-center gap-3 lg:gap-6">
        <button type="button" class="py-2.5 px-4 inline font-medium text-sm rounded-full transition delay-150 ease-in-out" :class="currentFilter === 'All' ? 'bg-primary-50 text-primary-700' : 'bg-transparent text-gray-500'" @click="currentFilter = 'All'">
          All
        </button>
        <button v-for="filter in filters" :key="filter" type="button" class="py-2.5 px-4 inline font-medium text-sm rounded-full transition delay-150 ease-in-out" :class="currentFilter === filter ? 'bg-primary-50 text-primary-700' : 'bg-transparent text-gray-500'" @click="currentFilter = filter">
          {{ filter }}
        </button>
      </div>
      <div class="grid gap-8 w-full max-w-6xl">
        <div v-if="(currentFilter === 'Software Development' || currentFilter === 'All') && softwareJobs.length > 0" class="grid gap-6">
          <h3 class="font-medium text-gray-900 text-xl lg:text-2xl">
            Software Development 💻
          </h3>
          <JobCard v-for="(job, n) in softwareJobs" :key="n" job-type="software" :title="job.meta.frontmatter.title" :text="job.meta.frontmatter.description" :period="job.meta.frontmatter.period" :path="job.path" />
        </div>
        <div v-if="(currentFilter === 'Design' || currentFilter === 'All') && designJobs.length > 0" class="grid gap-6">
          <h3 class="font-medium text-gray-900 text-xl lg:text-2xl">
            Design  🎨
          </h3>
          <JobCard v-for="(job, d) in designJobs" :key="d" job-type="design" :title="job.meta.frontmatter.title" :text="job.meta.frontmatter.description" :period="job.meta.frontmatter.period" :path="job.path" />
        </div>
        <div v-if="(currentFilter === 'Product' || currentFilter === 'All') && productJobs.length > 0" class="grid gap-6">
          <h3 class="font-medium text-gray-900 text-xl lg:text-2xl">
            Product  🚀
          </h3>
          <JobCard v-for="(job, p) in productJobs" :key="p" job-type="product" :title="job.meta.frontmatter.title" :text="job.meta.frontmatter.description" :period="job.meta.frontmatter.period" :path="job.path" />
        </div>
        <div v-if="(currentFilter === 'Other' || currentFilter === 'All') && otherJobs.length > 0" class="grid gap-6">
          <h3 class="font-medium text-gray-900 text-xl lg:text-2xl">
            Other 🧪
          </h3>
          <JobCard v-for="(job, p) in otherJobs" :id="job.meta.frontmatter.title.toLowerCase()" :key="p" job-type="other" :title="job.meta.frontmatter.title" :text="job.meta.frontmatter.description" :period="job.meta.frontmatter.period" :path="job.path" />
        </div>
      </div>
    </div>
  </Container>
</template>
