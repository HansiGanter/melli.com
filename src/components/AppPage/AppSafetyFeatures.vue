<template>
  <div class="grid gap-9 sm:gap-12 max-w-140">
    <h2 class="text-white text-4xl sm:text-5xl font-semibold">
      Für das sichere Gefühl, dass es Oma und Opa gut geht.
    </h2>
    <p class="text-white text-lg font-normal">
      Die Melli-App gibt der Familie das sichere Gefühl, dass es Oma und Opa gut geht. Berechtigte Familienmitglieder
      können im Notfall eine Benachrichtigung direkt auf ihr Smartphone erhalten und haben die Möglichkeit, per Video auch
      von weitem nach dem Rechten zu sehen. So haben Angehörige das beruhigende Gefühl auch dann für für die Großeltern da
      sein zu können, wenn sie nicht in der Nähe wohnen.
    </p>
    <div class="flex flex-col gap-3 sm:flex-row">
      <div class="flex flex-col gap-3">
        <!-- Current Features -->
        <span class="rounded-full border-2 py-2 px-4 border-primary-200 text-primary-200 text-sm font-semibold w-fit">
          released
        </span>
        <Pill pilltext="Updates über Gesundheit & Wohlbefinden"
          modaltext="Melli erkundigt sich regelmäßig nach dem Wohlbefinden ihrer Nutzer. Ausgewählte Personen bekommen in der Melli-App bescheid, wenn es dem Nutzer mal nicht so gut gehen sollte."
          :bubbletype="2" bubble="text-primary-200" iconmodal="i-lucide:heart w-12 h-12 text-gray-900"
          iconpill="i-lucide:heart w-9 h-9 text-gray-900" pill="bg-primary-50/50 text-gray-900" />
        <Pill pilltext="Knock-In Anrufe"
          modaltext="In Ausnahmefällen können Notfallkontakte ohne eine vorherige Bestätigung des Nutzers einen Videoanruf starten."
          :bubbletype="2" bubble="text-primary-200" iconmodal="i-lucide:bell w-12 h-12 text-gray-900"
          iconpill="i-lucide:bell w-9 h-9 text-gray-900" pill="bg-primary-50/50 text-gray-900" />
      </div>
      <div class="flex flex-col gap-3">
        <!-- Features Coming Soon -->
        <span class="rounded-full border-2 py-2 px-4 border-amber-300 text-amber-300 text-sm font-semibold w-fit">
          bald verfügbar
        </span>
        <Pill pilltext="Notfallkontakte"
          modaltext="In der App kann hinterlegt werden, welche Personen im Falle eines Notfalls in Echtzeit von Melli benachrichtigt werden sollen. Die Benachrichtigung kommt direkt auf das Smartphone der Person."
          :bubbletype="1" bubble="text-amber-400" iconmodal="i-ic:outline-emergency w-12 h-12 text-gray-900"
          iconpill="i-ic:outline-emergency w-9 h-9 text-gray-900" pill="bg-amber-50/50 text-gray-900" />
      </div>
    </div>
  </div>
</template>
