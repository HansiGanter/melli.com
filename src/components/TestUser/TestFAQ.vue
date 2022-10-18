<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import { fireFAQEvent } from '~/google-tag-manager'
const { t } = useI18n()
const faqs = [
  {
    question: t('test-faq.question-1'),
    answer: t('test-faq.answer-1'),
    description: 'Kosten-testnutzer',
  },
  {
    question: t('test-faq.question-2'),
    answer: t('test-faq.answer-2'),
    description: 'dauer-testphase',
  },
  {
    question: t('test-faq.question-3'),
    answer: t('test-faq.answer-3'),
    description: 'WLAN',
  },
  {
    question: t('test-faq.question-4'),
    answer: t('test-faq.answer-4'),
    description: 'unbegrenzt-datenvolumen',
  },
  {
    question: t('test-faq.question-5'),
    answer: t('test-faq.answer-5'),
    description: 'telefonieren',
  },
  {
    question: t('test-faq.question-6'),
    answer: t('test-faq.answer-6'),
    description: 'eigenes-Tablet',
  },
  {
    question: t('test-faq.question-7'),
    answer: t('test-faq.answer-7'),
    description: 'verreise',
  },
  {
    question: t('test-faq.question-8'),
    answer: t('test-faq.answer-8'),
    description: 'selbst-initiierte-Befehle',
  },
  {
    question: t('test-faq.question-9'),
    answer: t('test-faq.answer-9'),
    description: 'Strom-angeschlossen-bleiben',
  },
  {
    question: t('test-faq.question-10'),
    answer: t('test-faq.answer-10'),
    description: ' Termine-mitteilen-und-Erinnerungen-einstellen',
  },
]
</script>

<template>
  <div class="my-20 grid gap-6 lg:gap-12 max-w-screen-xl mx-auto items-center">
    <div class="grid gap-4 lg:gap-6">
      <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
        {{ t('test-faq.heading') }}
      </h1>
    </div>
    <div>
      <div class="grid grid-cols-1 divide-y divide-gray-300 mb-2">
        <Disclosure v-for="(faq, index) in faqs" :id="`faq-${faq.description}`" :key="index" v-slot="{ open }" as="div" class="py-2" @click="fireFAQEvent(faq.description)">
          <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
            <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
            <span class="text-left order-1 lg:order-2">{{ faq.question }}</span>
          </DisclosureButton>
          <transition
            enter-active-class="transition duration-100 ease-in"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <DisclosurePanel class="lg:text-justify text-left text-gray-500 lg:ml-10 font-normal text-xl pb-2">
              {{ faq.answer }}
            </DisclosurePanel>
          </transition>
        </Disclosure>
      </div>
    </div>
  </div>
</template>
