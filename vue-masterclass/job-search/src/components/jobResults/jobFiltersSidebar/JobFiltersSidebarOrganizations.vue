<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="UNIQUE_ORGANIZATIONS"
    :action="userStore.ADD_SELECTED_ORGANIZATIONS"
  />
</template>

<script lang="js" setup>
import { computed } from 'vue';

import JobFiltersSidebarCheckboxGroup from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue';

import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';

const jobsStore = useJobsStore();
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);

const userStore = useUserStore();
</script>
