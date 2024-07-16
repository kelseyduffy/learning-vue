<template>
  <div>Job Page for job {{ currentJobId }}</div>
</template>

<script>
export default {
  name: 'JobView',
  computed: {
    currentJobId() {
      // param is named whatever it was named in the route
      return this.$route.params.id;
    }
  }
};
</script>
