<script setup lang="ts">
const { t } = useI18n()

const faqs = [
  { question: t('faq.1.question'), answer: t('faq.1.answer') },
  { question: t('faq.2.question'), answer: t('faq.2.answer') },
  { question: t('faq.3.question'), answer: t('faq.3.answer') },
  { question: t('faq.4.question'), answer: t('faq.4.answer') },
  { question: t('faq.5.question'), answer: t('faq.5.answer') },
  { question: t('faq.6.question'), answer: t('faq.6.answer') },
  { question: t('faq.7.question'), answer: t('faq.7.answer') },
  { question: t('faq.8.question'), answer: t('faq.8.answer') },
]
</script>

<template>
  <section aria-labelledby="faq-heading" class="bg-white">
    <div class="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="max-w-xl">
        <h2 id="faq-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">
          {{ t('faq.heading') }}
        </h2>
        <p class="mt-4 text-base text-gray-500">
          Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're looking for, you can always <a href="#" class="font-medium text-primary-400 hover:text-primary-500">send us an email</a> with your enquiry.
        </p>
      </div>

      <dl class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
        <div v-for="(faq, index) in faqs" :key="index">
          <dt class="text-base font-medium text-gray-900">
            {{ faq.question }}
          </dt>
          <dd class="mt-3 text-sm text-gray-500">
            {{ faq.answer }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
