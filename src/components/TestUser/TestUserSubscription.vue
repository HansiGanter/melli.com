<script setup lang="ts">
// import { fireTestuserSubscriptionEvent } from '~/google-tag-manager'
const { t } = useI18n()
const email = ref('')
const isDSGVO = ref(false)
const newsletter = ref(false)
</script>

<template>
  <div class="justify-itmes-center grid gap-6">
    <h1 class="font-semibold text-4xl lg:text-5xl text-center">
      <span class="text-primary-400">
        {{ t('test-user-subscription.heading1') }}

      </span><br>
      <span class="text-white">
        {{ t('test-user-subscription.heading2') }}</span>
    </h1>
    <p class="text-white text-xl text-center">
      {{ t('test-user-subscription.description') }}
    </p>

    <!-- SubscriptionForm -->
    <div class="grid gap-2 w-full lg:w-1/2 lg:mx-auto">
      <FormKit
        id="testuser-subscribe-form"
        type="form"
        action="https://seu2.cleverreach.com/f/329911-335570/wcs/"
        target="_blank"
        method="post"
        form-class="grid gap-3"
        :actions="false"
        :incomplete-message="false"
      >
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-0 items-stretch h-fit mb-4">
          <FormKit
            id="7521641"
            v-model="email"
            type="email"
            name="email"
            placeholder="E-Mail-Adresse"
            outer-class="grow"
            wrapper-class="h-fill"
            validation="required|email"
            validation-visibility="submit"
            inner-class="w-full h-fill border border-primary-500 rounded-r-lg lg:rounded-r-0 rounded-l-lg overflow-hidden"
            message-class="text-red-500 mt-1"
            input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          <FormKit
            type="submit"
            input-class="flex items-center mx-auto w-fit gap-2 px-4 pb-3.5 pt-4 lg:px-5 lg:pb-2.5 lg:pt-3 bg-primary-500 rounded-l-lg lg:rounded-l-0 rounded-r-lg text-white"
            wrapper-class="grow"
          >
            <span>Jetzt Melli kostenlos sichern!</span>
            <div class="i-carbon:chevron-right" />
          </FormKit>
        </div>
        <FormKit
          id="7521876"
          v-model="isDSGVO"
          type="checkbox"
          name="1015694[]"
          validation-label="Datenschutzbestimmungen"
          validation="required|accepted"
          validation-visibility="submit"
          message-class="text-red-500 mt-1"
          label-class="text-white text-sm flex-1"
          wrapper-class="flex items-start gap-3"
        >
          <template #label="context">
            <span :class="context.classes.label">Ich akzeptiere die <router-link
              to="/einwilligungserklaerung-dsgvo1"
              class="underline underline-primary-500 text-primary-500"
            >Einwilligungserklärung</router-link> und
              <router-link to="/datenschutz" class="underline underline-primary-500 text-primary-500">
                Datenschutzbestimmungen</router-link>.
            </span>
          </template>
        </FormKit>
        <FormKit
          id="7545649"
          v-model="newsletter"
          type="checkbox"
          label-class="text-white text-sm flex-1"
          wrapper-class="flex items-start gap-3"
          name="1015695[]"
          label="Ich möchte von Melli Email-Updates erhalten. Die Anmeldung kann jederzeit z.B. per Email [info@meetap.de] widerrufen werden."
        />
      </FormKit>
    </div>
  </div>
</template>
