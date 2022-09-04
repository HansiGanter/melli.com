<script setup lang="ts">
const benefits = [
  {
    icon: 'i-carbon:time',
    title: 'Flexible Arbeitszeiten,',
    text: 'es gibt ein Leben neben dem Beruf! Familie und das Leben außerhalb unserer Jobs sind uns sehr wichtig.',
  },
  {
    icon: 'i-heroicons-outline:fast-forward',
    title: 'Dynamische Startup Atmosphäre,',
    text: 'kombiniert mit mehr als 10 Jahren unternehmerischer Erfahrung und Know-How.',
  },
  {
    icon: 'i-heroicons-outline:home',
    title: 'Home Office Option,',
    text: 'bei uns sind die Arbeitstage in Home-Office und Office Tage aufgeteilt. Und wenn das Leben doch anders spielt als geplant, bleiben wir flexibel.',
  },
  {
    icon: 'i-heroicons-outline:heart',
    title: 'Soziale Sinnhaftigkeit,',
    text: 'und die Chance durch deine Arbeit das Leben unserer Nutzer und damit auch die Welt ein Stück besser zu machen.',
  },
  {
    icon: 'i-carbon:currency-dollar',
    title: 'Faire Vergütung,',
    text: 'denn wir wollen ein großartiges Produkt zusammen erschaffen. Das geht nur mit qualifizierten Personen und daher zahlen wir die Gehälter anhand Erfahrung und Ausbildung.',
  },
  {
    icon: 'i-carbon:user-multiple',
    title: 'Niedrige Hierarchien & echter Teamspirit,',
    text: 'nimm direkt Teil an Entscheidungen - deine Meinung zählt bei uns. Als Team motivieren und stärken wir uns gegenseitig.',
  },
]

const coreBenefits = [
  {
    image: 'https://assets.melli.com/pictograms/flag.svg',
    title: 'Unsere Grundeinstellung: CAN DO!',
    backText: 'Wir glauben daran, dass eine postive Perspektive Berge versetzen kann. Deshalb stellen wir uns jeder neuen Herausforderungen mit Enthusiasmus und Vorfreude. Wir motivieren unsere Teammitglieder dazu Dinge neu zu denken und verrückte Ideen einfach auzuprobieren. Dabei gehen wir bewusst Risiken ein ohne Angst vorm Scheitern. Das macht unser handeln schnell und das lernen noch schneller.',
  },
  {
    image: 'https://assets.melli.com/pictograms/shake.svg',
    title: 'Wir schaffen Miteinander.',
    backText: 'Wir sind davon überzeugt, dass Gemeinschaft vieles besser macht – unser Produkt, das Arbeiten, die Erfolge und auch das Fehler machen. Deshalb legen wir großen Wert auch eine positive Teamkultur und einen freundschaftlichen Umgang untereinander.',
  },
  {
    image: 'https://assets.melli.com/pictograms/love.svg',
    title: 'Wir übernehmen Verantwortung',
    backText: 'Wir treten an, um das Leben unserer Nutzer mitzugestalten, es besser und glücklicher zu machen. Hieraus leitet sich für uns eine besondere Verantwortung ab, die jedes einzelne Teammitglied mitträgt. Maximales Engagement, ein gewissenhafter Umgang mit dem uns entgegengebrachten Vertrauen und der Schutz von Daten und Privatsphäre sind deshalb unsere oberste Priorität.',
  },
]
</script>

<template>
  <Container id="kultur" class="py-12 lg:py-24 bg-gray-50 rounded-[32px]">
    <div class="grid gap-24">
      <div class="grid gap-16">
        <div class="grid gap-6 justify-items-center mx-auto">
          <h1 class="font-semibold text-gray-900 text-4xl lg:text-5xl">
            Das macht uns aus
          </h1>
          <!-- <button class="text-medium text-base text-primary-500 hover:text-primary-600 w-fit flex items-center py-2.5 px-4 rounded-full gap-2">
            <span>Lerne das Team kennen</span>
            <div class="i-carbon:arrow-right w-5 h-5" />
          </button> -->
        </div>
        <div class="mx-auto grid gap-6 lg:gap-10 md:grid-cols-2 md:max-w-none lg:grid-cols-2">
          <div v-for="coreBenefit in coreBenefits" :key="coreBenefit.title" class="flex lg:flex-row flex-col gap-6 items-start">
            <img :src="coreBenefit.image" class="w-12 lg:w-24 h-12 lg:h-24">
            <div class="grid gap-1 text-black text-xl">
              <h5 class="font-semibold">
                {{ coreBenefit.title }}
              </h5>
              <span class="font-normal">{{ coreBenefit.backText }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-amber-100 py-12 lg:py-24 px-5 lg:px-16 grid gap-2.5">
        <div class="grid gap-10 lg:gap-20">
          <div class="grid gap-6 lg:w-9/12">
            <h1 class="font-semibold text-gray-900 text-4xl lg:text-5xl">
              Deine Benefits
            </h1>
            <p class="font-medium text-xl lg:text-2xl text-black">
              Was erwartet dich bei uns? Mach dir ein Bild von uns und lies selbst, ob unsere Benefits, Arbeitsatmosphäre und unser Teamspirit zu deinen Vorstellungen passen:
            </p>
            <router-link to="#jobangebote" class="bg-primary-900 text-medium text-base text-white w-fit flex items-center py-2.5 px-4 rounded-full gap-2">
              <span>zu den Jobangeboten</span>
              <div class="i-carbon:arrow-right w-5 h-5" />
            </router-link>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 content-start">
            <div v-for="(benefit, bID) in benefits" :key="bID" class="flex flex-col lg:flex-row items-start gap-4 w-fit">
              <div :class="benefit.icon" class="text-amber-500 w-12 h-12" />
              <span class="text-black text-xl font-normal grow flex-1"><strong class="font-semibold">{{ benefit.title }}</strong> {{ benefit.text }}</span>
            </div>
          </div>
          <!-- <button class="text-medium text-base text-primary-500 hover:text-primary-600 w-fit flex items-center py-2.5 px-4 rounded-full gap-2 ml-auto">
            <span>Mehr Beneifts entdecken</span>
            <div class="i-carbon:arrow-right w-5 h-5" />
          </button> -->
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-6 gap-11 items-center">
        <img src="https://assets.melli.com/images/team/leonie-krumbholz.webp" class="w-2/3 lg:w-auto mx-auto rounded-full">
        <div class="grid gap-5 lg:col-span-5 bg-contain bg-no-repeat bg-center py-5 lg:py-20" style="background-image: url('/assets/bubble_bg.png')">
          <h5 class="font-medium text-primary-900 text-2xl lg:text-3xl">
            “Ich könnte dir noch so viel mehr über Melli und das Team erzählen, aber am besten du überzeugen sich selbst davon! Bewirb dich einfach direkt oder ruf mich an unter +49 1579 2451235.”
          </h5>
          <span class="font-semibold text-gray-500 text-base">Leonie Kumbholz | Recruiting Managerin</span>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.flip-card {
  perspective: 1000px;
}
.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-back {
  transform: rotateY(180deg);
}
</style>
