<script setup lang="ts">
import { firePaymentSuccess } from '~/google-tag-manager'
import { useStripeAxios } from '~/composables/useStripeAxios'
import { useCheckoutStore } from '~/stores/checkout'
const { t } = useI18n()
const checkout = useCheckoutStore()

const route = useRoute()

const isLoading = ref(false)
const customerEmail = ref('')

const queryStripe = () => {
  isLoading.value = true
  useStripeAxios.get(`/checkout-session/${route.query.session_id}`).then((res) => {
    isLoading.value = false
    // check if checkout was successfull is missing
    firePaymentSuccess()
    customerEmail.value = res.data.checkout_session_data.customer_details.email
  }).catch((err) => {
    isLoading.value = false
    console.error(err)
  })
}

onMounted(() => {
  checkout.$reset()
  localStorage.clear()
  queryStripe()
})

const steps = [
  { name: 'Step 1', text: t('success.nextsteps.email'), icon: 'https://assets.melli.com/bubble-icons/bubble-icon_mail_2-yellow.svg' },
  { name: 'Step 2', text: t('success.nextsteps.register'), icon: 'https://assets.melli.com/bubble-icons/bubble-icon_tablet_1-yellow.svg' },
  { name: 'Step 3', text: t('success.nextsteps.package'), icon: 'https://assets.melli.com/bubble-icons/bubble-icon_smile_3-yellow.svg' },
  { name: 'Step 4', text: t('success.nextsteps.enjoy'), icon: 'https://assets.melli.com/bubble-icons/bubble-icon_rocket_4-yellow.svg' },
]
</script>

<template>
  <!-- <div v-if="customerEmail" class="flex flex-col gap-8 text-center my-12 sm:my-32 "> -->
  <div id="success-message-bg" class="w-full" style="">
    <div v-if="customerEmail" class="flex flex-col gap-8 text-center py-12 sm:py-32 max-w-5xl mx-auto px-5">
      <img class="mx-auto" src="https://assets.melli.com/bubble-icons/bubble-icon_heart_3-yellow.svg">
      <h1 class="text-4xl font-semibold">
        Vielen Dank für dein Vertrauen
      </h1>
      <p class="text-xl">
        Deine Bestellung wurde aufgeben. Unser Kundenservice wird sich in kürze bei dir melden.
        <br>
        Solltest du bereits jetzt dringende Fragen haben, sind wir unter <strong>+49 030-31198464</strong> von 08:00 bis
        17:00 erreichbar.
      </p>
      <!-- <p class="text-xl"> -->
      <!-- Deine Bestellung wurde aufgeben. Wir haben eine Bestätigung deiner Bestellung an {email} gesendet. Unter folgendem Link kannst du bereits jetzt dein Profil in der Melli-App registrieren. Die Melli-App benötigst du, um Einstellungen an deiner Melli vorzunehmen. -->
      <!-- <br>
      </p> -->
      <div class=" grid gap-4 h-full">
        <div aria-label="Progress" class="w-full hidden lg:flex">
          <ol role="list" class="flex grow items-center">
            <li v-for="(step, stepIdx) in steps" :key="step.name" class="relative grow grid"
              :class="[stepIdx !== steps.length - 1 ? 'pr-16' : '']">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="h-0.5 w-full bg-black" />
              </div>
              <span
                class="relative w-8 h-8 flex items-center justify-center mx-auto border-4  rounded-full bg-tertiary-100"
                :class="stepIdx < 2 ? 'border-primary-200' : 'border-primary-50'">
                <span class="sr-only">{{ step.name }}</span>
              </span>
            </li>
          </ol>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div v-for="(step, sId) in steps" :key="sId"
            class="grid gap-3 lg:gap-6 content-start justify-items-center text-black text-center">
            <img :src="step.icon" class="w-12 lg:w-24 h-12 lg:h-24">
            <h4 class="text-xl max-w-80">
              {{ step.text }}
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div v-else
      class="grid gap-4 text-2xl font-semibold text-primary-900 content-center items-stretch justify-items-center py-8">
      Einen Moment bitte
    </div>
  </div>
  <SocialMedia class="my-12" />
</template>

<style>
#success-message-bg {
  background: rgba(236, 253, 245, var(--un-bg-opacity)) url(https://assets.melli.com/shapes/bubble-3.svg) no-repeat;
  background-size: cover;
  background-position-y: -50vw;
  background-position-x: -250vw;
}

@media (min-width: 640px) {
  #success-message-bg {
    background: rgba(236, 253, 245, var(--un-bg-opacity)) url(https://assets.melli.com/shapes/bubble-3.svg) no-repeat;
    background-size: cover;
    background-position-y: -10vw;
    background-position-x: -40vw;
  }
}

@media (min-width: 1024px) {
  #success-message-bg {
    background: rgba(236, 253, 245, var(--un-bg-opacity)) url(https://assets.melli.com/shapes/bubble-3.svg) no-repeat;
    background-size: cover;
    background-position-y: center;
    background-position-x: -40vw;
  }
}

@media (min-width: 1400px) {
  #success-message-bg {
    background: rgba(236, 253, 245, var(--un-bg-opacity)) url(https://assets.melli.com/shapes/bubble-3.svg) no-repeat;
    background-size: cover;
    background-position-y: center;
    background-position-x: -45vw;
  }
}</style>
