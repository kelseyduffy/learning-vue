<template>
    <div>
        <p v-if="age > 25">{{ msg }}</p>
        <p v-else>You must be 25 years or older to view this message</p>
    </div>
</template>

<script>
export default {
    name: 'Greeting',
    props: ["age"],
    data() {
        return {
            msg: "Hello Worldsy."
        }
    }
}
</script>

<!-- scoped doc: https://vue-loader.vuejs.org/guide/scoped-css.html#scoped-css -->
<style scoped lang="scss">
p:hover {
    color: darken(#cc4444, 15%);
}
</style>