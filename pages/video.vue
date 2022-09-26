<script setup lang="ts">
    const route=useRoute()
    const router=useRouter()
    onMounted(() => {
      if (!route.query.video_name) {
      router.push({path: "/notFound"})        
      }
})
</script>

<template>
  <Container class="py-5 lg:p-5">
    <div class="mx-auto relative overflow-hidden rounded-2xl h-fit w-fit">
      <video
        width="845"
        height="475"
        autoplay
        controls
        loop
      >
        <source
          :src="`https://videos.melli.com/${route.query.video_name}`"
          type="video/mp4"
        >
      </video>
    </div>
  </Container>
</template>
