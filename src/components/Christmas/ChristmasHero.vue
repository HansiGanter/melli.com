<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { fireShopEvent } from '~/google-tag-manager'
const heroVideo = ref<HTMLElement | null>(null)

const greaterSm = useBreakpoints(breakpointsTailwind).greater('sm')

/**
 * Our JavaScript function, which calculates the days, hours,
 * minutes and seconds left until Christmas day.
 */
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

function calculateChristmasCountdown() {
  // Get today's date.
  const now = new Date()

  // Get the current month. Add a +1 because
  // getMonth starts at 0 for January.
  const currentMonth = (now.getMonth() + 1)

  // Get the current day of the month.
  const currentDay = now.getDate()

  // Set next Christmas Day
  // One hour earlier because of GTM+1
  const christmasDay = new Date('2022-12-15T23:00:00.000Z')

  // Get the difference in seconds between the two days.
  let diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000)
  if (diffSeconds <= 0)
    diffSeconds = 0

  // Don't calculate the time left if it is Christmas day.
  if (currentMonth !== 12 || (currentMonth === 12 && currentDay !== 25)) {
    // Convert these seconds into days, hours, minutes, seconds.
    days.value = Math.floor(diffSeconds / (3600 * 24))
    diffSeconds -= days.value * 3600 * 24
    hours.value = Math.floor(diffSeconds / 3600)
    diffSeconds -= hours.value * 3600
    minutes.value = Math.floor(diffSeconds / 60)
    diffSeconds -= minutes.value * 60
    seconds.value = diffSeconds
  }

  // Recursive call after 1 second using setTimeout
  setTimeout(calculateChristmasCountdown, 1000)
}

calculateChristmasCountdown()
</script>

<template>
  <header class="relative bg-black" style="height: calc(100vh - 80px)">
    <!-- The video -->
    <video id="heroVideo" ref="heroVideo" class="w-full h-full object-cover" autoplay loop muted playsinline
      poster="https://assets.melli.com/images/stock/red-hair-greeting-1024.webp">
      <source src="https://videos.melli.com/soziale-kontakte.webm" type="video/webm">
      <source src="https://videos.melli.com/soziale-kontakte.mp4" type="video/mp4">
    </video>

    <!-- Heading & link to Video -->
    <div class="absolute top-0 w-full h-full bg-black/20 flex flex-col items-center p-4 pb-12 sm:pb-20">
      <slot />
      <div class=" grid gap-2 sm:gap-6 lg:max-w-200 text-center my-auto ">
        <img src="https://assets.melli.com/bubble-icons/bubble-icon_gift_1-green.svg" class="w-20 h-20 mx-auto">
        <h1 class="text-white font-semibold text-4xl sm:text-5xl leading-tight sm:mb-2">
          Melli Christmas <br>
          Special:
        </h1>
        <div class="bg-primary-300 rounded-xl py-4 sm:py-8 px-4 sm:px-24 flex flex-col gap-6">
          <h2 class="text-primary-900 text-2xl sm:text-3xl font-semibold">
            60 Tage kostenlos testen + <br>
            Melli Tablet für 0€
          </h2>
          <div class="flex justify-center gap-1.5 sm:gap-3">
            <div class="bg-white rounded-lg w-18 h-18 sm:w-24 sm:h-24 text-primary-400 grid items-center">
              <div>
                <p class="font-semibold tracking-tighter text-3xl sm:text-4xl">
                  {{ days < 10 ? `0${days}` : days }} </p>
                    <p class="font-thin text-sm">
                      Tage
                    </p>
              </div>
            </div>
            <div class="bg-white rounded-lg w-18 h-18 sm:w-24 sm:h-24 text-primary-400 grid items-center">
              <div>
                <p class="font-semibold tracking-tighter text-3xl sm:text-4xl">
                  {{ hours < 10 ? `0${hours}` : hours }} </p>
                    <p class="font-thin text-sm">
                      Stunden
                    </p>
              </div>
            </div>
            <div class="bg-white rounded-lg w-18 h-18 sm:w-24 sm:h-24 text-primary-400 grid items-center">
              <div>
                <p class="font-semibold tracking-tighter text-3xl sm:text-4xl">
                  {{ minutes < 10 ? `0${minutes}` : minutes }} </p>
                    <p class="font-thin text-sm">
                      Minuten
                    </p>
              </div>
            </div>
            <div class="bg-white rounded-lg w-18 h-18 sm:w-24 sm:h-24 text-primary-400 grid items-center">
              <div>
                <p class="font-semibold tracking-tighter text-3xl sm:text-4xl">
                  {{ seconds < 10 ? `0${seconds}` : seconds }} </p>
                    <p class="font-thin text-sm">
                      Sekunden
                    </p>
              </div>
            </div>
          </div>
          <RouterLink to="/shop" class="bg-primary-900 text-white text-xl py-4 px-8 w-fit rounded-lg mx-auto"
            @click="fireShopEvent">
            mehr erfahren
          </RouterLink>
        </div>
      </div>
      <RouterLink v-if="greaterSm" to="#flipcards"
        class="font-semibold text-lg text-primary-300 grid gap-2 w-fit mt-auto mx-auto">
        <span class="m-auto">Erfahre mehr über Melli</span>
        <img src="https://assets.melli.com/icons/arrow-down-circle.svg" class="mx-auto stroke-primary-300 w-8 h-8 m-auto">
      </RouterLink>
    </div>
  </header>
</template>
