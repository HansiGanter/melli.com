<script setup lang="ts">
import { firePillEvent } from '~/google-tag-manager';

defineProps<{
  pilltext: string;
  modaltext: string;
  iconpill: string;
  iconmodal: string;
  bubbletype: "0" | "1" | "2" | "3";
  bubble: string;
  pill: string;
}>();
const showModal = ref(false);

function openModal(pillText: string) {
  showModal.value = true;
  firePillEvent(pillText);
}
</script>

<template>
  <div class="font-medium w-fit py-3.4 px-6 rounded-lg min-h-19 max-w-76 flex gap-2.5 items-center cursor-pointer"
    :class="pill" @click="openModal(pilltext)">
    <BubbleIcon :bubble-type="bubbletype" :bubble="bubble" :icon="iconpill" />
    <span>{{ pilltext }}</span>

    <Modal :show="!!showModal" @close="showModal = false">
      <Container v-if="showModal" class="p-6 max-w-3xl">
        <BubbleIcon :bubble-type="bubbletype" :bubble="bubble" :icon="iconmodal" />
        <p class="font-semibold pt-4 py-2 text-xl">
          {{ pilltext }}
        </p>
        <p class="text-xl">
          {{ modaltext }}
        </p>
      </container>
    </modal>
  </div>
</template>
