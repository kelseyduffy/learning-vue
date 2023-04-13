<template>
    <div>
        <button type="button" @click="onClickAge">Update Age locally</button>
        <p>The user is {{ age }} years old</p>
        <p>Age doubled: {{ ageDoubled }}</p>
    </div>
</template>

<script>
export default {
    name: "User",
    props: ["age"],
    emits: ["age-change"], // optional practice that helps to document what custom events are emitted
    computed: {
        ageDoubled() {
            return this.age * 2
        }
    },
    methods: {
        onClickAge() {
            this.$emit('age-change', 3) // this will emit an event other components can listen for
        }
    }
}
</script>
