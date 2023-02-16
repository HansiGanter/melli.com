<template>
  <div class="flex flex-col gap-12 py-12 px-6 sm:px-16 rounded-3xl bg-primary-100">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-3 sm:items-center">
        <BubbleIcon :bubble-type="3" bubble="text-primary-200" icon="i-lucide:gift w-12 h-12 sm:w-24 sm:h-24 text-#2F363D" />
        <h3 class="text-3xl font-semibold sm:text-center text-gray-900">
          30 Tage kostenlos ausprobieren!
        </h3>
      </div>
      <p class="text-lg font-normal sm:text-center max-w-240 mx-auto">
        Nutze jetzt unseren 30 tägigen Testzeitraum, um Melli kostenlos kennenzulernen und auszuprobieren!
      </p>
    </div>
    <div class="flex flex-col md:flex-row md:justify-center gap-3">
      <RouterLink to="/shop" class="rounded-lg bg-primary-400 text-white font-medium py-2.5 px-4 flex w-full sm:w-fit gap-2 m-auto md:m-0 justify-center">
        <div class="i-lucide:gift w-6 h-6" /><span>30 Tage kostenlos testen</span>
      </RouterLink>
      <a href="tel:030555703440" class="rounded-lg border-gray-900 font-medium border-2 text-gray-900 py-2.5 px-4 flex w-full sm:w-fit gap-2 m-auto md:m-0 justify-center">
        <div class="i-lucide:phone-call w-6 h-6" /><span>Kostenlose Beratung</span>
      </a>
    </div>
  </div>
</template>
