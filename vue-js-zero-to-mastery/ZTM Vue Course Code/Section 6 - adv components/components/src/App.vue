<template>
  <div>
    <p>
      test is this red?
    </p>
    <Greeting>  
    </Greeting>
  </div>
</template>

<script>
  import Greeting from "@/components/Greeting.vue"

  export default {
    name: 'App',
    components: {
      Greeting // this is short hand for 'Greeting: Greeting'
    }
  }
</script>