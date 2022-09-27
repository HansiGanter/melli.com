<script setup lang="ts">
import { useStripeAxios } from '~/composables/useStripeAxios'
import type { SubscriptionInfo } from '~/stores/checkout'
import { useCheckoutStore, useSubscriptionsData } from '~/stores/checkout'
import { displayPrice } from '~/utils/common'

const checkout = useCheckoutStore()
const route = useRoute()
const { t } = useI18n()

const subscriptions = useSubscriptionsData()

const selectedSubscription = ref('')
const isAnnual = ref(true)

const setCart = () => {
  checkout.$patch({
    selectedSubscriptionId: selectedSubscription.value,
  })
}

const getPaymentInfo = (sub: SubscriptionInfo) => isAnnual.value ? sub.annualPayment : sub.monthlyPayment

const displayMonthlyPrice = (sub: SubscriptionInfo) => displayPrice(getPaymentInfo(sub).cost)
const displayYearlyPrice = (sub: SubscriptionInfo) => displayPrice(getPaymentInfo(sub).cost * 12)
const displayPriceWithTime = (sub: SubscriptionInfo) => isAnnual.value ? `${displayYearlyPrice(sub)} / Jahr` : `${displayMonthlyPrice(sub)} / Monat`

const isLoading = ref(false)
const error = ref('')
const isNewsletterAccepted = ref(false)
const isAgbAccepted = ref(false)

const buyNow = () => {
  if (!selectedSubscription.value) {
    error.value = 'Bitte wählen Sie eins der beiden Abo-Modelle aus'
  }
  else {
    isLoading.value = true
    useStripeAxios.post('/checkout-session', { items: [{ price_id: getPaymentInfo(selectedSubscription.value).priceId, quantity: 1 }], wantsNewsletter: isNewsletterAccepted.value })
      .then(response => location.href = response.data.checkout_session_url)
      .finally(() => isLoading.value = false)
  }
}

// watch([selectedSubscription, isAgbAccepted], () => {
//   error.value = undefined
//   checkout.$patch({
//     selectedSubscriptionId: selectedSubscription.value?.id,
//     accepedAgb: isAgbAccepted.value,
//   })
// })

onMounted(() => {
  // if (route.query.id)
  //   selectedSubscription.value = subscriptions.find(sub => sub.id === route.query.id)
  // else if (checkout.selectedSubscriptionId)
  //   selectedSubscription.value = subscriptions.find(sub => sub.id === checkout.selectedSubscriptionId)
  selectedSubscription.value = checkout.selectedSubscriptionId
  if (route.query.id) {
    selectedSubscription.value = subscriptions.find(sub => sub.id === route.query.id)
    setCart()
  }
})
</script>

<template>
  <div class="w-full grid gap-8 content-start">
    <h1 class="font-semibold text-3xl lg:text-4xl text-gray-900 hidden lg:block">
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
          <RadioGroupOption
            v-for="subscription in subscriptions"
            :key="subscription.id"
            v-slot="{ checked }"
            as="template"
            :value="subscription"
            @click="setCart"
          >
            <div
              class="relative bg-white border-1 rounded-lg shadow-sm p-3 gap-3 grid content-start cursor-pointer focus:outline-none transition delay-150 ease-in"
              :class="[checked ? 'ring-3 ring-primary-500' : 'border-gray-300']"
            >
              <div class="grid gap-2">
                <Badge class="mb-2" :class="subscription.id === 'base' ? 'bg-pink-600' : 'bg-primary-600'">
                  <span class="font-medium text-white text-sm">
                    {{ subscription.tag }}
                  </span>
                </Badge>
                <RadioGroupLabel
                  as="span"
                  class="block text-lg font-normal transition-all transition-duration-500"
                  :class="checked ? 'text-primary-500' : 'text-gray-900'"
                >
                  <span class="font-medium text-3xl">{{ displayMonthlyPrice(subscription) }}</span>
                  / Monat
                </RadioGroupLabel>
                <transition
                  enter-active-class="transition-all duration-1000 ease-in-out"
                  enter-from-class="transform translate-x-5 opacity-0"
                  leave-active-class="transition-all duration-300 ease-out"
                  leave-to-class="transform translate-x-5 opacity-0"
                >
                  <span v-if="isAnnual" class="font-medium text-base text-gray-500">{{ displayYearlyPrice(subscription)
                  }} / Jahr</span>
                </transition>
                <RadioGroupDescription as="span" class="flex items-center font-normal text-xl text-gray-900">
                  {{ subscription.name }}
                </RadioGroupDescription>
              </div>
              <hr key="1" class="w-full border-gray-400">
              <ul class="list-disc pl-4">
                <li v-for="(feature, n) in subscription.features" :key="n">
                  {{ feature }}
                </li>
              </ul>
              <div
                class="absolute -inset-px rounded-lg pointer-events-none"
                :class="checked ? 'border-primary-500' : 'border-transparent'"
                aria-hidden="true"
              />
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
      <p v-if="error" class="animation-shake font-medium text-xl text-red-500 mt-4">
        {{ error }}
      </p>
    </div>
    <transition
      enter-active-class="transition-all duration-1000 ease-in-out"
      enter-from-class="transform translate-x-5 opacity-0"
      leave-active-class="transition-all duration-300 ease-out"
      leave-to-class="transform translate-x-5 opacity-0"
    >
      <div v-if="selectedSubscription" class="flex gap-4 font-medium text-xl text-black">
        <div class="text-primary-500 flex-shrink-0 w-6 pl-1 text-2xl">
          ✓
        </div>
        Dieser Plan beinhaltet eine kostenlose Testphase von 60 Tagen. Nach diesem Zeitraum wird Ihr Abonnement für
        {{ displayPriceWithTime(selectedSubscription) }} fortgesetzt.
      </div>
    </transition>

    <FormKit
      type="form"
      form-class="grid gap-4"
      :actions="false"
      :incomplete-message="false"
      @submit="buyNow"
    >
      <FormKit
        v-model="isAgbAccepted"
        type="checkbox"
        label-class="text-sm flex-1"
        wrapper-class="flex items-start gap-3"
        input-class="cr_form-checkbox cr_ipe_checkbox bg-primary-500 rounded-md text-primary-500 outline-none transition duration-300 ease-in mt-1"
        validation-label="AGBs"
        message-class="text-red-500 mt-1"
        validation="required|accepted"
        validation-visibility="submit"
      >
        <template #label="context">
          <span :class="context.classes.label">Ich habe die <router-link to="/agb" class="underline underline-primary-500 text-primary-500">Allgemeinen Geschäftsbedingungen</router-link>, die <router-link to="/datenschutz" class="underline underline-primary-500 text-primary-500">Datenschutzbestimmung</router-link> und die <router-link to="/agb" class="underline underline-primary-500 text-primary-500">Widerrufsbelehrung</router-link> gelesen und akzeptiert.*</span>
        </template>
      </FormKit>
      <FormKit
        v-model="isNewsletterAccepted"
        type="checkbox"
        label-class="text-sm flex-1"
        wrapper-class="flex items-start gap-3"
        input-class="cr_form-checkbox cr_ipe_checkbox bg-primary-500 rounded-md text-primary-500 outline-none transition duration-300 ease-in mt-1"
      >
        <template #label="context">
          <span :class="context.classes.label">Ich möchte Emails mit Promotion & Produktupdates erhalten. Es gelten unsere <router-link to="/datenschutz" class="underline underline-primary-500 text-primary-500">Datenschutzbestimmungen</router-link>. Die Einwilligung kann jeder Zeit mit Wirkung für die Zukunft z.B. per E-Mail an [info@meetap.de] widerrufen werden.</span>
        </template>
      </FormKit>
      <FormKit
        id="7539405"
        type="submit"
        input-class="flex items-center justify-center gap-2 h-fit py-4 w-full text-white font-medium text-base bg-primary-500 disabled:bg-gray-500/30 transition-all ease-out delay-150 rounded-lg text-center"
      >
        <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <span>{{ !isLoading ? 'Jetzt kaufen' : 'Einen Moment bitte' }}</span>
      </FormKit>
    </FormKit>
    <transition
      enter-active-class="transition-all duration-1000 ease-in-out"
      enter-from-class="transform translate-y-5 opacity-0"
      leave-active-class="transition-all duration-300 ease-out"
      leave-to-class="transform translate-y-5 opacity-0"
    >
      <div v-if="isAnnual" class="flex gap-2 p-2.5 font-normal text-lg text-black">
        <div>*</div>
        Die jährliche Zahlung beinhaltet eine 12-monatige Mindestvertragslaufzeit. Nach 12 Monaten wird das
        Abonnement automatisch von Monat zu Monat fortgesetzt. Das Abonnement kann nach Ablauf der Mindestlaufzeit
        monatlich gekündigt werden.
      </div>
    </transition>
  </div>
</template>

<style>
.animation-shake {
  animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}
</style>
