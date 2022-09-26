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
        label="Ich bin damit einverstanden, dass die meetap GmbH mir Informationen über Neuigkeiten, Promotions und Angebote zur Information über das Produkt und zum Abschluss eines Abonnements von Melli z.B. per E-Mail gemäß der Einwilligungserklärung zusendet und*"
        label-class="text-gray-700 text-sm flex-1"
        wrapper-class="flex items-start gap-3"
        name="1011271[]"
        input-class="cr_form-checkbox"
        validation-label="DSGVO"
        message-class="text-red-500 mt-1"
        validation="required|accepted"
        validation-visibility="submit"
      />
      <FormKit
        type="submit"
        input-class="cr_form-block cr_button"
      >
        <span>Einsenden</span>
      </FormKit>
    </FormKit>
  </Container>
</template>
