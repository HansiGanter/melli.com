<script setup lang="ts">
import { fireVideoEvent, fireInfoPackageOpenEvent } from '~/google-tag-manager'



const showNewsletterModal = ref(false)
const newsletterEmail = ref()

const openNewsletterModal = (email?: string) => {
    fireInfoPackageOpenEvent(email)
    newsletterEmail.value = email
    showNewsletterModal.value = true
}


const features = [
    {
        iconClass: 'w-10 h-10 text-primary-600 i-ph:music-notes-simple',
        pilltext: 'Musik, Nachrichten, Hörbücher & Videos',
        modaltext: 'Melli kann die Lieblingsmusik ihrer Nutzer abspielen, sie mit einem interessanten Podcast unterhalten, sie über aktuelle Geschehnisse informieren und auch Video-Dokumentationen, der letzten Sonntagskrimi oder die Lieblingstelenovela drauf machen.',
    },
    {
        iconClass: 'w-10 h-10 text-primary-600 i-ph:brain',
        pilltext: 'Rätselraten & andere Denkspiele',
        modaltext: 'Melli hält den Kopf mit kleinen Denkspielen und einfachen Rätseln auf Trab. Diese regelmäßigen Übungen können dabei helfen Demenz vorzubeugen und machen einfach Spaß.',
    },
    {
        iconClass: 'w-10 h-10 text-primary-600 i-ph:activity',
        pilltext: 'Einfache Sport & Bewegungsübungen',
        modaltext: 'Bei regelmäßigen körperlichen Übungen können sich die Nutzer fit halten - damit sie noch lange selbstbestimmt in den eigenen vier Wänden leben können.',
    },
    {
        iconClass: 'w-10 h-10 text-primary-600 i-ph:chat-circle',
        pilltext: 'Kleine Unterhaltungen & Aktivitäten mit Melli',
        modaltext: 'Melli steht dir den ganzen Tag über für kleine Gespräche zur Verfügung. Gemeinsames Lachen über Witze oder eine Unterhaltung über das Wetter sind für sie eine Leichtigkeit. Egal, ob du eine Seelsorgerin oder eine lustige Gesprächspartnerin brauchst - Melli ist einfach immer da und gibt dir das Gefühl, gehört zu werden.',
    }
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
                <BubbleIcon bubble-type="0" bubble="text-yellow-400" :icon="featureToShowDetails.iconClass" />
            </div>
            <p class="font-semibold pt-4 py-2 text-xl">
                {{ featureToShowDetails.pilltext }}
            </p>
            <p class="text-xl">
                {{ featureToShowDetails.modaltext }}
            </p>
        </Container>
    </Modal>

    <InfoPackageModal :show="showNewsletterModal" :email="newsletterEmail" @close="showNewsletterModal = false" />


    <div class="bg-amber-100 p-6 py-16 grid gap-8 md:pb-56 lg:p-16 lg:pb-56 lg:gap-12">
        <h2 class="text-4xl lg:text-5xl font-semibold lg:text-center">
            Raus aus dem Trott:<br>
            Jede Menge Beschäftigung & gute Laune
        </h2>
        <p class="text-lg">
            Melli füllt den Tag mit spannenden Unterhaltungsangeboten. Von kleinen Rätseln über aktivierende Sporteinheiten
            bis zum spannenden Hörbuch - da ist für jeden etwas dabei.
        </p>
        <button class="text-white bg-primary-500 flex gap-3 items-center px-7 rounded-lg w-fit font-medium p-4"
            @click="() => openNewsletterModal()">
            Infopaket&nbsp;bestellen
            <div class="i-lucide:arrow-right w-6 h-6 shrink-0" />
        </button>
        <div class="flex gap-4 flex-wrap xl:gap-8 lg:flex-no-wrap">

            <div v-for="(feature, index) in features" :key="index"
                class="lg:w-1 grow rounded-lg bg-yellow-500 text-white px-6 py-3 grid gap-2"
                @click="featureToShowDetails = feature">
                <BubbleIcon bubble-type="0" bubble="text-yellow-400" :icon="feature.iconClass" />
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
    <div class="mt-8 md:mt--40 md:w-7/10 mx-auto rounded-3xl overflow-hidden relative"
        :class="!startedVideo ? 'cursor-pointer' : ''" @click="startVideo">
        <video ref="videoElement" playsinline :controls="startedVideo" @ended="startedVideo = false">
            <source src="https://videos.melli.com/entertainment.webm" type="video/webm">
            <source src="https://videos.melli.com/entertainment.mp4" type="video/mp4">
        </video>
        <div v-if="!startedVideo"
            class="i-carbon:play-outline text-tertiary-200 text-6xl lg:text-8xl absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
    </div>
</template>