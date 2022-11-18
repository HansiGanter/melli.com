<script setup lang="ts">
import { fireInfoPackageSentEvent } from '~/google-tag-manager'
const newsletterProps = defineProps<{ email?: string; dsgvo?: boolean; post: boolean }>()

const userEmail = ref(newsletterProps.email)
const vorname = ref('')
const nachname = ref('')
const phone = ref('')
const street = ref('')
const postalcode = ref('')
const city = ref('')
const userIsDSGVO = ref(newsletterProps.dsgvo)
const isPost = ref(newsletterProps.post ? 'Ich möchte das Infopkate per Post zugeschickt bekommen' : '')
</script>

<template>
  <Container class="py-5 px-5 sm:px-0 sm:py-6 lg:py-8">
    <FormKit
      id="live-demo-form-dialog"
      v-slot="{ state: { valid } }"
      form-class="grid gap-3 layout_form cr_form cr_font max-w-lg"
      type="form"
      action="https://eu2.cleverreach.com/f/329911-336275/wcs/"
      method="post"
      target="_blank"
      :actions="false"
      :incomplete-message="false"
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
        id="7539408"
        v-model="nachname"
        type="text"
        name="1011269"
        label="Nachname*"
        placeholder="Nachname"
        validation-label="Nachname"
        message-class="text-red-500 mt-1"
        validation="required"
        validation-visibility="submit"
        input-class="cr_form-input"
      />
      <FormKit
        id="7539403"
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
        id="7539409"
        v-model="phone"
        type="text"
        name="1011270"
        label="Telefonnummer"
        placeholder="+49 123 456789"
        input-class="cr_form-input"
      />
      <FormKit
        id="7662505"
        v-model="street"
        type="text"
        name="1031012"
        label="Straße, Hausnummer*"
        placeholder="Musterstraße, 1"
        validation-label="Straße"
        message-class="text-red-500 mt-1"
        validation="required"
        validation-visibility="submit"
        input-class="cr_form-input"
      />
      <FormKit
        id="7662465"
        v-model="postalcode"
        type="text"
        name="1031013"
        label="PLZ*"
        placeholder="12345"
        validation-label="Postleitzahl"
        message-class="text-red-500 mt-1"
        validation="required"
        validation-visibility="submit"
        input-class="cr_form-input"
      />
      <FormKit
        id="7663015"
        v-model="city"
        type="text"
        name="1031014"
        label="Stadt*"
        placeholder="Berlin"
        validation-label="Stadt"
        message-class="text-red-500 mt-1"
        validation="required"
        validation-visibility="submit"
        input-class="cr_form-input"
      />
      <FormKit
        id="Ich möchte das Infopaket downloaden7641665"
        v-model="isPost"
        type="hidden"
        name="1027445[]"
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
        id="7539405"
        type="submit"
        input-class="cr_form-block cr_button"
        @click="valid ? fireInfoPackageSentEvent(userEmail, phone, vorname, nachname) : ''"
      >
        <span class="mx-auto flex gap-2 bg-primary-500 rounded-lg text-white w-fit">Per Post zugeschickt bekommen <div class="i-carbon:email inline-block align-middle w-6 h-6 shrink-0" /></span>
      </FormKit>
    </FormKit>
  </Container>
</template>
