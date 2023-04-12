<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
    name: 'Greeting',
    data() {
        return {
            msg: "Hello Worldsy."
        }
    }
}
</script>

<!-- scoped doc: https://vue-loader.vuejs.org/guide/scoped-css.html#scoped-css-->
<style scoped>
p {
    color: red
}
</style>