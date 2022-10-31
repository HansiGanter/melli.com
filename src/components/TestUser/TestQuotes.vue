<script setup lang="ts">
import { fireTestuserOpenSubscriptionEvent } from '~/google-tag-manager'
const { t } = useI18n()
const quotes = [
  {
    quote: t('test-quotes.quote-1'),
    name: t('test-quotes.name-1'),
  },
  {
    quote: t('test-quotes.quote-2'),
    name: t('test-quotes.name-2'),
  },
  {
    quote: t('test-quotes.quote-3'),
    name: t('test-quotes.name-3'),
  },
]
const subscriptionModal = ref(false)
const open = () => {
  fireTestuserOpenSubscriptionEvent()
  subscriptionModal.value = true
}
</script>

<template>
  <div class="grid gap-16 mx-auto items-center">
    <div class="grid gap-4 lg:gap-6 text-center max-w-6xl mx-auto justify-items-center">
      <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
        {{ t('test-quotes.heading') }}
      </h1>
      <button id="cta-testuser-form-4" class="bg-primary-500 py-4 px-7 rounded-lg text-white text-base font-medium w-fit" @click="open">
        Jetzt Melli kostenlos sichern
      </button>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
      <div v-for="quote in quotes" :key="quote.name" class="shadow-lg flex flex-col gap-5 rounded-3xl shadow-lg pb-6 overflow-clip">
        <div class="flex-1 flex flex-col gap-3 justify-between p-7">
          <div class="flex-1">
            <div class="pt-2 grid gap-1">
              <h1 class="text-8xl leading-8 text-primary-300 font-semibold">
                “
              </h1>
              <h4 class="text-black text-base lg:text-lg lg:text-xl font-medium">
                {{ quote.quote }}
              </h4>
            </div>
          </div>
          <div class="flex items-center">
            <span class="text-lg lg:text-xl text-black font-semibold">{{ quote.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <p class="lg:text-right font-normal text-sm text-gray-900">
      {{ t('test-quotes.data-privacy') }}
    </p>
  </div>
  <Modal :show="subscriptionModal" @close="subscriptionModal = false">
    <TestSubscriptionDialog />
  </Modal>
</template>
