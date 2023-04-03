<script setup lang="ts">
const currentFeatures = [
  'Sprachsteuerung',
  'Trinkerinnerungen',
  'Medikamentenerinnerungen',
  'Aktuelle Nachrichten',
  'Rätsel & Denkspiele',
  'Gruppenaktivitäten mit anderen Melli-Nutzern',
  'Videotelefonie',
  'Audiotelefonie',
  'Melli-App',
  'Melli reagiert auf Befehle',
  'Fantasiereisen',
  'Bewegungsübungen',
  'Musik',
  'Witze',
  'Zitat des Tages',
  'Videos',
  'Wetteransage',
  'Horoskop',
  'Melli-Konversationen',
  'Schlaf- & Aufwachroutinen',
]
const nextFeatures = [
  'Check-Ins für Gesundheit & Wohlbefinden',
  'Textnachrichten senden & empfangen',
  'Fotos/Videos senden & empfangen',
  'Podcasts',
  'Schlafverbesserung',
  'Achtsamkeitsübungen',
  'Familien-Newsfeed',
  'Termine einstellen & erinnern',
]

const showCurrent = ref(5)
const showNext = ref(4)
</script>

<template>
  <!-- TODO mehr erfahren bis SM -->
  <div class="flex flex-col gap-15">
    <div class="flex flex-col gap-8 items-center">
      <h1 class="text-4xl sm:text-5xl font-semibold max-w-160 text-center">
        Werde Teil der Melli-Journey!
      </h1>
      <p class="text-xl sm:text-2xl max-w-200 text-center">
        Melli befindet sich momentan in der Entwicklung, was bedeutet, dass sie noch nicht alle Funktionen einwandfrei beherrscht. Das ist der Grund, warum wir auf deine Hilfe und dein Feedback angewiesen sind. Damit du weißt, welche Funktionen du erwarten kannst und welche noch in der Entwicklung stecken, findest du hier eine Auflistung:
      </p>
    </div>
    <div class="grid lg:grid-cols-2 gap-12">
      <div class="flex flex-col gap-8">
        <h2 class="text-3xl text-center font-semibold">
          Das kann Melli schon alles
        </h2>
        <div class="flex flex-wrap gap-3 justify-center items-center">
          <div v-for="index in showCurrent" :key="index" class="w-fit rounded-lg bg-primary-900/20 px-6 py-2.5 font-semibold text-center">
            {{ currentFeatures[index] }}
          </div>
        </div>
        <button class="mx-auto" :class="showCurrent === currentFeatures.length - 1 ? 'hidden' : ''" @click="showCurrent = currentFeatures.length - 1">
          <div class="flex gap-2 font-medium">
            <div class="i-lucide:plus w-6 h-6 shrink-0" />mehr ansehen
          </div>
        </button>
      </div>
      <div class="flex flex-col gap-8">
        <h2 class="text-3xl text-center font-semibold">
          Diese Funktionen kommen bald
        </h2>
        <div class="flex flex-wrap gap-3 justify-center items-center">
          <div v-for="index in showNext" :key="index" class="w-fit rounded-lg bg-primary-900/20 px-6 py-2.5 font-semibold text-center">
            {{ nextFeatures[index] }}
          </div>
        </div>
        <button class="mx-auto" :class="showNext === nextFeatures.length - 1 ? 'hidden' : ''" @click="showNext = nextFeatures.length - 1">
          <div class="flex gap-2 font-medium">
            <div class="i-lucide:plus w-6 h-6 shrink-0" />mehr ansehen
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
