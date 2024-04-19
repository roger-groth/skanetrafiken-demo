<script setup lang="ts">
import type { User } from '@/faker';
import ResponsiveTable from '@/components/table/ResponsiveTable.vue';

defineProps<{
  user: User;
}>();
</script>

<template>
  <div class="fixed inset-0 bg-gray-900 opacity-40"></div>

  <div class="fixed inset-0 flex items-center justify-center">
    <ResponsiveTable :users="[user]" :isEditMode="true" />
  </div>
</template>
