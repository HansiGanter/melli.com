<script setup lang="ts">
const { t } = useI18n()

const faqs = [
  {
    question: t('dipa-faq-section.question-1'),
    answer: t('dipa-faq-section.answer-1'),
  },
  {
    question: t('dipa-faq-section.question-2'),
    answer: t('dipa-faq-section.answer-2'),
  },
  {
    question: t('dipa-faq-section.question-3'),
    answer: t('dipa-faq-section.answer-3'),
  },
  {
    question: t('dipa-faq-section.question-4'),
    answer: t('dipa-faq-section.answer-4'),
  },
  {
    question: t('dipa-faq-section.question-5'),
    answer: t('dipa-faq-section.answer-5'),
  },
  {
    question: t('dipa-faq-section.question-6'),
    answer: t('dipa-faq-section.answer-6'),
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
      <div v-for="(faq, index) in faqs" :key="index">
        <FaqElement :question="faq.question" :answer="faq.answer" /><hr v-if="index !== faqs.length - 1">
      </div>
    </div>
  </div>
</template>
