<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            role="link"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >

          <router-link
            v-if="nextPage"
            role="link"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import JobListing from '@/components/jobResults/JobListing.vue';
import { useJobsStore } from '@/stores/jobs';

const jobsStore = useJobsStore();
onMounted(jobsStore.FETCH_JOBS);

const route = useRoute();
const currentPage = computed(() => Number.parseInt(route.query.page || '1'));
const previousPage = computed(() => {
  const previousPage = currentPage.value - 1;
  return previousPage >= 1 ? previousPage : undefined;
});

const FILTERED_JOBS = computed(() => jobsStore.FILTERED_JOBS);

const nextPage = computed(() => {
  const nextPage = currentPage.value + 1;
  return nextPage <= Math.ceil(FILTERED_JOBS.value.length / 10) ? nextPage : undefined;
});

const displayedJobs = computed(() => {
  const pageSize = 10;
  const firstJobIndex = (currentPage.value - 1) * pageSize;
  const lastJobIndex = currentPage.value * pageSize;
  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex);
});
</script>
