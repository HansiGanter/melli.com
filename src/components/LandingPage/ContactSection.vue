<script setup lang="ts">
import { fireContactEvent } from '~/google-tag-manager'
</script>

<template>
  <div class="gap-12 py-12 px-6 sm:px-16 rounded-3xl bg-primary-100 text-primary-900">
    <div class="max-w-screen-lg mx-auto grid gap-8">
      <h2 class="text-4xl font-semibold text-primary-800 lg:text-left">
        Offene Fragen?
      </h2>
      <p class="text-lg font-medium leading-normal">
        Egal, ob Fragen zum Produkt oder zum Bestellprozess – wir beraten dich per E-Mail, WhatsApp und natürlich
        telefonisch und räumen alle Unklarheiten aus dem Weg.
      </p>
      <div class="flex flex-wrap lg:flex-nowrap lg:items-left gap-6">
        <CallOrPipedrive icon-class="color-primary-300" />

        <div class="flex flex-row gap-4 place-items-center">
          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path class="fill-primary-800" fill-rule="evenodd" clip-rule="evenodd"
                d="M3.73576 7.78734L16.0001 16.3724L28.2644 7.78734C28.0587 7.09995 27.4173 6.59302 26.6667 6.59302H5.33341C4.58281 6.59302 3.94144 7.09995 3.73576 7.78734ZM28.3334 10.1803L16.5735 18.4123C16.2292 18.6533 15.7709 18.6533 15.4266 18.4123L3.66675 10.1803V24.2597C3.66675 25.1741 4.41903 25.9263 5.33341 25.9263H26.6667C27.5811 25.9263 28.3334 25.1741 28.3334 24.2597V10.1803ZM1.66675 8.25968C1.66675 6.24073 3.31446 4.59302 5.33341 4.59302H26.6667C28.6857 4.59302 30.3334 6.24073 30.3334 8.25968V24.2597C30.3334 26.2786 28.6857 27.9263 26.6667 27.9263H5.33341C3.31446 27.9263 1.66675 26.2786 1.66675 24.2597V8.25968Z" />
            </g>
          </svg>
          <a href="mailto:info@melli.com" target="_blank" class="tracking-wider" @click="fireContactEvent('email')">
            info@melli.com
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
