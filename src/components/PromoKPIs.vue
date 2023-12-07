<template>
  <div class="grid md:grid-cols-2 gap-8 md:gap-2 justify-between">
    <div>
      <div class="flex flex-col gap-6 text-white">
        <h2 class="text-4xl lg:text-5xl font-semibold">
          Dast macht Melli besonders.
        </h2>
        <p class="text-lg max-w-130">
          Du möchtest noch mehr über Melli wissen? Lass und telefonieren! Wir stehen dir für alle Fragen rund um die
          digitale Begleiterin zur Verfügung!
        </p>
        <CallOrPipedrive></CallOrPipedrive>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 md:gap-6 justify-center items-center">
      <div
        class="flex gap-2.5 items-center bg-primary-50 rounded-xl xl:h-24 py-4.5 px-6 w-full lg:w-fit xl:max-w-60 text-xl">
        <div class="i-ph:rocket shrink-0 w-12 h-12 text-primary-600" />
        <div>Geht aktiv auf den Nutzer zu</div>
      </div>
      <div
        class="flex gap-2.5 items-center bg-primary-50 rounded-xl xl:h-24 py-4.5 px-6 w-full lg:w-fit xl:max-w-68 text-xl">
        <div class="i-ph:heartbeat shrink-0 w-12 h-12 text-primary-600" />
        <div>Professionell betreute Gruppen</div>
      </div>
      <div
        class="flex gap-2.5 items-center bg-primary-50 rounded-xl xl:h-24 py-4.5 px-6 w-full lg:w-fit xl:max-w-66 text-xl">
        <div class="i-ph:wifi-slash shrink-0 w-12 h-12 text-primary-600" />
        <div>Funktioniert auch ohne WLAN</div>
      </div>
      <div
        class="flex gap-2.5 items-center bg-primary-50 rounded-xl xl:h-24 py-4.5 px-6 w-full lg:w-fit xl:max-w-66 text-xl">
        <div class="i-ph:users shrink-0 w-12 h-12 text-primary-600" />
        <div>Sorgt für mehr soziale Kontakte</div>
      </div>
      <div
        class="flex gap-2.5 items-center bg-primary-50 rounded-xl xl:h-24 py-4.5 px-6 w-full lg:w-fit xl:max-w-76 text-xl">
        <div class="i-ph:floppy-disk shrink-0 w-12 h-12 text-primary-600" />
        <div> Höchste Datenschutz Standards
        </div>
      </div>
    </div>
  </div>
</template>
