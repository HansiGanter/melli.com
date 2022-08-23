<script setup lang="ts">
const softwareJobs = ref([
  {
    title: 'Lead Engineer (m/f/d)',
    text: 'We’re looking for an experienced engineering manager to join our team.',
    period: 'Full-time',
  },
  {
    title: 'Software Engineer: Full Stack (m/f/d)',
    text: 'We’re looking for an experienced fullstack software engineer to join our team.',
    period: 'Full-time',
  },
  {
    title: 'Frontend Developer (m/f/d)',
    text: 'We’re looking for an experienced frontend developer to join our team.',
    period: 'Full-time, Part-timee',
  },
  {
    title: 'Data Scientist with a focus on NLP (m/f/d)',
    text: 'We’re looking for an experienced ML guru to join our team.',
    period: 'Full-time',
  },
  {
    title: 'Working Student Full Stack Developer (m/f/d)',
    text: 'We’re looking for a fullstack student intern to join our team.',
    period: 'Part-time',
  },
],
)

const designJobs = ref([
  {
    title: 'Product Designer (m/f/d)',
    text: 'We’re looking for an experienced product designer to join our team.',
    period: 'Full-time',
  },
])

const productJobs = ref([
  {
    title: 'PR manager/consultant (m/f/d)',
    text: 'We’re looking for an experienced product manager to join our team.',
    period: 'Full-time',
  },
])

const filters = ref(['All', 'Software Development', 'Design', 'Product'])
const currentFilter = ref(filters.value[0])
</script>

<template>
  <Container id="jobangebote" class="py-12 lg:py-24">
    <div class="grid gap-10 lg:gap-16 justify-items-center">
      <h1 class="font-semibold text-4xl lg:text-5xl text-black">
        Aktuelle Jobangebote
      </h1>
      <div class="flex flex-wrap items-center gap-3 lg:gap-6">
        <button v-for="filter in filters" :key="filter" type="button" class="py-2.5 px-4 font-medium text-sm inline rounded-full transition delay-150 ease-in-out" :class="currentFilter === filter ? 'bg-primary-50 text-primary-700' : 'bg-transparent text-gray-500'" @click="currentFilter = filter">
          {{ filter }}
        </button>
      </div>
      <div class="grid gap-8 w-full max-w-6xl">
        <div class="grid gap-6">
          <h3 class="font-medium text-gray-900 text-xl lg:text-2xl">
            Software Development 💻
          </h3>
          <JobCard v-for="(job, n) in softwareJobs" :key="n" job-type="software" :title="job.title" :text="job.text" :period="job.period" />
        </div>
        <div class="grid gap-6">
          <h3 class="font-medium text-gray-900 text-xl lg:text-2xl">
            Design  🎨
          </h3>
          <JobCard v-for="(job, d) in designJobs" :key="d" job-type="design" :title="job.title" :text="job.text" :period="job.period" />
        </div>
        <div class="grid gap-6">
          <h3 class="font-medium text-gray-900 text-xl lg:text-2xl">
            Product  🚀
          </h3>
          <JobCard v-for="(job, p) in productJobs" :key="p" job-type="product" :title="job.title" :text="job.text" :period="job.period" />
        </div>
      </div>
    </div>
  </Container>
</template>
