<script setup lang="ts">
const { t, te } = useI18n()

const faqs: { question: string; answer: string }[] = []
for (let i = 0; i < 99; i++) {
  const key_question = `faq-list.${i}.question`
  const key_answer = `faq-list.${i}.answer`

  if (te(key_question) && te(key_answer))
    faqs.push({ question: t(key_question), answer: t(key_answer) })
  else
    continue
}
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
