<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <Container class="bg-gradient-to-b from-primary-50 to-tertiary-50">
    <NavBar class="text-primary-900" />
    <SectionHeader
      class="pt-8 lg:pt-16 pb-64 text-primary-800"
      :heading="t('blog.heading')"
      :text="t('blog.subheading')"
    />
  </Container>
  <Container class="-mt-56 pb-20 lg:pb-28">
    <PostPreview prefix="/blog" />
  </Container>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>
