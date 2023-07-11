<script setup lang="ts">
function scrollToChat() {
  document.getElementById('shopchat')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
  <!-- flex-reverse because of BubbleImage -->
  <div class="flex flex-col-reverse gap-4">
    <div class="grid md:grid-cols-2 gap-12">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-6">
          <BubbleIcon class="mr-auto ml-auto md:ml-0" :bubble-type="0" bubble="text-primary-200"
            icon="i-lucide:message-circle w-12 h-12 text-gray-900" />
          <h1 class="text-4xl sm:text-5xl font-semibold text-center sm:text-left">
            Konfiguriere mit Melli dein individuelles Abo.
          </h1>
        </div>
        <button
          class="rounded-lg bg-primary-400 text-white py-2.5 px-4 flex w-fit justify-center items-center mx-auto sm:mx-none"
          @click="scrollToChat()">
          Konfiguration jetzt starten
        </button>
        <p class="text-lg leading-7 font-normal text-center sm:text-left">
          Wähle eine Abo-Option um deinen kostenlosen Test zu starten. Dir werden für die ersten 30 Tage keinerlei Kosten
          berechnet. Nach Ablauf der 30 Tage beginnt dein Abo, zu den von dir ausgewählten Konditionen.
        </p>
      </div>
      <BubbleImage class="mx-auto my-auto" bubble1-color="fill-primary-50" bubble2-color="fill-primary-100"
        svgclass="scale-120">
        <img class="relative" src="https://assets.melli.com/images/images/mockups/01_free/mockup-device-intro-left.webp"
          srcset="https://assets.melli.com/images/images/mockups/01_free/mockup-device-intro-left.webp 512w,
                  https://assets.melli.com/images/images/mockups/01_free/mockup-device-intro-left-768.webp 768w,
                  https://assets.melli.com/images/images/mockups/01_free/mockup-device-intro-left-1024.webp 1024w"
          alt="Melli-Gerät Mockup">
      </BubbleImage>
    </div>
  </div>
</template>
