<script setup lang="ts">
const advantages = [
  {
    text: 'Mit Melli können Oma & Opa wieder mehr an eurem Leben teilhaben.',
    bubbletype: 2,
    bubble: 'text-primary-200',
    icon: 'i-lucide:heart w-16 h-16 text-gray-900 shrink-0',
    link: '#live',
  },
  {
    text: 'Mit Melli können Oma & Opa wieder mehr an eurem Leben teilhaben.',
    bubbletype: 1,
    bubble: 'text-primary-200',
    icon: 'i-lucide:life-buoy w-16 h-16 text-gray-900 shrink-0',
    link: '#safety',
  },
  {
    text: 'Mit Melli können Oma & Opa wieder mehr an eurem Leben teilhaben.',
    bubbletype: 3,
    bubble: 'text-primary-200',
    icon: 'i-ph:handshake w-16 h-16 text-gray-900 shrink-0',
    link: '#communication',
  },
  {
    text: 'Mit Melli können Oma & Opa wieder mehr an eurem Leben teilhaben.',
    bubbletype: 0,
    bubble: 'text-primary-200',
    icon: 'i-lucide:globe w-16 h-16 text-gray-900 shrink-0',
    link: '#technology',
  },
]
</script>

<template>
  <div class="flex flex-col gap-12 items-center">
    <h1 class="text-4xl md:text-5xl text-gray-900 font-semibold text-center">
      Deine Vorteile im Überblick
    </h1>
    <div class="flex flex-col sm:flex-row gap-3 items-center">
      <RouterLink to="/shop" class="flex gap-2 bg-primary-400 px-4 py-2.5 items-center text-white rounded-md font-medium w-fit">
        <div class="i-lucide:gift w-6 h-6 shrink-0" /> 30 Tage kostenlos Testen
      </RouterLink>
      <a
        href="tel:+493031198464"
        class="flex gap-2 text-gray-900 font-medium border-2 border-gray-900 rounded-md px-4 py-2.5 w-fit"
      ><div class="i-lucide:phone-call w-6 h-6 shrink-0" />Lass dich beraten!</a>
    </div>
    <div class="grid gap-3 md:gap-12 sm:grid-cols-2 text-2xl font-semibold">
      <RouterLink v-for="advantage in advantages" :key="advantage.link" :to="advantage.link" class="flex flex-col gap-3 cursor-pointer">
        <div class="flex gap-3 items-center">
          <!-- <BubbleIcon :bubble-type="advantage.bubbletype" :bubble="advantage.bubble" :icon="advantage.icon" /> -->
          <div :class="advantage.icon" /><span>{{ advantage.text }}</span>
        </div>
        <div class="i-ph:arrow-circle-down w-12 h-12 shrink-0 text-primary-400 mx-auto" />
        <!-- <hr> -->
      </RouterLink>
    </div>
  </div>
</template>
