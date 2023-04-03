<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { fireDipaFormOpenEvent } from '~/google-tag-manager';
const greaterLg = useBreakpoints(breakpointsTailwind).greater('sm')

const showForm = ref(false)

const criteria = [
  '55 Jahre oder älter.*',
  'Pflegegrad nachgewiesen.*',
  'Alleinstehend und/oder lebt allein.*',
  'Eher wenige sozialen Kontakte.',
  'Aufgeschlossen gegenüber Technik.',
  'Keine schweren kognitiven Einschränkungen.*',
  'Keine schwerwiegenden Sprachstörungen.*',
]

function openForm(){
  showForm.value = true
  fireDipaFormOpenEvent()
}
</script>

<template>
  <div class="flex flex-col gap-6 sm:gap-20">
    <div class="flex flex-col gap-6">
      <h1 class="text-4xl sm:text-5xl font-semibold max-w-160 text-white">
        Finde heraus, ob Oma & Opa als Melli-Tester geeignet sind!
      </h1>
      <button class="rounded-lg bg-primary-400 text-white py-2.5 px-4 flex items-center w-fit gap-2" @click="openForm()">
        <div class="i-carbon:user-favorite-alt-filled w-6 h-6" /><span>Werde Melli-Tester</span>
      </button>
    </div>
    <div class="grid md:grid-cols-2 gap-6 lg:gap-17">
      <BubbleImage class="mx-auto my-auto" image="https://assets.melli.com/images/images/mockups/01_free/mockup-device-intro-left.webp" bubble1-color="fill-primary-800" bubble2-color="fill-primary-700" svgclass="scale-120" />

      <div class="flex flex-col gap-3 relative">
        <div v-for="crit in criteria" :key="crit" class="flex gap-2.5 px-6 py-3 bg-primary-600 text-white text-lg leading-7 items-center w-fit rounded-xl">
          <div class="i-lucide:check-circle w-6 h-6 shrink-0" />
          <span> {{ crit }} </span>
        </div>
        <i class="text-white">*obligatorisch</i>
      </div>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-0">
      <div class="flex flex-col gap-6 text-white sm:border-t-2 sm:border-t-white items-center px-6">
        <div v-if="greaterLg" class="h-9 w-9 bg-primary-300 rounded-full border-5 border-primary-900 -m-t-5" />
        <BubbleIcon :bubble-type="0" bubble="text-primary-700" icon="i-lucide:pencil w-12 h-12 text-primary-300" />
        <h3 class="text-xl font-semibold text-center px-9">
          Als Testnutzer bewerben
        </h3>
        <p class="text-base leading-6 text-center">
          Bewirb dich selbst, deine Eltern oder Großeltern jetzt als Testnutzer.
        </p>
        <button class="rounded-lg bg-primary-400 text-white py-2.5 px-4 flex items-center w-fit gap-2" @click="openForm()">
          <div class="i-carbon:user-favorite-alt-filled w-6 h-6" /><span>Werde Melli-Tester</span>
        </button>
      </div>
      <div class="flex flex-col gap-6 text-white sm:border-t-2 sm:border-t-white items-center px-6">
        <div v-if="greaterLg" class="h-9 w-9 bg-primary-300 rounded-full border-5 border-primary-900 -m-t-5" />
        <BubbleIcon :bubble-type="3" bubble="text-primary-700" icon="i-lucide:clipboard w-12 h-12 text-primary-300" />
        <h3 class="text-xl font-semibold text-center px-9">
          Fragebogen ausfüllen
        </h3>
        <p class="text-base leading-6 text-center">
          Beantworte uns ein paar Fragen über dich bzw. deinen Angehörigen um herauszufinden, ob ihr euch als Melli-Tester eignet.
        </p>
      </div>
      <div class="flex flex-col gap-6 text-white sm:border-t-2 sm:border-t-white items-center px-6">
        <div v-if="greaterLg" class="h-9 w-9 bg-primary-300 rounded-full border-5 border-primary-900 -m-t-5" />
        <BubbleIcon :bubble-type="1" bubble="text-primary-700" icon="i-lucide:phone-call w-12 h-12 text-primary-300" />
        <h3 class="text-xl font-semibold text-center px-9">
          Wir melden uns bei euch
        </h3>
        <p class="text-base  leading-6 text-center">
          Wir melden uns telefonisch und per Email bei euch, um alles Weitere zu besprechen.
        </p>
      </div>
      <div class="flex flex-col gap-6 text-white sm:border-t-2 sm:border-t-white items-center px-6">
        <div v-if="greaterLg" class="h-9 w-9 bg-primary-300 rounded-full border-5 border-primary-900 -m-t-5" />
        <BubbleIcon :bubble-type="2" bubble="text-primary-700" icon="i-lucide:thumbs-up w-12 h-12 text-primary-300" />
        <h3 class="text-xl font-semibold text-center px-9">
          Melli drei Monate kostenlos testen
        </h3>
        <p class="text-base leading-6 text-center">
          Den Alltag mit Melli gemeinsam erleben und uns von euren Erfahrungen berichten.
        </p>
      </div>
    </div>
  </div>

  <Modal :show="showForm" @close="showForm = false">
    <DipaTestUserForm />
  </Modal>
</template>
