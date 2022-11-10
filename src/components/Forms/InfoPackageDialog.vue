<script setup lang="ts">
import { fireLiveDemoSentEvent } from '~/google-tag-manager'
const newsletterProps = defineProps<{ email?: string; dsgvo?: boolean }>()

const userEmail = ref(newsletterProps.email)
const vorname = ref('')
const nachname = ref('')
const phone = ref('')
const street = ref('')
const postalcode = ref('')
const city = ref('')
const userIsDSGVO = ref(newsletterProps.dsgvo)
</script>

<template>
  <Container class="py-5 px-5 sm:px-0 sm:py-6 lg:py-8">
    <FormKit
      id="live-demo-form-dialog"
      form-class="grid gap-3 layout_form cr_form cr_font max-w-lg"
      type="form"
      action="https://eu2.cleverreach.com/f/329911-336275/wcs/"
      method="post"
      target="_blank"
      :actions="false"
      :incomplete-message="false"
      @submit="fireLiveDemoSentEvent"
    >
      <h1 class="font-medium text-2xl">
        Bekomme dein Melli-Infopaket direkt nach Hause geschickt
      </h1>
      <hr>
      <FormKit
        id="7539407"
        v-model="vorname"
        type="text"
        name="1011268"
        label="Vorname*"
        placeholder="Vorname"
        validation-label="Vorname"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required"
        validation-visibility="submit"
      />
      <FormKit
        id="7539407"
        v-model="nachname"
        type="text"
        name="1011268"
        label="Nachname*"
        placeholder="Nachname"
        validation-label="Nachname"
        message-class="text-red-500 mt-1"
        validation="required"
        validation-visibility="submit"
        input-class="cr_form-input"
      />
      <FormKit
        id="7539407"
        v-model="userEmail"
        type="text"
        name="1011268"
        label="Email-Adresse*"
        placeholder="melli@email.com"
        validation-label="Email"
        message-class="text-red-500 mt-1"
        validation="required|email"
        validation-visibility="submit"
        input-class="cr_form-input"
      />
      <FormKit
        id="7539407"
        v-model="phone"
        type="text"
        name="1011268"
        label="Telefonnummer"
        placeholder="+49 123 456789"
        input-class="cr_form-input"
      />
      <FormKit
        id="7539407"
        v-model="street"
        type="text"
        name="1011268"
        label="Straße, Hausnummer*"
        placeholder="Musterstraße, 1"
        validation-label="Straße"
        message-class="text-red-500 mt-1"
        validation="required"
        validation-visibility="submit"
        input-class="cr_form-input"
      />
      <FormKit
        id="7539407"
        v-model="postalcode"
        type="text"
        name="1011268"
        label="PLZ*"
        placeholder="12345"
        validation-label="Postleitzahl"
        message-class="text-red-500 mt-1"
        validation="required"
        validation-visibility="submit"
        input-class="cr_form-input"
      />
      <FormKit
        id="7539407"
        v-model="city"
        type="text"
        name="1011268"
        label="Stadt*"
        placeholder="Berlin"
        validation-label="Stadt"
        message-class="text-red-500 mt-1"
        validation="required"
        validation-visibility="submit"
        input-class="cr_form-input"
      />
      <FormKit
        id="7545650"
        v-model="userIsDSGVO"
        type="hidden"
        label-class="text-gray-700 text-sm flex-1"
        wrapper-class="flex items-start gap-3 hidden"
        name="1015693[]"
        input-class="cr_form-checkbox hidden"
        validation-label="Datenschutzbestimmungen"
        validation="required|accepted"
        validation-visibility="submit"
        message-class="text-red-500 mt-1"
      >
        <template #label="context">
          <span :class="context.classes.label">Ich akzeptiere die <router-link
            to="/datenschutz"
            class="underline underline-primary-500 text-primary-500"
          >Datenschutzbestimmungen</router-link>.</span>
        </template>
      </FormKit>
      <FormKit
        type="submit"
        label="Per Post zugeschickt bekommen"
        input-class="cr_form-block cr_button"
      />
    </FormKit>
  </Container>
</template>
