<script setup lang="ts">
import { fireLiveDemoSentEvent } from '~/google-tag-manager'
const newsletterProps = defineProps<{ email?: string; dsgvo?: boolean }>()

const date = ref('')
const userEmail = ref(newsletterProps.email)
const vorname = ref('')
const nachname = ref('')
const phone = ref('')
const notes = ref('')
const newsletter = ref(false)
const userIsDSGVO = ref(newsletterProps.dsgvo)
</script>

<template>
  <Container class="py-5 px-5 sm:px-0 sm:py-6 lg:py-8">
    <FormKit
      id="live-demo-form-dialog"
      v-slot="{ state: { valid } }"
      form-class="grid gap-3 layout_form cr_form cr_font max-w-lg"
      type="form"
      action="https://eu2.cleverreach.com/f/329911-340287/wcs/"
      method="post"
      target="_blank"
      :actions="false"
      :incomplete-message="false"
    >
      <h1 class="font-medium text-2xl">
        Anmeldung zur Melli Live-Demo
      </h1>
      <hr>
      <FormKit
        id="7642919"
        v-model="date"
        type="radio"
        name="1027603[]"
        label="Wähle einen Termin*"
        options-class=""
        option-class="bg-primary-50 my-3 rounded-xl"
        wrapper-class="flex  gap-4 p-4"
        inner-class="flex"
        input-class=""
        label-class=""
        :validation-messages="{
          required: 'Bitte wählen Sie einen Termin aus.',
        }"
        message-class="text-red-500 mt-1"
        validation="required"
        validation-visibility="submit"
        :options="[
          '29.11. | 17:00 Uhr',
          '08.12. | 15:00 Uhr',
        ]"
      />
      <FormKit
        id="7641529"
        v-model="vorname"
        type="text"
        name="1027406"
        label="Vorname*"
        placeholder="Vorname"
        validation-label="Vorname"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required"
        validation-visibility="submit"
      />
      <FormKit
        id="7641530"
        v-model="nachname"
        type="text"
        name="1027407"
        label="Nachname*"
        placeholder="Nachname"
        validation-label="Nachname"
        message-class="text-red-500 mt-1"
        validation="required"
        validation-visibility="submit"
        input-class="cr_form-input"
      />
      <FormKit
        id="7641489"
        v-model="userEmail"
        type="text"
        name="email"
        label="Email-Adresse*"
        placeholder="melli@email.com"
        validation-label="Email"
        message-class="text-red-500 mt-1"
        validation="required|email"
        validation-visibility="submit"
        input-class="cr_form-input"
      />
      <FormKit
        id="7641531"
        v-model="phone"
        type="text"
        name="1027408"
        label="Telefonnummer"
        placeholder="+49 123 456789"
        input-class="cr_form-input"
      />
      <FormKit
        id="7641565"
        v-model="notes"
        type="textarea"
        name="1027409"
        label="Anmerkung"
        placeholder="Anmerkungen oder Fragen zu deiner Anmeldung"
        input-class="cr_form-input"
      />
      <FormKit
        id="7641659"
        v-model="newsletter"
        type="checkbox"
        label-class="text-gray-900 text-sm flex-1"
        wrapper-class="flex items-start gap-3"
        name="1027412[]"
        label="Ich möchte von Melli Email-Updates erhalten. Die Anmeldung kann jederzeit z.B. per Email [info@meetap.de] widerrufen werden."
      />
      <FormKit
        id="7642432"
        v-model="userIsDSGVO"
        type="hidden"
        label-class="text-gray-700 text-sm flex-1"
        wrapper-class="flex items-start gap-3 hidden"
        name="1027547[]"
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
        id="7641491"
        type="submit"
        label="Anmelden"
        input-class="cr_form-block cr_button"
        @click="valid ? fireLiveDemoSentEvent() : ''"
      />
    </FormKit>
  </Container>
</template>

