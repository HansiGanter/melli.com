<script setup lang="ts">
const router = useRouter()
const jobAlertDialogOpen = ref(false)
const email = ref('')

const open = () => {
  router.replace({ query: { email: email.value } })
  // we have to ensure the query params are set before the hubspot script loads
  setTimeout(() => {
    jobAlertDialogOpen.value = true
  }, 0)
}
</script>

<template>
  <KarriereHero />
  <MostWanted />
  <KarriereBenefits />
  <Jobs />
  <KarriereFAQs />
  <Container id="job-alert" class="py-12 lg:py-24">
    <div class="bg-tertiary-100 rounded-3xl py-8 lg:py-16 px-5 lg:px-24">
      <div class="grid gap-5 lg:gap-10 px-0 lg:px-20">
        <h2 class="font-semibold text-gray-900 text-3xl lg:text-4xl text-center">
          Nicht das richtige dabei? <br>Mit dem Job-Alert erfährst  du immer als erstes von
          neuen Jobangeboten.
        </h2>
        <FormKit
          class="w-full lg:w-1/2"
          type="form"
          :actions="false"
          :incomplete-message="false"
          @submit="open"
        >
          <div class="grid gap-5 justify-items-center lg:w-full">
            <FormKit
              v-model="email"
              type="email"
              name="email"
              placeholder="Deine E-Mail-Adresse"
              outer-class="w-full grow"
              wrapper-class="grid gap-1.5 h-fill"
              validation="required|email"
              inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
              input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <FormKit
              type="submit"
              input-class="flex w-full lg:w-fit items-center justify-center px-6 py-3.5 bg-primary-500 rounded-lg text-white font-medium text-base"
              wrapper-class="grow"
            >
              Jetzt anmelden
            </FormKit>
          </div>
        </FormKit>
      </div>
    </div>
  </Container>
  <Modal :show="jobAlertDialogOpen" @close="jobAlertDialogOpen = false">
    <JobAlertDialog />
  </Modal>
</template>
