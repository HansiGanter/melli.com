<script setup lang="ts">
import { fireJobAlertEvent } from '~/google-tag-manager'
const props = defineProps<{ email?: string }>()
const firstname = ref('')
const lastname = ref('')
const userEmail = ref(props.email)
const isDSGVO = ref(false)
</script>

<template>
  <Container class="py-5 sm:py-6 lg:py-8">
    <FormKit
      id="job-alert-form-modal"
      form-class="grid gap-3 max-w-lg"
      type="form"
      action="https://eu2.cleverreach.com/f/329911-336280/wcs/"
      method="post"
      target="_blank"
      :actions="false"
      :incomplete-message="false"
    >
      <FormKit
        id="7539498"
        v-model="userEmail"
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
        id="7539503"
        v-model="firstname"
        type="text"
        name="1015733"
        label="Vorname*"
        validation-label="Vorname"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required"
        validation-visibility="submit"
      />
      <FormKit
        id="7539504"
        v-model="lastname"
        type="text"
        name="1015734"
        label="Nachname*"
        validation-label="Nachname"
        message-class="text-red-500 mt-1"
        input-class="cr_form-input"
        validation="required"
        validation-visibility="submit"
      />
      <FormKit
        id="7539505"
        v-model="isDSGVO"
        type="checkbox"
        label-class="text-gray-700 text-sm flex-1"
        wrapper-class="flex items-start gap-3"
        name="1015735[]"
        input-class="cr_form-component cr_form-component--group cr_form-component--checkbox cr_ipe_item ui-sortable musthave"
        validation-label="Datenschutzbestimmungen"
        message-class="text-red-500 mt-1"
        validation="required|accepted"
        validation-visibility="submit"
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
        input-class="cr_form-block cr_button bg-primary-500 font-medium text-base text-white px-4 py-2 rounded-lg"
        @click="fireJobAlertEvent"
      >
        <span>Einsenden</span>
      </FormKit>
    </FormKit>
  </Container>
</template>
