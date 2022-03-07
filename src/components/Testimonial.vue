<script setup lang="ts">
defineProps<{
  name: string
  role: string
  url: string
  imageUrl?: string
  text: string
}>()
</script>

<template>
  <blockquote class="my-10">
    <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
      <p>{{ text }}</p>
    </div>
    <footer class="mt-8">
      <div class="md:flex md:items-center md:justify-center">
        <div v-if="imageUrl" class="md:flex-shrink-0 h-10 w-10">
          <img
            :src="imageUrl"
            class="h-full prose-img:m-0 object-cover rounded-full"
            style="margin: 0 !important;"
          >
        </div>
        <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
          <div class="text-base font-medium text-gray-900">
            {{ name }}
          </div>

          <svg
            class="hidden md:block mx-1 h-5 w-5 text-primary-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M11 0h3L9 20H6l5-20z" />
          </svg>

          <div class="text-base font-medium text-gray-500">
            <a :href="url" class="no-underline">{{ role }}</a>
          </div>
        </div>
      </div>
    </footer>
  </blockquote>
</template>
