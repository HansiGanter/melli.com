<script setup lang="ts">
const jobProps = defineProps<{
  jobType: string
  title: string
  text: string
  period: string
}>()

const jobTypes = ref(['software', 'design', 'product'])

const typeClass = computed(() => {
  return {
    'bg-primary-50 text-primary-700 text-sm font-medium': jobTypes.value.indexOf(jobProps.jobType) === 0,
    'bg-blue-50 text-blue-700 text-sm font-medium': jobTypes.value.indexOf(jobProps.jobType) === 1,
    'bg-amber-50 text-amber-700 text-sm font-medium': jobTypes.value.indexOf(jobProps.jobType) === 2,
  }
})
</script>

<template>
  <div class="border border-gray-300 p-4 lg:p-6 rounded-2xl">
    <div class="grid gap-8">
      <div class="grid gap-3">
        <div class="flex items-start lg:items-center justify-between gap-2">
          <div class="gap-3.5 flex flex-col md:flex-row">
            <h3 class="font-medium text-xl text-gray-900">
              {{ jobProps.title }}
            </h3>
            <Badge :class="typeClass">
              <span class="capitalize">{{ jobType }}</span>
            </Badge>
          </div>
          <div class="flex gap-2 items-center">
            <span class="text-gray-500 text-base">Berlin</span>
            <div class="i-carbon:location text-gray-400 w-6 h-6" />
          </div>
        </div>
        <span class="text-lg text-gray-500 font-normal">{{ jobProps.text }}</span>
      </div>
      <div class="flex gap-2 items-center">
        <div class="i-carbon:time text-gray-400 w-6 h-6" />
        <span class="text-gray-500 font-medium text-base">{{ jobProps.period }}</span>
      </div>
    </div>
  </div>
</template>
