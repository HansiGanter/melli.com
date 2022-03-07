<script setup lang="ts">
import VTypical from 'vue-typical'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const { t } = useI18n()

const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('md')
</script>

<template>
  <Container
    class="bg-gradient-to-b from-white to-tertiary-50 dark:from-gray-900 dark:to-gray-900 pt-8 pb-20 lg:pt-16 lg:pb-28"
  >
    <h1
      v-if="smAndLarger"
      class="pt-8 pb-16 text-3xl sm:text-4xl tracking-wide flex items-center justify-center"
    >
      <v-typical
        class="blink after:text-primary-500"
        :steps="[t('jobs.typing.text-1'), 1500, t('jobs.typing.text-2'), 1500, t('jobs.typing.text-3'), 1500]"
      />
    </h1>
    <h2 class="text-3xl tracking-tight font-semibold sm:text-4xl">
      {{ t('jobs.heading') }}
    </h2>
    <p
      class="mt-3 mb-8 text-xl text-gray-500 dark:text-white sm:mt-4"
    >
      {{ t('jobs.subheading') }}
    </p>
    <PostPreview prefix="/jobs" />
  </Container>
</template>

<style scoped>
.blink::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
