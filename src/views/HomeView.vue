<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ResponsiveTable from '@/components/table/ResponsiveTable.vue'
import { useUserDataStore } from '@/stores/userData';

const { users } = storeToRefs(useUserDataStore());
</script>

<template>
  <main>
    <ResponsiveTable :users="users" :isEditMode="false" />
  </main>
</template>
