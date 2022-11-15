<script setup lang="ts">
import { computed } from 'vue'
import type { RouteRecordNormalized } from 'vue-router'
import type { PostItem } from '~/types'

const props = defineProps<{
  route: RouteRecordNormalized
}>()

const frontmatter = computed<PostItem>(() => (props.route.meta as any).frontmatter)
</script>

<template>
  <router-link :key="route.path" :to="route.path" class="contents">
    <div class="bg-white dark:bg-gray-800 flex flex-col gap-8 px-6 pb-8 pt-6 rounded-2xl shadow-lg overflow-hidden">
      <div class="flex-shrink-0 rounded-lg overflow-hidden">
        <img
          class="h-60 w-full object-cover"
          :src="frontmatter.imageUrl ? frontmatter.imageUrl : 'logo.svg'"
        >
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div class="flex-1">
          <span class="text-sm font-normal text-gray-500">
            {{ frontmatter.date }}
          </span>
          <div class="flex-col gap-3 mt-3">
            <div class="flex items-center justify-between gap-4">
              <h1 class="text-xl font-semibold">
                {{ frontmatter.title }}
              </h1>
              <div class="i-carbon:arrow-up-right text-gray-900" />
            </div>
            <p class="mt-3 text-base text-gray-500 dark:text-white">
              {{ frontmatter.description }}
            </p>
          </div>
        </div>
        <!-- <div class="mt-6 flex items-center">
          <p class="text-sm font-medium bg-primary-50 rounded-md inline px-2 py-1 text-primary-700">
            <a
              :href="frontmatter.category.href"
              class="hover:underline"
            >{{ frontmatter.category.name }}</a>
          </p>
        </div> -->
        <div class="flex gap-2">
          <Badge v-for="cat in frontmatter.category.name" :key="cat" class="bg-primary-50">
            <span class="text-primary-700 font-medium text-sm">{{ cat }}</span>
          </Badge>
        </div>
      </div>
    </div>
  </router-link>
</template>
