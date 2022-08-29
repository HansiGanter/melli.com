<script setup lang="ts">
import type { Ref } from 'vue'

const { t } = useI18n()

interface Plan {
  name: string
  price: string
  duration: string
  extras?: string[]
  wlan: boolean
}

const plans: Ref<Plan[]> = [
  {
    name: t('plans.free.name'),
    price: t('plans.free.price'),
    duration: t('plans.free.duration'),
    wlan: false,
    feats: [t('plans.basis.feat-1'), t('plans.basis.feat-2')],
  },
  {
    name: t('plans.pro.name'),
    price: t('plans.pro.price'),
    duration: t('plans.pro.duration'),
    extras: [t('plans.pro.extras.1')],
    wlan: true,
    feats: [t('plans.erweitert.feat-1'), t('plans.erweitert.feat-2'), t('plans.erweitert.feat-3')],
  },
]

const pros = [
  {
    text: t('price.pros.1'),
    icon: 'i-bxl:paypal',
  },
  {
    text: t('price.pros.2'),
    icon: 'i-carbon:badge',
  },
  {
    text: t('price.pros.3'),
    icon: 'i-carbon:delivery-truck',
  },
  {
    text: t('price.pros.4'),
    icon: 'i-carbon:phone',
  },
]
</script>

<template>
  <div class="grid gap-14 pb-10 lg:pb-20 pt-12 lg:pt-24">
    <h1 class="font-semibold text-4xl lg:text-5xl lg:text-center text-gray-900">
      {{ t('plans.title') }}<br><span class="text-primary-400">{{ t('plans.highlight') }}</span>
    </h1>
    <div class="grid gap-7 lg:gap-12">
      <div class="lg:w-8/12 lg:mx-auto">
        <div class="grid gap-5 grid-cols-1 lg:grid-cols-2 lg:mx-auto">
          <router-link v-for="plan in plans" :key="plan.name" to="/shop" class="hover:border border-gray-200 hover:shadow-none transition-all ease-out delay-75 flex flex-col justify-between gap-6 items-center rounded-2xl shadow-lg px-3.5 py-5">
            <div class="flex flex-shrink-0 flex-col gap-3 w-full divide-y divide-gray-400">
              <div class="grid gap-2">
                <Badge class="text-sm font-medium text-white" :class="!plan.wlan ? 'bg-pink-600' : 'bg-primary-600'">
                  {{ !plan.wlan ? 'WLAN erforderlich' : 'Kein WLAN erforderlich' }}
                </Badge>
                <div class="grid mt-1">
                  <span class="text-sm font-medium text-gray-900">ab</span>
                  <h3 class="text-gray-900 font-medium text-3xl">
                    {{ plan.price }}<span class="font-normal text-lg">{{ plan.duration }}</span>
                  </h3>
                </div>
                <span class="text-xl text-gray-900 font-normal">{{ plan.name }}</span>
              </div>
              <ul class="list-disc list-inside pt-3">
                <li v-for="(feat, f) in plan.feats" :key="f" class="text-base text-gray-800 font-normal">
                  {{ feat }}
                </li>
              </ul>
            </div>
            <div class="flex flex-col justify-between">
              <router-link to="/shop" class="flex-1 bg-primary-500 py-2.5 px-4 w-fit rounded-lg h-min">
                <span class="text-base font-medium text-white">{{ t('plans.buy') }}</span>
              </router-link>
            </div>
          </router-link>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div v-for="pro in pros" :key="pro.text" class="grid gap-1 text-center justify-items-center">
          <div class="text-3xl text-primary-400" :class="pro.icon" />
          <span class="font-medium text-xl text-black">{{ pro.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
