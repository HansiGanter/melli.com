<script setup lang="ts">
import { firePaymentSuccess } from '~/google-tag-manager';

onMounted(() => {
  const linkOfTheWebsiteUserCame = document.referrer;
  linkOfTheWebsiteUserCame && firePaymentSuccess();
  linkOfTheWebsiteUserCame && console.log(linkOfTheWebsiteUserCame);
})

</script>
<template>
  <Container class="calcscreen">
    <div class="h-full flex items-center">
      <div
        class="flex flex-col gap12 sm:gap-18 items-center bg-gray-50 h-fit rounded-3xl drop-shadow-md px-4 py-12 sm:py-24 w-full">
        <div class="flex flex-col gap-6 items-center">
          <BubbleIcon bubble-type="0" bubble="text-primary-200" icon="i-lucide:heart w-18 h-18 text-primary-600" />
          <h1 class="text-3xl sm:text-5xl font-semibold text-center">Vielen Dank für dein Vertrauen!</h1>
        </div>
        <div class="flex flex-col gap-6">
          <p class="text-center font-medium text-xl sm:text-2xl text-gray-500">Deine Bestellung ist abgeschlossen.<br>So
            geht’s jetzt
            weiter:</p>
          <div class="flex flex-col gap-3 text-gray-500 text-base sm:text-lg font-medium leading-7">
            <p class="flex gap-3 items-center">
            <div class="i-lucide:check text-primary-600 h-6 w-6 shrink-0"></div>In deinem E-Mail Postfach findest du eine
            E-Mail
            zur
            Registrierung.
            </p>
            <p class="flex gap-3 items-center">
            <div class="i-lucide:check text-primary-600 h-6 w-6 shrink-0"></div>Wir melden uns telefonisch, um dir bei der
            ersten
            Einrichtung zu helfen.
            </p>
            <p class="flex gap-3 items-center">
            <div class="i-lucide:check text-primary-600 h-6 w-6 shrink-0"></div>Danach macht sich Melli auf den Weg zu
            dir.
            </p>

          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
<style>
.calcscreen {
  height: calc(100vh - 88px) !important;
}
</style>