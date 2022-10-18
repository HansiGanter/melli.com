<script setup lang="ts">
withDefaults(defineProps<{ show: boolean; closeOnEsc?: boolean }>(), { closeOnEsc: true })
const emit = defineEmits<{ (event: 'close'): void }>()
onKeyStroke('Escape', (e) => {
  e.preventDefault()
  emit('close')
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="show"
        class="bg-gray-900 bg-opacity-50 grid transition-opacity inset-0 z-100 duration-200 fixed items-end sm:place-items-center"
        @click.self="emit('close')"
      >
        <div
          class="modal-container m-2 bg-white rounded-xl shadow-lg sm:min-w-md"
        >
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
/* Nested transitions have to be implemented using CSS selectors
 * see https://staging.vuejs.org/guide/built-ins/transition.html#nested-transitions-and-explicit-transition-durations
 * see https://staging.vuejs.org/examples/#modal
 * alternatively we could use https://headlessui.dev/vue/transition#co-ordinating-multiple-transitions
 */
.modal-enter-from {
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}
.modal-container {
  transition: transform 200ms ease-out;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: translateY(100%);
}
@media (min-width: 640px) {
  .modal-enter-from .modal-container,
  .modal-leave-to .modal-container {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
}
</style>
