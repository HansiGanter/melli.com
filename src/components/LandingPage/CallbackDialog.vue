<script setup lang="ts">
import { fireCallEvent } from '~/google-tag-manager'
const firstname = ref('')
const lastname = ref('')
const phone = ref('')
const email = ref('')
const isDSGVO = ref(false)
const promotion = ref(false)
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
        id="cr_form-input--text7557559"
        v-model="firstname"
        type="text"
        name="1013947"
        label="Vorname*"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required"
        validation-visibility="submit"
      />
      <FormKit
        id="cr_form-input--text7557594"
        v-model="lastname"
        type="text"
        name="1013948"
        label="Nachname*"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required"
        validation-visibility="submit"
      />
      <FormKit
        id="cr_form-input--text7557556"
        v-model="phone"
        type="text"
        name="1013938"
        label="Telefonnummer*"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required"
        validation-visibility="submit"
      />
      <FormKit
        id="text7557551"
        v-model="email"
        type="email"
        name="email"
        label="E-Mail*"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required|email"
        validation-visibility="submit"
      />
      <FormKit
        id="Ich bin damit einverstanden, dass die meetap GmbH mich per Telefon oder Email bezüglich meiner Bewerbung als Melli-Testnutzer kontaktieren darf. Die Einwilligung kann jederzeit mit Wirkung für die Zukunft z.B. per Email an [info@meetap] widerrufen werden.7558302"
        v-model="isDSGVO"
        type="checkbox"
        label="Ich bin damit einverstanden, dass die meetap GmbH mich per Telefon oder Email bezüglich meiner Bewerbung als Melli-Testnutzer kontaktieren darf. Die Einwilligung kann jederzeit mit Wirkung für die Zukunft z.B. per Email an [info@meetap] widerrufen werden.*"
        label-class="text-gray-700 text-sm flex-1"
        wrapper-class="flex items-start gap-3"
        name="1014029[]"
        input-class="cr_form-checkbox cr_ipe_checkbox"
        validation-label="DSGVO"
        message-class="text-red-500 mt-1"
        validation="required|accepted"
        validation-visibility="submit"
      />
      <FormKit
        id="Ich möchte Emails mit Promotion & Produktupdates erhalten. Es gelten unsere Datenschutzbestimmungen. Die Einwilligung kann jeder Zeit mit Wirkung für die Zukunft z.B. per E-Mail an [info@meetap.de] widerrufen werden.7558303"
        v-model="promotion"
        type="checkbox"
        label-class="text-gray-700 text-sm flex-1"
        wrapper-class="flex items-start gap-3"
        name="1014030[]"
        input-class="cr_form-checkbox cr_ipe_checkbox"
      >
        <template #label="context">
          <span :class="context.classes.label">Ich möchte Emails mit Promotion & Produktupdates erhalten. Es gelten unsere <router-link to="/datenschutzerklaerung" class="underline underline-primary-500 text-primary-500">Datenschutzbestimmungen</router-link>. Die Einwilligung kann jeder Zeit mit Wirkung für die Zukunft z.B. per E-Mail an [info@meetap.de] widerrufen werden.</span>
        </template>
      </FormKit>
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
