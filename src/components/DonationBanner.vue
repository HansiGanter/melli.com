<script setup lang="ts">
import { fireShopEvent } from '~/google-tag-manager';

defineProps<{
  heading?: string; // 'donation-banner.header'
  text: string; // 'donation-banner.text'
}>();

const { t } = useI18n();
const showBanner = ref(true);
</script>

<template>
  <div v-if="showBanner" class="flex p-2 bg-primary-700 rounded-b-2xl lg:rounded-b-3xl">
    <RouterLink to="/shop" class="flex gap-3 lg:gap-4 mx-auto py-1" @click="fireShopEvent">
      <BubbleIcon bubble-type="2" bubble="text-primary-900" icon="i-ph:heart w-12 h-12 sm:w-16 sm:h-16 text-#FACC15"
        class="m-auto" />
      <div class="my-auto text-sm lg:text-base text-white">
        <p v-if="heading" class="font-semibold">
          {{ t('group-session-banner.heading') }}
        </p>
        <p>
          {{ t(text) }}
        </p>
      </div>
    </RouterLink>
    <button class="i-carbon:close w-8 h-8 my-auto p-2 lg:p-4 text-white" @click="showBanner = false" />
  </div>
</template>
