<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const { t } = useI18n()

const greaterLg = useBreakpoints(breakpointsTailwind).greater('lg')
const greaterMd = useBreakpoints(breakpointsTailwind).greater('md')

interface ConfigurationFeature {
  pilltext: string
  modaltext: string
  iconpill: string
  iconmodal: string
  bubbletype: 0 | 1 | 2 | 3
  bubble: string
}
const scheduleFeatures: ConfigurationFeature[] = [
  {
    pilltext: t('appScheduleFeature1.pilltext'),
    modaltext: t('appScheduleFeature1.modaltext'),
    bubbletype: 2,
    bubble: 'text-primary-300',
    iconmodal: 'i-lucide:bell w-12 h-12 text-gray-900',
    iconpill: 'i-lucide:bell w-9 h-9 text-gray-900',
  },
  {
    pilltext: t('appScheduleFeature2.pilltext'),
    modaltext: t('appScheduleFeature2.modaltext'),
    bubbletype: 0,
    bubble: 'text-primary-300',
    iconmodal: 'i-ph:pill w-12 h-12 text-gray-900',
    iconpill: 'i-ph:pill w-9 h-9 text-gray-900',
  },
]
</script>

<template>
  <div class="flex flex-col gap-9 lg:flex-row lg:gap-12">
    <div v-if="!greaterLg" class="max-w-200 mx-auto">
      <img
        :src="greaterMd ? 'https://melli-assets.netlify.app/images/mockups/02_interior/melli-assets-device-interior-scheduler-doctors-appointment-5by3-1536.webp' : 'https://melli-assets.netlify.app/images/mockups/02_interior/melli-assets-device-interior-scheduler-doctors-appointment-4by5-1024.webp'"
        class="rounded-3xl">
    </div>
    <div class="flex flex-col gap-9 lg:gap-12 max-w-160">
      <h2 class="text-4xl sm:text-5xl font-semibold">
        Das Chaos des Alltags ganz einfach organisiert.
      </h2>
      <p class="text-lg font-normal">
        Wir alle sind von mal zu mal etwas vergesslich. Mit der Melli-App können Angehörige Erledigungen und anstehende
        Termine ganz einfach planen und mit anderen Familienmitgliedern teilen.
      </p>
    </div>
    <div class="flex flex-col gap-3">
      <span
        class="rounded-full border-2 py-2 px-4 border-primary-400 text-primary-400 text-sm font-semibold w-fit">released</span>
      <Pill v-for="(feature, index) in scheduleFeatures" :key="index" :pilltext="feature.pilltext"
        :modaltext="feature.modaltext" :bubbletype="feature.bubbletype" :bubble="feature.bubble"
        :iconmodal="feature.iconmodal" :iconpill="feature.iconpill" pill="bg-primary-50 text-gray-900" />
    </div>
  </div>
  <div v-if="greaterLg" class="max-w-200 mx-auto mt-24">
    <img
      src="https://melli-assets.netlify.app/images/mockups/02_interior/melli-assets-device-interior-scheduler-doctors-appointment-5by3-1536.webp"
      class="rounded-3xl">
  </div>
</template>
