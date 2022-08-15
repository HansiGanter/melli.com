<script setup lang="ts">
const email = ref('')
</script>

<template>
  <KarriereHero />
  <MostWanted />
  <KarriereBenefits />
  <Jobs />
  <KarriereFAQs />
  <Container class="py-12 lg:py-24">
    <div class="bg-amber-100 rounded-3xl py-8 lg:py-16 px-5 lg:px-24">
      <div class="grid gap-5 lg:gap-10 px-0 lg:px-20">
        <h2 class="font-semibold text-gray-900 text-3xl lg:text-4xl text-center">
          Nicht das richtige dabei? <br>Mit dem Job-Alert erfährst  du immer als erstes von
          neuen Jobangeboten.
        </h2>
        <FormKit
          v-model="email"
          type="text"
          name="firstname"
          placeholder="Your e-mail address*"
          outer-class="w-full grow"
          wrapper-class="grid gap-1.5 h-fill"
          validation="required|email"
          inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
          input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
        />
        <button type="submit" class="py-3.5 px-6 bg-primary-500 text-white text-base font-medium w-fit rounded-lg disabled:bg-gray-400 mx-auto">
          Subscribe Now
        </button>
      </div>
    </div>
  </Container>
</template>
