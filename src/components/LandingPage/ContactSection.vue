<script setup lang="ts">
const { t } = useI18n()

const socials = [
  {
    icon: 'i-carbon:email',
    text: t('contact.email'),
  },
  {
    icon: 'i-bxl:whatsapp',
    text: t('contact.whatsapp'),
  },
]
const callbackModalOpen = ref(false)
</script>

<template>
  <section class="bg-teal-900 py-24">
    <div class="container px-6 lg:px-0 mx-auto">
      <div class="max-w-screen-2xl mx-auto overflow-hidden grid content-start gap-8">
        <div class="grid gap-8 lg:pr-0">
          <h2 class="text-3xl text-primary-400 font-extrabold sm:text-4xl">
            {{ t('contact.heading') }}
          </h2>
          <p class="font-medium text-2xl text-white">
            {{ t('contact.text') }}
          </p>
        </div>
        <div class="flex flex-col lg:flex-row gap-8 items-center">
          <div v-for="social in socials" :key="social.text" class="grid gap-5 justify-items-center">
            <div class="text-4xl lg:text-5xl text-primary-500" :class="social.icon" />
            <a :href="social.url" target="_blank" class="bg-primary-500 rounded-md shadow py-2.5 lg:py-4 px-4 lg:px-7 inline-flex items-center font-medium text-white text-base">
              {{ social.text }}
            </a>
          </div>
          <div class="grid gap-5 justify-items-center">
            <div class="i-carbon:phone text-4xl lg:text-5xl text-primary-500" />
            <button id="cta-contact-phone" class="bg-primary-500 rounded-md shadow py-2.5 lg:py-4 px-4 lg:px-7 inline-flex items-center font-medium text-white text-base" @click="callbackModalOpen = true">
              <span class="mx-auto">{{ t('contact.phone') }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Modal :show="callbackModalOpen" @close="callbackModalOpen = false">
    <CallbackDialog />
  </Modal>
</template>
