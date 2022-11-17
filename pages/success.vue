<script setup lang="ts">
import { firePaymentSuccess } from '~/google-tag-manager'
import { useStripeAxios } from '~/composables/useStripeAxios'
import { useCheckoutStore } from '~/stores/checkout'
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
        Solltest du bereits jetzt dringende Fragen haben, sind wir unter <strong>+49 030-555703440</strong> von 08:00 bis 17:00 erreichbar.
      </p>
      <!-- <p class="text-xl"> -->
      <!-- Deine Bestellung wurde aufgeben. Wir haben eine Bestätigung deiner Bestellung an {email} gesendet. Unter folgendem Link kannst du bereits jetzt dein Profil in der Melli-App registrieren. Die Melli-App benötigst du, um Einstellungen an deiner Melli vorzunehmen. -->
      <!-- <br>
      </p> -->
    </div>
    <div v-else class="grid gap-4 text-2xl font-semibold text-primary-900 content-center items-stretch justify-items-center py-8">
      Einen Moment bitte
    </div>
  </div>
  <SocialMedia class="my-12" />
</template>

<style>
  #success-message-bg{
    background: rgba(236, 253, 245, var(--un-bg-opacity)) url(https://assets.melli.com/shapes/bubble-3.svg) no-repeat;
    background-size: cover;
    background-position-y: -20vw;
    background-position-x: -90vw;
  }

@media (min-width: 640px) {
  #success-message-bg{
    background: rgba(236, 253, 245, var(--un-bg-opacity)) url(https://assets.melli.com/shapes/bubble-3.svg) no-repeat;
    background-size: cover;
    background-position-y: -10vw;
    background-position-x: -40vw;
  }
}

@media (min-width: 1024px) {
  #success-message-bg{
    background: rgba(236, 253, 245, var(--un-bg-opacity)) url(https://assets.melli.com/shapes/bubble-3.svg) no-repeat;
    background-size: cover;
    background-position-y: center;
    background-position-x: -40vw;
  }
}

@media (min-width: 1400px){
  #success-message-bg{
    background: rgba(236, 253, 245, var(--un-bg-opacity)) url(https://assets.melli.com/shapes/bubble-3.svg) no-repeat;
    background-size: cover;
    background-position-y: center;
    background-position-x: -40vw;
  }
}
</style>
