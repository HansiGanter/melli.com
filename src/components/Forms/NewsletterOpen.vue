<script setup lang="ts">
import { fireNewsletterOpenEvent } from '~/google-tag-manager'

const email = ref('')
const newsletterDialogOpen = ref(false)
const isDSGVO = ref(false)
const open = () => {
  fireNewsletterOpenEvent()
  // we have to ensure the query params are set before the hubspot script loads
  setTimeout(() => {
    newsletterDialogOpen.value = true
  }, 0)
}
</script>

<template>
  <FormKit
    id="landingpage-newsletter-form-open"
    form-class="grid gap-2"
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
        placeholder="E-Mail-Adresse"
        outer-class="grow"
        wrapper-class="h-fill"
        validation="required|email"
        validation-visibility="submit"
        message-class="text-red-500 mt-1"
        inner-class="w-full h-fill border border-gray-900 rounded-l-3xl overflow-hidden"
        input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
      />
      <FormKit
        type="submit"
        input-class="flex items-center w-fit gap-2 px-4 pb-3.5 pt-4 lg:px-5 lg:pb-2.5 lg:pt-3 bg-gray-900 rounded-r-3xl text-white"
        @click="fireNewsletterOpenEvent"
      >
        <div class="i-heroicons:arrow-small-right w-6 h-6" />
      </FormKit>
    </div>
    <FormKit
      id="isDSGVO"
      v-model="isDSGVO"
      type="checkbox"
      label-class="text-gray-700 text-sm flex-1"
      wrapper-class="flex items-start gap-3"
      validation-label="Datenschutzbestimmungen"
      validation="required|accepted"
      validation-visibility="submit"
      message-class="text-red-500 mt-1"
    >
      <template #label="context">
        <span :class="context.classes.label">Ich akzeptiere die <router-link
          to="/datenschutz"
          class="underline underline-gray-700 text-gray-700"
        >Datenschutzbestimmungen</router-link>.*</span>
      </template>
    </FormKit>
  </FormKit>
  <Modal :show="newsletterDialogOpen" @close="newsletterDialogOpen = false">
    <NewsletterDialog :email="email" :dsgvo="isDSGVO" />
  </Modal>
</template>
