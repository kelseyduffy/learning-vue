<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false,
    default: 'primary',
    validator(value: string) {
      // failing the validator checks will appear in console logs when app is run
      return ['primary', 'secondary'].includes(value);
    }
  }
});

const { type } = toRefs(props);
const buttonClass = computed(() => {
  return {
    [type.value]: true
  };
});
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply rounded text-white bg-brand-blue-1 hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>
