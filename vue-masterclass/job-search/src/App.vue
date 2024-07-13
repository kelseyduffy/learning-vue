<template>
  <main-nav />
  <the-hero />
</template>

<script>
import MainNav from '@/components/navigation/MainNav.vue';
import TheHero from '@/components/jobSearch/TheHero.vue';

export default {
  name: 'App',
  components: {
    MainNav, // because the name matches the alias, you can leave off ': MainNav'
    //MainNav: MainNav
    TheHero
  }
};
</script>
