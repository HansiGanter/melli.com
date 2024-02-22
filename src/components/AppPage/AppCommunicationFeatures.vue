<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { fireShopEvent } from '~/google-tag-manager'
const { t } = useI18n()
const greaterLg = useBreakpoints(breakpointsTailwind).greater('lg')
const greaterMd = useBreakpoints(breakpointsTailwind).greater('md')

interface CommunicationFeature {
  pilltext: string
  modaltext: string
  iconpill: string
  iconmodal: string
  bubbletype: 0 | 1 | 2 | 3
  bubble: string
}

const communicationFeatures: CommunicationFeature[] = [
  {
    pilltext: t('appCommunicationFeature1.pilltext'),
    modaltext: t('appCommunicationFeature1.modaltext'),
    bubbletype: 3,
    bubble: 'text-primary-300',
    iconmodal: 'i-lucide:phone-call w-12 h-12 text-gray-900',
    iconpill: 'i-lucide:phone-call w-9 h-9 text-gray-900',
  },
  {
    pilltext: t('appCommunicationFeature2.pilltext'),
    modaltext: t('appCommunicationFeature2.modaltext'),
    bubbletype: 2,
    bubble: 'text-primary-300',
    iconmodal: 'i-lucide:users w-12 h-12 text-gray-900',
    iconpill: 'i-lucide:users w-9 h-9 text-gray-900',
  },
  {
    pilltext: t('appCommunicationFeature3.pilltext'),
    modaltext: t('appCommunicationFeature3.modaltext'),
    bubbletype: 0,
    bubble: 'text-primary-300',
    iconmodal: 'i-lucide:heart w-12 h-12 text-gray-900',
    iconpill: 'i-lucide:heart w-9 h-9 text-gray-900',
  },
  {
    pilltext: t('appCommunicationFeature4.pilltext'),
    modaltext: t('appCommunicationFeature4.modaltext'),
    bubbletype: 1,
    bubble: 'text-primary-300',
    iconmodal: 'i-lucide:message-square w-12 h-12 text-gray-900',
    iconpill: 'i-lucide:message-square w-9 h-9 text-gray-900',
  },
]
const communicationFeaturesComingSoon: CommunicationFeature[] = [
  {
    pilltext: t('appCommunicationFeature5.pilltext'),
    modaltext: t('appCommunicationFeature5.modaltext'),
    bubbletype: 0,
    bubble: 'text-#FBBF24',
    iconmodal: 'i-lucide:image w-12 h-12 text-gray-900',
    iconpill: 'i-lucide:image w-9 h-9 text-gray-900',
  },
  {
    pilltext: t('appCommunicationFeature6.pilltext'),
    modaltext: t('appCommunicationFeature6.modaltext'),
    bubbletype: 3,
    bubble: 'text-#FBBF24',
    iconmodal: 'i-lucide:file-text w-12 h-12 text-gray-900',
    iconpill: 'i-lucide:file-text w-9 h-9 text-gray-900',
  },
]
</script>

<template>
  <div class="flex flex-col gap-9 md:flex-row md:gap-12 mb-9 lg:mb-12">
    <div class="flex flex-col gap-9 sm:gap-12 lg:min-w-60%">
      <h2 v-if="!greaterMd" class="text-4xl sm:text-5xl font-semibold">
        Die Liebsten jeden Tag dabei!
      </h2>
      <img
        :src="greaterLg ? 'https://melli-assets.netlify.app/images/images/commercials/melli-asset-image-communication-2-5by3-1024.webp' : 'https://melli-assets.netlify.app/images/images/commercials/melli-asset-image-communication-2-4by5.webp'"
        class="object-cover rounded-3xl max-w-100 lg:max-w-none md:min-w-100">
    </div>
    <div class="flex flex-col gap-9 sm:gap-12 max-w-140">
      <h2 v-if="greaterMd" class="text-4xl sm:text-5xl font-semibold">
        Die Liebsten jeden Tag dabei!
      </h2>
      <div class="flex flex-col gap-6">
        <RouterLink to="/shop"
          class="rounded-lg bg-primary-600 font-medium text-white py-2.5 px-4 flex w-fit gap-2 justify-center"
          @click="fireShopEvent()">
          <div class="i-lucide:gift w-6 h-6" /><span>Melli 30 Tage kostenlos testen</span>
        </RouterLink>
        <p>Die Melli-App bietet deinen Liebsten verschiedene Möglichkeiten mit dir in Verbindung zu treten. Sie können
          dich einfach per Sprachanruf erreichen oder ihr könnt euch mit Videoanruf sehen. Die App hält sie auf dem
          Laufenden, wie es dir gerade geht und die ganze Familie hat die Möglichkeit, Teil deines Alltags zu sein - egal
          wo sie sind oder was sie gerade machen.</p>
      </div>
    </div>
  </div>
  <div>
    <div class="flex flex-col sm:flex-row gap-3">
      <div class="flex flex-col gap-3">
        <!-- Current Features -->
        <span
          class="rounded-full border-2 py-2 px-4 border-primary-400 text-primary-400 text-sm font-semibold w-fit">released</span>
        <Pill v-for="(feature, index) in communicationFeatures" :key="index" :pilltext="feature.pilltext"
          :modaltext="feature.modaltext" :bubbletype="feature.bubbletype" :bubble="feature.bubble"
          :iconmodal="feature.iconmodal" :iconpill="feature.iconpill" pill="bg-primary-50 text-gray-900" />
      </div>
      <div class="flex flex-col gap-3">
        <!-- Features Coming Soon -->
        <span class="rounded-full border-2 py-2 px-4 border-amber-500 text-amber-500 text-sm font-semibold w-fit">
          bald verfügbar
        </span>
        <Pill v-for="(feature, index) in communicationFeaturesComingSoon" :key="index" :pilltext="feature.pilltext"
          :modaltext="feature.modaltext" :bubbletype="feature.bubbletype" :bubble="feature.bubble"
          :iconmodal="feature.iconmodal" :iconpill="feature.iconpill" pill="bg-amber-100 text-gray-900" />
      </div>
    </div>
  </div>
</template>
