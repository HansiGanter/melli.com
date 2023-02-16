<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const { t } = useI18n()

const greaterLg = useBreakpoints(breakpointsTailwind).greater('lg')

interface ConfigurationFeature {
  pilltext: string
  modaltext: string
  iconpill: string
  iconmodal: string
  bubbletype: 0 | 1 | 2 | 3
  bubble: string
}

const configurationFeatures: ConfigurationFeature[] = [
  {
    pilltext: t('appConfigurationFeature1.pilltext'),
    modaltext: t('appConfigurationFeature1.modaltext'),
    bubbletype: 3,
    bubble: 'text-primary-300',
    iconmodal: 'i-lucide:heart w-12 h-12 text-gray-900',
    iconpill: 'i-lucide:heart w-9 h-9 text-gray-900',
  },
  {
    pilltext: t('appConfigurationFeature3.pilltext'),
    modaltext: t('appConfigurationFeature3.modaltext'),
    bubbletype: 0,
    bubble: 'text-primary-300',
    iconmodal: 'i-lucide:user-plus w-12 h-12 text-gray-900',
    iconpill: 'i-lucide:user-plus w-9 h-9 text-gray-900',
  },
  {
    pilltext: t('appConfigurationFeature4.pilltext'),
    modaltext: t('appConfigurationFeature4.modaltext'),
    bubbletype: 0,
    bubble: 'text-primary-300',
    iconmodal: 'i-lucide:volume-2 w-12 h-12 text-gray-900',
    iconpill: 'i-lucide:volume-2 w-9 h-9 text-gray-900',
  },
]
const configurationFeaturesComingSoon: ConfigurationFeature[] = [
  {
    pilltext: t('appConfigurationFeature5.pilltext'),
    modaltext: t('appConfigurationFeature5.modaltext'),
    bubbletype: 1,
    bubble: 'text-#FBBF24',
    iconmodal: 'i-lucide:clock w-12 h-12 text-gray-900',
    iconpill: 'i-lucide:clock w-9 h-9 text-gray-900',
  },
  {
    pilltext: t('appConfigurationFeature6.pilltext'),
    modaltext: t('appConfigurationFeature6.modaltext'),
    bubbletype: 1,
    bubble: 'text-#FBBF24',
    iconmodal: 'i-lucide:music w-12 h-12 text-gray-900',
    iconpill: 'i-lucide:music w-9 h-9 text-gray-900',
  },
]
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:gap-12">
    <div class="flex flex-col gap-12 lg:max-w-160">
      <h2 class="text-4xl sm:text-5xl font-semibold">
        Zeigt Melli eure Welt!
      </h2>
      <div class="flex flex-col gap-6">
        <p class="text-lg font-normal">
          Oma mag Krimigeschichten überhaupt nicht? Kein Problem! In der App lässt sich das sofort einstellen. Aber Technik liegt ihr eigentlich nicht so? Genauso kein Problem! Die Familie kann das übernehmen! Die ganze Familie und Freunde können die App nutzen und sich gegenseitig dazu einladen. Oma muss sich also um nichts kümmern!
        </p>
        <RouterLink to="/shop" class="rounded-lg bg-primary-400 text-white py-2.5 px-4 flex w-fit gap-2 justify-center">
          <div class="i-lucide:smartphone w-6 h-6" /><span>App kostenlos ausprobieren</span>
        </RouterLink>
      </div>
      <div v-if="!greaterLg" class="max-w-120 mx-auto">
        <img class="object-contain" src="https://assets.melli.com/images/mockups/03_smartphone/mockup-smartphone-interests-two-phones-1536.webp">
      </div>
      <div class="flex flex-col sm:flex-row gap-6">
        <div class="flex flex-col gap-4">
          <!-- Current Features -->
          <span class="rounded-full border-2 py-2 px-4 border-primary-400 text-primary-400 text-xs font-semibold w-fit">released</span>
          <Pill
            v-for="(feature, index) in configurationFeatures"
            :key="index"
            :pilltext="feature.pilltext"
            :modaltext="feature.modaltext"
            :bubbletype="feature.bubbletype"
            :bubble="feature.bubble"
            :iconmodal="feature.iconmodal"
            :iconpill="feature.iconpill"
            pill="bg-primary-50 text-gray-900"
          />
        </div>
        <div class="flex flex-col gap-4">
          <!-- Features Coming Soon -->
          <span class="rounded-full border-2 py-2 px-4 border-amber-500 text-amber-500 text-xs font-semibold w-fit">bald verfügbar</span>
          <Pill
            v-for="(feature, index) in configurationFeaturesComingSoon"
            :key="index"
            :pilltext="feature.pilltext"
            :modaltext="feature.modaltext"
            :bubbletype="feature.bubbletype"
            :bubble="feature.bubble"
            :iconmodal="feature.iconmodal"
            :iconpill="feature.iconpill"
            pill="bg-amber-100 text-gray-900"
          />
        </div>
      </div>
    </div>
    <div>
      <img v-if="greaterLg" class="object-contain" src="https://assets.melli.com/images/mockups/03_smartphone/mockup-smartphone-interests-two-phones-2048.webp">
    </div>
  </div>
</template>
