<script setup lang="ts">
defineProps<{
  showQuestion: boolean
  question: string
  uid: string
}>()

const showOptions = ref(false)
</script>

<template>
  <TransitionRoot :show="showQuestion" class="w-fit" enter="duration-200" enter-from="scale-0" enter-to="scale-100"
    leave="duration-100" leave-from="scale-100" leave-to="scale-0" @after-enter="showOptions = true"
    @after-leave="showOptions = false">
    <div :id="uid" class="flex flex-col gap-2 transition">
      <img class="w-16 h-16 mr-auto"
        src="https://melli-assets.netlify.app/images/images/commercials/dialogue-profile-image-melli.webp">
      <div class="bg-white rounded-2xl w-fit max-w-70 sm:max-w-100 mr-auto py-2.5 px-4 text-base sm:text-xl shadow-lg">
        {{ question }}
      </div>
    </div>
  </TransitionRoot>
  <!-- First Question Options -->
  <TransitionRoot :show="showOptions" class="w-fit ml-auto" enter="duration-200 ease-out"
    enter-from="translate-y-full scale-50" enter-to="translate-y-0 scale-100" leave="duration-100" leave-from="scale-100"
    leave-to="scale-0">
    <div class="flex flex-col gap-2">
      <slot />
    </div>
  </TransitionRoot>
</template>
