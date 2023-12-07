<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager';

const features = [
    {
        iconClass: 'w-10 h-10 text-primary-600 i-ph:users',
        pilltext: 'Digitaler Seniorentreff mit anderen Mellli Nutzern',
        modaltext: 'Ähnlich wie in einer Tagespflege kommen die Nutzer im Melli Seniorentreff regelmäßig zu gemeinsamen Aktivitäten zusammen. In den Gruppen lösen sie beispielsweise gemeinsam Rätsel, machen kleine Fantasiereisen, aktivierende Bewegungsübungen oder schnacken einfach über interessante Themen. Geleitet wird der Seniorentreff von professionellen Betreuungskräften.',
    },
    {
        iconClass: 'w-10 h-10 text-primary-600 i-ph:handshake',
        pilltext: 'Neue Bekanntschaften in den Melli Freundeskreisen',
        modaltext: 'Die Melli-Freundeskreise sind feste Gruppen von Nutzern, die regelmäßigen zu  Aktivitäten zusammenkommen.',
    },
];

const featureToShowDetails = ref<(typeof features)[number]>();

const videoElement = ref();
const startedVideo = ref(false);

const startVideo = (event: Event) => {
    if (!startedVideo.value) {
        fireVideoEvent('gemeinschaft');
        startedVideo.value = true;
        videoElement.value.play();
        event.preventDefault();
    }
}

</script>

<template>
    <Modal :show="!!featureToShowDetails" @close="featureToShowDetails = undefined">
        <Container v-if="featureToShowDetails" class="py-8 max-w-3xl shadow-md">
            <div class="w-8 h-8">
                <BubbleIcon bubble-type="0" bubble="text-primary-100" :icon="featureToShowDetails.iconClass" />
            </div>
            <p class="font-semibold pt-4 py-2 text-xl">
                {{ featureToShowDetails.pilltext }}
            </p>
            <p class="text-xl">
                {{ featureToShowDetails.modaltext }}
            </p>
        </Container>
    </Modal>

    <div class="lg:grid lg:grid-cols-2 gap-8 lg:gap-16 mt-12 mb-18">
        <div class="grid gap-8 lg:order-2">
            <h2 class="text-4xl sm:text-5xl font-semibold">
                Zeit zum Schnacken & für neue Kontakte
            </h2>
            <p class="text-lg">
                Oma & Opa wollen mehr unter Leute kommen?
                Dann ist der Melli-Seniorentreff perfekt für sie! Geleitet von professionellen Pflegekräften kommen hier
                Melli-Nutzer regelmäßig zu gemeinsamen Aktivitäten wie z.B. Rätselraten, Bewegungsübungen zusammen.
            </p>

            <div class="grid gap-8 sm:grid-cols-2">
                <div v-for="(feature, index) in features" :key="index" @click="featureToShowDetails = feature"
                  class="rounded-lg bg-gray-50 px-6 py-3 grid gap-2 cursor-pointer">
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
        <div class="my-8 mt-8 lg:mt-0 mb-0 lg:mb-48 overflow-hidden relative" :class="!startedVideo ? 'cursor-pointer' : ''"
          @click="startVideo">
            <video ref="videoElement" playsinline :controls="startedVideo" @ended="startedVideo = false"
              class="object-cover rounded-3xl"
              poster="https://assets.melli.com/images/backgrounds/website-video-thumbnail-2-1024.webp">
                <source src="https://videos.melli.com/soziale-kontakte.webm" type="video/webm">
                <source src="https://videos.melli.com/soziale-kontakte.mp4" type="video/mp4">
            </video>
            <div v-if="!startedVideo"
              class="i-carbon:play-outline text-tertiary-200 text-6xl lg:text-8xl absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
        </div>
    </div>
</template>