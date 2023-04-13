<template>
  <h1>Home Page</h1>
</template>

<script>
export default {
    unmounted() { // proof that toggling a component unmounts it (data is destroyed)
        console.log('Home component unmounted')
    },
    activated() {
        console.log('home component activated')
    },
    deactivated() {
        console.log('home component deactivated')
    }
}
</script>
