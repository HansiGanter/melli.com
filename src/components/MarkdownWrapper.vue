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
  <Container v-if="frontmatter.title" class="my-12">
    <header class="m-auto text-center prose mb-12">
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
    <article class="m-auto prose">
      <slot />
    </article>
  </Container>
  <!-- but leave components as is -->
  <slot v-else />
</template>
