<script setup lang="ts">
import { useHead } from '@vueuse/head'

const props = defineProps<{ frontmatter?: any }>()

const { d } = useI18n()
const router = useRouter()

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
const blogs = router.getRoutes()
  .filter(
    route => route.path.startsWith('/blog')
      && (route.meta.frontmatter) // todo: why is there a second route without frontmatter?
      && (route.meta as any).frontmatter.title,
  ).splice(0, 3)
</script>

<template>
  <!-- we wrap pages -->
  <div v-if="frontmatter.title">
    <div v-if="frontmatter.category && frontmatter.category.href === 'blogs'">
      <ArticleHeader v-if="frontmatter.title" :hero-url="frontmatter.imageUrl" :category="frontmatter.category.name" :heading="frontmatter.title" :description="frontmatter.description" />
      <ArticleAuthor v-if="frontmatter.author" :author="frontmatter.author.name" :date="d(frontmatter.date, 'long')" />
      <div v-if="frontmatter.category && frontmatter.category.href === 'jobs'">
        <KarriereHeader :title="frontmatter.title" :period="frontmatter.period" />
      </div>
      <!-- <header v-else class="m-auto text-center prose mb-12">
        <h1>{{ frontmatter.title }}</h1>
        <p class="text-lg">
          {{ frontmatter.description }}
        </p>
        <div class="text-lg opacity-50">
          <span v-if="frontmatter.date">{{ d(frontmatter.date, 'long') }}</span>
          <span v-if="frontmatter.duration">· {{ frontmatter.duration }}</span>
        </div>
        <hr class="mx-auto mt-8 prose">
      </header> -->
      <article v-if="frontmatter.category && frontmatter.category.href === 'blogs'" class="m-auto prose text-lg max-w-screen-[920px] px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24">
        <slot />
      </article>
      <article v-else class="m-auto prose">
        <slot />
      </article>
      <!-- <ArticleRecommendations v-if="frontmatter.category && frontmatter.category.href === 'blogs'" :articles="blogs" /> -->
      <!-- <ContactSection v-if="frontmatter.category && frontmatter.category.href === 'blogs'" /> -->
    </div>
    <!-- but leave components as is -->
    <slot v-else />
  </div>
</template>
