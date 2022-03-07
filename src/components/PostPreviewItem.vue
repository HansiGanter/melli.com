<script setup lang="ts">

import { computed } from 'vue'
import type { RouteRecordNormalized } from 'vue-router'
import { useI18n } from 'vue-i18n'
import type { PostItem } from '~/types'

const { t } = useI18n()

const props = defineProps<{
  route: RouteRecordNormalized
}>()

const { d } = useI18n()
const frontmatter = computed<PostItem>(() => (props.route.meta as any).frontmatter)
</script>

<template>
  <router-link :key="route.path" :to="route.path" class="contents">
    <div class="bg-white dark:bg-gray-800 flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div class="flex-shrink-0">
        <img
          class="h-48 w-full object-cover"
          :src="frontmatter.imageUrl ? frontmatter.imageUrl : 'logo.svg'"
        >
      </div>
      <div class="flex-1 p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-sm font-medium bg-secondary-50 rounded inline px-2 py-1 text-primary-600">
            <a
              :href="frontmatter.category.href"
              class="hover:underline"
            >{{ frontmatter.category.name }}</a>
          </p>
          <div class="pt-2">
            <h1 class="text-xl font-semibold">
              {{ frontmatter.title }}
            </h1>
            <p class="mt-3 text-base text-gray-500 dark:text-white">
              {{ frontmatter.description }}
            </p>
          </div>
        </div>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <router-link to="/team">
              <span class="sr-only">{{ frontmatter.author.name }}</span>
              <img class="h-10 w-10 rounded-full" :src="frontmatter.author.imageUrl">
            </router-link>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium">
              <router-link to="/team" class="hover:underline">
                {{ frontmatter.author.name }}
              </router-link>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500 dark:text-white">
              <time :datetime="frontmatter.date">{{ d(frontmatter.date, 'long') }}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{{ frontmatter.readingTime }} {{ t('blog-preview.reading-time') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
