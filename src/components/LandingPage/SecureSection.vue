<script setup lang="ts">
const { t } = useI18n()

const newsletterDialogOpen = ref(false)
const email = ref('')

const open = () => {
  // we have to ensure the query params are set before the hubspot script loads
  setTimeout(() => {
    newsletterDialogOpen.value = true
  }, 0)
}
</script>

<template>
  <div class="bg-primary-100 rounded-[32px] lg:rounded-[64px] px-6 py-16 lg:p-16 overflow-hidden">
    <div class="grid gap-16 justify-items-center">
      <div class="grid gap-8 text-center">
        <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
          {{ t('secure-melli.heading-1') }} <span class="text-primary-400">{{ t('secure-melli.heading-3') }}</span> {{ t('secure-melli.heading-2') }}
        </h1>
        <p class="text-gray-900 font-normal text-xl lg:text-2xl">
          {{ t('secure-melli.sub-text') }}
        </p>
      </div>
      <FormKit
        form-class="w-full lg:w-1/2"
        type="form"
        :actions="false"
        :incomplete-message="false"
        @submit="open"
      >
        <div class="grid gap-5 lg:w-full">
          <FormKit
            v-model="email"
            type="email"
            name="email"
            placeholder="Deine E-Mail-Adresse"
            validation="required|email"
            validation-visibility="submit"
            inner-class="w-full h-fit border border-primary-400 rounded-lg overflow-hidden focus:border-primary-500"
            input-class="w-full h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 outline-none"
          />
          <div class="flex flex-col items-stretch lg:flex-row gap-3 items-center w-fit mx-auto">
            <FormKit
              type="submit"
              input-class="flex w-full lg:w-fit items-center justify-center px-7 py-4 bg-primary-500 rounded-lg text-white font-medium text-base"
            >
              {{ t('secure-melli.get-melli-button') }}
            </FormKit>
          </div>
        </div>
      </FormKit>
    </div>
  </div>
  <Modal :show="newsletterDialogOpen" @close="newsletterDialogOpen = false">
    <NewsletterDialog :email="email" />
  </Modal>
</template>
