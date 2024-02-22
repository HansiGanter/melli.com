<script setup lang="ts">
import { fireInfoPackageSentEvent } from '~/google-tag-manager'
const newsletterProps = defineProps<{ email?: string; dsgvo?: boolean; download?: boolean }>()

const userEmail = ref(newsletterProps.email)
const vorname = ref('')
const nachname = ref('')
const phone = ref('')
const userIsDSGVO = ref(newsletterProps.dsgvo)
const isDownload = ref(newsletterProps.download ? 'Ich möchte das Infopaket downloaden' : '')

const eventListener = () => {
  setTimeout(() => {
    if (![vorname.value, nachname.value, userEmail.value].includes('')) {
      fetch('https://melli-assets.netlify.app/files/melli-infobroschuere.pdf')
        .then(resp => resp.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.style.display = 'none'
          a.href = url
          a.download = 'melli-infobroschuere.pdf'
          document.body.appendChild(a)
          a.click()
          window.URL.revokeObjectURL(url)
          a.remove()
        })
      fireInfoPackageSentEvent(userEmail.value, phone.value, vorname.value, nachname.value)
    }
  }, 500)
}

onMounted(() => {
  const form = document.getElementById('infopackage-download-form-dialog')
  form?.addEventListener('submit', eventListener)
})

onUnmounted(() => {
  const form = document.getElementById('infopackage-download-form-dialog')
  form?.removeEventListener('submit', eventListener)
})
</script>

<template>
  <Container class="py-5 px-5 sm:px-0 sm:py-6 lg:py-8">
    <FormKit id="infopackage-download-form-dialog" action="https://newsletter.melli.com/f/329911-336275/wcs/"
      target="_blank" method="post" form-class="grid gap-3 layout_form cr_form cr_font max-w-lg" type="form"
      :actions="false" :incomplete-message="false">
      <FormKit id="7539403" v-model="userEmail" type="email" name="email" label="E-Mail-Adresse*"
        validation-label="E-Mail-Adresse" message-class="text-red-500 mt-1" input-class="cr_form-input"
        validation="required|email" validation-visibility="submit" />
      <FormKit id="7684475" v-model="vorname" type="text" name="1031854" label="Vorname*" validation-label="Vorname"
        message-class="text-red-500 mt-1" input-class="cr_form-input" validation="required"
        validation-visibility="submit" />
      <FormKit id="7684476" v-model="nachname" type="text" name="1031855" label="Nachname*" validation-label="Nachname"
        message-class="text-red-500 mt-1" input-class="cr_form-input" validation="required"
        validation-visibility="submit" />
      <FormKit id="7684477" v-model="phone" type="text" name="1031856" label="Telefonnummer"
        input-class="cr_form-input" />
      <FormKit id="Ich möchte das Infopaket downloaden7641665" v-model="isDownload" type="hidden" name="1027445[]" />
      <FormKit id="7545650" v-model="userIsDSGVO" type="hidden" label-class="text-gray-700 text-sm flex-1"
        wrapper-class="flex items-start gap-3 hidden" name="1015693[]" input-class="cr_form-checkbox hidden"
        validation-label="Datenschutzbestimmungen" validation="required|accepted" validation-visibility="submit"
        message-class="text-red-500 mt-1">
        <template #label="context">
          <span :class="context.classes.label">Ich akzeptiere die <router-link to="/datenschutz"
              class="underline underline-primary-500 text-primary-500">Datenschutzbestimmungen</router-link>.</span>
        </template>
      </FormKit>
      <FormKit id="7539405" type="submit" input-class="cr_form-block cr_button">
        <span class="mx-auto flex gap-2 bg-primary-500 rounded-lg text-white w-fit">Downloaden
          <div class="i-carbon:download inline-block align-middle w-6 h-6 shrink-0" />
        </span>
      </FormKit>
    </FormKit>
  </Container>
</template>
