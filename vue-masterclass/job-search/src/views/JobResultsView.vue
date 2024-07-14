<template>
  <h1 class="text-6xl font-bold">Job Results Page</h1>
  <h2>{{ routeObject }}</h2>
  <h2>{{ routerObject }}</h2>
</template>

<script>
export default {
  name: 'JobResultsView',
  computed: {
    routeObject() {
      console.log(this.$route);
      return 'none';
    },
    routerObject() {
      console.log(this.$router);
      return 'none';
    }
  }
};
</script>
