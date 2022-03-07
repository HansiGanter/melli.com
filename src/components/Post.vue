<script setup lang="ts">
import { useHead } from '@vueuse/head'

const { d } = useI18n()

const props = defineProps<{ frontmatter: any }>()
useHead({
  meta: [{
    property: 'og:image',
    content: computed(
      () => props.frontmatter.cover
        ? props.frontmatter.cover
        : 'https://mit-emilia.de/wp-content/uploads/2021/10/Emilia_Tablet_Mockups_ScreensIntro-1-800x512.png')
  }]
})
</script>

<template>
  <!-- wrap markdown files with yaml header in container and use prose style -->
  <Container v-if="frontmatter.title" class="my-12">
    <header class="m-auto text-center prose mb-12">
      <h1>{{ frontmatter.title }}</h1>
      <p class="text-lg">{{ frontmatter.description }}</p>
      <div class="text-lg opacity-50">
        <span v-if="frontmatter.date">{{ d(frontmatter.date, 'long') }}</span>
        <span v-if="frontmatter.duration">· {{ frontmatter.duration }}</span>
      </div>
      <hr class="mx-auto mt-8 prose" />
    </header>
    <article class="m-auto prose">
      <slot />
    </article>
  </Container>
  <!-- render markdown files without yaml header as plain html -->
  <slot v-else />
</template>
