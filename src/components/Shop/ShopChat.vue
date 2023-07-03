<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { fireBuyEvent, fireChatShopEvent } from '~/google-tag-manager'
const props = defineProps<{ setPrice: (price: StripePrice) => void; showBuyBotton: (show: boolean) => void }>()

const greaterLg = useBreakpoints(breakpointsTailwind).greater('lg')

interface StripePrice { price: number; wlan: boolean; onetime: boolean; stripeId: string }

const target = ref(null)

const choices = [['yearly', 'monthly'], ['WIFI', 'SIM'], ['onetime', 'installments']]
const options = [
  // yearly
  { price: 24.90, wlan: true, onetime: true, stripeId: 'https://buy.stripe.com/7sIaEZ2uUfJBb1CaEH' }, // 298,80€ yearly
  { price: 32.90, wlan: true, onetime: false, stripeId: 'https://buy.stripe.com/7sI3cx2uU0OHc5GcMQ' }, // 394,80€ yearly
  { price: 34.90, wlan: false, onetime: true, stripeId: 'https://buy.stripe.com/3cs4gBb1qfJBfhS149' }, // 418,80€ yearly
  { price: 42.90, wlan: false, onetime: false, stripeId: 'https://buy.stripe.com/aEUcN76LadBtc5G5kq' }, // 514,80€ yearly
  // monthly
  { price: 34.90, wlan: true, onetime: true, stripeId: 'https://buy.stripe.com/4gw14p7Pebtl6LmeV1' },
  { price: 42.90, wlan: true, onetime: false, stripeId: 'https://buy.stripe.com/00gfZjc5ubtl8Tu7sA' },
  { price: 44.90, wlan: false, onetime: true, stripeId: 'https://buy.stripe.com/3csfZj6LacxpedO8wF' },
  { price: 52.90, wlan: false, onetime: false, stripeId: 'https://buy.stripe.com/6oE14pb1qaph3za6oy' },
]

const priceIndex = ref(2)
const showFirstQuestion = ref(false)
const answers = ref(['', '', ''])

watchEffect(() => {
  priceIndex.value = answers.value.reduce((acc, answer, idx) => {
    const n = choices[idx].findIndex(choice => choice === answer)
    return acc + (n !== -1 ? n : 0) * (2 ** (2 - idx))
  }, 0)
  if (answers.value[0] === '')
    props.setPrice({ price: 0, wlan: false, onetime: false, stripeId: '' })

  else
    props.setPrice(options[priceIndex.value])

  props.showBuyBotton(!answers.value.includes(''))
})

const questions = [
  {
    question: 'Möchtest du dein Abo jährlich bezahlen oder monatlich?',
    options: [
      { label: 'Jährlich im Voraus', value: 'yearly', label2: '24,90€/Monat' },
      { label: 'Monatlich', value: 'monthly', label2: '34,90€/Monat' },
    ],
    onPick: (p: 'yearly' | 'monthly') => onPick(p, 0),
    uid: 'question-0',
  },
  {
    question: 'Hast du bzw. die Person, für die Melli gedacht ist, einen Internetanschluss (WLAN) Zuhause?',
    options: [
      { label: 'Ja', value: 'WIFI', label2: '' },
      { label: 'Nein', value: 'SIM', label2: '+10€/Monat' },
    ],
    onPick: (i: 'SIM' | 'WIFI') => onPick(i, 1),
    uid: 'question-1',
  },
  {
    question: 'Zu Melli gehört ein Tablet. Möchtest du das Gerät mieten oder einmalig kaufen?',
    options: [
      { label: 'Einmalig kaufen', value: 'onetime', label2: '175,00€' },
      { label: 'Monatlich mieten', value: 'installments', label2: '+8€/Monat' },
    ],
    onPick: (h: 'onetime' | 'installments') => onPick(h, 2),
    uid: 'question-2',
  },
]

function onPick(value: string, idx: number) {
  answers.value.splice(idx, 1, value)
  answers.value = [...answers.value]
  if (idx === 2 && greaterLg.value)
    return
  const nextQuestion = idx === 2 ? 'priceSummary' : questions[idx + 1].uid
  setTimeout(() => {
    document.getElementById(nextQuestion)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, 0)
  fireChatShopEvent(value)
}

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting)
    showFirstQuestion.value = true
}, { threshold: 1.0 },
)

const showErrorMessage = ref(false)

function submitBuy() {
  showErrorMessage.value = true
  if (!answers.value.includes(''))
    window.open(options[priceIndex.value].stripeId, '_blank')

  fireBuyEvent()
}
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-12 justify-between">
    <div id="shopchat" ref="target"
      class="flex flex-col gap-3 sm:gap-6 bg-primary-100 w-full min-h-100 rounded-3xl px-6 pt-6 pb-12 sm:px-12 sm:py-24">
      <ChatQuestion v-for="item, idx in questions" :key="item.question" :uid="item.uid" :question="item.question"
        :show-question="(idx === 0 && showFirstQuestion) || (idx > 0 && answers[idx - 1] !== '')">
        <ChatButton v-for="option in item.options" :key="option.label" :is-active="answers[idx] === option.value"
          :value="option.value" :label1="option.label" :label2="option.label2" :on-click="item.onPick" />
      </ChatQuestion>
    </div>
    <div id="priceSummary"
      class="bg-gray-50 sm:min-w-90 h-fit lg:sticky lg:top-12 rounded-3xl shadow-lg p-6 flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <Badge v-if="answers[1] === 'WIFI'" class="bg-pink-600 text-white">
          WLAN erforderlich
        </Badge>
        <div class="flex flex-col">
          <p class="text-3xl font-medium">
            €{{ answers[0] === '' ? '0,00' : options[priceIndex].price.toFixed(2) }}<span class="text-lg"> / Monat</span>
          </p>
          <p v-if="answers[0] === 'yearly'" class="text-gray-400 text-xs font-light">
            jährlich abgerechnet mit €{{ (Math.round(options[priceIndex].price * 12 * 100) / 100).toFixed(2) }}/Jahr
          </p>
        </div>
        <p v-if="answers[2] === 'onetime'" class="font-medium">
          + €175,00 Tablet / einmalig
        </p>
      </div>
      <hr v-if="answers[0] !== ''">
      <ul v-if="answers[0] !== ''" class="list-disc ml-6">
        <li>30 Tage kostenlos testen</li>
        <li>Melli-Abo</li>
        <li>Melli-App für Familie und Freunde</li>
        <li>Melli-Gruppen mit professionellen Betreuungskräften</li>
        <li v-if="answers[1] === 'SIM'">
          SIM mit unbegrenztem Internet
        </li>
      </ul>
      <button id="button-test"
        :class="answers.includes('') ? 'bg-gray-300 !cursor-not-allowed' : 'bg-primary-400 cursor-pointer'"
        class="text-center text-white w-full h-full px-2 py-4 rounded-lg" @click="submitBuy">
        30 Tage kostenlos testen
      </button>
      <span v-if="answers.includes('') && showErrorMessage" class="flex gap-1.5 text-sm items-center text-danger-500">
        <div class="i-lucide:info w-6 h-6" />Konfiguriere zuerst dein Melli-Abo im Chat
      </span>
    </div>
  </div>
</template>
