<script setup lang="ts">
import { useHead } from '@vueuse/head'

const props = defineProps<{ frontmatter?: any }>()

const { d } = useI18n()
// const router = useRouter()

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
// const blogs = router.getRoutes()
//   .filter(
//     route => route.path.startsWith('/blog')
//       && (route.meta.frontmatter) // todo: why is there a second route without frontmatter?
//       && (route.meta as any).frontmatter.title,
//   ).splice(0, 3)
</script>

<template>
  <!-- we wrap pages -->
  <div v-if="frontmatter.title">
    <!-- Blogs -->
    <div v-if="frontmatter.category && frontmatter.category.href === 'blogs'">
      <ArticleHeader v-if="frontmatter.title" :hero-url="frontmatter.imageUrl" :category="frontmatter.category.name" :heading="frontmatter.title" :description="frontmatter.description" />
      <ArticleAuthor v-if="frontmatter.author" :author="frontmatter.author.name" :date="d(frontmatter.date, 'long')" />
      <article class="m-auto prose text-lg max-w-[920px] px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12">
        <slot />
      </article>
      <ArticleNav />
      <div class="max-w-[920px] mx-auto mx-8 my-8 px-4">
        <div class="rounded-3xl bg-yellow-50 px-4">
          <SocialMedia class="pt-12" />
          <div class=" mx-auto py-8">
            <h1 class="mx-auto my-4 w-fit text-primary-900 text-2xl text-center font-medium">
              Zum Newsletter anmelden & Infomaterial erhalten
            </h1>
            <div class="max-w-md mx-auto">
              <NewsletterOpen />
            </div>
          </div>
        </div>
      </div>
      <ArticleRecommendations v-if="frontmatter.articleRecommendations" :articles="frontmatter.articleRecommendations" />
    </div>
    <!-- Legal -->
    <div v-if="frontmatter.category && frontmatter.category.href === 'legal'">
      <article class="m-auto prose text-lg max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24">
        <slot />
      </article>
    </div>
    <!-- Jobs -->
    <div v-if="frontmatter.category && frontmatter.category.href === 'jobs'">
      <KarriereHeader :title="frontmatter.title" :period="frontmatter.period" />
      <article class="m-auto prose text-lg max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24">
        <slot />
      </article>
    </div>
  </div>
</template>
