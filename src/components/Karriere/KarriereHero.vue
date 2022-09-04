<template>
  <Container
    class="max-h-fit min-h-96 bg-top bg-cover bg-no-repeat"
    style="background-image: url('https://assets.melli.com/images/backgrounds/career-1024.webp');"
  >
    <div class="py-40">
      <div class="grid lg:grid-cols-2 h-full items-center max-w-screen-xl px-4 sm:px-6 lg:px-0">
        <div class="bg-gray-50/80 px-6 lg:px-12 py-8 lg:py-16 rounded-[32px] w-full lg:w-fit grid gap-6 content-start shadow-md">
          <h1 class="text-black font-semibold text-4xl lg:text-5xl">
            Dein neues WHY!
          </h1>
          <p class="max-w-md font-medium text-lg lg:text-xl text-black">
            Werde Teil des meetap Teams & hilf uns dabei eine Zukunft zu schaffen, in der jeder Mensch in jeder Lebensphase Momente gemeinsam erleben und teilen kann - unabhängig von Alter, Lebensumständen, körperlichen Fähigkeiten oder anderen Hindernissen.
          </p>
          <router-link to="#jobangebote" class="bg-primary-900 text-medium text-base text-white w-fit flex items-center py-2.5 px-4 rounded-full gap-2">
            <span>zu den Jobangeboten</span>
            <div class="i-carbon:arrow-right w-5 h-5" />
          </router-link>
        </div>
      </div>
    </div>
  </Container>
</template>
