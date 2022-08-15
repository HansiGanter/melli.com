<script setup lang="ts">
import { useCheckoutStore } from '~/stores/checkout'
const checkoutStore = useCheckoutStore()
const router = useRouter()

const nextStep = () => {
  checkoutStore.$patch((state) => {
    state.steps[1].status = 'complete'
    state.steps[2].status = 'current'
  })
  router.push({ path: '/checkout/payment' })
}

const prevStep = () => {
  checkoutStore.$patch((state) => {
    state.steps[0].status = 'current'
    state.steps[1].status = 'upcoming'
  })
  router.push({ path: '/checkout' })
}

const firstname = ref(checkoutStore.firstname)
const lastname = ref(checkoutStore.lastname)
const phone = ref('')
const company = ref('')
const street = ref('')
const zip = ref('')
const city = ref('')

const billingFirstname = ref('')
const billingLastname = ref('')
const bilingPhone = ref('')
const billingCompany = ref('')
const billingStreet = ref('')
const billingZip = ref('')
const billingCity = ref('')

const value = ref(true)
</script>

<template>
  <div class="grid gap-8 py-8 h-fit">
    <div class="grid gap-4 content-start">
      <h1 class="font-semibold text-3xl text-gray-900">
        Delivery Address
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
              v-model="phone"
              type="tel"
              name="phone"
              label="Phone*"
              placeholder="Phone"
              outer-class="w-full grow"
              wrapper-class="grid gap-1.5 h-fill"
              validation="required"
              inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
              input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <FormKit
              v-model="company"
              type="text"
              name="company"
              label="Company name (optional)"
              placeholder="Company name"
              outer-class="w-full grow"
              wrapper-class="grid gap-1.5 h-fill"
              inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
              input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <FormKit
            v-model="street"
            type="text"
            name="street"
            label="Street*"
            placeholder="Street"
            outer-class="grow"
            wrapper-class="grid gap-1.5 h-fill"
            validation="required"
            inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
            input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          <div class="flex flex-col lg:flex-row gap-4 items-center">
            <FormKit
              v-model="zip"
              type="text"
              name="zip"
              label="ZIP Code*"
              placeholder="ZIP Code"
              outer-class="w-full grow"
              wrapper-class="grid gap-1.5 h-fill"
              validation="required"
              inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
              input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <FormKit
              v-model="city"
              type="text"
              name="city"
              label="City*"
              placeholder="City"
              outer-class="w-full grow"
              wrapper-class="grid gap-1.5 h-fill"
              validation="required"
              inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
              input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div class="grid gap-4 content-start">
            <h1 class="font-semibold text-3xl text-gray-900">
              Billing Address
            </h1>
            <div class="grid gap-4 py-4 border-t border-gray-300">
              <FormKit
                v-model="value"
                type="checkbox"
                label="Same as Delivery address"
                label-class="font-weight-500 text-lg text-gray-600"
                name="billing"
                wrapper-class="flex items-center gap-2"
                input-class="border border-gray-300 rounded bg-primary-500 focus:ring focus:ring-offset-0 focus:ring-primary-200 transition duration-300 ease-in"
              />
              <transition
                enter-active-class="transition-all duration-1000 ease-in-out"
                enter-from-class="transform translate-y-5 opacity-0"
                leave-active-class="transition-all duration-500 ease-in"
                leave-to-class="transform -translate-y-5 opacity-0"
              >
                <FormKit
                  v-if="!value"
                  form-class="grid gap-4 h-fit"
                  type="form"
                  :actions="false"
                >
                  <div class="flex flex-col lg:flex-row gap-4 items-center">
                    <FormKit
                      v-model="billingFirstname"
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
                      v-model="billingLastname"
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
                      v-model="bilingPhone"
                      type="tel"
                      name="phone"
                      label="Phone*"
                      placeholder="Phone"
                      outer-class="w-full grow"
                      wrapper-class="grid gap-1.5 h-fill"
                      validation="required"
                      inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
                      input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                    <FormKit
                      v-model="billingCompany"
                      type="text"
                      name="company"
                      label="Company name (optional)"
                      placeholder="Company name"
                      outer-class="w-full grow"
                      wrapper-class="grid gap-1.5 h-fill"
                      inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
                      input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <FormKit
                    v-model="billingStreet"
                    type="text"
                    name="street"
                    label="Street*"
                    placeholder="Street"
                    outer-class="grow"
                    wrapper-class="grid gap-1.5 h-fill"
                    validation="required"
                    inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
                    input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                  <div class="flex flex-col lg:flex-row gap-4 items-center">
                    <FormKit
                      v-model="billingZip"
                      type="text"
                      name="zip"
                      label="ZIP Code*"
                      placeholder="ZIP Code"
                      outer-class="w-full grow"
                      wrapper-class="grid gap-1.5 h-fill"
                      validation="required"
                      inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
                      input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                    <FormKit
                      v-model="billingCity"
                      type="text"
                      name="city"
                      label="City*"
                      placeholder="City"
                      outer-class="w-full grow"
                      wrapper-class="grid gap-1.5 h-fill"
                      validation="required"
                      inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
                      input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                </FormKit>
              </transition>
            </div>
            <div class="flex items-center justify-end gap-3">
              <button class="py-3.5 px-6 text-gray-500 text-base font-medium w-fit rounded-lg" @click="prevStep">
                Back
              </button>
              <button type="submit" class="py-3.5 px-6 bg-primary-500 text-white text-base font-medium w-fit rounded-lg disabled:bg-gray-400" :disabled="!valid">
                Continue
              </button>
            </div>
          </div>
        </FormKit>
      </div>
    </div>
  </div>
</template>
