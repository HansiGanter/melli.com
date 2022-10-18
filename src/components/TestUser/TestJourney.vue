<script setup lang="ts">
const { t } = useI18n()
const qualities = ref(['Sprachsteuerung', 'Lieblingsmusik abspielen', 'Aktuelle Nachrichten', 'Medikamentenerinnerungen', 'Trinkerinnerungen', 'Rätsel & Denkspiele', 'Bewegungsübungen'])
const comingSoon = ref(['Gesundheits-Check-Ins', 'Podcasts', 'Gruppenaktivitäten mit anderen Melli-Nutzern', 'Achtsamkeitsübungen', 'Melli-App für Angehörige', 'Videotelefonie', 'Melli reagiert auf Befehle', 'Terminerinnerungen', 'Fotos/Videos senden & empfangen', 'Textnachrichten senden & empfangen'])
</script>

<template>
  <div class="grid gap-8 lg:gap-16 mx-auto items-center">
    <div class="grid gap-4 lg:gap-6 text-center text-gray-900 mx-auto justify-items-center">
      <h1 class="font-semibold text-4xl lg:text-5xl">
        {{ t('test-journey-section.heading') }}
      </h1>
      <span class="font-normal text-lg lg:text-xl">{{ t('test-journey-section.text') }}</span>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="text-gray-900 grid content-start gap-8 py-6">
        <h4 class="font-semibold text-2xl lg:text-3xl text-center">
          Das kann Melli schon alles
        </h4>
        <div class="flex flex-wrap justify-center gap-3">
          <div v-for="quality in qualities" :key="quality" class="bg-tertiary-600/25 py-3.5 px-6 text-center w-fit font-semibold text-base lg:text-lg rounded-[10px]">
            {{ quality }}
          </div>
        </div>
      </div>
      <div class="grid gap-8 py-6">
        <h4 class="text-gray-900 font-semibold text-2xl lg:text-3xl text-center">
          Diese Funktionen kommen bald hinzu
        </h4>
        <div class="flex flex-wrap justify-center gap-3">
          <div v-for="item in comingSoon" :key="item" class="bg-tertiary-600/25 py-3.5 px-6 text-center w-fit font-semibold text-base lg:text-lg rounded-[10px]">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
