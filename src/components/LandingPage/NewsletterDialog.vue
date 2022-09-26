<script setup lang="ts">
const newsletterProps = defineProps<{ email?: string }>()

const userEmail = ref(newsletterProps.email)
const vorname = ref('')
const nachname = ref('')
const phone = ref('')
const isDSGVO = ref(false)
</script>

<template>
  <Container class="py-5 sm:py-6 lg:py-8">
    <FormKit
      id="landingpage-newsletter-form-dialog"
      form-class="grid gap-3 layout_form cr_form cr_font max-w-lg"
      type="form"
      action="https://eu2.cleverreach.com/f/329911-336275/wcs/"
      method="post"
      target="_blank"
      :actions="false"
      :incomplete-message="false"
    >
      <FormKit
        id="text7539403"
        v-model="userEmail"
        type="email"
        name="email"
        label="E-Mail-Adresse*"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required|email"
        validation-visibility="submit"
      />
      <FormKit
        id="cr_form-input--text7539407"
        v-model="vorname"
        type="text"
        name="1011268"
        label="Vorname*"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required|email"
        validation-visibility="submit"
      />
      <FormKit
        id="cr_form-input--text7539408"
        v-model="nachname"
        type="text"
        name="1011269"
        label="Nachname*"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required|email"
        validation-visibility="submit"
      />
      <FormKit
        id="cr_form-input--text7539409"
        v-model="phone"
        type="text"
        name="1011270"
        label="Telefonnummer"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
      />
      <FormKit
        id="17539429"
        v-model="isDSGVO"
        type="checkbox"
        label-class="text-gray-700 text-sm flex-1"
        wrapper-class="flex items-start gap-3"
        name="1011271[]"
        input-class="cr_form-checkbox"
        validation-label="DSGVO"
        validation="required|accepted"
        validation-visibility="submit"
        message-class="text-red-500 mt-1"
      >
        <template #label="context">
          <span :class="context.classes.label">Ich möchte Emails mit Promotion & Produktupdates erhalten. Es gelten unsere  <router-link to="/datenschutzerklaerung" class="underline underline-primary-500 text-primary-500">Datenschutzbestimmungen</router-link>. Die Einwilligung kann jeder Zeit mit Wirkung für die Zukunft z.B. per E-Mail an [info@meetap.de] widerrufen werden.</span>
        </template>
      </FormKit>
      <FormKit
        type="submit"
        input-class="cr_form-block cr_button"
      >
        <span>Einsenden</span>
      </FormKit>
    </FormKit>
  </Container>
</template>
