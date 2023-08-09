<script setup lang="ts">

const { t } = useI18n()

</script>

<template>
  <div class="flex flex-wrap md:flex-nowrap justify-between items-start self-stretch gap-4">
    <div class="flex items-start flex-col flex-1 gap-6">
      <h1 id="melli-features-heading" class="text-4xl lg:text-5xl font-semibold lg:font-medium text-white">
        <span class="text-amber-400 font-semibold text-start lg:leading-[3.875rem]">
          {{ t('test-features.heading') }}&nbsp;
        </span>
        <span class="text-white lg:leading-[3.875rem]">
          {{ t('test-features.heading-text') }}
        </span>
      </h1>

      <p class="text-white lg:max-w-9/10">
        Du hast weitere Fragen zu Melli? Lass uns telefonieren und wir erklären dir alle Besonderheiten der digitalen Begleiterin im Detail!
      </p>

      <CallOrPipedrive iconClass="color-primary-300" textClass="text-white" />
    </div>

    <div class="flex flex-col gap-6 items-center flex-1 mt-4">
      <!-- first elem -->
      <div
        class="flex flex-col items-start self-stretch gap-2.5 lg:gap-3 px-6 py-3.5 lg:py-6 rounded-[0.9375rem] bg-amber-300 shadow-md">
        <div class="flex self-stretch justify-center items-center gap-3">
          <div class="i-lucide:message-square w-12 h-12" />
          <span class="flex-1 text-gray-900 font-medium text-lg lg:text-2xl ">Einfache Bedienung per Sprachbefehl</span>
        </div>
        <p class="self-stretch">
          Die Bedienung von Melli ist so einfach wie ein nettes Gespräch.
          Melli fragt -
          der Nutzer antwortet mit “Ja” oder “Nein”. Kein lästiges Knöpfe-Drücken, keine Gefahr etwas falsch zu machen.
        </p>
      </div>

      <div class="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 w-full">
        <div class="flex gap-2 rounded-xl items-center px-4 py-4 md:py-2 bg-emerald-50 shadow-md md:ml-8">
          <div class="i-ph:rocket w-12 h-12 xl:w-24 xl:h-22 color-primary-600" />
          <div class="lg:text-lg">
            Geht aktiv auf den Nutzer zu
          </div>
        </div>
        <div class="flex gap-2 rounded-xl items-center px-4 py-4 md:py-2 bg-emerald-50 shadow-md md:mr-8">
          <div class="i-ph:heartbeat w-12 h-12 xl:w-24 xl:h-22 color-primary-600" />
          <div class="lg:text-lg">
            Professionell betreute Gruppen
          </div>
        </div>
        <div class="flex gap-2 rounded-xl items-center px-4 py-4 md:py-2 bg-emerald-50 shadow-md">
          <div class="i-ph:wifi-slash w-12 h-12 xl:w-24 xl:h-22 color-primary-600" />
          <div class="lg:text-lg">
            Funktioniert auch ohne WLAN
          </div>
        </div>
        <div class="flex gap-2 rounded-xl items-center px-4 py-4 md:py-2 bg-emerald-50 shadow-md">
          <div class="i-ph:users w-12 h-12 xl:w-24 xl:h-22 color-primary-600" />
          <div class="lg:text-lg">
            Sorgt für mehr soziale Kontakte
          </div>
        </div>
        <div
          class="md:col-span-2 md:max-w-1/2 md:mx-auto flex gap-2 rounded-xl items-center px-4 py-4 md:py-2 bg-emerald-50 shadow-md">
          <div class="i-ph:floppy-disk w-12 h-12 xl:w-24 xl:h-22 color-primary-600" />
          <div class="lg:text-lg">
            Höchste Datenschutz Standards
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
