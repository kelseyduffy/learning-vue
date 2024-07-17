<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing />
      <job-listing />
      <job-listing />
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
  mounted() {
    const jobsUrl = 'http://localhost:3000/jobs';
    axios.get(jobsUrl).then((response) => {
      this.jobs = response.data;
    });
  }
};
</script>
