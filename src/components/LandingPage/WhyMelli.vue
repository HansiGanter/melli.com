<script setup lang="ts">
import type { Ref } from 'vue'

const { t } = useI18n()

interface Feature {
  image: string
  title: string
  description: string
}

const features: Ref<Feature[]> = ref([
  {
    image: 'https://assets.melli.com/images/mockups/device-group-call.webp',
    title: t('why-melli.feature-1.title'),
    description: t('why-melli.feature-1.description'),
  },
  {
    image: 'https://assets.melli.com/images/mockups/device-sleeptime.webp',
    title: t('why-melli.feature-2.title'),
    description: t('why-melli.feature-2.description'),
  },
  {
    image: 'https://assets.melli.com/images/mockups/device-satisfaction.webp',
    title: t('why-melli.feature-3.title'),
    description: t('why-melli.feature-3.description'),
  },
])

const activeFeature = ref('')
const email = ref('')
const newsletterDialogOpen = ref(false)
const open = () => {
  // we have to ensure the query params are set before the hubspot script loads
  setTimeout(() => {
    newsletterDialogOpen.value = true
  }, 0)
}
</script>

<template>
  <div class="grid gap-16 lg:gap-32">
    <div class="grid gap-16 mx-auto items-center max-w-6xl -mt-28 px-5 md:px-0">
      <div class="mx-auto grid gap-14 md:grid-cols-2 md:max-w-none xl:grid-cols-3">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="flip-card bg-transparent w-80 min-w-full h-96 min-h-full grid place-items-stretch overflow-visible cursor-pointer"
          @click="activeFeature = feature.title === activeFeature ? '' : feature.title"
          @mouseenter="activeFeature = feature.title === activeFeature ? '' : feature.title"
        >
          <div
            class="flip-card-inner relative w-full h-full text-center overflow-visible"
            :class="{ flip: feature.title === activeFeature }"
          >
            <div class="flip-card-front absolute w-full h-full bg-white rounded-3xl overflow-visible">
              <div class="bg-white dark:bg-gray-800 flex flex-col gap-4 rounded-3xl drop-shadow-xl px-6 py-6 h-full overflow-visible">
                <div class="grow justify-center overflow-hidden">
                  <img class="object-contain w-full h-full" :src="feature.image">
                </div>
                <div class="flex flex-col h-fit mt-auto justify-end gap-3">
                  <div class="text-center">
                    <div class="grid gap-1">
                      <h1 class="text-gray-900 text-xl lg:text-2xl font-semibold lg:font-medium">
                        {{ feature.title }}
                      </h1>
                    </div>
                  </div>
                  <div class="flex items-center justify-center">
                    <button type="button" class="flex items-center gap-2 text-gray-900 text-center outline-none">
                      <span class="text-base font-normal">Mehr erfahren</span>
                      <div class="i-carbon:next-outline stroke-gray-900 w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flip-card-back absolute w-full h-full bg-white dark:bg-gray-800 grid gap-5 rounded-3xl drop-shadow-xl px-6 py-6 h-auto content-center"
            >
              <p class="text-gray-900 font-medium text-lg">
                {{ feature.description }}
              </p>
              <div class="flex items-center justify-center">
                <button
                  type="button"
                  class="flex items-center gap-2 text-gray-900 text-center outline-none px-8 py-2 cursor-pointer"
                >
                  <div class="i-carbon:previous-outline stroke-gray-900 w-6 h-6" />
                  <span class="text-base font-normal">zurück</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-6 gap-11 items-center py-10">
    <div class="w-44 h-44 rounded-full mx-auto overflow-hidden">
      <img src="https://assets.melli.com/images/team/matthias-weber-4-1024.webp" class="object-cover w-full h-full">
    </div>
    <div class="grid gap-5 lg:col-span-5 bg-contain bg-no-repeat bg-top lg:bg-center lg:py-20" style="background-image: url('https://assets.melli.com/shapes/bubble-bg.svg')">
      <h5 class="font-medium text-primary-900 text-xl lg:text-3xl lg:leading-10">
        “Melli ist eine sprachgesteuerte Begleiterin, speziell entwickelt für die Bedürfnisse älterer Menschen. Als gute Freundin ist sie den ganzen Tag über für ihre Nutzer da und tut alles dafür, ihnen jeden Tag ein Lächeln ins Gesicht zu zaubern.”
      </h5>
      <div class="text-gray-500 text-base">
        <span class="font-semibold">Dr. Matthias Weber</span>
        <p class="font-medium">
          Mit-Gründer von Melli & langjähriger Pflegeunternehmer der Ambulantis BSW GmbH
        </p>
      </div>
    </div>
  </div>
  <div class="grid gap-2 lg:w-5/12 lg:mx-auto">
    <span class="block text-lg lg:text-xl font-medium text-primary-800 text-left lg:text-center">{{ t('hero.test-user') }}</span>
    <FormKit
      id="landingpage-newsletter-form-open"
      class="flex items-stretch h-fit"
      type="form"
      :actions="false"
      :incomplete-message="false"
      @submit="open"
    >
      <div class="flex items-stretch h-fit">
        <FormKit
          v-model="email"
          type="email"
          name="email"
          placeholder="E-Mail-Adresse"
          outer-class="grow"
          wrapper-class="h-fill"
          validation="required|email"
          validation-visibility="submit"
          message-class="text-red-500 mt-1"
          inner-class="w-full h-fill border border-primary-400 rounded-l-lg overflow-hidden"
          input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
        />
        <FormKit
          type="submit"
          input-class="flex items-center w-fit gap-2 px-4 pb-3.5 pt-4 lg:px-5 lg:pb-2.5 lg:pt-3 bg-primary-400 rounded-r-lg text-white"
          wrapper-class="grow"
        >
          <span>{{ t('hero.get-started-button') }}</span>
          <div class="i-carbon:chevron-right" />
        </FormKit>
      </div>
    </FormKit>
  </div>
  <Modal :show="newsletterDialogOpen" @close="newsletterDialogOpen = false">
    <NewsletterDialog :email="email" />
  </Modal>
</template>

<style>
.flip-card {
  perspective: 1000px;
}
.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-back {
  transform: rotateY(180deg);
}
</style>
