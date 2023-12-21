<script setup lang="ts">
const { t } = useI18n();

const faqsraw: { question: string; answer: string; }[] = [
  {
    question: t("faq-list.0.question"),
    answer: t("faq-list.0.answer")
  }, {
    question: t("faq-list.1.question"),
    answer: t("faq-list.1.answer")
  }, {
    question: t("faq-list.2.question"),
    answer: t("faq-list.2.answer")
  }, {
    question: t("faq-list.3.question"),
    answer: t("faq-list.3.answer")
  }, {
    question: t("faq-list.4.question"),
    answer: t("faq-list.4.answer")
  }, {
    question: t("faq-list.5.question"),
    answer: t("faq-list.5.answer")
  }, {
    question: t("faq-list.6.question"),
    answer: t("faq-list.6.answer")
  }, {
    question: t("faq-list.7.question"),
    answer: t("faq-list.7.answer")
  }, {
    question: t("faq-list.8.question"),
    answer: t("faq-list.8.answer")
  }, {
    question: t("faq-list.9.question"),
    answer: t("faq-list.9.answer")
  }, {
    question: t("faq-list.10.question"),
    answer: t("faq-list.10.answer")
  }, {
    question: t("faq-list.11.question"),
    answer: t("faq-list.11.answer")
  }
];
const faqs = faqsraw.filter((f) => !f.question.startsWith('faq-list.') && !f.answer.startsWith('faq-list.'));
</script>

<template>
  <div class="grid gap-8 lg:gap-20 max-w-screen-xl mx-auto items-center">
    <div class="grid gap-4 lg:gap-6">
      <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
        {{ t('faq.heading') }}
      </h1>
    </div>
    <div>
      <div v-for="(faq, index) in faqs" :key="index">
        <FaqElement :question="faq.question" :answer="faq.answer" />
        <hr v-if="index !== faqs.length - 1">
      </div>
    </div>
  </div>
</template>
