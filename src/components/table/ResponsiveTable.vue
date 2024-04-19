<script setup lang="ts">
import TableHeader from './TableHeader.vue';
import TableBody from './TableBody.vue';
import type { User } from '@/faker';
import { useUserDataStore } from '@/stores/userData';

defineProps<{
  users: User[];
  isEditMode: boolean;
}>();

const { setUserEditable, updateUser } = useUserDataStore();
console.log({setUserEditable})

const getContainerClass = (isEditMode: boolean) => {
  return isEditMode ? 'container bg-white md:py-3 md:px-10 py-2 px-3 rounded' : 'container bg-white';
};

const getTableClass = (isEditMode: boolean) => {
  return isEditMode
    ? 'w-full force-flex flex-row flex-no-wrap bg-white rounded-lg overflow-hidden lg:shadow-lg'
    : 'w-full flex flex-row flex-no-wrap bg-white rounded-lg overflow-hidden lg:shadow-lg';
};
</script>

<template>
  <div :class="getContainerClass(isEditMode)">
    <h1 v-if="isEditMode" class="text-xl font-bold pb-5">
      Editera användare
    </h1>

    <table :class="getTableClass(isEditMode)">
      <TableHeader :users="users" :isEditMode="isEditMode" />
      <TableBody :users="users" :isEditMode="isEditMode" />
    </table>

    <div v-if="isEditMode" class="flex justify-end gap-8 pt-5">
      <button class="btn btn-rose" @click="setUserEditable()">Avbryt</button>
      <button class="btn btn-blue" @click="updateUser()">Spara</button>
    </div>
  </div>
</template>

<style scoped>

table.force-flex {
  @media (max-width: 1535px) {
    display: flex !important;
  }
}
</style>
