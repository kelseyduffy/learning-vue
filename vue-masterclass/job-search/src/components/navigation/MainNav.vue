<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto">
        <router-link to="/" class="flex h-full items-center text-xl">{{ company }}</router-link>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem.text" class="ml-9 h-full first:ml-0">
              <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">{{
                menuItem.text
              }}</router-link>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign in" type="primary" @click="loginUser" />
        </div>
      </div>

      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import ActionButton from '@/components/shared/ActionButton.vue';
import ProfileImage from '@/components/navigation/ProfileImage.vue';
import TheSubnav from '@/components/navigation/TheSubnav.vue';

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav
  },
  data() {
    return {
      company: 'Bobo Careers',
      menuItems: [
        {
          text: 'Teams',
          url: '/teams'
        },
        {
          text: 'Locations',
          url: '/'
        },
        {
          text: 'Life at Bobo Corp',
          url: '/'
        },
        {
          text: 'How we hire',
          url: '/'
        },
        {
          text: 'Students',
          url: '/'
        },
        {
          text: 'Jobs',
          url: '/jobs/results'
        }
      ]
    };
  },
  computed: {
    ...mapState(useUserStore, ['isLoggedIn']),
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn, // equivalent to 64px
        'h-32': this.isLoggedIn
      };
    }
  },
  methods: {
    ...mapActions(useUserStore, ['loginUser'])
  }
};
</script>

<style></style>
