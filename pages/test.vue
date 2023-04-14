<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'

const show = ref(false)
const el = ref<HTMLMediaElement | null>(null)

const { enter } = useFullscreen(el)

const playVideo = async () => {
    show.value = true
    await nextTick()
    if (el.value) {
        enter()
        el.value.play()
    }
}
// for iOS on iPhone
// @ts-ignore
useEventListener(el, 'webkitendfullscreen', () => show.value = document.webkitIsFullScreen)
// for everything else
useEventListener(el, 'fullscreenchange', () => show.value = !!document.fullscreenElement)
</script>

<template>
    <button @click="playVideo" class="text-4xl">
        Show Video
    </button>

    <video v-if="show" ref="el" controls>
        <source src="https://videos.melli.com/fuersorge.webm" type="video/webm">
        <source src="https://videos.melli.com/fuersorge.mp4" type="video/mp4">
    </video>
</template>

<!-- <template>
    <div>
        <button @click="toggleFullscreen">{{ isFullscreen ? 'Exit Fullscreen' : 'Play Fullscreen Video' }}</button>
        <video ref="videoRef" :style="{ display: isFullscreen ? 'block' : 'none' }">
            <source src="https://videos.melli.com/fuersorge.webm" type="video/webm">
        </video>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    setup() {
        const isFullscreen = ref(false);
        const videoRef = ref(null);

        const toggleFullscreen = () => {
            if (!isFullscreen.value) {
                // Enter fullscreen mode
                const videoElement = videoRef.value;
                if (videoElement.requestFullscreen) {
                    videoElement.requestFullscreen();
                } else if (videoElement.webkitRequestFullscreen) { /* Safari */
                    videoElement.webkitRequestFullscreen();
                }
                videoElement.addEventListener('fullscreenchange', handleFullscreenChange);
            } else {
                // Exit fullscreen mode
                document.exitFullscreen();
            }
            isFullscreen.value = !isFullscreen.value;
        };

        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                // Fullscreen mode is exited
                const videoElement = videoRef.value;
                videoElement.pause();
                videoElement.currentTime = 0;
                videoElement.removeEventListener('fullscreenchange', handleFullscreenChange);
                isFullscreen.value = false;
            }
        };

        return {
            isFullscreen,
            videoRef,
            toggleFullscreen,
        };
    },
};
</script> -->
  