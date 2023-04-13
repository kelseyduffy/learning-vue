<template>
  <div>
    <h3>
      test is this red?
    </h3>
    <Greeting></Greeting> <!-- can be open/close or self closing -->
    <User :age="age"></User>
  </div>
</template>

<script>
  import Greeting from "@/components/Greeting.vue"
  import User from "@/components/User.vue"

  export default {
    name: 'App',
    components: {
      Greeting, // this is short hand for 'Greeting: Greeting'
      User
    },
    data() {
      return {
        age: 20
      }
    }
  }
</script>