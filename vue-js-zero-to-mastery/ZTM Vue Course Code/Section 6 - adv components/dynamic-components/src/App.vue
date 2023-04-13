<template>
  <div>
    <select v-model="componentName">
      <option value="Home">Home</option>
      <option value="About">About</option>
    </select>

    <!-- use the component component to dynamically set which component is rendering in here -->
    <component :is="componentName"></component>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
export default {
  name: "App",
  components: {
    Home,
    About,
  },
  data() {
    return {
      componentName: "Home",
    }
  }
};
</script>


