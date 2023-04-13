<template>
  <div>
    <h3>test is this red?</h3>

    <button type="button" @click="age++">Update Age at the parent level</button>

    <Greeting :age="age"></Greeting> <!-- can be open/close or self closing -->
    <User :age="age" @age-change="updateAge"></User> <!-- listens for the custom age-change events -->
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
    },
    methods: {
      updateAge(num) {
        this.age += num
      }
    }
  }
</script>