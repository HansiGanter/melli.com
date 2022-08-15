import { acceptHMRUpdate, defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', () => {
  /**
   * Checkout steps. (upcoming, current, complete)
   */
  const steps = ref([
    { name: 'Account', status: 'current', path: '/checkout' },
    { name: 'Address', status: 'upcoming', path: '/checkout/address' },
    { name: 'Payment', status: 'upcoming', path: '/checkout/payment' },
  ])
  const firstname = ref('')
  const lastname = ref('')

  return {
    firstname,
    lastname,
    steps,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCheckoutStore, import.meta.hot))
