<script setup lang="ts">
import { fireTestuserSubscriptionEvent } from '~/google-tag-manager'

const userEmail = ref('')
const isDSGVO = ref(false)
const newsletter = ref(false)
</script>

<template>
  <div class="p-5">
    <FormKit
      id="testuser-subscribe-form"
      v-slot="{ state: { valid } }"
      form-class="grid gap-3"
      type="form"
      action="https://seu2.cleverreach.com/f/329911-335570/wcs/"
      method="post"
      target="_blank"
      :actions="false"
      :incomplete-message="false"
    >
      <FormKit
        id="7521641"
        v-model="userEmail"
        type="email"
        name="email"
        label="E-Mail-Adresse*"
        validation-label="E-Mail"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required|email"
        validation-visibility="submit"
      />
      <FormKit
        id="7521876"
        v-model="isDSGVO"
        type="checkbox"
        label-class="text-gray-700 text-sm flex-1"
        wrapper-class="flex items-start gap-3"
        name="1015694[]"
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
        id="7545649"
        v-model="newsletter"
        type="checkbox"
        label="Ich möchte von Melli Email-Updates erhalten. Die Anmeldung kann jederzeit z.B. per Email [info@meetap.de] widerrufen werden."
        label-class="text-gray-700 text-sm flex-1"
        wrapper-class="flex items-start gap-3"
        name="1015695[]"
        input-class="cr_form-checkbox cr_ipe_checkbox"
      />
      <FormKit
        type="submit"
        input-class="cr_form-block cr_button bg-primary-500 font-medium text-base text-white px-4 py-2 rounded-lg"
        @click="valid ? fireTestuserSubscriptionEvent(userEmail) : ''"
      >
        <span>Anmelden</span>
      </FormKit>
    </FormKit>
  </div>
</template>
