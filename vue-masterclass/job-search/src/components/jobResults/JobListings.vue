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
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import JobListing from '@/components/jobResults/JobListing.vue';
import axios from 'axios';

export default {
  name: 'JobListings',
  components: {
    JobListing
  },
  data() {
    return {
      jobs: []
    };
  },
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || '1');
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      return previousPage >= 1 ? previousPage : undefined;
    },
    maxPage() {
      return Math.ceil(this.jobs.length / 10);
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      return nextPage <= this.maxPage ? nextPage : undefined;
    },
    displayedJobs() {
      const pageSize = 10;
      const firstJobIndex = (this.currentPage - 1) * pageSize;
      const lastJobIndex = this.currentPage * pageSize;
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    }
  },
  async mounted() {
    const jobsUrl = 'http://localhost:3000/jobs';

    const response = await axios.get(jobsUrl);
    this.jobs = response.data;
  }
};
</script>
