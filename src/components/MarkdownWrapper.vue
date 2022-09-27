<script setup lang="ts">
import { useHead } from '@vueuse/head'

const props = defineProps<{ frontmatter?: any }>()

const { d } = useI18n()

// convention: if the frontmatter defines a title, we assume the component it is a page
if (props.frontmatter.title) {
  useHead({
    meta: [{
      property: 'og:image',
      content: computed(
        () => props.frontmatter.cover
          ? props.frontmatter.cover
          : 'https://assets.melli.com/images/mockups/device-group-call.webp'),
    }],
  })
}
</script>

<template>
  <!-- we wrap pages -->
  <div v-if="frontmatter.title">
    <div v-if="frontmatter.category && frontmatter.category.href === 'jobs'">
      <KarriereHeader :title="frontmatter.title" :period="frontmatter.period" />
    </div>
    <header v-else class="m-auto text-center prose mb-12">
      <h1>{{ frontmatter.title }}</h1>
      <p class="text-lg">
        {{ frontmatter.description }}
      </p>
      <div class="text-lg opacity-50">
        <span v-if="frontmatter.date">{{ d(frontmatter.date, 'long') }}</span>
        <span v-if="frontmatter.duration">· {{ frontmatter.duration }}</span>
      </div>
      <hr class="mx-auto mt-8 prose">
    </header>
    <div v-if="frontmatter.category && frontmatter.category.href === 'jobs'" class="relative grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-10">
      <div class="order-2 lg:order-1" />
      <article class="m-auto prose order-3 lg:order-2 px-5 sm:px-6 lg:px-8">
        <slot />
      </article>
      <BlockSummary class="order-1 lg:order-3" :apply="frontmatter.apply" :date-posted="d(frontmatter.date, 'long')" :experience="frontmatter.experience" location="Berlin" :period="frontmatter.period" />
    </div>
    <article v-else class="m-auto prose">
      <slot />
    </article>
  </div>
  <!-- but leave components as is -->
  <slot v-else />
</template>
