<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <main>
    <div class="min-h-screen grid grid-rows-[auto,1fr]">
      <Container>
        <NavBar />
      </Container>
      <Container>
        <div class="bg-white px-4 py-16 sm:px-6 sm:py-48 md:grid md:place-items-center lg:px-8">
          <div class="max-w-max mx-auto">
            <main class="sm:flex">
              <p class="text-4xl font-extrabold text-primary-600 sm:text-5xl">
                404
              </p>
              <div class="sm:ml-6">
                <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    {{ t('404.not-found.heading') }}
                  </h1>
                  <p class="mt-1 text-base text-gray-500">
                    {{ t('404.not-found.text') }}
                  </p>
                </div>
                <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <router-link to="/"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    {{ t('404.go-home') }}
                  </router-link>
                  <a href="tel:03031198464"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    {{ t('404.contact-support') }}
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Container>
    </div>
    <Footer />
  </main>
</template>
