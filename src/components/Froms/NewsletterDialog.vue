<script setup lang="ts">
import { fireNewsletterSentEvent } from '~/google-tag-manager'
const newsletterProps = defineProps<{ email?: string; dsgvo?: boolean }>()

const userEmail = ref(newsletterProps.email)
const vorname = ref('')
const nachname = ref('')
const phone = ref('')
const userIsDSGVO = ref(newsletterProps.dsgvo)
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
        id="7539403"
        v-model="userEmail"
        type="email"
        name="email"
        label="E-Mail-Adresse*"
        validation-label="E-Mail-Adresse"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required|email"
        validation-visibility="submit"
      />
      <FormKit
        id="7539407"
        v-model="vorname"
        type="text"
        name="1011268"
        label="Vorname*"
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
        validation-label="Nachname"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required"
        validation-visibility="submit"
      />
      <FormKit
        id="7539409"
        v-model="phone"
        type="text"
        name="1011270"
        label="Telefonnummer"
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
        input-class="cr_form-block cr_button"
        @click="fireNewsletterSentEvent"
      >
        <span>Jetzt anmelden</span>
      </FormKit>
    </FormKit>
  </Container>
</template>
