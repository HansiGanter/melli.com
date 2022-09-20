import { acceptHMRUpdate, defineStore } from 'pinia'

export interface PricingInfo {
  cost: number
  priceId: string
  paymentLink: string
}

export interface SubscriptionInfo {
  id: string
  name: string
  tag: string
  features: string[]
  monthlyPayment: PricingInfo
  annualPayment: PricingInfo
}

export const useSubscriptionsData = () => {
  const { t } = useI18n()

  const subscriptions: SubscriptionInfo[] = [{
    id: 'base',
    name: t('shop.choose-subscription.base-plan'),
    tag: 'WLAN erforderlich',
    features: ['Melli-Abo', 'Melli-App für Familie & Freunde'],
    monthlyPayment: { cost: 9.90, priceId: 'price_1LhtgKCwdXQVYry9Q3GMZdHW', paymentLink: 'https://buy.stripe.com/test_6oE8xmc0T5fN20U7ss' },
    annualPayment: { cost: 14.90, priceId: 'price_1LhtgKCwdXQVYry9yjYRJcRa', paymentLink: 'https://buy.stripe.com/test_6oEeVK0ibcIfcFy145' },
  },
  {
    id: 'advanced',
    name: t('shop.choose-subscription.advance-plan'),
    tag: 'kein WLAN erforderlich',
    features: ['Melli-Abo', 'Melli-App für Familie & Freunde', 'Mit unbegrenztem mobilen Internet'],
    monthlyPayment: { cost: 19.90, priceId: 'price_1LhtiACwdXQVYry9Qow3iz3x', paymentLink: 'https://buy.stripe.com/test_5kAdRG7KD37F9tm4gi' },
    annualPayment: { cost: 24.90, priceId: 'price_1LhtiACwdXQVYry97b3Q6Adb', paymentLink: 'https://buy.stripe.com/test_28ocNC0ib7nV0WQ7sv' },
  },
  ]
  return subscriptions
}

export const useCheckoutStore = defineStore('checkout', {
  /**
   * Checkout steps. (upcoming, current, complete)
   */
  state: () => {
    return {
      steps: ref([
        { name: 'Account', status: 'current', path: '/checkout' },
        { name: 'Address', status: 'upcoming', path: '/checkout/address' },
        { name: 'Payment', status: 'upcoming', path: '/checkout/payment' },
      ]),
      firstname: ref(''),
      lastname: ref(''),
      selectedSubscriptionId: ref<string>(),
      accepedAgb: ref<boolean>(false),
    }
  },
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCheckoutStore, import.meta.hot))
