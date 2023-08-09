<script setup lang="ts">
const { t } = useI18n()
import { fireInfoPackageOpenEvent } from '~/google-tag-manager'

const isProduction = import.meta.env.PROD
useHead({
  title: 'Melli',
  meta: [
    { name: 'description', content: 'News und Beiträge zu Melli. Informiere dich über neue Produktfunktionen, kostenlose Tipps, Angebote, Aktionen und vieles mehr.' },
  ],
})

const router = useRouter()
const categories = [...new Set(router.getRoutes()
  .filter(
    route =>
      route.path.startsWith('/blog/')
      && (route.meta.frontmatter)
      && (!isProduction || !route.path.startsWith('/blog/examples'))
      && (route.meta as any).frontmatter.categories,
  ).map(route => (route.meta as any).frontmatter.categories)
  .flat())]
categories.sort()
categories.unshift('Alle')

const currentFilter = ref(categories[0])

const showNewsletterModal = ref(false)
const newsletterEmail = ref()

const openNewsletterModal = (email?: string) => {
  fireInfoPackageOpenEvent(email)
  newsletterEmail.value = email
  showNewsletterModal.value = true
}

const onEmailFormSubmit = (e: Event) => {
  const formData = new FormData(e.target as HTMLFormElement)
  const email = formData.get('email') as string
  openNewsletterModal(email)
}
</script>

<template>
  <InfoPackageModal :show="showNewsletterModal" :email="newsletterEmail" @close="showNewsletterModal = false" />

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
        <form class="flex flex-wrap gap-4 justify-center" @submit.prevent="onEmailFormSubmit">
          <input class="border-2 rounded-full w-full min-w-48 max-w-100 px-4 py-2.5" placeholder="name@email.de"
            type="email" name="email" required>
          <div class="flex gap-3">
            <button type="submit"
              class="text-white bg-primary-400 flex gap-0.5 items-center px-7 py-3 rounded-lg w-fit font-medium">
              Infopaket&nbsp;bestellen
              <div class="i-lucide:arrow-right w-6 h-6 shrink-0" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </Container>
  <Container class="pb-20 lg:pb-28 px-5">
    <div class="grid gap-8">
      <div class="flex items-center justify-center gap-3 flex-wrap">
        <button v-for="categorie in categories" :key="categorie" type="button"
          class="py-2.5 px-4 font-medium text-sm inline rounded-full transition delay-150 ease-in-out cursor-pointer hover:bg-primary-50 hover:text-primary-700"
          :class="currentFilter === categorie ? 'bg-primary-50 text-primary-700' : 'bg-transparent text-gray-500'"
          @click="currentFilter = categorie">
          {{ categorie }}
        </button>
      </div>
      <PostPreview :current-filter="currentFilter" prefix="/blog" />
    </div>
  </Container>
</template>
