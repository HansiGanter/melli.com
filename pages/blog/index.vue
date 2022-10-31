<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: 'Melli',
  meta: [
    { name: 'description', content: 'News und Beiträge zu Melli. Informieren Sie sich über neue Produktfunktionen, kostenlose Tipps, Angebote, Aktionen und vieles mehr.' },
  ],
})

const filters = ['Latest', 'Pricing', 'Product', 'Social']
const currentFilter = ref('')
</script>

<template>
  <Container class="py-8 lg:py-16 overflow-hidden px-5 ">
    <div class="grid gap-8 justify-items-center">
      <div class="grid gap-3 sm:gap-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center">
        <h2 class="text-2xl font-semibold lg:text-5xl text-gray-900">
          {{ t('blog.heading') }}
        </h2>
        <p class="text-gray-500 font-medium text-lg lg:text-2xl">
          {{ t('blog.subheading') }}
        </p>
      </div>
      <div class="grid gap-2 w-full lg:w-6/12 lg:mx-auto">
        <NewsletterOpen />
      </div>
    </div>
  </Container>
  <Container class="pb-20 lg:pb-28 px-5">
    <div class="grid gap-8">
      <div class="flex items-center justify-center gap-3">
        <button
          v-for="filter in filters"
          :key="filter"
          type="button"
          class="py-2.5 px-4 font-medium text-sm inline rounded-full transition delay-150 ease-in-out"
          :class="currentFilter === filter ? 'bg-primary-50 text-primary-700' : 'bg-transparent text-gray-500'"
          @click="currentFilter = filter"
        >
          {{ filter }}
        </button>
      </div>
      <PostPreview prefix="/blog" />
    </div>
  </Container>
</template>
