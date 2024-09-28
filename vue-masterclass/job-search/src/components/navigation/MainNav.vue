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
          <action-button v-else text="Sign in" type="primary" @click="LOGIN_USER" />
        </div>
      </div>

      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

import { useUserStore } from '@/stores/user';

import ActionButton from '@/components/shared/ActionButton.vue';
import ProfileImage from '@/components/navigation/ProfileImage.vue';
import TheSubnav from '@/components/navigation/TheSubnav.vue';

const menuItems = ref([
  { text: 'Teams', url: '/teams' },
  { text: 'Locations', url: '/' },
  { text: 'Life at Bobo Corp', url: '/' },
  { text: 'How we hire', url: '/' },
  { text: 'Students', url: '/' },
  { text: 'Jobs', url: '/jobs/results' }
]);

const userStore = useUserStore();
const LOGIN_USER = userStore.LOGIN_USER;
const isLoggedIn = computed(() => userStore.isLoggedIn);

const headerHeightClass = computed(() => ({
  'h-16': !isLoggedIn.value, // equivalent to 64px
  'h-32': isLoggedIn.value
}));

const company = ref('Bobo Careers');
</script>

<style></style>
