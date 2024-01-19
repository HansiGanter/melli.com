<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';
import { fireBuyEvent } from '~/google-tag-manager';

const sliderImages = [
  "https://assets.melli.com/images/mockups/04_levnovo_tabm10_3rdGen/mockup-device-free-front-with-stand_christmas-1536.webp",
  "https://assets.melli.com/images/mockups/04_levnovo_tabm10_3rdGen/mockup-device-free-front-with-stand-intro-1536.webp",
  "https://assets.melli.com/images/mockups/04_levnovo_tabm10_3rdGen/mockup-device-free_front_with-stand_video-call_and_mobile_callscreen-1536.webp",
  "https://assets.melli.com/images/mockups/04_levnovo_tabm10_3rdGen/mockup-device-free_front_with-stand_movement-exercise-1536.webp",
  "https://assets.melli.com/images/mockups/04_levnovo_tabm10_3rdGen/mockup-device-free_front_with-stand_med-reminder_and_mobile_medscreen-1536.webp",
  "https://assets.melli.com/images/mockups/04_levnovo_tabm10_3rdGen/mockup-device-free_front_with-stand_scheduler-1536.webp",
  "https://assets.melli.com/images/mockups/03_smartphone/mockup-mobile_interessts_and_chat_screen-1536.webp",
];
const benefits = [
  "30 Tage kostenlos testen",
  "Telefonische Unterstützung bei allen technischen Fragen",
  "Flexible Abos / monatlich kündbar",
  "Hilfe bei der Ersteinrichtung",
  "Kostenloser Rückversand*",
  "Beliebig viele Melli-App Nutzer (Familienmitglieder)"
];

const greaterLg = useBreakpoints(breakpointsTailwind).greater('lg');

const wifiSetting = ref('wifi');

function submitBuy() {
  const currentUrl = window.location.href;
  let paymentlink = "";
  if (wifiSetting.value === 'wifi') {
    paymentlink = process.env.NODE_ENV === 'development' ? 'https://buy.stripe.com/test_fZe7ti7KDaA7dJC6oJ?' : 'https://buy.stripe.com/5kA5kF8TigNF2v68wK?';
  }
  else if (wifiSetting.value === 'sim') {
    paymentlink = process.env.NODE_ENV === 'development' ? 'https://buy.stripe.com/test_fZe7ti7KDaA7dJC6oJ?' : 'https://buy.stripe.com/dR64gB2uU2WPc5G6oB?';
  }
  window.open(paymentlink + currentUrl.split('?')[1], '_blank');
  fireBuyEvent();
}
</script>
<template>
  <Container class="my-24 sm:mt-24 sm:mb-48">
    <div class="flex flex-col lg:flex-row gap-12 items-center">
      <h1 v-if="!greaterLg" class="font-semibold text-4xl sm:text-5xl text-center lg:text-left"> Teste Melli 30 Tage
        kostenlos</h1>
      <Carousel arrow-button-size="small" class="lg:w-65% max-w-200">
        <img v-for="sliderImage in sliderImages" :src="sliderImage" class="snap-center">
      </Carousel>
      <div class="flex flex-col gap-12 w-full max-w-200 lg:w-35%">
        <h1 v-if="greaterLg" class="font-semibold text-4xl sm:text-5xl text-center lg:text-left"> Teste Melli 30 Tage
          kostenlos</h1>
        <div class="flex flex-col gap-6 text-gray-700">
          <hr class="border-gray-700">
          <div class="flex-col gap-1">
            <fieldset class="flex flex-col gap-1">
              <p class="font-semibold">WLAN Anschluss vorhanden?</p>
              <div class="flex gap-1">
                <input type="radio" id="wifi_input" name="wifi" value="wifi" checked v-model="wifiSetting" />
                <label for="wifi_input">Ja</label>
              </div>
              <div class="flex gap-1">
                <input type="radio" id="sim_input" name="wifi" value="sim" v-model="wifiSetting" />
                <label for="sim_input">Nein <span class="text-gray-500">+7€ SIM
                    Karte</span></label>
              </div>
            </fieldset>
          </div>
          <hr class="border-gray-700">
          <div class="flex justify-between">
            <ul class="text-sm">
              <li class="flex gap-1 items-center my-1">
                <div class="i-ph:check-bold w-4.5 h-4.5 text-primary-600"></div>Melli-Abo
              </li>
              <li class="flex gap-1 items-center my-1">
                <div class="i-ph:check-bold w-4.5 h-4.5 text-primary-600"></div>Melli-Tablet
              </li>
              <li class="flex gap-1 items-center my-1">
                <div class="i-ph:check-bold w-4.5 h-4.5 text-primary-600"></div>Melli-App für Familie & Freunde
              </li>
              <li class="flex gap-1 items-center my-1">
                <div class="i-ph:check-bold w-4.5 h-4.5 text-primary-600"></div>30 Tage kostenlos testen
              </li>
            </ul>
            <div class="text-right mt-auto">
              <p class="text-2xl font-semibold text-gray-900">0,00€*</p>
              <p class="text-gray-500">nach der Testphase<br>{{ wifiSetting === 'wifi' ? '42,00' : '49,00' }}€/Monat</p>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <button class="w-full bg-primary-500 rounded-full py-4 px-6 text-white text-xl" @click="submitBuy">
              Jetzt loslegen
            </button>
            <p class="text-xs">*einmalig €6,90 Versandkosten</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
  <Container class="my-24 sm:my-48">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-primary-700 p-8 text-white rounded-3xl">
      <div v-for="benefit in benefits" class="flex items-center gap-3 text-xl">
        <div class="i-ph:check-circle w-12 h-12 shrink-0 text-primary-300"></div>
        {{ benefit }}
      </div>
    </div>
    <span class="text-xs">*innerhalb der Testphase</span>
  </Container>
  <Container class="my-24 sm:my-48">
    <FaqSection />
  </Container>
</template>