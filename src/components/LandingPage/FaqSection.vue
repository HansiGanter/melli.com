<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

const { t } = useI18n()

const faqs = [
  {
    question: t('faq-section.question-1'),
    answer: t('faq-section.answer-1'),
    items: ['Melli-Abo', 'Tablet + Docking Station + Netzteil', 'Optional: SIM-Karte mit unbegrenztem Datenvolumen', 'Melli-App für Familie und Freunde', 'Alle Softwareupdates während der Abo-Laufzeit', 'Kostenlose Lieferung'],
  },
  {
    question: t('faq-section.question-2'),
    answer: t('faq-section.answer-2'),
  },
  {
    question: t('faq-section.question-3'),
    answer: t('faq-section.answer-3'),
  },
  {
    question: t('faq-section.question-4'),
    answer: t('faq-section.answer-4'),
  },
  {
    question: t('faq-section.question-5'),
    answer: t('faq-section.answer-5'),
  },
  {
    question: t('faq-section.question-6'),
    answer: t('faq-section.answer-6'),
  },
  {
    question: t('faq-section.question-7'),
    answer: t('faq-section.answer-7'),
  },
  {
    question: t('faq-section.question-8'),
    answer: t('faq-section.answer-8'),
    link: 'https://melli.com/datenschutz/',
  },
]
</script>

<template>
  <div class="my-20 grid gap-8 lg:gap-20 max-w-screen-xl mx-auto items-center">
    <div class="grid gap-4 lg:gap-6">
      <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
        {{ t('faq.heading') }}
      </h1>
    </div>
    <div>
      <div class="grid grid-cols-1 divide-y divide-gray-300 mb-2">
        <Disclosure v-for="(faq, index) in faqs" :key="index" v-slot="{ open }" as="div" class="py-2">
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
            <DisclosurePanel class="lg:text-justify text-left text-gray-500 lg:ml-10 font-normal text-xl pb-2 grid gap-2">
              <span>{{ faq.answer }} <a v-if="faq.link" :href="faq.link" target="_blank" class="underline decoration-1 decoration-solid underline-offset-1">hier.</a></span>
              <ul v-if="faq.items" class="list-disc list-inside">
                <li v-for="item in faq.items" :key="item">
                  {{ item }}
                </li>
              </ul>
            </DisclosurePanel>
          </transition>
        </Disclosure>
      </div>
      <router-link to="/faq" class="bg-primary-900 text-medium text-base text-white w-fit hidden lg:flex items-center py-2.5 px-4 rounded-full gap-2">
        <span>alle FAQs ansehen</span>
        <div class="i-carbon:arrow-right" />
      </router-link>
    </div>
  </div>
</template>
