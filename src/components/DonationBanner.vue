<script setup lang="ts">
import { fireShopEvent } from '~/google-tag-manager'

defineProps<{
  heading?: string, //'donation-banner.header'
  text: string // 'donation-banner.text'
}>()

const { t } = useI18n()
const showBanner = ref(true)
</script>

<template>
  <div v-if="showBanner" class="flex p-2 bg-gray-100 rounded-b-2xl lg:rounded-b-3xl">
    <RouterLink to="/shop" class="flex gap-2 lg:gap-4 mx-auto" @click="fireShopEvent">
      <img src="https://assets.melli.com/bubble-icons/bubble-icon_heart_3.svg" class="h-12 lg:h-16 my-auto">
      <div class="my-auto text-sm lg:text-base">
        <p v-if="heading" class="font-semibold">
          {{ t('group-session-banner.heading') }}
        </p>
        <p>
          {{ t(text) }}
        </p>
      </div>
    </RouterLink>
    <button class="i-carbon:close w-8 h-8 my-auto p-2 lg:p-4" @click="showBanner = false" />
  </div>
</template>
