<template>
  <div class="border-b border-solid border-brand-gray-2 py-5">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      role="button"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>

    <div v-if="isOpen" class="mt-5 w-full">
      <slot>
        <!-- slot name is "default" because it has no name property -->
        <p>Placeholder text for no slot passed in</p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

defineProps({
  header: {
    type: String,
    required: true
  }
});

const isOpen = ref(false);

const open = () => {
  isOpen.value = !isOpen.value;
};

const caretIcon = computed(() => (isOpen.value ? ['fas', 'angle-up'] : ['fas', 'angle-down']));
</script>
