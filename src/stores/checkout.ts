import { acceptHMRUpdate, defineStore } from 'pinia'

export interface PricingInfo {
  cost: number
  priceId: string
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
    annualPayment: { cost: 9.90, priceId: 'price_1LXnPlCwdXQVYry95PekLO8p' },
    monthlyPayment: { cost: 14.90, priceId: 'price_1LXnPlCwdXQVYry9xW3EGEEr' },
  },
  {
    id: 'advanced',
    name: t('shop.choose-subscription.advance-plan'),
    tag: 'kein WLAN erforderlich',
    features: ['Melli-Abo', 'Melli-App für Familie & Freunde', 'Mit unbegrenztem mobilen Internet'],
    annualPayment: { cost: 19.90, priceId: 'price_1LXnRyCwdXQVYry953u0exbP' },
    monthlyPayment: { cost: 24.90, priceId: 'price_1LXnRyCwdXQVYry9rWf4zi9j' },
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
      selectedSubscription: ref<SubscriptionInfo>(),
      accepedAgb: ref<boolean>(false),
    }
  },
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCheckoutStore, import.meta.hot))
