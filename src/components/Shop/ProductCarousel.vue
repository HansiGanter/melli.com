<script setup lang="ts">

</script>

<template>
  <div class="relative bg-gradient-to-t from-primary-200 to-secondary-200 lg:min-h-3xl min-h-xs w-full">
    <div class="absolute bottom-2 inset-x-0">
      <div class="flex justify-center items-center gap-4 mx-auto">
        <div
          v-for="i in 4"
          :key="i"
          class="p-1.5 w-fit rounded-full"
          :class="i === 1 ? 'bg-gray-500' : 'bg-gray-300'"
        />
      </div>
    </div>
  </div>
</template>
