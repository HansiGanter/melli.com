<script setup lang="ts">
import { fireInfoPackageOpenEvent } from '~/google-tag-manager'
const email = ref('')
const isDSGVO = ref(false)
const infoPackagePostDialogOpen = ref(false)
const infoPackageDownloadDialogOpen = ref(false)

const openPostDialog = () => {
  infoPackagePostDialogOpen.value = true
  fireInfoPackageOpenEvent(email.value)
}
const openDownloadDialog = () => {
  infoPackageDownloadDialogOpen.value = true
  fireInfoPackageOpenEvent(email.value)
}
</script>

<template>
  <FormKit
    id="infopackage-dialog-open"
    v-slot="{ state: { valid } }"
    type="form"
    :actions="false"
    :incomplete-message="false"
    @submit="true"
  >
    <div class="grid gap-4 sm:gap-8">
      <div class="grid gap-2">
        <FormKit
          v-model="email"
          type="email"
          placeholder="melli@email.de"
          outer-class="max-w-140 mx-auto w-full"
          input-class="border-gray-300 tex-gray-900 border-1 rounded-full text-lg px-4 py-2 w-full"
          validation-label="E-Mail-Adresse"
          message-class="text-red-500 mt-1"
          validation="required|email"
          validation-visibility="submit"
        />
        <FormKit
          v-model="isDSGVO"
          type="checkbox"
          label-class="text-gray-900"
          outer-class="max-w-140 mx-auto w-full"
          wrapper-class="flex gap-2"
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
      </div>

      <div class="grid gap-2">
        <FormKit
          type="submit"
          wrapper-class="mx-auto w-fit"
          @click="valid ? openPostDialog() : ''"
        >
          <span class="mx-auto flex gap-2 bg-primary-500 p-2 rounded-lg text-white w-fit px-4">Per Post zugeschickt bekommen <div class="i-carbon:email inline-block align-middle w-6 h-6 shrink-0" /></span>
        </FormKit>
        <FormKit
          type="submit"
          wrapper-class="mx-auto w-fit"
          @click="valid ? openDownloadDialog() : ''"
        >
          <span class="mx-auto flex gap-2 bg-primary-500 p-2 rounded-lg text-white w-fit px-4">Downloaden <div class="i-carbon:download inline-block align-middle w-6 h-6 shrink-0" /></span>
        </FormKit>
      </div>
    </div>
  </Formkit>
  <Modal :show="infoPackageDownloadDialogOpen" @close="infoPackageDownloadDialogOpen = false">
    <NewsletterDialog :email="email" :dsgvo="isDSGVO" :download="true" />
  </Modal>
  <Modal :show="infoPackagePostDialogOpen" @close="infoPackagePostDialogOpen = false">
    <InfoPackageDialog :email="email" :dsgvo="isDSGVO" :post="true" />
  </Modal>
</template>
