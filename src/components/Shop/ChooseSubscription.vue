<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { fireBuyEvent } from '~/google-tag-manager'
import { useStripeAxios } from '~/composables/useStripeAxios'
import type { SubscriptionInfo } from '~/stores/checkout'
import { useCheckoutStore, useSubscriptionsData } from '~/stores/checkout'
import { displayPrice } from '~/utils/common'

const checkout = useCheckoutStore()
const route = useRoute()

const subscriptions = useSubscriptionsData()

const selectedSubscription = ref<SubscriptionInfo>()
const isAnnual = ref(true)

const getPaymentInfo = (sub: SubscriptionInfo) => isAnnual.value ? sub.annualPayment : sub.monthlyPayment

const displayMonthlyPrice = (sub: SubscriptionInfo) => displayPrice(getPaymentInfo(sub).cost)
const displayYearlyPrice = (sub: SubscriptionInfo) => displayPrice(getPaymentInfo(sub).cost * 12)
// const displayPriceWithTime = (sub: SubscriptionInfo) => isAnnual.value ? `${displayYearlyPrice(sub)} / Jahr` : `${displayMonthlyPrice(sub)} / Monat`

const isLoading = ref(false)
const error = ref('')
const isNewsletterAccepted = ref(false)
const isAgbAccepted = ref(false)
const showInformation = ref(false)

const setCart = () => {
  checkout.$patch({
    selectedSubscription: selectedSubscription.value,
  })
  error.value = ''
}

const buyNow = () => {
  // preselect advanced subscription
  if (!selectedSubscription.value) {
    error.value = 'Bitte wählen Sie eins der beiden Abo-Modelle aus'
  }
  else {
    fireBuyEvent()
    isLoading.value = true
    useStripeAxios.post('/checkout-session', { items: [{ price_id: getPaymentInfo(selectedSubscription.value).priceId, quantity: 1 }], wantsNewsletter: isNewsletterAccepted.value })
      .then(response => location.href = response.data.checkout_session_url)
      .finally(() => isLoading.value = false)
  }
}

onMounted(() => {
  if (!checkout.selectedSubscription) {
    checkout.selectedSubscription = subscriptions.find(sub => sub.id === 'advanced')
    setCart()
  }

  selectedSubscription.value = checkout.selectedSubscription
  if (route.query.id) {
    selectedSubscription.value = subscriptions.find(sub => sub.id === route.query.id)
    setCart()
  }
})

const betweenLgXl = useBreakpoints(breakpointsTailwind).between('lg', 'xl')
</script>

<template>
  <div id="choose-subscription" class="w-full grid gap-8 content-start p-6">
    <!-- <h1 class="font-semibold text-3xl lg:text-4xl text-gray-900 hidden lg:block">
      {{ t('shop.choose-subscription.header') }}
    </h1> -->
    <p v-if="!betweenLgXl" class="font-medium text-xl">
      Wähle eine Abo-Option um deinen kostenlosen Test zu starten. Dir werden für die ersten 60 Tage keinerlei Kosten berechnet. Nach Ablauf der 60 Tage beginnt dein Abo, zu den von dir ausgewählten Konditionen. Du kannst dein Abo vor Ablauf der 60 Tage kündigen, sodass keinerlei Kosten anfallen, sollte Melli nicht zu dir passen.
    </p>
    <div class="flex justify-center items-center gap-3">
      <span class="font-normal lg:font-medium text-gray-700 text-right">
        Monatlich zahlen
      </span>
      <Toggle v-model="isAnnual" class="shrink-0" />
      <span class=" font-normal lg:font-medium text-gray-700">
        Jährlich im Voraus zahlen* <span class="text-primary-500" @click="showInformation = true">(spare 20%) <div class="i-heroicons-outline:information-circle align-middle inline-block w-6 h-6 shrink-0" /></span>
      </span>
    </div>
    <Modal :show="showInformation" @close="showInformation = false">
      <Container class="p-4">
        <div class="i-heroicons-outline:information-circle color-primary-500 w-6 h-6" />
        <p>
          Die jährliche Zahlung beinhaltet eine 12-monatige Mindestvertragslaufzeit. Nach 12 Monaten wird das
          Abonnement automatisch von Monat zu Monat fortgesetzt. Das Abonnement kann nach Ablauf der Mindestlaufzeit
          monatlich gekündigt werden.
        </p>
      </Container>
    </Modal>
    <div>
      <RadioGroup v-model="selectedSubscription">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
          <RadioGroupOption
            v-for="subscription in subscriptions"
            :key="subscription.id"
            v-slot="{ checked }"
            as="template"
            :value="subscription"
            @click="setCart"
          >
            <div
              class="relative bg-white rounded-lg shadow-sm p-3 gap-3 grid content-start cursor-pointer focus:outline-none transition delay-150 ease-in"
              :class="checked ? 'border-3 border-primary-500' : 'border-1 border-gray-300'"
            >
              <div class="grid gap-2">
                <div class="w-20 h-20 bg-tertiary-500 pt-2 absolute top-2 right-2 rounded-full text-center">
                  <p class="font-bold">
                    10€
                  </p>
                  <p class="text-[10px] leading-3">
                    für "Wege aus<br>der Einsamkeit<br>e.V."
                  </p>
                </div>
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
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
      <p v-if="error" class="animation-shake font-medium text-xl text-red-500 mt-4">
        {{ error }}
      </p>
    </div>

    <FormKit type="form" form-class="grid gap-4" :actions="false" :incomplete-message="false" @submit="buyNow">
      <FormKit
        id="7539405"
        type="submit"
        input-class="flex items-center justify-center gap-2 h-fit py-4 w-full text-white font-medium text-base bg-primary-500 disabled:bg-gray-500/30 transition-all ease-out delay-150 rounded-lg text-center"
      >
        <svg
          v-if="isLoading"
          class="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <span>{{ !isLoading ? 'Testabo starten' : 'Einen Moment bitte' }}</span>
      </FormKit>
      <FormKit
        v-model="isAgbAccepted"
        type="checkbox"
        label-class="text-sm flex-1"
        wrapper-class="flex items-start gap-2"
        input-class="cr_form-checkbox cr_ipe_checkbox bg-primary-500 rounded-md text-primary-500 outline-none transition duration-300 ease-in mt-1"
        validation-label="AGBs"
        message-class="text-red-500 mt-1"
        validation="required|accepted"
        validation-visibility="submit"
      >
        <template #label="context">
          <span :class="context.classes.label">Ich akzeptiere die <router-link
            to="/agb"
            class="underline underline-primary-500 text-primary-500"
          >Allgemeinen Geschäftsbedingungen</router-link>,
            und die <router-link to="/agb" class="underline underline-primary-500 text-primary-500">Widerrufsbelehrung
            </router-link>.*</span>
        </template>
      </FormKit>
      <FormKit
        v-model="isNewsletterAccepted"
        type="checkbox"
        label-class="text-sm flex-1"
        wrapper-class="flex items-start gap-2"
        input-class="cr_form-checkbox cr_ipe_checkbox bg-primary-500 rounded-md text-primary-500 outline-none transition duration-300 ease-in mt-1"
      >
        <template #label="context">
          <span :class="context.classes.label">Ich möchte Melli Email-Updates erhalten. Die Anmeldung jederzeit z.B. per
            Email an [info@meetap.de] widerrufen werden.</span>
        </template>
      </FormKit>
    </FormKit>
    <transition
      enter-active-class="transition-all duration-1000 ease-in-out"
      enter-from-class="transform translate-y-5 opacity-0"
      leave-active-class="transition-all duration-300 ease-out"
      leave-to-class="transform translate-y-5 opacity-0"
    />
  </div>
</template>

<style>
.animation-shake {
  animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {

  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
