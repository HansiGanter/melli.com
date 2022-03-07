<script setup lang="ts">
import PhoneIcon from '~icons/heroicons-outline/phone'
import SupportIcon from '~icons/heroicons-outline/support'
import NewspaperIcon from '~icons/heroicons-outline/newspaper'

const { t } = useI18n()

const supportLinks = [
  {
    name: 'Sales',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: SupportIcon,
  },
  {
    name: 'Media Inquiries',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: NewspaperIcon,
  },
]
</script>

<template>
  <Container class="bg-tertiary-50">
    <NavBar class="text-tertiary-900" />
    <SectionHeader class="pt-8 lg:pt-16 pb-64 text-tertiary-800" :heading="t('support.heading')" :text="t('support.text')" />
  </Container>
  <Container class="-mt-48">
    <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
      <div
        v-for="link in supportLinks"
        :key="link.name"
        class="flex flex-col bg-white rounded-2xl shadow-xl"
      >
        <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
          <div
            class="absolute top-0 p-5 inline-block bg-tertiary-200 rounded-xl shadow-lg transform -translate-y-1/2"
          >
            <component :is="link.icon" class="h-6 w-6 text-tertiary-900" aria-hidden="true" />
          </div>
          <h3 class="text-xl font-medium text-primary-gray-900">
            {{ link.name }}
          </h3>
          <p class="mt-4 text-base text-primary-gray-500">
            {{ link.description }}
          </p>
        </div>
        <div class="p-6 bg-primary-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
          <a :href="link.href" class="text-base font-medium text-primary-500 hover:text-primary-400">
            Contact us
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </Container>
  <Container>
    <FAQSection />
  </Container>
  <Container>
    <Footer />
  </Container>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>
