<script setup lang="ts">
const { t } = useI18n()

const isOpen = ref(false)
const email = ref('')

const open = () => {
  isOpen.value = true
}
const close = () => {
  isOpen.value = false
}
</script>

<template>
  <div class="bg-amber-50 rounded-[32px] lg:rounded-[64px] px-6 py-16 lg:p-16 overflow-hidden mt-12">
    <div class="grid gap-10 justify-items-center">
      <div class="grid gap-8 text-center lg:w-3/4">
        <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl m-0">
          {{ t('secure-melli.heading-1') }} <span class="text-primary-400">{{ t('secure-melli.heading-3') }}</span> {{ t('secure-melli.heading-2') }}
        </h1>
        <p class="text-gray-900 font-normal text-xl lg:text-2xl m-0">
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
            placeholder="E-Mail-Adresse"
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
  <SubscriptionDialog :is-open="isOpen" :close="close" :email="email" />
</template>
