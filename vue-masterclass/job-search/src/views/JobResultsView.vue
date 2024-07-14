<template>
  <h1 class="text-6xl font-bold">Job Results Page</h1>
  <button @click="goToHome">Go to Home Page</button>
</template>

<script>
export default {
  name: 'JobResultsView',
  methods: {
    goToHome() {
      // three options to use push()
      //this.$router.push('/');
      //this.$router.push({ path: '/'});
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
