<script setup lang="ts">
import { fireCallbackOpenEvent, fireContactEvent } from '~/google-tag-manager'
const { t } = useI18n()

const socials = [
  {
    icon: 'i-lucide:mail',
    text: t('contact.email'),
    url: 'mailto:hallo@melli.com',
    desc: 'mail',
  },
  {
    icon: 'i-bxl:whatsapp',
    text: t('contact.whatsapp'),
    url: 'https://wa.me/message/RXR37YZAHSGKB1',
    desc: 'whatsapp',
  },
]
const callbackModalOpen = ref(false)
</script>

<template>
  <div class="flex flex-col gap-8 sm:items-center">
    <div class="flex flex-col gap-6 max-w-200">
      <h3 class="text-4xl text-primary-300 font-semibold sm:text-center">
        {{ t('contact.heading') }}
      </h3>
      <p class="font-medium text-xl text-white sm:text-center">
        {{ t('contact.text') }}
      </p>
    </div>
    <div class="flex flex-col sm:flex-row gap-8 items-center">
      <div v-for="social in socials" :key="social.text" class="flex flex-col gap-5 items-center">
        <div class="w-12 h-12 shrink-0 text-primary-300" :class="social.icon" />
        <a :href="social.url" target="_blank" class="bg-primary-400 rounded-lg py-2.5 px-4 w-fit font-medium text-white text-base text-center" @click="fireContactEvent(social.desc)">
          {{ social.text }}
        </a>
      </div>
      <div class="flex flex-col gap-5 items-center">
        <div class="i-lucide:phone-call w-12 h-12 shrink-0 text-primary-300" />
        <button class="bg-primary-400 rounded-lg py-2.5 px-4 w-fit font-medium text-white text-base text-center" @click="[callbackModalOpen = true, fireCallbackOpenEvent()]">
          {{ t('contact.phone') }}
        </button>
      </div>
    </div>
  </div>
  <Modal :show="callbackModalOpen" @close="callbackModalOpen = false">
    <CallbackDialog />
  </Modal>
</template>
