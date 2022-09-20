<script setup lang="ts">
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
  <Container>
    <div v-if="customerEmail" class="grid gap-4 content-center items-stretch justify-items-center py-8">
      <div class="h-96 overflow-hidden">
        <img src="https://assets.melli.com/illustrations/avatar/Sprechen.svg" class="h-full object-cover">
      </div>

      <div class="grid gap-2 text-center lg:w-3/4">
        <h3 class="font-semibold text-primary-500 text-xl">
          Ihre Bestellung wurde aufgegeben
        </h3>
        <p class="font-normal text-gray-700 text-xl">
          Wir haben eine Bestätigung deiner Bestellung an <span class="font-medium">{{ customerEmail }}</span> gesendet. <br>
          Vielen Dank für dein Vertrauen!
          Wir kümmern uns darum, dass Melli sich schnellstmöglich auf die Reise zu dir macht.
        </p>
      </div>
      <div class="flex items-center gap-4">
        <router-link to="/" class="bg-primary-500 hover:bg-primary-600 transition-all duration-150 delay-100 ease-in px-6 py-2.5 rounded-lg">
          <span class="text-white font-medium text-base">Startseite</span>
        </router-link>
      </div>
    </div>
    <div v-else class="grid gap-4 content-center items-stretch justify-items-center py-8">
      Einen Moment bitte
    </div>
  </Container>
</template>

<style scoped>

</style>
