<template>
  <MainNav />
</template>

<script>
import MainNav from '@/components/MainNav.vue';

export default {
  name: 'App',
  components: {
    MainNav // because the name matches the alias, you can leave off ': MainNav'
    //MainNav: MainNav
  }
};
</script>
