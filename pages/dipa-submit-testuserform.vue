<script setup lang="ts">
// import { fireSubscribeEvent } from '~/google-tag-manager'
const timeLeft = ref(5)
onMounted(() => {
  const timer = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
    //   fireSubscribeEvent()
      clearInterval(timer)
      window.open(
        'https://docs.google.com/forms/d/15wxjcrdAqKQNUPoCzUEiA9kK8hZqC9-_PhqLK5GT2sc/edit',
        '_blank',
      )
    }
  }, 1000)
})
</script>

<template>
  <Container>
    <TestNavBar class="relative" />
    <div class="grid gap-4 content-center items-stretch justify-items-center py-8">
      <div class="h-96 overflow-hidden">
        <img src="https://assets.melli.com/illustrations/avatar/Sprechen.svg" class="h-full object-cover">
      </div>

      <div class="grid gap-2 text-center lg:w-1/2">
        <h3 class="font-semibold text-primary-500 text-xl">
          Vielen Dank für deine Bewerbung als Testnutzer! Wir haben dir eine Email zur Bestätigung deiner Email-Adresse gesendet.
        </h3>
        <p class="font-normal text-gray-700 text-xl">
          Du wirst in <strong class="text-primary-500">{{ timeLeft }}</strong> Sekunden zur Vervollständigung deiner Bewerbungen weitergeleitet. Solltest du nicht automatisch weitergeleiteten werden, klicke bitte auf <a href="https://docs.google.com/forms/d/15wxjcrdAqKQNUPoCzUEiA9kK8hZqC9-_PhqLK5GT2sc/edit" target="_blank" class="text-primary-500">Anmeldung abschließen</a>
        </p>
      </div>
      <div class="flex items-center gap-4">
        <a href="https://docs.google.com/forms/d/15wxjcrdAqKQNUPoCzUEiA9kK8hZqC9-_PhqLK5GT2sc/edit" target="_blank" class="bg-primary-500 hover:bg-primary-600 transition-all duration-150 delay-100 ease-in px-6 py-2.5 rounded-lg">
          <span class="text-white font-medium text-base">Anmeldung abschließen</span>
        </a>
      </div>
    </div>
  </Container>
</template>

<route lang="yaml">
meta:
  layout: testuser
</route>
