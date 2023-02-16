<script setup lang="ts">
const features = [
  { text: 'Kommunikation', img: 'https://assets.melli.com/images/mockups/03_smartphone/melli_mockups-smartphone_communication_front-2phones-bubble-2048.webp' },
  { text: 'Sicherheit', img: 'https://assets.melli.com/images/mockups/03_smartphone/melli_mockups-smartphone_settings_front-2phones-bubble-2048.webp' },
  { text: 'Organisation', img: 'https://assets.melli.com/images/mockups/03_smartphone/melli_mockups-smartphone_organisation_front-2phones-bubble-2048.webp' },
  { text: 'Einstellungen', img: 'https://assets.melli.com/images/mockups/03_smartphone/melli_mockups-smartphone_safety_front-2phones-bubble-2048.webp' },
]

const selected = ref(features[0])
</script>

<template>
  <div class="grid gap-9 lg:grid-cols-2 lg:gap-18">
    <div class="flex flex-col gap-9 my-auto">
      <h1 class="text-4xl sm:text-5xl font-semibold lg:mx-auto">
        Im Überblick: Das kann die Melli-App
      </h1>
      <div class="flex flex-wrap gap-3 lg:mx-auto">
        <RadioGroup v-model="selected">
          <div class="flex flex-wrap gap-3">
            <RadioGroupOption v-for="(feature, index) in features" :key="index" v-slot="{ checked }" :value="feature">
              <div
                :class="checked ? 'bg-primary-200 border-none' : 'bg-white border-black'"
                class="rounded-full border-2 w-fit px-4 py-2 h-12 flex cursor-pointer"
              >
                <RadioGroupLabel class="my-auto font-semibold text-gray-900 cursor-pointer">
                  {{ feature.text }}
                </RadioGroupLabel>
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
      </div>
    </div>
    <div id="communication-mockups" class="overflow-hidden -ml-5 sm:ml-0">
      <img
        id="communication-mockup"
        :src="selected.img"
        class="min-w-140vw -ml-20vw -mr-20vw sm:min-w-0 sm:ml-0 sm:mr-0"
      >
    </div>
  </div>
</template>

<!-- Fix for Overlapping Mockups on mobile view -->
<style>
#communication-mockups {
  width: calc(100% + 40px);
}

@media (min-width: 640px) {
  #communication-mockups {
    width: 100%;
  }
}
</style>
