<script setup lang="ts">
import { useCheckoutStore } from '~/stores/checkout'
const checkoutStore = useCheckoutStore()
const router = useRouter()

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const confirmEmail = ref('')
const password = ref('')

const nextStep = () => {
  checkoutStore.$patch((state) => {
    state.firstname = firstname.value
    state.lastname = lastname.value
  })
  checkoutStore.$patch((state) => {
    state.steps[0].status = 'complete'
    state.steps[1].status = 'current'
  })
  router.push({ path: '/checkout/address' })
}

const prevStep = () => {
  router.push({ path: '/shop' })
}
</script>

<template>
  <div class="grid py-8 h-fit">
    <div class="grid gap-4 content-start">
      <h1 class="font-semibold text-3xl text-gray-900">
        Create Your Account
      </h1>
      <div class="py-4 border-t border-gray-300">
        <FormKit
          v-slot="{ state: { valid } }"
          form-class="grid gap-4 h-fit"
          type="form"
          :actions="false"
          @submit="nextStep"
        >
          <div class="flex flex-col lg:flex-row gap-4 items-center">
            <FormKit
              v-model="firstname"
              type="text"
              name="firstname"
              label="First name*"
              placeholder="First name"
              outer-class="w-full grow"
              wrapper-class="grid gap-1.5 h-fill"
              validation="required"
              inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
              input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <FormKit
              v-model="lastname"
              type="text"
              name="lastname"
              label="Last name*"
              placeholder="Last name"
              outer-class="w-full grow"
              wrapper-class="grid gap-1.5 h-fill"
              validation="required"
              inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
              input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div class="flex flex-col lg:flex-row gap-4 items-center">
            <FormKit
              v-model="email"
              type="email"
              name="email"
              label="Email*"
              placeholder="Email"
              outer-class="w-full grow"
              wrapper-class="grid gap-1.5 h-fill"
              validation="required|email"
              inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
              input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <FormKit
              v-model="confirmEmail"
              type="email"
              name="confirmEmail"
              label="Confirm Email*"
              placeholder="Confirm Email"
              outer-class="w-full grow"
              wrapper-class="grid gap-1.5 h-fill"
              validation="required|email"
              inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
              input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <FormKit
            v-model="password"
            type="password"
            name="password"
            label="Password*"
            placeholder="Password"
            outer-class="grow"
            wrapper-class="grid gap-1.5 h-fill"
            validation="required"
            inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
            input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          <div class="flex items-center justify-end gap-3 mt-4">
            <button class="py-3.5 px-6 text-gray-500 text-base font-medium w-fit rounded-lg" @click="prevStep">
              Continue Shopping
            </button>
            <button type="submit" class="py-3.5 px-6 bg-primary-500 text-white text-base font-medium w-fit rounded-lg disabled:bg-gray-400" :disabled="!valid">
              Proceed
            </button>
          </div>
        </FormKit>
      </div>
    </div>
  </div>
</template>
