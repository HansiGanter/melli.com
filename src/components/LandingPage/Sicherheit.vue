<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager';

type Feature = { iconClass: string, bubbleType: "0" | "1" | "2" | "3", pilltext: string, modaltext: string; };


const features: Feature[] = [
    {
        iconClass: 'w-10 h-10 text-primary-600 i-ph:heart',
        bubbleType: '3',
        pilltext: 'Check-Ins für Gesundheit & Wohlbefinden',
        modaltext: 'Melli ist stets bemüht, dass es ihren Nutzern gut geht. Deshalb erkundigt sie sich mit regelmäßigen Check-Ins nach dem gesundheitlichen und psychischen Wohlbefinden ihrer Nutzer. Sollte sie eine Verschlechterung des Zustands wahrnehmen, kann sie festgelegte Kontakte schnell darüber informieren.',
    },
    {
        iconClass: 'w-10 h-10 text-primary-600 i-ph:sign-in',
        bubbleType: '1',
        pilltext: 'Drop-In Anruf',
        modaltext: 'Mit dem Drop-In Anruf können Angehörige unkompliziert bei den Nutzern nach dem Rechten sehen. Ausgewählte  Angehörige können sich per Video auf die Melli des Nutzers schalten, ohne dass dieser den Anruf explizit entgegen nehmen muss.',
    },
    {
        iconClass: 'w-10 h-10 text-primary-600 i-ph:pill',
        bubbleType: '2',
        pilltext: 'Medikamenten- & Trinkerinnerung',
        modaltext: 'Über die App können individuelle Medikamentenpläne hinterlegt werden. Melli erinnert ihre Nutzer dann zu den angegebenen Zeiten daran, ihre Medikamente einzunehmen. Außerdem erinnert Melli ihre Nutzer mehrmals täglich daran zu trinken.',
    },
    {
        iconClass: 'w-10 h-10 text-primary-600 i-ph:star-four',
        bubbleType: '0',
        pilltext: 'Notfallkontakte',
        modaltext: 'Mit Hilfe von Notfallkontakten kann Melli nahestehende Personen schnellstens informieren, wenn es dem Nutzer mal nicht so gut gehen sollte.',
    },
    {
        iconClass: 'w-10 h-10 text-primary-600 i-ph:clock',
        bubbleType: '3',
        pilltext: 'Terminerinnerungen',
        modaltext: 'Melli kann ihre Nutzer an individuelle Termine wie den nächsten Arztbesuch oder andere Ereignisse erinnern. Die Nutzer müssen Melli nur darum eine Erinnerung einzustellen, oder Angehörige können dies mit Hilfe der Melli-App übernehmen.',
    },
];

const featureToShowDetails = ref<(typeof features)[number]>();

const videoElement = ref();
const startedVideo = ref(false);

const startVideo = (event: Event) => {
    if (!startedVideo.value) {
        fireVideoEvent('sicherheit');
        startedVideo.value = true;
        videoElement.value.play();
        event.preventDefault();
    }
};
</script>

<template>
    <Modal :show="!!featureToShowDetails" @close="featureToShowDetails = undefined">
        <Container v-if="featureToShowDetails" class="py-8 max-w-3xl shadow-md">
            <div class="w-8 h-8">
                <BubbleIcon :bubble-type="featureToShowDetails.bubbleType" bubble="text-primary-100"
                  :icon="featureToShowDetails.iconClass" />
            </div>
            <p class="font-semibold pt-4 py-2 text-xl">
                {{ featureToShowDetails.pilltext }}
            </p>
            <p class="text-xl">
                {{ featureToShowDetails.modaltext }}
            </p>
        </Container>
    </Modal>

    <h2 class="text-4xl sm:text-5xl font-semibold lg:mb-4 lg:mt-8 py-12">
        Sicherheit, dass es Oma & Opa gut geht!
    </h2>
    <div class="lg:grid lg:grid-cols-2 gap-8">
        <div class="flex flex-col gap-8 lg:order-2">
            <p class="text-lg">
                Melli hilft dabei, dass Oma und Opa lange selbstbestimmt im eigenen Zuhause leben können - ohne, dass ihre
                Liebsten ständig Sorge um ihr Wohlergehen haben müssen.
            </p>

            <div class="grid gap-4 sm:grid-cols-2">

                <div v-for="(feature, index) in features" :key="index"
                  class="rounded-lg bg-gray-50 px-6 py-3 grid gap-2 cursor-pointer" @click="featureToShowDetails = feature">

                    <BubbleIcon bubble-type="0" bubble="text-primary-100" :icon="feature.iconClass" />
                    <h3 class="font-semibold">
                        {{ feature.pilltext }}
                    </h3>
                    <div class="flex flex-nowrap gap-2 items-center text-sm">
                        <div class="i-lucide:arrow-right" />
                        mehr erfahren
                    </div>

                </div>
            </div>
        </div>

        <div class="my-48 mt-8 lg:mt-0 rounded-3xl overflow-hidden relative" :class="!startedVideo ? 'cursor-pointer' : ''"
          @click="startVideo">
            <video ref="videoElement" playsinline :controls="startedVideo" @ended="startedVideo = false"
              class="object-cover rounded-3xl"
              poster="https://assets.melli.com/images/backgrounds/website-video-thumbnail-4-1024.webp">
                <source src="https://videos.melli.com/struktur.webm" type="video/webm">
                <source src="https://videos.melli.com/struktur.mp4" type="video/mp4">
            </video>
            <div v-if="!startedVideo"
              class="i-carbon:play-outline text-tertiary-200 text-6xl lg:text-8xl absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
        </div>

    </div>
</template>
