<template>
    <div>
        <button type="button" @click="age++">Update Age locally</button>
        <p>The user is {{ age }} years old</p>
    </div>
</template>

<script>
export default {
    name: "User",
    props: ["age"]
}
</script>
