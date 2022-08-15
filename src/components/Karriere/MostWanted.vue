<script setup lang="ts">
const job = reactive(
  {
    title: 'Lead Engineer (m/f/d)',
    text: 'We’re looking for an experienced engineering manager to join our team.',
    period: 'Full-time',
  })
</script>

<template>
  <Container class="py-12 lg:py-24">
    <div class="grid gap-8">
      <h1 class="font-semibold text-gray-900 text-2xl lg:text-3xl text-center lg:text-left">
        Most wanted - Job der Woche
      </h1>
      <JobCard job-type="software" :title="job.title" :text="job.text" :period="job.period" />
      <button class="bg-primary-900 text-medium text-base text-white w-fit flex items-center py-2.5 px-4 rounded-full gap-2 ml-auto">
        <span>mehr Jobangeboten</span>
        <div class="i-carbon:arrow-right w-5 h-5" />
      </button>
    </div>
  </Container>
</template>
