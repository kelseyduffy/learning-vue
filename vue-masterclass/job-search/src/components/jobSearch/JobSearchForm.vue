<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="flex h-full flex-1 relative items-center pr-3">
        <label for="role" class="absolute left-0 -top-10">Role</label>
        <text-input id="role" v-model="role" placeholder="Software engineer" />
      </div>

      <span
        class="flex items-center h-full border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
        >in</span
      >

      <div class="flex h-full flex-1 relative items-center pl-3">
        <label for="where" class="absolute left-0 -top-10">Where?</label>
        <text-input id="where" v-model="location" placeholder="Los Angeles" />
      </div>
    </div>

    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import ActionButton from '@/components/shared/ActionButton.vue';
import TextInput from '@/components/shared/TextInput.vue';

const role = ref('');
const location = ref('');

const router = useRouter();

const searchForJobs = () => {
  router.push({
    name: 'JobResults',
    query: {
      role: role.value,
      location: location.value
    }
  });
};
</script>
