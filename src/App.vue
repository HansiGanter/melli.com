<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
import { customParams, paramsToStore } from '~/utils/common'

useHead({
  title: 'Melli',
  meta: [
    { name: 'description', content: 'Melli' },
  ],
})
const searchParams: URLSearchParams = new URL(document.location.href).searchParams

paramsToStore.forEach((param) => {
  const value = searchParams.get(param)
  if (value !== null)
    window.localStorage.setItem(param, value)
})

const time = new Date().getTime()
customParams.forEach((param) => {
  const value = searchParams.get(param)

  if (value !== null)
    document.cookie = `${param}=${value}; timestamp=${time}; max-age=604800`
})

if (document.referrer && window.localStorage.getItem('initial_referrer_url') == null)
  window.localStorage.setItem('initial_referrer_url', document.referrer)
</script>

<template>
  <router-view />
</template>
