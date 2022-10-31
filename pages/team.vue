<script setup lang="ts">
import type { Person } from '~/types'

const { t } = useI18n()

const people: Array<Person> = [
  {
    name: 'Stefan Buchkremer',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://assets.melli.com/images/team/stefan-buchkremer.webp',
    social: {
      linkedin: 'https://www.linkedin.com/in/stefan-buchkremer/',
    },
  },
  {
    name: 'Matthias Weber',
    role: 'Co-Founder / CPO',
    imageUrl: 'https://assets.melli.com/images/team/matthias-weber.webp',
    social: {
      linkedin: 'https://www.linkedin.com/in/dr-matthias-weber-550b34107/',
    },
  },
  {
    name: 'Hans Ganter',
    role: 'Co-Founder / CTO',
    imageUrl: 'https://assets.melli.com/images/team/hans-ganter.webp',
    social: {
      linkedin: 'https://www.linkedin.com/in/hans-ganter-269b09117/',
    },
  },
  {
    name: 'Benjamin Mollier',
    role: 'Co-Founder / Head of Engineering',
    imageUrl: 'https://assets.melli.com/images/team/benjamin-mollier.webp',
    social: {
      github: 'https://github.com/boemjay',
    },
  },
  {
    name: 'Franziska Lerch',
    role: 'B2C Marketing',
    imageUrl: 'https://assets.melli.com/images/team/franziska-lerch.webp',
  },
  {
    name: 'Philip Krech',
    role: 'Product Manager',
    imageUrl: 'https://assets.melli.com/images/team/philip-krech.webp',
    social: {
      linkedin: 'https://www.linkedin.com/in/philip-krech-447032b0/',
    },
  },
  {
    name: 'Johanna Döller',
    role: 'Research & Development',
    imageUrl: 'https://assets.melli.com/images/team/johanna-doeller.webp',
    social: {
      linkedin: 'https://www.linkedin.com/in/johanna-d%C3%B6ller-51a9481b3/',
    },
  },
  {
    name: 'Leonie Krumbholz',
    role: 'Recruiting',
    imageUrl: 'https://assets.melli.com/images/team/leonie-krumbholz.webp',
    social: {
      linkedin: 'https://www.linkedin.com/in/leonie-krumbholz-92311481/',
    },
  },
  {
    name: 'Felix Andreas',
    role: 'Senior Engineer',
    imageUrl: 'https://assets.melli.com/images/team/felix-andreas.webp',
    social: {
      github: 'https://github.com/andreasfelix/',
    },
  },
]
</script>

<template>
  <Container class="py-16 px-5 overflow-hidden">
    <div class="grid gap-12">
      <div class="grid gap-2 sm:gap-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {{ t('team.heading') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ t('team.subheading') }}
        </p>
      </div>
      <ul
        role="list"
        class="z-1 grid gap-4 sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8 2xl:grid-cols-4"
      >
        <TeamCardItem v-for="(person, p) in people" :key="p" :person="person" />
      </ul>
    </div>
  </Container>
</template>
