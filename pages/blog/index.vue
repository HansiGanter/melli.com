<script setup lang="ts">
import { fireNewsletterEvent } from '~/google-tag-manager'
const { t } = useI18n()

const newsletterDialogOpen = ref(false)
const email = ref('')

const open = () => {
  // we have to ensure the query params are set before the hubspot script loads
  setTimeout(() => {
    newsletterDialogOpen.value = true
  }, 0)
}

const filters = ['Latest', 'Pricing', 'Product', 'Social']
const currentFilter = ref('')
</script>

<template>
  <Container class="py-8 lg:py-16 overflow-hidden">
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
        <FormKit
          id="blog-newsletter-form-open"
          class="flex items-stretch h-fit"
          type="form"
          :actions="false"
          :incomplete-message="false"
          @submit="open"
        >
          <div class="flex items-stretch h-fit">
            <FormKit
              v-model="email"
              type="email"
              name="email"
              placeholder="Email-Adresse"
              outer-class="grow"
              wrapper-class="h-fill"
              validation="required|email"
              validation-visibility="submit"
              inner-class="w-full h-fill border border-primary-400 rounded-l-lg overflow-hidden"
              message-class="text-red mt-1"
              input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <FormKit
              type="submit"
              input-class="flex items-center w-fit gap-2 px-4 pb-3.5 pt-4 lg:px-5 lg:pb-2.5 lg:pt-3 bg-primary-400 rounded-r-lg text-white"
              wrapper-class="grow"
              @click="fireNewsletterEvent"
            >
              <span>{{ t('blog.subscribe-button') }}</span>
              <div class="i-carbon:chevron-right" />
            </FormKit>
          </div>
        </FormKit>
      </div>
    </div>
  </Container>
  <Container class="pb-20 lg:pb-28">
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
  <Modal :show="newsletterDialogOpen" @close="newsletterDialogOpen = false">
    <NewsletterDialog :email="email" />
  </Modal>
</template>
