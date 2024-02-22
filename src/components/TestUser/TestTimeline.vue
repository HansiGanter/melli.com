<script setup lang="ts">
// import { fireTestuserOpenSubscriptionEvent } from '~/google-tag-manager'
const { t } = useI18n()
const steps = [
  { name: 'Step 1', title: t('test-timeline.step-1.title'), text: t('test-timeline.step-1.text'), status: 'complete', image: 'https://melli-assets.netlify.app/pictograms/pen.svg' },
  { name: 'Step 2', title: t('test-timeline.step-2.title'), text: t('test-timeline.step-2.text'), status: 'complete', image: 'https://melli-assets.netlify.app/pictograms/mail.svg' },
  { name: 'Step 3', title: t('test-timeline.step-3.title'), text: t('test-timeline.step-3.text'), status: 'complete', image: 'https://melli-assets.netlify.app/pictograms/smiley.svg' },
  { name: 'Step 4', title: t('test-timeline.step-4.title'), text: t('test-timeline.step-4.text'), status: 'complete', image: 'https://melli-assets.netlify.app/pictograms/schedule.svg' },
]
const subscriptionModal = ref(false)

const open = () => {
  // fireTestuserOpenSubscriptionEvent()
  subscriptionModal.value = true
}
</script>

<template>
  <div class=" grid gap-4 h-full">
    <div aria-label="Progress" class="w-full hidden lg:flex">
      <ol role="list" class="flex grow items-center">
        <li v-for="(step, stepIdx) in steps" :key="step.name" class="relative grow grid"
          :class="[stepIdx !== steps.length - 1 ? 'pr-16' : '']">
          <template v-if="step.status === 'complete'">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-black" />
            </div>
            <span class="relative w-8 h-8 flex items-center justify-center mx-auto border-4 border-white rounded-full"
              :class="(stepIdx + 1) % 2 ? 'bg-primary-100' : 'bg-tertiary-100'">
              <span class="sr-only">{{ step.name }}</span>
            </span>
          </template>
        </li>
      </ol>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
      <div v-for="(step, sId) in steps" :key="sId"
        class="grid gap-3 lg:gap-6 content-start justify-items-center  text-black text-center">
        <img :src="step.image" class="w-12 lg:w-24 h-12 lg:h-24">
        <h4 class="text-xl font-semibold">
          {{ step.title }}
        </h4>
        <span class="text-base font-medium">{{ step.text }}</span>
        <button v-if="sId === 0" id="cta-testuser-form-3"
          class="bg-primary-500 text-medium text-base text-white w-fit flex items-center py-4 px-4 rounded-lg gap-2"
          @click="open">
          <span>Jetzt Melli kostenlos sichern!</span>
        </button>
      </div>
    </div>
    <p class="lg:text-right font-normal text-sm text-gray-900">
      {{ t('test-timeline.note') }}
    </p>
  </div>
  <Modal :show="subscriptionModal" @close="subscriptionModal = false">
  <TestSubscriptionDialog />
</Modal></template>
