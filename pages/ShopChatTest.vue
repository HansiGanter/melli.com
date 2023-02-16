<script setup lang="ts">
const sim = ref('')
const plan = ref('')
const hardware = ref('')
</script>

<template>
  <div class="w-full border-3 border-black grid gap-3 p-3">
    <Transition name="slide-fade">
      <p class="max-w-60 p-2 bg-primary-200 w-fit">
        Hast du Internet?
      </p>
    </Transition>
    <Transition name="slide-fade">
      <div class="flex flex-wrap gap-2 justify-end">
        <button class="w-fit max-w-60 text-left p-2 bg-yellow-200 hover:border-2 border-black" :class="sim === 'no' ? 'hidden' : ''" @click="sim = 'yes'">
          Ja, ich habe WLAN zuhause
        </button>
        <button class="w-fit max-w-60 text-left p-2 bg-yellow-200 hover:border-2 border-black" :class="sim === 'yes' ? 'hidden' : ''" @click="sim = 'no'">
          Nein, ich möchte Melli mit SIM-Karte bestellen
        </button>
      </div>
    </Transition>
    <Transition name="slide-fade">
      <p v-show="sim" class="max-w-60 p-2 bg-primary-200 w-fit">
        Wie möchtest du dein Abo zahlen?
      </p>
    </Transition>
    <Transition name="slide-fade">
      <div v-show="sim" class="flex flex-wrap gap-2 justify-end">
        <button class="w-fit max-w-60 text-left p-2 bg-yellow-200 hover:border-2 border-black" :class="plan === 'yearly' ? 'hidden' : ''" @click="plan = 'monthly'">
          Monatlich für 14,90€/Monat (178,80€/Jahr)
        </button>
        <button class="w-fit max-w-60 text-left p-2 bg-yellow-200 hover:border-2 border-black" :class="plan === 'monthly' ? 'hidden' : ''" @click="plan = 'yearly'">
          Jährlich für 9,90€/Monat (118,80€/Jahr)
        </button>
      </div>
    </Transition>
    <Transition name="slide-fade">
      <p v-show="plan" class="max-w-60 p-2 bg-primary-200 w-fit">
        Wie möchtest du deine HW finanzieren?
      </p>
    </Transition>
    <Transition name="slide-fade">
      <div v-show="plan" class="flex flex-wrap gap-2 justify-end">
        <button class="w-fit max-w-60 text-left p-2 bg-yellow-200 hover:border-2 border-black" :class="hardware === 'installments' ? 'hidden' : ''" @click="hardware = 'onetime'">
          Einmalzahlung 240€
        </button>
        <button class="w-fit max-w-60 text-left p-2 bg-yellow-200 hover:border-2 border-black" :class="hardware === 'onetime' ? 'hidden' : ''" @click="hardware = 'installments'">
          Ratenzahlung 20€/Monat für 1 Jahr
        </button>
      </div>
    </Transition>
  </div>
  <div class="w-fit mx-auto">
    <button class="border-2 border-black my-3 p-2" @click="sim = plan = hardware = ''">
      reset
    </button>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-enter-from {
  transform: translateX(20px);
}
</style>
