<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
const subscriptionProps = defineProps<Props>()

const { t } = useI18n()

interface Props {
  isOpen: boolean
  close: () => void
  email: string
}

const close = () => {
  subscriptionProps.close()
}

const firstname = ref('')
const lastname = ref('')
const value = ref(false)
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="close">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-teal-900"
              >
                Almost there
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Complete the form below so we can get you onboard as a test user.
                </p>
              </div>
              <FormKit type="form" :actions="false">
                <div class="grid gap-3 my-3">
                  <FormKit
                    :value="subscriptionProps.email"
                    type="email"
                    name="email"
                    outer-class="grow"
                    wrapper-class="h-fill"
                    inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
                    input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    readonly
                  />
                  <FormKit
                    v-model="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Vorname*"
                    outer-class="grow"
                    wrapper-class="h-fill"
                    validation="required"
                    validation-visibility="submit"
                    inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
                    input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                  <FormKit
                    v-model="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Nachname*"
                    outer-class="grow"
                    wrapper-class="h-fill"
                    validation="required"
                    validation-visibility="submit"
                    inner-class="w-full h-fill border border-primary-400 rounded-lg overflow-hidden"
                    input-class="w-full h-13 lg:h-11 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                  <FormKit
                    v-model="value"
                    type="checkbox"
                    inner-class="w-fit"
                    wrapper-class="flex items-start gap-2"
                    label="Ich bin damit einverstanden, dass Melli mir Informationen zu Produktupdates, Promotions und Erinnerungen per E-Mail zuschickt und meine Interaktion mit diesen Inhalten erfasst. Ich kann alle E-Mails jederzeit abbestellen. Es gelten unsere AGB und Datenschutzregeln."
                    name="terms"
                    validation="accepted"
                    validation-visibility="dirty"
                  />
                </div>
              </FormKit>
              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-primary-500 px-4 py-2 text-sm font-medium text-white w-full"
                  @click="close"
                >
                  Got it, thanks!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
