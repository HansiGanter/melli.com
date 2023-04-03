<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { fireDipaFormOpenEvent, fireVideoEvent } from '~/google-tag-manager';
const greaterLg = useBreakpoints(breakpointsTailwind).greater('lg')

const commercialVideo = ref<HTMLElement | null>(null)
const showForm = ref(false)

const { isFullscreen } = useFullscreen(commercialVideo)

const isOpen = ref(false)
const activeVideo = ref('')

function closeModal() {
  isOpen.value = false
  activeVideo.value = ''
}
function openModal(video: string) {
  activeVideo.value = video
  isOpen.value = true
  fireVideoEvent(video)
}

function openForm(){
  showForm.value=true
  fireDipaFormOpenEvent()
}
</script>

<template>
  <div class="flex flex-col gap-30">
    <div class="flex flex-col gap-7.5 sm:items-center">
      <BubbleIcon :bubble-type="2" icon="i-lucide:heart text-gray-900 w-16 h-16" bubble="text-primary-200 " />
      <h1 class="text-4xl sm:text-5xl font-semibold sm:text-center max-w-160">
        <span class="text-primary-400">Mellis Mission:</span><span> Jeden Tag zu den guten zählen lassen!</span>
      </h1>
      <picture>
        <source media="(max-width: 639px)" srcset="https://assets.melli.com/images/images/stock/image-stock-85337306-2by3.webp">
        <source media="(min-width: 640px)" srcset="https://assets.melli.com/images/images/stock/image-stock-85337306-5by3-1536.webp">
        <img class="rounded-3xl w-full max-w-100 sm:max-w-none mx-auto" src="https://assets.melli.com/images/images/stock/image-stock-85337306-5by3-1536.webp">
      </picture>
    </div>
    <div class="flex flex-col lg:flex-row gap-6 sm:gap-12">
      <div class="flex flex-col gap-6 lg:gap-12 lg:w-45%">
        <h3 class="text-3xl sm:text-4xl font-semibold sm:text-center lg:text-left max-w-160 mx-auto">
          Lass Oma & Opa wieder mehr an eurem Leben teilhaben
        </h3>
        <p class="leading-7 text-lg">
          Melli sorgt dafür, dass sich Oma und Opa einfacher mit der ganzen Familie verbinden und mehr am Alltag ihrer Liebsten teilhaben können. Egal ob sie im Nachbarort wohnen, oder Urlaub am anderen Ende der Welt machen - mit der Melli-App für Familienangehörige sind sie auf Knopfdruck verbunden.
        </p>
        <div class="flex flex-wrap gap-3">
          <button class="rounded-lg bg-primary-400 text-white py-2.5 px-4 flex items-center w-fit gap-2" @click="openForm()">
            <div class="i-carbon:user-favorite-alt-filled w-6 h-6" /><span>Werde Melli-Tester</span>
          </button>
          <button class="rounded-lg py-2.5 px-4 flex items-center w-fit gap-2 border-2 border-gray-900" @click="openModal('https://videos.melli.com/communication.webm')">
            <div class="i-lucide:play-circle w-6 h-6" /><span>Video ansehen</span>
          </button>
        </div>
      </div>
      <div class="md:w-55% mx-auto">
        <img class="rounded-3xl object-contain" src="https://assets.melli.com/images/images/mockups/01_free/mockup-device-phone-video-call-relatives-front-1024.webp">
      </div>
    </div>
    <div class="flex flex-col lg:flex-row gap-6 sm:gap-12">
      <div class="flex flex-col gap-6 lg:gap-12 lg:w-45% order-1 lg:order-2">
        <h3 class="text-3xl sm:text-4xl font-semibold sm:text-center lg:text-left max-w-160 mx-auto">
          Mehr Kontakt zu anderen Senioren.
        </h3>
        <p class="leading-7 text-lg">
          Melli sorgt dafür, dass sich Oma und Opa einfacher mit der ganzen Familie verbinden und mehr am Alltag ihrer Liebsten teilhaben können. Egal ob sie im Nachbarort wohnen, oder Urlaub am anderen Ende der Welt machen.
        </p>
        <div class="flex flex-wrap gap-3">
          <button class="rounded-lg bg-primary-400 text-white py-2.5 px-4 flex items-center w-fit gap-2" @click="openForm()">
            <div class="i-carbon:user-favorite-alt-filled w-6 h-6" /><span>Werde Melli-Tester</span>
          </button>
          <button class="rounded-lg py-2.5 px-4 flex items-center w-fit gap-2 border-2 border-gray-900" @click="openModal('https://videos.melli.com/soziale-kontakte.webm')">
            <div class="i-lucide:play-circle w-6 h-6" /><span>Video ansehen</span>
          </button>
        </div>
      </div>
      <div class="md:w-55% mx-auto order-2 lg:order-1">
        <img class="rounded-3xl object-contain" src="https://assets.melli.com/images/images/commercials/melli-assets-image-commercial-group-1-5by3-1024.webp">
      </div>
    </div>
    <div class="flex flex-col lg:flex-row gap-6 sm:gap-12">
      <div class="flex flex-col gap-6 lg:gap-12 lg:w-45%">
        <h3 class="text-3xl sm:text-4xl font-semibold sm:text-center lg:text-left max-w-160 mx-auto">
          Für das gute Gefühl, dass immer jemand bei Oma & Opa ist.
        </h3>
        <p class="leading-7 text-lg">
          Opa wohnt allein zu Hause und du machst dir ständig Sorgen ob es ihm gut geht? Mit Melli hast du jemanden der rund um die Uhr für deine Eltern oder Großeltern da ist.
        </p>
        <div class="flex flex-wrap gap-3">
          <button class="rounded-lg bg-primary-400 text-white py-2.5 px-4 flex items-center w-fit gap-2" @click="openForm()">
            <div class="i-carbon:user-favorite-alt-filled w-6 h-6" /><span>Werde Melli-Tester</span>
          </button>
          <button class="rounded-lg py-2.5 px-4 flex items-center w-fit gap-2 border-2 border-gray-900" @click="openModal('https://videos.melli.com/fuersorge.webm')">
            <div class="i-lucide:play-circle w-6 h-6" /><span>Video ansehen</span>
          </button>
        </div>
      </div>
      <div class="md:w-55% mx-auto">
        <img class="rounded-3xl object-contain" src="https://assets.melli.com/images/images/mockups/01_free/mockup-device-phone-sentiment-left-1024.webp">
      </div>
    </div>
    <div class="grid lg:grid-cols-2 gap-6 sm:gap-12">
      <div class="flex flex-col gap-6">
        <h3 class="text-3xl sm:text-4xl font-semibold sm:text-center lg:text-left max-w-160 mx-auto">
          Technik so unkompliziert wie ein nettes Gespräch.
        </h3>
        <button v-if="greaterLg" class="rounded-lg bg-primary-400 text-white py-2.5 px-4 flex items-center w-fit gap-2" @click="openForm()">
          <div class="i-carbon:user-favorite-alt-filled w-6 h-6" /><span>Werde Melli-Tester</span>
        </button>
      </div>
      <div class="flex flex-col gap-6 lg:gap-12">
        <p class="leading-7 text-lg">
          Oma hat schon Probleme den Fernseher zu bedienen geschweige denn einen Videoanruf zu starten? Melli überwindet die Barriere zwischen Technik und älteren Menschen, indem sie einfach mit ihnen spricht.
        </p>
        <button v-if="!greaterLg" class="rounded-lg bg-primary-400 text-white py-2.5 px-4 flex items-center w-fit gap-2" @click="openForm()">
          <div class="i-carbon:user-favorite-alt-filled w-6 h-6" /><span>Werde Melli-Tester</span>
        </button>
      </div>
    </div>
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center py-4 text-center" @click="closeModal">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <video
              id="commercialVideo"
              ref="commercialVideo"
              :class=" isFullscreen ? 'lg:object-contain' : 'object-cover'"
              class="lg:object-cover w-full h-full"
              autoplay
              controls
              :loop="!isFullscreen"
            >
              <source :src="activeVideo" type="video/mp4">
            </video>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <Modal :show="showForm" @close="showForm = false">
    <DipaTestUserForm />
  </Modal>
</template>
