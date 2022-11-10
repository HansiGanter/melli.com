<script setup lang="ts">
const email = ref('')
const isDSGVO = ref(false)
const infoPackageDialogOpen = ref(false)

const showAGBErrorMessage = ref(false)
const showEmailErrorMessage = ref(false)

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
}

const openDialog = () => {
  if (!validateEmail(email.value))
    showEmailErrorMessage.value = true
  if (isDSGVO.value === false)
    showAGBErrorMessage.value = true

  if (validateEmail(email.value) && isDSGVO.value === true)
    infoPackageDialogOpen.value = true
}
</script>

<template>
  <div class="max-w-140 sm:min-w-120 mx-auto grid gap-4 sm:gap-8">
    <div class="grid gap-2">
      <input v-model="email" placeholder="melli@email.com" class="border-gray-300 tex-gray-900 border-1 rounded-full text-lg px-4 py-2 w-full">
      <p v-if="showEmailErrorMessage" class="text-red-500 text-left sm:pl-4">
        Bitte geben Sie eine gültige Email an
      </p>
      <div class="flex gap-2 ml-4">
        <input id="checkbox" v-model="isDSGVO" type="checkbox">
        <label for="checkbox">Ich akzeptiere die <RouterLink to="/datenschutz" class="text-primary-500 underline">Datenschutzbestimmungen</RouterLink></label>
      </div>
      <p v-if="showAGBErrorMessage" class="text-red-500 text-left sm:pl-4">
        Bitte akzeptieren Sie die AGBs
      </p>
    </div>
    <div class="grid gap-2">
      <button class="flex gap-2 bg-primary-500 p-2 rounded-lg text-white w-fit mx-auto px-4" @click="openDialog()">
        <span class="mx-auto">Per Post zugeschickt bekommen <div class="i-carbon:email inline-block align-middle w-6 h-6 shrink-0" /></span>
      </button>
      <button class="flex gap-2 bg-primary-500 p-2 rounded-lg text-white w-fit mx-auto px-4">
        <span class="mx-auto">Downloaden <div class="i-carbon:download inline-block align-middle w-6 h-6 shrink-0" /></span>
      </button>
    </div>
  </div>
  <Modal :show="infoPackageDialogOpen" @close="infoPackageDialogOpen = false">
    <InfoPackageDialog :email="email" :dsgvo="isDSGVO" />
  </Modal>
</template>
