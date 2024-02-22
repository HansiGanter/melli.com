<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager';

type Feature = { iconClass: string, iconModal: string, bubbleType: "0" | "1" | "2" | "3", pilltext: string, modaltext: string; };

const features: Feature[] = [
  {
    iconClass: 'i-lucide:video w-9 h-9 text-amber-400',
    iconModal: 'i-lucide:video w-9 h-9 text-gray-900',
    bubbleType: "3",
    pilltext: 'Einfaches Videotelefonieren',
    modaltext: 'Nutzer können über Melli Audio- und Videotelefonate mit eingespeicherten Kontakten führen. Dazu müssen sie Melli nur per Sprachbefehl dazu auffordern, die gewünschte Person anzurufen bzw. einen eingehenden Anruf anzunehmen.',
  },
  {
    iconClass: 'i-lucide:image w-9 h-9 text-amber-400',
    iconModal: 'i-lucide:image w-9 h-9 text-gray-900',
    bubbleType: "1",
    pilltext: 'Bilder & Videos teilen',
    modaltext: 'Mit der Melli-App können Bilder und Videos auf die Melli bei Oma zuhause gesendet werden. So können Oma & Opa live beim Familienurlaub oder den ersten Schritten des Enkels dabei sein.',
  },
  {
    iconClass: 'i-lucide:mail w-9 h-9 text-amber-400',
    iconModal: 'i-lucide:mail w-9 h-9 text-gray-900',
    bubbleType: "0",
    pilltext: 'Sprach- und Textnachrichten',
    modaltext: 'Oma & Opa kommen mit Whatsapp & Co. nicht klar? Mit Melli können sie nun auch ganz einfach Text- & Sprachnachrichten empfangen. Melli liest ihnen die Nachricht einfach vor.',
  },
];

const featureToShowDetails = ref<(typeof features)[number]>();

const videoElement = ref();
const startedVideo = ref(false);

const startVideo = (event: Event) => {
  if (!startedVideo.value) {
    fireVideoEvent('gemeinschaft');
    startedVideo.value = true;
    videoElement.value.play();
    event.preventDefault();
  }
};
</script>

<template>
  <Modal :show="!!featureToShowDetails" @close="featureToShowDetails = undefined">
    <Container v-if="featureToShowDetails" class="py-8 max-w-3xl shadow-md">
      <BubbleIcon :bubble-type="featureToShowDetails.bubbleType" bubble="text-amber-400"
        :icon="featureToShowDetails.iconModal" />
      <p class="font-semibold pt-4 py-2 text-xl">
        {{ featureToShowDetails.pilltext }}
      </p>
      <p class="text-xl">
        {{ featureToShowDetails.modaltext }}
      </p>
    </Container>
  </Modal>

  <h1 class="text-3xl sm:text-5xl font-semibold max-w-160 sm:text-center sm:mx-auto my-12 sm:my-18">
    Videotelefonie, Familienchat und Co. leicht gemacht
  </h1>
  <div class="flex flex-col lg:flex-row gap-12 sm:gap-24 bg-primary-100 px-6 sm:px-18 pt-10 sm:pt-18 pb-10 sm:pb-36">
    <div class="flex flex-col gap-12 sm:gap-6">
      <div class="flex flex-col gap-6">
        <p class="text-lg">
          Melli ermöglicht ihren Nutzern eine einfache Verbindung mit ihren Liebsten. So können sie mehr Familienleben
          teilhaben auch wenn die Kinder und Enkel nicht nebenan wohnen.
        </p>
        <InfopaketBestellen @click="$emit('openNewsletterModal')"></InfopaketBestellen>
      </div>
      <div class="flex flex-wrap gap-3 sm:gap-6">
        <div v-for="feature in features" :key="feature.pilltext"
          class="flex flex-col gap-1 bg-primary-700 px-6 py-4 w-full sm:w-68 rounded-xl cursor-pointer"
          @click="featureToShowDetails = feature">
          <BubbleIcon :bubble-type="feature.bubbleType" bubble="text-primary-600" :icon="feature.iconClass" />
          <p class="text-white font-medium">{{ feature.pilltext }}</p>
          <p class="flex items-center gap-1.5 text-white text-xs mt-5">
          <div class="i-lucide:arrow-right"></div>mehr erfahren
          </p>
        </div>
      </div>
    </div>
    <img class="w-full max-w-100 object-contain mx-auto"
      src="https://melli-assets.netlify.app/images/mockups/03_smartphone/melli_mockups-smartphone_communication_two-phones-1536.webp">
  </div>
  <div class="mt-12 md:-mt-20 md:w-7/10 mx-auto rounded-3xl overflow-hidden relative"
    :class="!startedVideo ? 'cursor-pointer' : ''" @click="startVideo">
    <video ref="videoElement" playsinline :controls="startedVideo" @ended="startedVideo = false"
      poster="https://melli-assets.netlify.app/images/backgrounds/website-video-thumbnail-1-1024.webp">
      <source src="https://videos.melli.com/communication.webm" type="video/webm">
      <source src="https://videos.melli.com/communication.mp4" type="video/mp4">
    </video>
    <div v-if="!startedVideo"
      class="i-carbon:play-outline text-tertiary-200 text-6xl lg:text-8xl absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
  </div>
</template>
