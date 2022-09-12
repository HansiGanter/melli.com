<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()

const isAnnual = ref(true)

const subscriptions = [
  { id: 1, plan: t('shop.choose-subscription.base-plan'), annual: '9.90', monthly: '14.90', features: ['Melli-Abo', 'Melli-App für Familie & Freunde'], payments: { annual: 'https://buy.stripe.com/test_6oEeVK0ibcIfcFy145', monthly: 'https://buy.stripe.com/test_6oE8xmc0T5fN20U7ss' } },
  { id: 2, plan: t('shop.choose-subscription.advance-plan'), annual: '19.90', monthly: '24.90', features: ['Melli-Abo', 'Melli-App für Familie & Freunde', 'Mit unbegrenztem mobilen Internet'], payments: { annual: 'https://buy.stripe.com/test_28ocNC0ib7nV0WQ7sv', monthly: 'https://buy.stripe.com/test_5kAdRG7KD37F9tm4gi' } },
]

const selectedSubscription = ref('')

onMounted(() => {
  if (route.query.id)
    selectedSubscription.value = subscriptions.find(sub => route.query.id === sub.annual)
})

const yearlyPrice = computed(() => {
  if (isAnnual.value)
    return selectedSubscription.value !== '' ? (selectedSubscription.value.annual * 12).toFixed(2) : false

  else
    return selectedSubscription.value !== '' ? (selectedSubscription.value.monthly * 12).toFixed(2) : false
})

const stripePayment = computed(() => {
  if (isAnnual.value)
    return selectedSubscription.value !== '' ? selectedSubscription.value.payments.annual : ''

  else
    return selectedSubscription.value !== '' ? selectedSubscription.value.payments.monthly : ''
})
const error = ref('')
const buyNow = () => {
  if (!selectedSubscription.value)
    error.value = 'Bitte wählen Sie eins der beiden Abo-Modelle aus'

  else
    location.href = stripePayment.value
}
</script>

<template>
  <div class="w-full grid gap-8 content-start">
    <h1 class="font-semibold text-3xl lg:text-4xl text-gray-900">
      {{ t('shop.choose-subscription.header') }}
    </h1>
    <div class="flex justify-center items-center gap-3">
      <div class="font-normal lg:font-medium text-base text-gray-700">
        Monatlich zahlen
      </div>
      <Toggle v-model="isAnnual" />
      <div class="flex-1 font-normal lg:font-medium text-base text-gray-700">
        Jährlich im Voraus zahlen* <span class="text-primary-600">(spare 20%)</span>
      </div>
    </div>
    <div>
      <RadioGroup v-model="selectedSubscription">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <RadioGroupOption v-for="subscription in subscriptions" :key="subscription.id" v-slot="{ checked, active }" as="template" :value="subscription">
            <div class="relative bg-white border-2 rounded-lg shadow-sm p-3 gap-3 grid content-start cursor-pointer focus:outline-none transition delay-150 ease-in" :class="[checked ? 'border-primary-500' : 'border-gray-300', active ? 'ring-2 ring-primary-500' : '']">
              <div class="grid gap-2">
                <Badge :class="subscription.id === 1 ? 'bg-pink-600' : 'bg-primary-600'">
                  <span class="font-medium text-white text-sm">{{ subscription.id === 1 ? 'WLAN erforderlich' : 'kein WLAN erforderlich' }}</span>
                </Badge>
                <RadioGroupLabel as="span" class="block text-lg font-normal" :class="checked ? 'text-primary-500' : 'text-gray-900'">
                  <span class="font-medium text-3xl">€{{ isAnnual ? subscription.annual : subscription.monthly }}</span> /Monat
                </RadioGroupLabel>
                <transition
                  enter-active-class="transition-all duration-1000 ease-in-out"
                  enter-from-class="transform translate-x-5 opacity-0"
                  leave-active-class="transition-all duration-300 ease-out"
                  leave-to-class="transform translate-x-5 opacity-0"
                >
                  <span v-if="isAnnual" class="font-medium text-base text-gray-500">€{{ isAnnual ? (subscription.annual * 12).toFixed(2) : (subscription.monthly * 12).toFixed(2) }}/Jahr</span>
                </transition>
                <RadioGroupDescription as="span" class="flex items-center font-normal text-xl text-gray-900">
                  {{ subscription.plan }}
                </RadioGroupDescription>
              </div>
              <transition-group
                enter-active-class="transition-all duration-100 ease-in-out"
                enter-from-class="transform translate-x-2 opacity-0"
                leave-active-class="transition-all duration-300 ease-out"
                leave-to-class="transform -translate-y-2 opacity-0"
              >
                <hr class="w-full border-gray-400">
                <ul class="list-inside list-disc">
                  <li v-for="(feature, n) in subscription.features" :key="n">
                    {{ feature }}
                  </li>
                </ul>
              </transition-group>
              <div class="absolute -inset-px rounded-lg pointer-events-none" :class="checked ? 'border-primary-500' : 'border-transparent'" aria-hidden="true" />
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
      <transition
        enter-active-class="transition-all duration-1000 ease-in-out"
        enter-from-class="transform translate-y-5 opacity-0"
        leave-active-class="transition-all duration-500 ease-in"
        leave-to-class="transform -translate-y-5 opacity-0"
      >
        <p v-if="error && !selectedSubscription" class="font-medium text-xl text-red-500 mt-2">
          {{ error }}
        </p>
      </transition>
    </div>
    <transition
      enter-active-class="transition-all duration-1000 ease-in-out"
      enter-from-class="transform translate-y-5 opacity-0"
      leave-active-class="transition-all duration-500 ease-in"
      leave-to-class="transform -translate-y-5 opacity-0"
    >
      <p v-if="selectedSubscription && isAnnual" class="font-medium text-xl text-black">
        <span class="text-primary-500">✓</span>  Dieser Plan beinhaltet eine kostenlose Testphase von 60 Tagen. Nach diesem Zeitraum wird Ihr Abonnement für € {{ yearlyPrice }} / Jahr fortgesetzt.
      </p>
    </transition>
    <transition
      enter-active-class="transition-all duration-1000 ease-in-out"
      enter-from-class="transform translate-y-5 opacity-0"
      leave-active-class="transition-all duration-500 ease-in"
      leave-to-class="transform -translate-y-5 opacity-0"
    >
      <p v-if="selectedSubscription && !isAnnual" class="font-medium text-xl text-black">
        <span class="text-primary-500">✓</span>  Dieser Plan beinhaltet eine kostenlose Testphase von 60 Tagen. Nach diesem Zeitraum wird Ihr Abonnement für € {{ (yearlyPrice / 12).toFixed(2) }}/Monat fortgesetzt.
      </p>
    </transition>
    <button class="h-fit py-4 w-full text-white font-medium text-base bg-primary-500 disabled:bg-gray-500/30 transition-all ease-out delay-150 rounded-lg text-center" @click="buyNow">
      Jetzt kaufen
    </button>
    <transition
      enter-active-class="transition-all duration-1000 ease-in-out"
      enter-from-class="transform translate-y-5 opacity-0"
      leave-active-class="transition-all duration-500 ease-in"
      leave-to-class="transform -translate-y-5 opacity-0"
    >
      <div v-if="isAnnual" class="grid gap-1 p-2.5">
        <p class="font-normal text-lg text-black">
          *Die jährliche Zahlung beinhaltet eine 12-monatige Mindestvertragslaufzeit. Nach 12 Monaten wird das Abonnement automatisch von Monat zu Monat fortgesetzt. Das Abonnement kann nach Ablauf der Mindestlaufzeit monatlich gekündigt werden.
        </p>
      </div>
    </transition>
  </div>
</template>
