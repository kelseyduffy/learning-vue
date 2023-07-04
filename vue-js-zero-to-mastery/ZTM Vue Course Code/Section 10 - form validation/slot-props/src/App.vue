<template>
  <div id="app">
    <hello-world #default="{ user }">
      <p>Hello {{ user.name }}</p>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
