<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

const { t } = useI18n()
const router = useRouter()

const email = ref('')

const callbackModalOpen = ref(false)
const newsletterDialogOpen = ref(false)
const open = () => {
  // we have to ensure the query params are set before the hubspot script loads
  setTimeout(() => {
    callbackModalOpen.value = true
  }, 0)
}
const openNews = () => {
  router.replace({ query: { email: email.value } })
  // we have to ensure the query params are set before the hubspot script loads
  setTimeout(() => {
    newsletterDialogOpen.value = true
  }, 0)
}

const aboutMelli = [
  {
    question: t('faq-section.question-1'),
    answer: t('faq-section.answer-1'),
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
    link: {
      text: 'hier',
      url: '/datenschutz',
    },
  },
  {
    question: t('faq-section.question-8'),
    answer: t('faq-section.answer-8'),
  },
  {
    question: t('faq-section.question-9'),
    answer: t('faq-section.answer-9'),
  },
  {
    question: t('faq-section.question-10'),
    answer: t('faq-section.answer-10'),
  },
]

const technicalDetails = [
  {
    question: 'Muss Melli immer am Strom angeschlossen bleiben?',
    answer: 'Melli muss nicht immer am Strom angeschlossen sein, aber es sollte dafür gesorgt sein, dass sich das Tablet nicht aus Versehen ausschaltet. Man kann Melli durchaus aus der Docking-Station entnehmen und sich so mit ihr unterhalten.',
  },
  {
    question: 'Ich habe bereits ein Tablet. Kann ich Melli auch auf meinem eigenen Gerät benutzen?',
    answer: 'Vorerst wird das nicht möglich sein. Mit unseren mitgelieferten Geräten möchten wir einen gewissen Qualitätsstandard für die Nutzer gewährleisten. Das bedeutet, dass wir sicher gehen wollen, dass Melli durch ein gutes Mikrofon bestmöglich verstehen kann, was der Nutzer sagt und sie mit einem Lautsprecher ausgestattet ist, der eine angemessene Lautstärke erzielen kann.',
  },
  {
    question: 'Kann ich das Gerät auch mit WLAN nutzen?',
    answer: 'Aktuell kann Melli nicht mit WLAN genutzt werden. Um eine stabile Internetverbindung während des Tests zu gewährleisten ist Melli mit einer SIM-Karte mit unbegrenztem mobilen Internet ausgestattet. Später wird Melli auch mit dem eigenen WLAN verbunden werden können.',
  },
  {
    question: 'Ist das Datenvolumen auf der SIM-Karte begrenzt?',
    answer: 'Nein, das Datenvolumen ist nicht begerenzt.',
  },
]

const items = ['Melli-Abo', 'Tablet + Docking Station + Netzteil', 'Optional: SIM-Karte mit unbegrenztem Datenvolumen', 'Melli-App für Familie und Freunde', 'Alle Softwareupdates während der Abo-Laufzeit', 'Kostenlose Lieferung']
</script>

<template>
  <Container class="my-20">
    <div class="grid gap-4 lg:gap-6 justify-items-center">
      <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
        {{ t('faq.heading') }}
      </h1>
      <p class="text-gray-500 font-normal text-lg lg:text-2xl">
        {{ t('faq.sub-heading') }}
      </p>
    </div>
  </Container>
  <Container class="bg-amber-50 py-24">
    <div class="grid gap-9">
      <div class="grid gap-7">
        <div class="grid gap-5">
          <h3 class="text-gray-900 font-semibold text-3xl lg:text-4xl">
            Alles über Melli
          </h3>
          <div class="grid grid-cols-1 divide-y divide-gray-300 mb-2">
            <Disclosure v-for="(faq, index) in aboutMelli" :key="index" v-slot="{ open }" as="div" class="py-2">
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
                  <span>{{ faq.answer }} <router-link v-if="faq.link" :to="faq.link.url" target="_blank" class="underline decoration-1 decoration-solid underline-offset-1">{{ faq.link.text }}.</router-link></span>
                </DisclosurePanel>
              </transition>
            </Disclosure>
          </div>
        </div>
        <div class="grid gap-5">
          <h3 class="text-gray-900 font-semibold text-3xl lg:text-4xl">
            Technische Details
          </h3>
          <div class="grid grid-cols-1 divide-y divide-gray-300 mb-2">
            <Disclosure v-for="(detail, index) in technicalDetails" :key="index" v-slot="{ open }" as="div" class="py-2">
              <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
                <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
                <span class="text-left order-1 lg:order-2">{{ detail.question }}</span>
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
                  <span>{{ detail.answer }} </span>
                </DisclosurePanel>
              </transition>
            </Disclosure>
          </div>
        </div>
        <div class="grid gap-5">
          <h3 class="text-gray-900 font-semibold text-3xl lg:text-4xl">
            Inbetriebnahme
          </h3>
          <div class="grid grid-cols-1 divide-y divide-gray-300 mb-2">
            <Disclosure v-slot="{ open }" as="div" class="py-2">
              <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
                <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
                <span class="text-left order-1 lg:order-2">Ist die Einrichtung von Melli auch für Personen ohne technische Kenntnisse problemlos möglich?</span>
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
                  <span>Ja! Für die Einrichtung von Melli sind keine technischen Kenntnisse notwendig. Sobald Melli an den Strom angeschlossen ist, wacht sie von ganz alleine auf und ist startklar für die erste Interaktion. Der Nutzer muss dann nur noch ihren Anweisungen folgen und die von ihr gestellten Fragen mit einem einfachen “Ja” oder “Nein” beantworten. Die weitere Einrichtung erfolgt dann über die Melli-App.</span>
                </DisclosurePanel>
              </transition>
            </Disclosure>
            <Disclosure v-slot="{ open }" as="div" class="py-2">
              <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
                <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
                <span class="text-left order-1 lg:order-2">Kann ich Unterstützung bei der Einrichtung von Melli bekommen?</span>
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
                  <span>Ja, unser Service-Team steht Ihnen bei der Inbetriebnahme und Erst-Einrichtung telefonisch zur Seite. Sie erreichen uns von Montag bis Freitag von 08:00 bis 17:00 unter der Nummer <a href="tel:030555703440" class="underline decoration-1 decoration-solid underline-offset-1">030-555703440</a>.</span>
                </DisclosurePanel>
              </transition>
            </Disclosure>
            <!-- <Disclosure v-slot="{ open }" as="div" class="py-2">
              <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
                <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
                <span class="text-left order-1 lg:order-2">Gibt es eine Anleitung für die Ersteinrichtung?</span>
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
                  <span>Ja, unser Nutzer-Handbuch kann ganz einfach <a href="#" class="underline decoration-1 decoration-solid underline-offset-1">hier</a> heruntergeladen werden.</span>
                </DisclosurePanel>
              </transition>
            </Disclosure> -->
          </div>
        </div>
        <div class="grid gap-5">
          <h3 class="text-gray-900 font-semibold text-3xl lg:text-4xl">
            Abo & Bestellung
          </h3>
          <div class="grid grid-cols-1 divide-y divide-gray-300 mb-2">
            <Disclosure v-slot="{ open }" as="div" class="py-2">
              <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
                <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
                <span class="text-left order-1 lg:order-2">Was ist alles im Melli-Paket enthalten?</span>
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
                  <span>Beim Abschluss eines Melli-Abonnements sind folgende Produkte in ihrer Bestellung enthalten:</span>
                  <ul class="list-disc list-inside">
                    <li v-for="item in items" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </DisclosurePanel>
              </transition>
            </Disclosure>
            <Disclosure v-slot="{ open }" as="div" class="py-2">
              <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
                <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
                <span class="text-left order-1 lg:order-2">Wird Melli von der Pflege- oder Krankenkasse bezahlt?</span>
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
                  <span>Der Gesetzgeber bereitet gerade den Weg für die Zulassung von digitalen Pflegeanwendungen (DiPA). Sobald die entsprechenden Verordnungen verabschiedet sind, wird die entsprechende Zulassung beantragt. Die Pflegekasse oder Krankenkasse kann dann einen Teil der Kosten für pflegebedürftige Nutzer tragen.</span>
                </DisclosurePanel>
              </transition>
            </Disclosure>
            <Disclosure v-slot="{ open }" as="div" class="py-2">
              <DisclosureButton class="font-medium text-2xl w-full flex lg:items-center justify-between lg:justify-start items-start gap-2.5 py-2 text-gray-900">
                <div :class="open ? 'transform rotate-90' : ''" class="i-carbon:chevron-right text-primary-400 transition ease-in min-h-8 min-w-8 order-2 lg:order-1" />
                <span class="text-left order-1 lg:order-2">Kann die Hardware auch monatlich finanziert werden?</span>
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
                  <span>Ja, wir bieten einen Finanzierungsplan für die Hardware (Melli-Tablet + Docking-Station) an. Dieser beläuft sich auf <span class="text-primary-500">7€ / Monat über 24 Monate</span>, unabhängig vom gewählten Abo-Modell. Mehr Informationen dazu finden Sie in unseren <a href="/agb" class="underline decoration-1 decoration-solid underline-offset-1">AGB.</a></span>
                </DisclosurePanel>
              </transition>
            </Disclosure>
          </div>
        </div>
      </div>
      <div class="bg-primary-900 rounded-2xl py-8 lg:py-16 px-4 lg:px-20">
        <div class="flex flex-col lg:flex-row lg:items-center gap-20 text-white">
          <div class="grid gap-4 flex-1 text-center md:text-left">
            <h1 class="font-semibold text-4xl lg:text-5xl">
              Offene Fragen?
            </h1>
            <p class="font-medium text-2xl">
              Egal, ob Fragen zum Produkt oder zum Bestellprozess – wir beraten dich gerne und räumen alle Unklarheiten aus dem Weg. Vereinbare einfach einen Rückruf mit uns und wir melden uns umgehend bei dir.
            </p>
          </div>
          <button id="cta-contact-phone" class="bg-primary-500 py-4 px-7 rounded-lg text-center" @click="callbackModalOpen = true">
            <span class="font-medium text-base">Rückruf vereinbaren</span>
          </button>
        </div>
      </div>
    </div>
  </Container>
  <section class="lg:py-24 h-full">
    <div class="lg:container h-full mx-auto lg:px-0">
      <div class="bg-yellow-50 rounded-[32px] lg:rounded-[64px] px-6 py-16 lg:p-16 overflow-hidden">
        <div class="grid gap-16 justify-items-center">
          <div class="grid gap-8 text-center lg:w-2/3">
            <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
              {{ t('secure-melli.heading-1') }} <span class="text-primary-400">{{ t('secure-melli.heading-3') }}</span> {{ t('secure-melli.heading-2') }}
            </h1>
            <p class="text-gray-900 font-normal text-xl lg:text-2xl">
              {{ t('secure-melli.sub-text') }}
            </p>
          </div>
          <FormKit
            form-class="w-full lg:w-1/2"
            type="form"
            :actions="false"
            :incomplete-message="false"
            @submit="openNews"
          >
            <div class="grid gap-5 lg:w-full">
              <FormKit
                v-model="email"
                type="email"
                name="email"
                placeholder="E-Mail-Adresse"
                validation="required|email"
                validation-visibility="submit"
                inner-class="w-full h-fit border border-primary-400 rounded-lg overflow-hidden focus:border-primary-500"
                input-class="w-full h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 outline-none"
              />
              <div class="flex flex-col items-stretch lg:flex-row gap-3 items-center w-fit mx-auto">
                <FormKit
                  type="submit"
                  input-class="flex w-full lg:w-fit items-center justify-center px-7 py-4 bg-primary-500 rounded-lg text-white font-medium text-base"
                >
                  {{ t('secure-melli.get-melli-button') }}
                </FormKit>
              </div>
            </div>
          </FormKit>
        </div>
      </div>
    </div>
  </section>
  <Modal :show="callbackModalOpen" @close="callbackModalOpen = false">
    <CallbackDialog />
  </Modal>
  <Modal :show="newsletterDialogOpen" @close="newsletterDialogOpen = false">
    <NewsletterDialog />
  </Modal>
</template>
