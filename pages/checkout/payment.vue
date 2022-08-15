<script setup lang="ts">
import { useCheckoutStore } from '~/stores/checkout'
const checkoutStore = useCheckoutStore()
const router = useRouter()

const nextStep = () => {
  checkoutStore.$patch((state) => {
    state.steps[0].status = 'current'
    state.steps[1].status = 'upcoming'
    state.steps[2].status = 'upcoming'
  })
  router.push({ path: '/' })
}

const prevStep = () => {
  checkoutStore.$patch((state) => {
    state.steps[1].status = 'current'
    state.steps[2].status = 'upcoming'
  })
  router.push({ path: '/checkout/address' })
}

const plans = [
  {
    name: 'PayPal',
    icons: ['i-logos:paypal'],
  },
  {
    name: 'Credit Card',
    icons: ['i-logos:visa', 'i-logos:mastercard'],
  },
]

const selected = ref(plans[0])
const cardHolder = ref('')
const cardNumber = ref('')
const expiry = ref('')
const cvv = ref('')
const terms = ref(false)
const privacy = ref(false)

const isCard = computed(() => {
  if (selected.value.name === plans[1].name)
    return true

  else
    return false
})

const isValid = computed(() => {
  if (terms && privacy)
    return true

  else
    return false
})
</script>

<template>
  <div class="grid py-8 h-fit">
    <div class="grid gap-4 content-start">
      <h1 class="font-semibold text-3xl text-gray-900">
        Payment
      </h1>
      <div class="py-4 border-t border-gray-300">
        <div class="mx-auto w-full">
          <RadioGroup v-model="selected">
            <RadioGroupLabel class="sr-only">
              Server size
            </RadioGroupLabel>
            <div>
              <RadioGroupOption
                v-for="(plan, planIdx) in plans"
                :key="planIdx"
                v-slot="{ checked }"
                as="template"
                :value="plan"
              >
                <div
                  :class="[
                    checked ? 'bg-gray-50 bg-opacity-75 text-gray-900 ' : 'bg-transparent ',
                  ]"
                  class="relative grid cursor-pointer px-4 py-3 focus:outline-none transition ease-out delay-75"
                >
                  <div class="flex w-full items-center justify-between">
                    <div class="flex items-center gap-4">
                      <input name="payment-type" type="radio" :checked="checked" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300">
                      <RadioGroupLabel
                        as="span"
                        :class="checked ? 'text-gray-900' : 'text-gray-900'"
                        class="font-normal text-base"
                      >
                        {{ plan.name }}
                      </RadioGroupLabel>
                    </div>
                    <div class="flex items-center gap-2">
                      <div v-for="icon in plan.icons" :key="icon" class="border border-gray-300 bg-white rounded-md py-1.5 px-3">
                        <div :class="icon" class="text-xl w-8" />
                      </div>
                    </div>
                  </div>
                  <transition
                    enter-active-class="transition-all duration-1000 ease-in-out"
                    enter-from-class="transform translate-y-5 opacity-0"
                    leave-active-class="transition-all duration-500 ease-in"
                    leave-to-class="transform -translate-y-5 opacity-0"
                  >
                    <div v-if="isCard && planIdx !== 0">
                      <FormKit
                        form-class="grid gap-4 h-fit py-4"
                        type="form"
                        :actions="false"
                      >
                        <div class="flex flex-col lg:flex-row gap-4 items-center">
                          <FormKit
                            v-model="cardHolder"
                            type="text"
                            name="holder"
                            label="Card Holder"
                            placeholder="Card Holder"
                            outer-class="w-full grow"
                            wrapper-class="grid gap-1.5 h-fill"
                            validation="required"
                            validation-visibility="submit"
                            inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
                            input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                          />
                          <FormKit
                            v-model="cardNumber"
                            type="text"
                            name="number"
                            label="Card Number"
                            placeholder="Card Number"
                            outer-class="w-full grow"
                            wrapper-class="grid gap-1.5 h-fill"
                            validation="required"
                            validation-visibility="submit"
                            inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
                            input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                          />
                        </div>
                        <div class="flex flex-col lg:flex-row gap-4 items-center">
                          <FormKit
                            v-model="expiry"
                            type="tel"
                            name="expiry"
                            label="Expiry"
                            placeholder="MM/YY"
                            outer-class="w-full grow"
                            wrapper-class="grid gap-1.5 h-fill"
                            validation="required|email"
                            validation-visibility="submit"
                            inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
                            input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                          />
                          <FormKit
                            v-model="cvv"
                            type="text"
                            name="cvv"
                            label="CVV"
                            placeholder="CVV"
                            outer-class="w-full grow"
                            wrapper-class="grid gap-1.5 h-fill"
                            validation="required|email"
                            validation-visibility="submit"
                            inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
                            input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                          />
                        </div>
                      </FormKit>
                    </div>
                  </transition>
                </div>
              </RadioGroupOption>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div class="flex items-start gap-2">
        <input v-model="terms" name="terms-and-conditions" type="checkbox" class="w-6 h-6 mt-1.5">
        <span class="font-medium text-lg text-gray-800 w-full">*With your order, you agree to our general <a href="#" class="text-primary-500">terms and conditions</a> and cancellation policy.</span>
      </div>
      <div class="flex items-start gap-2">
        <input v-model="privacy" name="terms-and-condition" type="checkbox" class="w-6 h-6 mt-1.5">
        <span class="font-medium text-lg text-gray-800 w-full">Ich bin damit einverstanden, dass Melli mir Informationen zu Produktupdates, Promotions und Erinnerungen per E-Mail zuschickt und meine Interaktion mit diesen Inhalten erfasst. Ich kann alle E-Mails jederzeit abbestellen. Es gelten unsere AGB und Datenschutzregeln.</span>
      </div>
      <div class="flex items-center justify-end gap-3">
        <button class="py-3.5 px-6 text-gray-500 text-base font-medium w-fit rounded-lg" @click="prevStep">
          Back
        </button>
        <button class="py-3.5 px-6 bg-primary-500 text-white text-base font-medium w-fit rounded-lg disabled:bg-gray-400" :disabled="!isValid" @click="nextStep">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>
