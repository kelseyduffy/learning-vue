<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filter-sidebar />
    <job-listings />
  </div>
</template>

<script lang="ts" setup>
import JobFilterSidebar from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebar.vue';
import JobListings from '@/components/jobResults/JobListings.vue';
</script>
