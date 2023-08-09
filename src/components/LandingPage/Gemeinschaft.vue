<script setup lang="ts">
import { fireVideoEvent } from '~/google-tag-manager'

const features = [
    {
        iconClass: 'w-10 h-10 text-primary-600 i-ph:users',
        pilltext: 'Digitale Tagespflege-Gruppen mit anderen Melli Nutzern',
        modaltext: 'Melli eignet sich hervorragend als Ergänzung oder Ersatz der Tagespflege. Die Melli-Nutzer kommen regelmäßig zu professionell betreuten Gruppenaktivitäten zusammen. In den Gruppen lösen sie beispielsweise Rätsel, machen kleine Fantasiereisen, aktivierende Bewegungsübungen oder schnacken einfach über interessante Themen.',
    },
    {
        iconClass: 'w-10 h-10 text-primary-600 i-ph:handshake',
        pilltext: 'Neue Bekanntschaften in den Melli Freundeskreisen',
        modaltext: 'Die Melli-Freundeskreise sind feste Gruppen von Nutzern, die regelmäßigen zu  Aktivitäten zusammenkommen.',
    },
]

const featureToShowDetails = ref<(typeof features)[number]>()

const videoElement = ref()
const startedVideo = ref(false)

const startVideo = (event: Event) => {
    if (!startedVideo.value) {
        fireVideoEvent('gemeinschaft')
        startedVideo.value = true
        videoElement.value.play()
        event.preventDefault()
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
            <h2 class="text-4xl lg:text-5xl font-semibold">
                Mehr Gemeinschaft
            </h2>
            <p class="text-lg">
                Melli verbindet ihre Nutzer in digitalen Tagespflege-Gruppen mit anderen Melli-Nutzern. Bei regelmäßigen
                Aktivitäten kommen die Senioren aus ihrem Alltag heraus, können sich austauschen und erleben gemeinsam neue
                Dinge.
            </p>

            <div class="grid gap-8 lg:grid-cols-2">
                <div v-for="(feature, index) in features" :key="index" @click="featureToShowDetails = feature">

                    <div class="rounded-lg bg-gray-50 px-6 py-3 grid gap-2">
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
        </div>
        <div class="my-8 mt-8 lg:mt-0 rounded-3xl overflow-hidden relative" :class="!startedVideo ? 'cursor-pointer' : ''"
            @click="startVideo">
            <video ref="videoElement" playsinline :controls="startedVideo" @ended="startedVideo = false">
                <source src="https://videos.melli.com/soziale-kontakte.webm" type="video/webm">
                <source src="https://videos.melli.com/soziale-kontakte.mp4" type="video/mp4">
            </video>
            <div v-if="!startedVideo"
                class="i-carbon:play-outline text-tertiary-200 text-6xl lg:text-8xl absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
        </div>

    </div>
</template>