<template>
  <div class="relative w-full h-full">
    <video
      autoplay
      loop
      muted
      playsinline
      class="object-cover object-bottom w-screen lg:h-full lg:min-h-unset!"
      style="min-height: calc(100vh - 80px);"
    >
      <source src="https://videos.melli.com/video_christmas-dialogue-erster-advent.mp4" type="video/mp4">
    </video>
    <div class="shop-video-filter absolute top-0 w-full h-full pt-1/5 px-6 sm:px-16">
      <div class="max-w-100 md:max-w-120">
        <img src="https://assets.melli.com/bubble-icons/bubble-icon_gift_1-green.svg" class="w-20 h-20">
        <h1 class=" text-3xl sm:text-5xl font-semibold pt-4 pb-12">
          <span class="text-white">
            Melli Neujahrs-Aktion:
          </span><br><span class="text-primary-300">60 Tage kostenlos ausprobieren</span>
        </h1>
        <router-link to="#choose-subscription" class="bg-white w-fit p-3 rounded-full font-semibold">
          wähle deine Melli-Option <div class="i-carbon:arrow-right align-middle inline-block w-6 h-6" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.shop-video-filter {
    background: linear-gradient(rgba(19,78,74,1)10%, rgba(19,78,74,0.8), rgba(0,0,0,0))
}
</style>
