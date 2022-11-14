<script setup lang="ts">
import { displayPrice } from '~/utils/common'
import { firePlanEvent, fireShopEvent } from '~/google-tag-manager'
import { useCheckoutStore, useSubscriptionsData } from '~/stores/checkout'
import type { SubscriptionInfo } from '~/stores/checkout'

const router = useRouter()
const checkout = useCheckoutStore()

const subscriptions = useSubscriptionsData()

const selectedSubscription = ref<SubscriptionInfo>()

const displayMonthlyPrice = (sub: SubscriptionInfo) => displayPrice(sub.annualPayment.cost)
const displayYearlyPrice = (sub: SubscriptionInfo) => displayPrice(sub.annualPayment.cost * 12)

const setCart = () => {
  checkout.$patch({
    selectedSubscription: selectedSubscription.value,
  })
}

const goToShop = (id: string, name: string) => {
  firePlanEvent(name)
  fireShopEvent()
  const selectedItem = subscriptions.find(item => id === item.id)
  checkout.$patch({ selectedSubscription: selectedItem })
  router.push({ path: '/shop', query: { id: selectedItem?.id } })
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div
      v-for="subscription in subscriptions"
      :key="subscription.id"
      @click="[setCart(), goToShop(subscription.id, subscription.name)]"
    >
      <div
        class="relative bg-white border-2 rounded-xl shadow-sm p-3 gap-3 grid content-start cursor-pointer focus:outline-none transition delay-150 ease-in md:h-90 border-gray-300 hover:border-primary-500 hover:border-4"
      >
        <div class="grid gap-2">
          <div class="w-20 h-20 lg:w-32 lg:h-32 bg-tertiary-500 pt-2 lg:pt-5 absolute top-2 right-2 rounded-full text-center">
            <p class="font-bold lg:text-2xl">
              10€
            </p>
            <p class="text-[10px] lg:text-base leading-3 lg:leading-5">
              für "Wege aus<br>der Einsamkeit<br>e.V."
            </p>
          </div>
          <Badge class="mb-2" :class="subscription.id === 'base' ? 'bg-pink-600' : 'bg-primary-600'">
            <span class="font-medium text-white text-sm">
              {{ subscription.tag }}
            </span>
          </Badge>
          <div
            as="span"
            class="block text-lg font-normal transition-all transition-duration-500"
          >
            <span class="font-medium text-3xl">{{ displayMonthlyPrice(subscription) }}</span>
            / Monat
          </div>
          <span class="font-medium text-base text-gray-500">{{ displayYearlyPrice(subscription)
          }} / Jahr</span>
          <div as="span" class="flex items-center font-normal text-xl text-gray-900">
            {{ subscription.name }}
          </div>
        </div>
        <hr key="1" class="w-full border-gray-300">
        <ul class="list-disc pl-4">
          <li v-for="(feature, n) in subscription.features" :key="n">
            {{ feature }}
          </li>
        </ul>
        <button class="bg-primary-500 text-white w-fit p-4 rounded-lg" :class="subscription.id === 'base' ? 'mt-6' : ''">
          Jetzt kostenlos testen
        </button>
      </div>
    </div>
  </div>
</template>
