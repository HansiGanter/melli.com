<script setup lang="ts">
import { fireCallEvent } from '~/google-tag-manager'
const firstname = ref('')
const lastname = ref('')
const phone = ref('')
const email = ref('')
const isDSGVO = ref(false)
const newsletter = ref(false)
</script>

<template>
  <Container class="py-5 sm:py-6 lg:py-8">
    <FormKit
      id="testuser-callback-form-modal"
      form-class="grid gap-3 max-w-lg"
      type="form"
      action="https://eu2.cleverreach.com/f/329911-336997/wcs/"
      method="post"
      target="_blank"
      :actions="false"
      :incomplete-message="false"
    >
      <FormKit
        id="7557559"
        v-model="firstname"
        type="text"
        name="1013947"
        label="Vorname*"
        validation-label="Vorname"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required"
        validation-visibility="submit"
      />
      <FormKit
        id="7557594"
        v-model="lastname"
        type="text"
        name="1013948"
        label="Nachname*"
        validation-label="Nachname"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required"
        validation-visibility="submit"
      />
      <FormKit
        id="7557556"
        v-model="phone"
        type="text"
        name="1013938"
        label="Telefonnummer*"
        input-class="cr_form-input"
      />
      <FormKit
        id="7557551"
        v-model="email"
        type="email"
        name="email"
        label="E-Mail*"
        validation-label="E-Mail"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required|email"
        validation-visibility="submit"
      />
      <FormKit
        id="7558302"
        v-model="isDSGVO"
        type="checkbox"
        label-class="text-gray-700 text-sm flex-1"
        wrapper-class="flex items-start gap-3"
        name="1015696[]"
        input-class="cr_form-checkbox cr_ipe_checkbox"
        validation-label="Datenschutzbestimmungen"
        message-class="text-red-500 mt-1"
        validation="required|accepted"
        validation-visibility="submit"
      >
        <template #label="context">
          <span :class="context.classes.label">Ich akzeptiere die <router-link
            to="/einwilligungserklaerung-dsgvo1"
            class="underline underline-primary-500 text-primary-500"
          >Einwilligungserklärung</router-link> und <router-link
            to="/datenschutz"
            class="underline underline-primary-500 text-primary-500"
          >Datenschutzbestimmungen</router-link>.</span>
        </template>
      </FormKit>
      <FormKit
        id="7558303"
        v-model="newsletter"
        type="checkbox"
        label="Ich möchte von Melli Email-Updates erhalten. Die Anmeldung kann jederzeit z.B. per Email [info@meetap.de] widerrufen werden."
        label-class="text-gray-700 text-sm flex-1"
        wrapper-class="flex items-start gap-3"
        name="1015697[]"
        input-class="cr_form-checkbox cr_ipe_checkbox"
      />
      <FormKit
        type="submit"
        input-class="cr_form-block cr_button bg-primary-500 font-medium text-base text-white px-4 py-2 rounded-lg"
        @click="fireCallEvent"
      >
        <span>Rückruf anfordern</span>
      </FormKit>
    </FormKit>
  </Container>
</template>
