<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{
  person: Person
}>()
</script>

<template>
  <li :key="person.name" class="py-10 px-6 dark:bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
    <div class="flex flex-col gap-y-6 xl:gap-y-10">
      <img class="mx-auto h-40 w-40 rounded-full" :src="person.imageUrl">
      <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
        <div class="font-medium leading-6 space-y-1">
          <h3 class="text-lg">
            {{ person.name }}
          </h3>
          <p class="text-primary-400">
            {{ person.role }}
          </p>
        </div>

        <ul v-if="person.social" role="list" class="flex justify-center gap-5">
          <li v-for="(url, name) in person.social" :key="name">
            <a
              :href="url"
              class="text-xl text-primary-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span class="sr-only">{{ name }}</span>
              <div v-if="name === 'linkedin'" class="carbon:logo-linkedin" />
              <div v-else-if="name === 'twitter'" class="carbon:logo-twitter" />
              <div v-else-if="name === 'github'" class="carbon:logo-github" />
              <div v-else class="carbon:logo-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>
