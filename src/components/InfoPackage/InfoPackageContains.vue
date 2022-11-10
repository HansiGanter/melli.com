<script setup lang="ts">
const benefits = ref([{ icon: 'i-heroicons:book-open', text: 'Melli-Informationsbroschüre' }, { icon: 'i-heroicons:list-bullet-20-solid', text: 'Checkliste “Passt Melli zu mir?”' }, { icon: 'i-carbon:currency-dollar', text: 'Abo- & Preisinformationen' }])
</script>

<template>
  <!-- <div class="bg-tertiary-100 px-6 py-12 grid gap-8">
    <h1 class="font-semibold text-4xl sm:text-5xl sm:text-center">
      Das ist alles im Paket
    </h1>
    <p class="text-lg sm:text-xl">
      Wir haben dir eine Mappe mit allerhand Informationsmaterialien über Melli und unser Team zusammengestellt. Viel Spaß beim Stöbern!
    </p>
    <div class="flex flex-wrap gap-3 sm:gap-4">
      <div class="flex gap-2 bg-[#B45309]/10 px-4 py-2 rounded-xl w-full sm:w-80">
        <div class="i-heroicons:book-open my-auto text-tertiary-500 h-12 w-12 shrink-0" />
        <span class="text-lg font-medium my-auto">Melli-Informationsbroschüre</span>
      </div>
      <div class="flex gap-2 bg-[#B45309]/10 px-4 py-2 rounded-xl w-full sm:w-80">
        <div class="i-heroicons:list-bullet-20-solid my-auto text-tertiary-500 h-12 w-12 shrink-0" />
        <span class="text-lg font-medium my-auto">Checkliste “Passt Melli zu mir?”</span>
      </div>
      <div class="flex gap-2 bg-[#B45309]/10 px-4 py-2 rounded-xl w-full sm:w-80">
        <div class="i-carbon:currency-dollar my-auto text-tertiary-500 h-12 w-12 shrink-0" />
        <span class="text-lg font-medium my-auto">Abo- & Preisinformationen</span>
      </div>
    </div>
  </div> -->

  <div class="grid gap-8 mx-auto items-center">
    <div class="grid gap-16 bg-amber-100 px-6 lg:px-16 pt-10 lg:pt-16 pb-16 lg:pb-96">
      <div class="grid gap-4 lg:gap-6">
        <div class="grid gap-6 lg:gap-10 text-center max-w-2xl mx-auto justify-items-center">
          <h1 class="text-gray-900 font-semibold text-4xl lg:text-5xl">
            Das ist alles im Paket
          </h1>
        </div>
        <div class="grid gap-14">
          <div class="w-full lg:w-2/3">
            <p class="w-full lg:w-3/4 font-normal text-xl">
              Wir haben dir eine Mappe mit allerhand Informationsmaterialien über Melli und unser Team zusammengestellt. Viel Spaß beim Stöbern!
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap lg:flex-nowrap  gap-3">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="text-gray-900 flex gap-2 px-4 py-2 rounded-xl w-full sm:w-70 bg-tertiary-800/10 lg:h-full  items-center"
        >
          <div :class="benefit.icon" class="i-carbon:currency-dollar my-auto text-tertiary-500 h-12 w-12 shrink-0" />
          <span class="text-lg font-medium my-auto">{{ benefit.text }}</span>
        </div>
      </div>
    </div>
    <div class="relative overflow-hidden lg:max-w-6xl lg:-mt-88 mx-auto">
      <img class="rounded-2xl mx-auto" src="https://assets.melli.com/images/stock/melli_mockup-print_flyer_businesscard-1024.webp" alt="Melli Magazin geöffnet auf Founder Seite">
    </div>
  </div>
</template>
