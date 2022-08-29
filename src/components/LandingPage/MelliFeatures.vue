<script setup lang="ts">
const { t } = useI18n()

const features = [
  { icon: 'i-heroicons-outline:chat-alt', text: t('melli-features.4.answer') },
  { icon: 'i-carbon:rocket', text: t('melli-features.1.answer') },
  { text: t('melli-features.3.answer') },
  { icon: 'i-carbon:wifi-off', text: t('melli-features.2.answer') },
  { icon: 'i-heroicons-outline:link', text: t('melli-features.5.answer') },
]

const subscriptionModal = ref(false)
</script>

<template>
  <section aria-labelledby="melli-features-heading" class="">
    <div class="grid gap-8 lg:gap-32 grid-cols-1 lg:grid-cols-3 content-start">
      <div class="grid gap-6 content-start">
        <h1 id="melli-features-heading" class="text-4xl lg:text-5xl font-semibold lg:font-medium text-white">
          <span class="text-primary-400 font-semibold lg:leading-[3.875rem]">{{ t('melli-features.heading') }}</span> <span class="lg:leading-[3.875rem]">{{ t('melli-features.heading-text') }}</span>
        </h1>
        <router-link to="/shop" class="bg-primary-500 py-4 px-7 rounded-lg text-white text-base font-medium w-fit">
          {{ t('melli-features.test-melli') }}
        </router-link>
      </div>
      <div class="lg:col-span-2">
        <div class="grid gap-9">
          <div class="flex justify-end gap-x-5 gap-y-7 flex-wrap lg:basis-5/12 w-fit">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-center w-auto bg-primary-50 px-6 py-4 gap-2.5 rounded-2xl last:mx-auto drop-shadow-xl"
            >
              <div class="text-base font-medium text-primary-400">
                <div v-if="feature.icon" :class="feature.icon" class="w-12 lg:w-16 h-12 lg:h-16" />
                <img
                  v-else
                  src="https://assets.melli.com/icons/sentiment.svg"
                  :class="feature.icon"
                  class="w-12 lg:w-16 h-12 lg:h-16"
                >
              </div>
              <span class="text-xl font-normal text-gray-900">
                {{ feature.text }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Modal :show="subscriptionModal" @close="subscriptionModal = false">
    <SubscriptionDialog />
  </Modal>
</template>
