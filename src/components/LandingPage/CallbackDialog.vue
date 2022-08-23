<script setup lang="ts">
const isLoading = ref(true)
function renderForm() {
  if (window.hbspt) {
    window.hbspt.forms.create({
      region: 'eu1',
      portalId: '25477854',
      formId: '483328ec-f5e7-4562-9009-379771d7c954',
      target: '#hubspotcallform',
    })
  }
  // hubspot form has some weird layout shifts while the form inserted into the DOM
  // so we wait for it to render completely
  setTimeout(() => isLoading.value = false, 500)
}
onMounted(async () => {
  if (!window.hbspt) {
    const script = document.createElement('script')
    script.src = 'https://js-eu1.hsforms.net/forms/v2.js'
    document.body.appendChild(script)
    script.addEventListener('load', () => {
      renderForm()
    })
  }
  else {
    renderForm()
  }
})
</script>

<template>
  <Container class="py-5 sm:py-6 lg:py-8">
    <div v-if="isLoading" class="text-2xl text-gray-700 font-semibold grid place-items-center">
      Einen Moment bitte...
    </div>
    <div
      id="hubspotcallform"
      :style="isLoading ? 'height: 0' : ''"
    />
  </Container>
</template>
