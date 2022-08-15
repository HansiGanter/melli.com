<script setup lang="ts">
const coupon = ref('')
</script>

<template>
  <div class="border rounded-2xl border-gray-300 px-4 py-8 grid gap-4 content-start h-fit">
    <h1 class="font-semibold text-3xl text-gray-900">
      Cart Total
    </h1>
    <div class="grid gap-4 border-t border-gray-300 pt-4">
      <div class="grid gap-4 border-b border-gray-300 pb-4">
        <div class="flex items-start gap-4">
          <div class="bg-gradient-to-t from-primary-200 to-secondary-200 w-24 h-24" />
          <div class="flex-1 grow grid gap-4">
            <div class="flex gap-4 items-start font-medium">
              <h1 class="text-black text-xl flex-1">
                Annual Basic Subscription*
              </h1>
              <div class="grid gap-1 justify-items-end text-right">
                <span class="text-gray-600 text-lg line-through">€ 118.80</span>
                <span class="w-fit text-primary-500 text-xl">€ 108.90</span>
              </div>
            </div>
            <span class="text-base font-normal text-black">Includes 1 month free subscription</span>
          </div>
        </div>
        <span class="text-sm font-normal text-black">*This plan offers a free test period of 1 month. After that month, your subscription will continue at € 118.80 / year.</span>
      </div>
      <div class="flex items-center justify-between border-b border-gray-300 pb-4 text-xl">
        <h3 class="text-black font-normal">
          Shipment
        </h3>
        <span class="text-gray-900 font-medium">Free</span>
      </div>
      <div class="flex items-center justify-between text-xl">
        <h3 class="text-black font-semibold">
          Total
        </h3>
        <span class="text-primary-500 font-medium">€ 108.90</span>
      </div>
      <div class="grid gap-2 w-full">
        <span class="block text-lg lg:text-xl font-medium text-black text-left">Do you have a discount code?</span>
        <FormKit
          class="flex items-stretch h-fit"
          type="form"
          :actions="false"
          :incomplete-message="false"
        >
          <div class="flex items-stretch h-fit">
            <FormKit
              v-model="coupon"
              type="text"
              name="Coupon"
              placeholder="Enter your code here"
              outer-class="grow"
              wrapper-class="h-fill"
              validation="required|email"
              validation-visibility="submit"
              inner-class="w-full h-fill border border-primary-700 rounded-l-lg overflow-hidden"
              input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <FormKit
              type="submit"
              input-class="flex items-center w-fit gap-2 px-4 pb-3.5 pt-4 lg:px-5 lg:pb-2.5 lg:pt-3 bg-primary-700 rounded-r-lg text-white"
              wrapper-class="grow"
            >
              <span>Apply Code</span>
              <div class="i-carbon:chevron-right" />
            </FormKit>
          </div>
        </FormKit>
      </div>
    </div>
  </div>
</template>
