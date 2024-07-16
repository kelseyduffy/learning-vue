<template>
  <div>
    <job-filter-sidebar />
  </div>
</template>

<script>
import JobFilterSidebar from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebar.vue';

export default {
  name: 'JobResultsView',
  components: {
    JobFilterSidebar
  }
};
</script>
