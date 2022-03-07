<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="text-center mb-16">
    <h2 class="text-3xl tracking-tight font-extrabold sm:text-4xl">
      {{ t('blog-preview.heading') }}
    </h2>
    <p
      class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
    >
      {{ t('blog-preview.subheading') }}
    </p>
  </div>
  <PostPreview prefix="/blog" :n-posts="3" />
</template>
