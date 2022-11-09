<script setup lang="ts">
const socials = [
  {
    href: 'https://www.facebook.com/deine.melli',
    icon: 'i-carbon:logo-facebook',
  },
  {
    href: 'https://www.linkedin.com/company/mit-melli/',
    icon: 'i-carbon:logo-linkedin',
  },
  {
    href: 'mailto:hallo@melli.com',
    icon: 'i-carbon:email',
  },
]
</script>

<template>
  <div class="grid gap-3">
    <h3 class="text-center font-semibold text-2xl text-gray-900">
      Teile diesen Artikel!
    </h3>
    <div class="flex items-center justify-center divide-x">
      <a v-for="social in socials" :key="social.href" :href="social.href" target="_blank" class="px-3"><div :class="social.icon" class="text-3xl" /></a>
    </div>
  </div>
</template>

<style scoped>

</style>
