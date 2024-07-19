<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
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
    displayedJobs() {
      const pageString = this.$route.query.page || '1'; // fall back to page 1 if not specified in route
      const pageNumber = Number.parseInt(pageString);
      const pageSize = 10;
      const firstJobIndex = (pageNumber - 1) * pageSize;
      const lastJobIndex = pageNumber * pageSize;
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
