<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

const { t } = useI18n()
const jobAlertDialogOpen = ref(false)

const openDialog = () => {
  // we have to ensure the query params are set before the hubspot script loads
  setTimeout(() => {
    jobAlertDialogOpen.value = true
  }, 0)
}

const faqs = [
  { question: t('karriere-faq.1.question'), answers: [t('karriere-faq.1.answer')], links: ['unsere Kultur.'] },
  { question: t('karriere-faq.2.question'), answers: [t('karriere-faq.2.answer')], links: ['unsere Kultur.'] },
  { question: t('karriere-faq.3.question'), answers: [t('karriere-faq.3.answer')], links: ['unsere Kultur.'] },
  { question: t('karriere-faq.4.question'), answers: [t('karriere-faq.4.answer')], links: ['unsere Kultur.'] },
  { question: t('karriere-faq.5.question'), answers: [t('karriere-faq.5.answer')], links: ['unsere Kultur.'] },
  { question: t('karriere-faq.6.question'), answers: [t('karriere-faq.6.answer')], links: ['unsere Kultur.'] },
  { question: t('karriere-faq.7.question'), answers: [t('karriere-faq.7.answer')], links: ['unsere Kultur.'] },
]
</script>

<template>
  <Container class="py-12 lg:py-24 bg-primary-100">
    <div class="grid gap-8 lg:gap-16 mx-auto items-center">
      <div class="grid gap-4 lg:gap-6">
        <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
          {{ t('faq.heading') }}
        </h1>
      </div>
      <div>
        <div class="grid grid-cols-1 divide-y divide-gray-300 mb-2">
          <Disclosure v-slot="{ open }" as="div" class="py-2">
            <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
              <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
              <span class="text-left order-1 lg:order-2">{{ t('karriere-faq.1.question') }}</span>
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-in"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel v-if="open" class="lg:text-justify text-left text-gray-500 lg:ml-10 font-normal text-xl pb-2 grid gap-2">
                <span>{{ t('karriere-faq.1.answer') }} <a href="/karriere/#kultur" class="underline decoration-1 decoration-solid underline-offset-1">unsere Kultur</a>.</span>
              </DisclosurePanel>
            </transition>
          </Disclosure>
          <Disclosure v-slot="{ open }" as="div" class="py-2">
            <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
              <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
              <span class="text-left order-1 lg:order-2">{{ t('karriere-faq.2.question') }}</span>
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-in"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel v-if="open" class="lg:text-justify text-left text-gray-500 lg:ml-10 font-normal text-xl pb-2 grid gap-2">
                <span>{{ t('karriere-faq.2.answer') }}</span>
              </DisclosurePanel>
            </transition>
          </Disclosure>
          <Disclosure v-slot="{ open }" as="div" class="py-2">
            <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
              <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
              <span class="text-left order-1 lg:order-2">{{ t('karriere-faq.3.question') }}</span>
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-in"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel v-if="open" class="lg:text-justify text-left text-gray-500 lg:ml-10 font-normal text-xl pb-2 grid gap-2">
                <span>Zwei Punkte sind uns wichtig:</span>
                <p>
                  Es hört sich einfacher an, als getan: Sei du selbst! Uns ist es wichtig, dass wir ein Bild von dir als Person, deinem Charakter und
                  Fähigkeiten erhalten. Und das geht am Besten wenn du DU SELBST bist.
                </p>
                <p>Was möchtest du mit uns und bei uns bewirken?</p>
              </DisclosurePanel>
            </transition>
          </Disclosure>
          <Disclosure v-slot="{ open }" as="div" class="py-2">
            <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
              <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
              <span class="text-left order-1 lg:order-2">{{ t('karriere-faq.4.question') }}</span>
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-in"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel v-if="open" class="lg:text-justify text-left text-gray-500 lg:ml-10 font-normal text-xl pb-2 grid gap-2">
                <span>{{ t('karriere-faq.4.answer') }} <a href="/karriere/initiativbewerbung" class="underline decoration-1 decoration-solid underline-offset-1">jetzt bewerben</a>.</span>
              </DisclosurePanel>
            </transition>
          </Disclosure>
          <Disclosure v-slot="{ open }" as="div" class="py-2">
            <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
              <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
              <span class="text-left order-1 lg:order-2">{{ t('karriere-faq.5.question') }}</span>
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-in"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel v-if="open" class="lg:text-justify text-left text-gray-500 lg:ml-10 font-normal text-xl pb-2 grid gap-2">
                <span>{{ t('karriere-faq.5.answer') }}</span>
                <ul class="list-alpha list-inside">
                  <li>Telefoninterview – mit unserem Recruiting-Team</li>
                  <li>Videointerview und ein kleiner Case den es zu lösen gilt – mit den Teamleads der jeweilien Abteilung</li>
                  <li>Abschließendes Videointerview – mit den Geschäftsführern</li>
                </ul>
                <p>Je nach Position kann dieser Ablauf aber auch variieren.</p>
              </DisclosurePanel>
            </transition>
          </Disclosure>
          <Disclosure v-slot="{ open }" as="div" class="py-2">
            <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
              <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
              <span class="text-left order-1 lg:order-2">{{ t('karriere-faq.6.question') }}</span>
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-in"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel v-if="open" class="lg:text-justify text-left text-gray-500 lg:ml-10 font-normal text-xl pb-2 grid gap-2">
                <span>Keine Sorge – schick uns gerne eine <a href="/karriere/initiativbewerbung" class="underline decoration-1 decoration-solid underline-offset-1">Initiativbewerbung</a> oder bleib auf dem Laufenden mit unserem <button class="cursor-pointer underline decoration-1 decoration-solid underline-offset-1" @click="openDialog">Job Alert</button>.</span>
              </DisclosurePanel>
            </transition>
          </Disclosure>
          <Disclosure v-slot="{ open }" as="div" class="py-2">
            <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
              <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
              <span class="text-left order-1 lg:order-2">{{ t('karriere-faq.7.question') }}</span>
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-in"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel v-if="open" class="lg:text-justify text-left text-gray-500 lg:ml-10 font-normal text-xl pb-2 grid gap-2">
                <div class="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div class="grid gap-1 content-start">
                    <span class="font-semibold text-gray-600">Frontend</span>
                    <ul class="list-inside list-disc">
                      <li>TypeScript</li>
                      <li>pnpm</li>
                      <li>Vite 2 + esbuild</li>
                      <li>Vue 3 + Composition API</li>
                      <li>VueUse</li>
                      <li>Vue Router 4</li>
                      <li>Pinia</li>
                      <li>Vitest</li>
                    </ul>
                  </div>
                  <div class="grid gap-1 content-start">
                    <span class="font-semibold text-gray-600">Backend</span>
                    <ul class="list-inside list-disc">
                      <li>Python + Pyright</li>
                      <li>Poetry</li>
                      <li>FastAPI + Pydantic</li>
                      <li>PostgreSQL + Ormar</li>
                      <li>Machine Learning & NLP</li>
                      <li>Tensorflow</li>
                      <li>Rasa</li>
                      <li>pytest</li>
                    </ul>
                  </div>
                  <div class="grid gap-1 content-start">
                    <span class="font-semibold text-gray-600">Deployment / DevOps</span>
                    <ul class="list-inside list-disc">
                      <li>Nix</li>
                      <li>Docker</li>
                      <li>Kubernetes</li>
                      <li>ArgoCD</li>
                      <li>Concourse</li>
                    </ul>
                  </div>
                </div>
              </DisclosurePanel>
            </transition>
          </Disclosure>
        </div>
        <!-- <button class="bg-primary-900 text-medium text-base text-white w-fit hidden lg:flex items-center py-2.5 px-4 rounded-full gap-2">
          <span>alle FAQs ansehen</span>
          <div class="i-carbon:arrow-right" />
        </button> -->
      </div>
    </div>
  </Container>
  <Modal :show="jobAlertDialogOpen" @close="jobAlertDialogOpen = false">
    <JobAlertDialog />
  </Modal>
</template>
