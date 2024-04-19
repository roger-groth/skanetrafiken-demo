<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import BaseModal from '@/components/BaseModal.vue';
import { useUserDataStore } from './stores/userData';

const { editUser } = storeToRefs(useUserDataStore());
const { fetchUsers } = useUserDataStore();

fetchUsers();
</script>

<template>
  <div class="p-2">
    <ul class="flex pb-4">
      <li class="mr-3">
        <RouterLink to="/" class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3">Hem</RouterLink>
      </li>
      <li class="mr-3">
        <RouterLink to="/about" class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3">Om</RouterLink>
      </li>
    </ul>

    <RouterView />
  </div>

  <Teleport to="#modals">
    <BaseModal v-if="!!editUser" :user="editUser" />
  </Teleport>
</template>
